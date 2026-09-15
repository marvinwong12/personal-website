import { FileText } from 'lucide-react'
import { experience } from '../data/experience'
import { useResumeModal } from '../context/ResumeModalContext'
import { revealClasses, useScrollReveal } from '../lib/useScrollReveal'

function ExperienceRow({ job, index }) {
  const [ref, isVisible] = useScrollReveal()
  const reveal = revealClasses(isVisible, index * 80)

  return (
    <div
      ref={ref}
      style={reveal.style}
      className={`border-b border-forest-300/15 py-6 ${reveal.className}`}
    >
      <p className="font-body text-xs font-semibold uppercase tracking-widest text-forest-300">
        {job.dates}
      </p>
      <h3 className="mt-1 font-display text-lg font-semibold text-ivory-50">{job.role}</h3>
      <p className="text-base text-forest-100">{job.company}</p>
      <p className="mt-2 text-base leading-relaxed text-forest-100">
        {job.skills.map((item, i) => (
          <span key={item}>
            {item}
            {i < job.skills.length - 1 && (
              <span className="text-forest-300/40"> &middot; </span>
            )}
          </span>
        ))}
      </p>
    </div>
  )
}

export default function Experience() {
  const { openResume } = useResumeModal()

  return (
    <section id="experience" className="bg-forest-950 py-16">
      <div className="px-6 lg:pr-[clamp(72px,12.5vw-56px,124px)]">
        <p className="font-body text-sm font-bold uppercase tracking-[0.2em] text-forest-100 sm:text-base">
          Experience
        </p>

        <div className="mt-8 max-w-3xl border-t border-forest-300/15">
          {experience.map((job, i) => (
            <ExperienceRow key={`${job.company}-${job.role}`} job={job} index={i} />
          ))}
        </div>

        <button
          type="button"
          onClick={openResume}
          className="mt-8 inline-flex cursor-pointer items-center gap-2 border border-forest-300/30 px-6 py-3 font-body text-xs font-semibold uppercase tracking-widest text-ivory-50 transition-colors hover:border-ivory-50"
        >
          <FileText size={16} aria-hidden="true" />
          View Resume
        </button>
      </div>
    </section>
  )
}
