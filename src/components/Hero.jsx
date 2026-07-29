import { ArrowRight, Download, MapPin } from 'lucide-react'

export default function Hero() {
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
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-forest-600/60 bg-forest-900/60 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-forest-200">
            <MapPin size={14} className="text-gold-400" aria-hidden="true" />
            Los Angeles · Open to new-grad roles
          </p>

          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ivory-50 sm:text-5xl lg:text-6xl">
            Marvin Wong
          </h1>
          <p className="mt-3 font-display text-xl italic text-gold-300 sm:text-2xl">
            Data Scientist &middot; AI &amp; Machine Learning Engineer
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-forest-100 sm:text-lg">
            I build agentic AI systems, fine-tune models, and turn messy
            real-world data — football matches, Reddit threads, bird calls —
            into things people can actually use. Currently completing my
            Master of Engineering in Data Science at UCLA.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-gold-500 px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink-900 transition-colors hover:bg-gold-400"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href="/Marvin_Wong_Resume.pdf"
              download
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-forest-500 px-6 py-3 font-mono text-xs uppercase tracking-widest text-ivory-50 transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              <Download size={16} aria-hidden="true" />
              Download Resume
            </a>
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
