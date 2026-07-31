import ProjectList from './ProjectList'

export default function Projects() {
  return (
    <section id="projects" className="bg-ivory-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-body text-xs font-semibold uppercase tracking-widest text-forest-600">
          Projects
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
          Problems that tickle my fancy
        </h2>

        <ProjectList />
      </div>
    </section>
  )
}
