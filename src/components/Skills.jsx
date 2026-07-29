import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="bg-ivory-100 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-forest-600">
          02 &mdash; Skills
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
          Tools I reach for most
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink-500">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-forest-700/15 bg-ivory-50 px-4 py-1.5 text-sm font-medium text-forest-800 shadow-sm"
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
