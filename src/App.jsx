import About from './components/About'
import ChatWidget from './components/ChatWidget'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Nav from './components/Nav'
import Projects from './components/Projects'
import ResumeModal from './components/ResumeModal'
import Skills from './components/Skills'
import { ResumeModalProvider } from './context/ResumeModalContext'

function App() {
  return (
    <ResumeModalProvider>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:border focus:border-gold-400 focus:bg-forest-950 focus:px-4 focus:py-2 focus:text-ivory-50"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ResumeModal />
      <ChatWidget />
    </ResumeModalProvider>
  )
}

export default App
