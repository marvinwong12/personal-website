import { ChevronDown } from 'lucide-react'

export default function Intro() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh flex-col items-center justify-center bg-forest-950 text-ivory-50"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(251,249,243,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(251,249,243,0.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <h1 className="relative px-6 text-center font-display text-5xl font-semibold leading-none tracking-tight sm:text-6xl md:text-7xl">
        Marvin Wong
      </h1>

      <a
        href="#hero"
        aria-label="Scroll down"
        className="absolute bottom-10 inline-flex cursor-pointer flex-col items-center gap-2 text-forest-300 transition-colors hover:text-gold-400"
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown size={18} className="motion-safe:animate-bounce" aria-hidden="true" />
      </a>
    </section>
  )
}
