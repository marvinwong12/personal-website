import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Nav from './components/Nav'
import Projects from './components/Projects'
import ResumeCTA from './components/ResumeCTA'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forest-800 focus:px-4 focus:py-2 focus:text-ivory-50"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Intro />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
