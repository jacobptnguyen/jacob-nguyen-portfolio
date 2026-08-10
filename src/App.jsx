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
      <Header />
      <main>
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
