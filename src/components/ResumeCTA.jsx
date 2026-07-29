import { Eye, FileText } from 'lucide-react'
import { useResumeModal } from '../context/ResumeModalContext'

export default function ResumeCTA() {
  const { openResume } = useResumeModal()

  return (
    <section id="resume" className="bg-ivory-100 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col items-center gap-8 rounded-3xl border border-forest-700/10 bg-ivory-50 px-8 py-14 text-center shadow-sm sm:px-16">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-forest-800 text-ivory-50">
            <FileText size={28} aria-hidden="true" />
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-forest-600">
              04 &mdash; Resume
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
              Want the full story?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-700">
              Education, research roles, and the full project list &mdash; all
              in one PDF.
            </p>
          </div>

          <button
            type="button"
            onClick={openResume}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-forest-800 px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-ivory-50 transition-colors hover:bg-forest-700"
          >
            <Eye size={16} aria-hidden="true" />
            View Resume
          </button>
        </div>
      </div>
    </section>
  )
}
