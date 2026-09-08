import { ArrowRight, FileText } from 'lucide-react'
import { useResumeModal } from '../context/ResumeModalContext'

export default function About() {
  const { openResume } = useResumeModal()

  return (
    <section id="about" className="bg-forest-950 py-16">
      <div className="mx-auto max-w-6xl px-[4.5rem]">
        <p className="font-body text-sm font-bold uppercase tracking-[0.2em] text-gold-400 sm:text-base">
          About Me
        </p>

        <div className="mt-8 grid grid-cols-1 gap-y-16 gap-x-24 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="w-full max-w-xs overflow-hidden border border-forest-300/20 md:max-w-none">
              <img
                src="/profile.jpg"
                alt="Portrait of Marvin Wong"
                className="h-72 w-full object-cover object-[center_20%] sm:h-80"
                width={1200}
                height={900}
              />
            </div>

            <h1 className="mt-8 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ivory-50 sm:text-5xl">
              Marvin Wong
            </h1>
            <p className="mt-3 text-xl text-gold-400">
              Data Scientist &middot; AI &amp; Machine Learning Engineer
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex cursor-pointer items-center gap-2 border border-forest-300/30 px-6 py-3 font-body font-semibold text-xs uppercase tracking-widest text-ivory-50 transition-colors hover:border-gold-400 hover:text-gold-400"
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
                className="inline-flex cursor-pointer items-center gap-2 border border-forest-300/30 px-6 py-3 font-body font-semibold text-xs uppercase tracking-widest text-ivory-50 transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                <FileText size={16} aria-hidden="true" />
                View Resume
              </button>
            </div>
          </div>

          <div className="space-y-6 md:pt-2">
            <p className="text-lg leading-relaxed text-forest-100">
              I&rsquo;m a current Master of Engineering candidate in Data
              Science at UCLA, where I have not only been learning about
              advanced NLP and massive-scale machine learning, but have also been honing
              my professional skills through product management and financial
              analysis classes. Prior to this, I earned dual B.S.
              degrees in Data Theory and Atmospheric &amp; Oceanic Sciences,
              where I learned how to use my data science toolkit to solve
              problems across disparate fields.
            </p>
            <p className="text-lg leading-relaxed text-forest-100">
              Along the way I&rsquo;ve picked up valuable skills working as an atmospheric data scientist
              at HKUST and a data analyst intern at PwC.
              Outside of coursework, I enjoy tackling problems that fascinate
              me. Please check out some of what I&rsquo;ve been building below.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
