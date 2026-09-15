import ProjectList from './ProjectList'

export default function Projects() {
  return (
    <section id="projects" className="bg-forest-950 py-16">
      <div className="px-6 lg:pr-[clamp(72px,12.5vw-56px,124px)]">
        <p className="font-body text-sm font-bold uppercase tracking-[0.2em] text-forest-100 sm:text-base">
          Projects
        </p>

        <ProjectList />
      </div>
    </section>
  )
}
