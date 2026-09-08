import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { prefersReducedMotion } from '../lib/motionPreference'

const GREETING = "Hi, I'm Marvin"

export default function Intro() {
  const [typed, setTyped] = useState(prefersReducedMotion ? GREETING : '')

  useEffect(() => {
    if (prefersReducedMotion) return

    let i = 0
    const interval = setInterval(() => {
      i += 1
      setTyped(GREETING.slice(0, i))
      if (i >= GREETING.length) clearInterval(interval)
    }, 110)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="top"
      className="relative flex min-h-dvh flex-col items-center justify-center bg-forest-950 text-ivory-50"
    >
      <h1 className="relative px-6 text-center font-display text-4xl font-semibold leading-none tracking-tight sm:text-6xl md:text-7xl">
        <span aria-hidden="true">
          {typed}
          <span className="animate-blink ml-1 inline-block w-[0.5ch]">|</span>
        </span>
        <span className="sr-only">{GREETING}</span>
      </h1>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-10 inline-flex cursor-pointer flex-col items-center gap-2 text-forest-300 transition-colors hover:text-gold-400"
      >
        <span className="font-body text-[0.65rem] font-semibold uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown size={18} className="motion-safe:animate-bounce" aria-hidden="true" />
      </a>
    </section>
  )
}
