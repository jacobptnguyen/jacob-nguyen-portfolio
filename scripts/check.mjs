// Smoke-test the built site in a real browser: phone + desktop, dark + light.
// Usage: npm run check   (builds first; screenshots land in .check/)
// Fails on console errors, broken requests/anchors/images, horizontal scroll,
// unnamed controls, duplicate ids, and text under the 4.5:1 contrast floor.
import { preview } from 'vite'
import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const OUT = '.check'
mkdirSync(OUT, { recursive: true })

const server = await preview({ preview: { port: 4179, strictPort: true }, logLevel: 'silent' })
const url = 'http://localhost:4179/'
const browser = await chromium.launch()
const problems = []

const viewports = { phone: { width: 390, height: 844 }, desktop: { width: 1440, height: 900 } }

for (const [vpName, viewport] of Object.entries(viewports)) {
  for (const colorScheme of ['dark', 'light']) {
    const tag = `${vpName}-${colorScheme}`
    const page = await browser.newPage({ viewport, colorScheme, reducedMotion: 'reduce' })
    const report = (msg) => problems.push(`[${tag}] ${msg}`)
    page.on('console', (m) => m.type() === 'error' && report(`console: ${m.text()}`))
    page.on('pageerror', (e) => report(`page error: ${e.message}`))
    page.on('requestfailed', (r) => r.url().startsWith(url) && report(`request failed: ${r.url()}`))
    page.on('response', (r) => r.url().startsWith(url) && r.status() >= 400 && report(`${r.status()}: ${r.url()}`))

    await page.goto(url, { waitUntil: 'networkidle' })
    // Scroll through so every scroll-reveal resolves before measuring.
    const scrollThrough = async () => {
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 400) {
          window.scrollTo(0, y)
          await new Promise((r) => setTimeout(r, 40))
        }
        window.scrollTo(0, 0)
      })
      await page.waitForTimeout(600)
    }
    await scrollThrough()

    const found = await page.evaluate(() => {
      const out = []
      const doc = document.documentElement
      if (doc.scrollWidth > doc.clientWidth) out.push(`horizontal scroll: ${doc.scrollWidth}px > ${doc.clientWidth}px`)

      const ids = [...document.querySelectorAll('[id]')].map((e) => e.id)
      ids.filter((id, i) => ids.indexOf(id) !== i).forEach((id) => out.push(`duplicate id: ${id}`))

      document.querySelectorAll('a[href^="#"]').forEach((a) => {
        const id = a.getAttribute('href').slice(1)
        if (id && !document.getElementById(id)) out.push(`broken anchor: #${id}`)
      })
      document.querySelectorAll('img').forEach((img) => {
        if (!img.complete || img.naturalWidth === 0) out.push(`broken image: ${img.src}`)
      })
      document.querySelectorAll('a, button, [role="tab"], input').forEach((el) => {
        const name = el.getAttribute('aria-label') || el.getAttribute('aria-labelledby') || el.textContent.trim() || el.title
        if (!name) out.push(`unnamed control: ${el.outerHTML.slice(0, 90)}`)
      })

      // Resolve any CSS colour (incl. color-mix) to RGBA by painting it.
      const ctx = Object.assign(document.createElement('canvas'), { width: 1, height: 1 }).getContext('2d')
      const rgba = (c) => {
        ctx.clearRect(0, 0, 1, 1)
        ctx.fillStyle = c
        ctx.fillRect(0, 0, 1, 1)
        const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data
        return [r, g, b, a / 255]
      }
      const over = ([r, g, b, a], [R, G, B]) => [r * a + R * (1 - a), g * a + G * (1 - a), b * a + B * (1 - a)]
      const bgOf = (el) => {
        const layers = []
        for (let n = el; n; n = n.parentElement) {
          const c = rgba(getComputedStyle(n).backgroundColor)
          if (c[3] > 0) layers.push(c)
          if (c[3] === 1) break
        }
        return layers.reverse().reduce((acc, c) => over(c, acc), [255, 255, 255])
      }
      const lum = (rgb) =>
        rgb
          .map((v) => v / 255)
          .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4))
          .reduce((s, v, i) => s + v * [0.2126, 0.7152, 0.0722][i], 0)

      const seen = new Set()
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
      while (walker.nextNode()) {
        const el = walker.currentNode.parentElement
        if (!walker.currentNode.textContent.trim() || seen.has(el)) continue
        seen.add(el)
        const s = getComputedStyle(el)
        if (s.visibility === 'hidden' || el.closest('[aria-hidden="true"], .sr-only') || !el.getClientRects().length) continue
        let opacity = 1
        for (let n = el; n; n = n.parentElement) opacity *= +getComputedStyle(n).opacity
        const bg = bgOf(el)
        const [r, g, b, a] = rgba(s.color)
        const fg = over([r, g, b, a * opacity], bg)
        const [hi, lo] = [lum(fg), lum(bg)].sort((x, y) => y - x)
        const ratio = (hi + 0.05) / (lo + 0.05)
        const large = parseFloat(s.fontSize) >= 24 || (parseFloat(s.fontSize) >= 18.66 && +s.fontWeight >= 700)
        if (ratio < (large ? 3 : 4.5)) out.push(`contrast ${ratio.toFixed(2)}:1 on "${el.textContent.trim().slice(0, 40)}"`)
      }
      return out
    })
    found.forEach(report)

    // Every project tab must show at least one card.
    for (const tab of await page.getByRole('tab').all()) {
      await tab.click()
      if (!(await page.locator('#project-panel li').count())) report(`empty project tab: ${await tab.textContent()}`)
    }
    await page.getByRole('tab').first().click()
    await scrollThrough() // switching tabs remounts cards, so reveal them again

    // Viewport-sized shots are readable; a full-page phone shot is a sliver.
    const height = await page.evaluate(() => document.body.scrollHeight)
    for (let i = 0, y = 0; y < height; i++, y += viewport.height) {
      await page.evaluate((top) => window.scrollTo(0, top), y)
      await page.waitForTimeout(250)
      await page.screenshot({ path: `${OUT}/${tag}-${String(i).padStart(2, '0')}.png` })
    }

    await page.close()
  }
}

await browser.close()
server.httpServer.close()

console.log(problems.length ? problems.join('\n') : 'No problems found.')
console.log(`Screenshots: ${OUT}/`)
process.exit(problems.length ? 1 : 0)
