import { ArrowUpRight, Users } from 'lucide-react'
import { GithubIcon } from './icons/BrandIcons'

export default function ProjectCard({ project }) {
  const { name, tagline, description, tech, status, github, demo, metric, teamProject } =
    project

  return (
    <article className="relative flex h-full flex-col rounded-2xl border border-ivory-200 bg-ivory-50 p-8 shadow-sm transition-all duration-300 ease-out hover:z-10 hover:-translate-y-1.5 hover:scale-[1.03] hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-semibold text-ink-900">
          {name}
        </h3>
        <span
          className={`shrink-0 rounded-full px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest ${
            status === 'in-progress'
              ? 'bg-gold-300/40 text-gold-600'
              : 'bg-forest-100 text-forest-700'
          }`}
        >
          {status === 'in-progress' ? 'In Progress' : 'Live'}
        </span>
      </div>

      <p className="mt-2 text-sm font-medium text-forest-700">{tagline}</p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">
        {description}
      </p>

      {metric && (
        <div className="mt-5 border-l-2 border-gold-400 pl-3">
          <p className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-500">
            {metric.label}
          </p>
          <p className="font-display text-lg font-semibold text-forest-800">
            {metric.value}
          </p>
        </div>
      )}

      {teamProject && (
        <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-ink-500">
          <Users size={14} aria-hidden="true" />
          Team project &mdash; repo hosted by a teammate
        </p>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full bg-ivory-100 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-ink-700"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-5 border-t border-ivory-200 pt-5">
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
    </article>
  )
}
