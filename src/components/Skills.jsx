import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="bg-forest-950 py-16">
      <div className="mx-auto max-w-6xl px-[4.5rem]">
        <p className="font-body text-sm font-bold uppercase tracking-[0.2em] text-gold-400 sm:text-base">
          Skills
        </p>

        <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label} className="border-t border-forest-300/15 pt-4">
              <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-forest-300">
                {group.label}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-forest-100">
                {group.items.map((item, i) => (
                  <span key={item}>
                    <span className="transition-colors hover:text-gold-400">{item}</span>
                    {i < group.items.length - 1 && (
                      <span className="text-forest-300/40"> &middot; </span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
