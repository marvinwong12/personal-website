import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="bg-ivory-100 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-body text-xs font-semibold uppercase tracking-widest text-forest-600">
          Skills
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
          Tools I reach for most
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-ink-500">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="relative rounded-full border border-forest-700/15 bg-ivory-50 px-4 py-1.5 text-sm font-medium text-forest-800 shadow-sm transition-all duration-200 ease-out hover:z-10 hover:-translate-y-1 hover:scale-110 hover:shadow-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
