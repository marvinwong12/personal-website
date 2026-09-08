import ProjectList from './ProjectList'

export default function Projects() {
  return (
    <section id="projects" className="bg-forest-950 py-16">
      <div className="mx-auto max-w-6xl px-[4.5rem]">
        <p className="font-body text-sm font-bold uppercase tracking-[0.2em] text-gold-400 sm:text-base">
          Projects
        </p>

        <ProjectList />
      </div>
    </section>
  )
}
