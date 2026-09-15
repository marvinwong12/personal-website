import About from './components/About'
import ChatWidget from './components/ChatWidget'
import Contact from './components/Contact'
import CursorGlow from './components/CursorGlow'
import Experience from './components/Experience'
import Projects from './components/Projects'
import ResumeModal from './components/ResumeModal'
import Sidebar from './components/Sidebar'
import Skills from './components/Skills'
import { ResumeModalProvider } from './context/ResumeModalContext'

function App() {
  return (
    <ResumeModalProvider>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:border focus:border-ivory-50 focus:bg-forest-950 focus:px-4 focus:py-2 focus:text-ivory-50"
      >
        Skip to content
      </a>
      <span id="top" />
      <CursorGlow />
      <Sidebar />
      <main className="lg:ml-[50%]">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <ResumeModal />
      <ChatWidget />
    </ResumeModalProvider>
  )
}

export default App
