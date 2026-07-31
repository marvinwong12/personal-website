import { ArrowUpRight, ChevronRight, Users, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/projects'
import { GithubIcon } from './icons/BrandIcons'
import { prefersReducedMotion } from '../lib/motionPreference'

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

  const { name, category, description, tech, github, demo, teamProject, demoVideo, modalImages } =
    project

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
      <div className="animate-scale-in flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-ivory-50 shadow-2xl">
        <div className="flex shrink-0 items-center justify-between border-b border-forest-700/10 bg-ivory-100 px-6 py-4">
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-gold-600">
            {category}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="cursor-pointer rounded-full p-2 text-ink-700 transition-colors hover:bg-ivory-200 hover:text-ink-900"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
          <h3 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
            {name}
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full bg-ivory-100 px-3 py-1 font-body text-xs font-semibold uppercase tracking-widest text-ink-700"
              >
                {item}
              </span>
            ))}
          </div>

          {modalImages && modalImages.length > 0 && (
            <div className="mt-4 flex flex-col gap-3">
              {modalImages.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={`${name} visualization`}
                  className="w-full rounded-xl border border-forest-700/10"
                />
              ))}
            </div>
          )}

          {demoVideo && (
            <img
              src={demoVideo}
              alt={`${name} demo`}
              className="mt-4 w-full rounded-xl border border-forest-700/10"
            />
          )}

          {description.split('\n\n').map((paragraph, i) => (
            <p key={i} className="mt-4 text-base leading-relaxed text-ink-700">
              {paragraph}
            </p>
          ))}

          {teamProject && (
            <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-ink-500">
              <Users size={13} aria-hidden="true" />
              Team project &mdash; repo hosted by a teammate
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-6">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-ink-900 transition-colors hover:text-forest-700"
            >
              <GithubIcon size={16} />
              Code
            </a>
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
  const { name, tagline, category } = project
  const [isVisible, setIsVisible] = useState(prefersReducedMotion)
  const ref = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={ref}
      style={{ transitionDelay: prefersReducedMotion ? '0ms' : `${index * 80}ms` }}
      className={`border-b border-forest-700/15 py-12 transition-all duration-700 ease-out last:border-b-0 last:pb-0 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <p className="font-body text-xs font-semibold uppercase tracking-widest text-gold-600">
        {category}
      </p>
      <h3 className="mt-2 font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
        {name}
      </h3>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-700">{tagline}</p>

      <button
        type="button"
        onClick={() => onOpenDetails(project)}
        className="group mt-4 inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-forest-700 transition-colors hover:text-forest-800"
      >
        View details
        <ChevronRight
          size={15}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </button>
    </article>
  )
}

export default function ProjectList() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="mt-12 border-t border-forest-700/15">
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
