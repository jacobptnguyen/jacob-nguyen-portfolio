import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

export default function App() {
  // The browser tries its fragment scroll before React has rendered the target,
  // and lazy images shift layout afterwards, so deep links like /#freecodecamp
  // never land on their own. Re-run the scroll once images have settled.
  useEffect(() => {
    // Prefer the path (/think-round) over the hash: LinkedIn and most unfurlers
    // re-derive a pasted link from what they fetched, and a fragment is never
    // sent to the server, so only a real path survives being shared.
    const { pathname, hash } = window.location
    const id = decodeURIComponent(pathname.slice(1) || hash.slice(1))
    if (!id) return
    const go = () => document.getElementById(id)?.scrollIntoView()
    if (document.readyState === 'complete') go()
    else window.addEventListener('load', go, { once: true })
  }, [])

  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only rounded-full bg-ink px-5 py-3 text-date font-semibold text-bg focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}
