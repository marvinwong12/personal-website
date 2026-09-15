import { ArrowUpRight, Users, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { projects } from '../data/projects'
import { GithubIcon } from './icons/BrandIcons'
import { revealClasses, useScrollReveal } from '../lib/useScrollReveal'

function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [project, onClose])

  if (!project) return null

  const { name, description, tech, github, demo, teamProject, demoVideo, modalImages } = project

  return (
    <div
      className="animate-fade-in fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/70 p-4 backdrop-blur-sm sm:p-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`${name} details`}
    >
      <div className="animate-scale-in flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden bg-ivory-50 shadow-2xl">
        <div className="flex shrink-0 items-center justify-end border-b border-ink-900/10 px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="cursor-pointer p-2 text-ink-700 transition-colors hover:bg-ink-900/5 hover:text-ink-900"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
          <h3 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
            {name}
          </h3>

          <p className="mt-4 font-body text-xs font-semibold uppercase tracking-widest text-ink-700">
            {tech.map((item, i) => (
              <span key={item}>
                {item}
                {i < tech.length - 1 && <span className="text-ink-900/25"> &middot; </span>}
              </span>
            ))}
          </p>

          {modalImages && modalImages.length > 0 && (
            <div className="mt-4 flex flex-col gap-3">
              {modalImages.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={`${name} visualization`}
                  className="w-full border border-ink-900/10"
                />
              ))}
            </div>
          )}

          {demoVideo && (
            <img
              src={demoVideo}
              alt={`${name} demo`}
              className="mt-4 w-full border border-ink-900/10"
            />
          )}

          {description.split('\n\n').map((paragraph, i) => (
            <p key={i} className="mt-4 text-base leading-relaxed text-ink-700">
              {paragraph}
            </p>
          ))}

          {teamProject && (
            <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-ink-700">
              <Users size={13} aria-hidden="true" />
              Team project &mdash; repo hosted by a teammate
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-6">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-ink-900 transition-colors hover:text-forest-700"
              >
                <GithubIcon size={16} />
                Code
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-ink-900 transition-colors hover:text-forest-700"
              >
                <ArrowUpRight size={16} aria-hidden="true" />
                Live demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectRow({ project, index, onOpenDetails }) {
  const { name, tagline } = project
  const [ref, isVisible] = useScrollReveal()
  const reveal = revealClasses(isVisible, index * 80)

  return (
    <article
      ref={ref}
      style={reveal.style}
      className={`border-b border-forest-300/15 py-6 last:border-b-0 last:pb-0 ${reveal.className}`}
    >
      <button
        type="button"
        onClick={() => onOpenDetails(project)}
        className="block w-full cursor-pointer text-left font-display text-lg font-semibold text-ivory-50 underline decoration-forest-300/40 underline-offset-4 transition-colors hover:decoration-ivory-50"
      >
        {name}
      </button>
      <p className="mt-2 max-w-2xl text-base leading-relaxed text-forest-100">{tagline}</p>
    </article>
  )
}

export default function ProjectList() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="mt-12 max-w-3xl border-t border-forest-300/15">
      {projects.map((project, i) => (
        <ProjectRow
          key={project.slug}
          project={project}
          index={i}
          onOpenDetails={setSelectedProject}
        />
      ))}

      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}
