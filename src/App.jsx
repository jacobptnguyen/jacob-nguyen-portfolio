import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import { experience, openSource } from './data'

export default function App() {
  // The browser tries its fragment scroll before React has rendered the target,
  // and lazy images keep growing the page afterwards, so deep links like
  // /#freecodecamp never land on their own. Jump instantly, then re-jump whenever
  // the page height changes, until the reader scrolls or 3 seconds pass.
  useEffect(() => {
    // Prefer the path (/think-round) over the hash: LinkedIn and most unfurlers
    // re-derive a pasted link from what they fetched, and a fragment is never
    // sent to the server, so only a real path survives being shared.
    const { pathname, hash } = window.location
    const id = decodeURIComponent(pathname.slice(1) || hash.slice(1))
    if (!id) return
    const go = () => document.getElementById(id)?.scrollIntoView({ behavior: 'instant' })
    go()
    const ro = new ResizeObserver(go)
    ro.observe(document.body)
    const stop = () => ro.disconnect()
    const timer = setTimeout(stop, 3000)
    const inputs = ['wheel', 'touchstart', 'keydown', 'pointerdown']
    inputs.forEach((e) => window.addEventListener(e, stop, { once: true, passive: true }))
    return () => {
      clearTimeout(timer)
      stop()
      inputs.forEach((e) => window.removeEventListener(e, stop))
    }
  }, [])

  return (
    <div className="min-h-screen lg:pl-64">
      <a
        href="#main"
        className="sr-only rounded-lg bg-ink px-5 py-3 font-mono text-date font-semibold text-bg focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <Education />
        <Experience entries={experience} />
        <Experience entries={openSource} id="open-source" title="Open Source" orgFirst />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}
