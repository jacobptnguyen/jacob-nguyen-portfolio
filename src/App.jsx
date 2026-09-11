import Header from './components/Header'
import Hero from './components/Hero'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

export default function App() {
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
