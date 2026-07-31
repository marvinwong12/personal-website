import { ArrowRight, FileText } from 'lucide-react'
import { useResumeModal } from '../context/ResumeModalContext'

export default function Hero() {
  const { openResume } = useResumeModal()

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-forest-950 via-forest-900 to-forest-800 text-ivory-50"
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

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 py-24 md:grid-cols-[1.15fr_0.85fr] md:py-32">
        <div>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ivory-50 sm:text-5xl lg:text-6xl">
            Marvin Wong
          </h1>
          <p className="mt-3 font-display text-xl italic text-gold-300 sm:text-2xl">
            Data Scientist &middot; AI &amp; Machine Learning Engineer
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-forest-100 sm:text-lg">
            I am interested in agentic AI systems, fine-tuning models, and
            wrangling messy real-world data into something people can
            actually use.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-gold-500 px-6 py-3 font-body font-semibold text-xs uppercase tracking-widest text-ink-900 transition-colors hover:bg-gold-400"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <button
              type="button"
              onClick={openResume}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-forest-500 px-6 py-3 font-body font-semibold text-xs uppercase tracking-widest text-ivory-50 transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              <FileText size={16} aria-hidden="true" />
              View Resume
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs md:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2rem] border border-gold-500/30"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border-2 border-forest-600/50 shadow-2xl shadow-forest-950/50">
            <img
              src="/profile.jpg"
              alt="Portrait of Marvin Wong"
              className="aspect-[4/5] w-full object-cover"
              width={1200}
              height={900}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
