import { useEffect } from 'react'
import { Download, X } from 'lucide-react'
import { useResumeModal } from '../context/ResumeModalContext'

export default function ResumeModal() {
  const { isOpen, closeResume } = useResumeModal()

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeResume()
    }
    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, closeResume])

  if (!isOpen) return null

  return (
    <div
      className="animate-fade-in fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/70 p-4 backdrop-blur-sm sm:p-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeResume()
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Resume preview"
    >
      <div className="animate-scale-in flex h-[85vh] w-full max-w-3xl flex-col overflow-hidden bg-ivory-50 shadow-2xl">
        <div className="flex shrink-0 items-center justify-between border-b border-ink-900/10 px-6 py-4">
          <p className="font-body font-semibold text-xs uppercase tracking-widest text-ink-700">
            Marvin Wong &mdash; Resume
          </p>
          <div className="flex items-center gap-2">
            <a
              href="/Marvin_Wong_Resume.pdf"
              download
              className="inline-flex cursor-pointer items-center gap-2 border border-ink-900/15 px-4 py-2 font-body font-semibold text-xs uppercase tracking-widest text-ink-900 transition-colors hover:border-gold-600 hover:text-gold-600"
            >
              <Download size={14} aria-hidden="true" />
              Download
            </a>
            <button
              type="button"
              onClick={closeResume}
              aria-label="Close resume preview"
              className="cursor-pointer p-2 text-ink-700 transition-colors hover:bg-ink-900/5 hover:text-ink-900"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 bg-ink-900/5">
          <iframe
            src="/Marvin_Wong_Resume.pdf"
            title="Marvin Wong Resume"
            className="h-full w-full border-0"
          >
            <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
              <p className="text-ink-700">
                Your browser can&rsquo;t preview PDFs inline.
              </p>
              <a
                href="/Marvin_Wong_Resume.pdf"
                download
                className="inline-flex cursor-pointer items-center gap-2 border border-ink-900/15 px-6 py-3 font-body font-semibold text-xs uppercase tracking-widest text-ink-900 transition-colors hover:border-gold-600 hover:text-gold-600"
              >
                <Download size={16} aria-hidden="true" />
                Download Resume (PDF)
              </a>
            </div>
          </iframe>
        </div>
      </div>
    </div>
  )
}
