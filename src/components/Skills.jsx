import { skillGroups } from '../data/skills'
import { revealClasses, useScrollReveal } from '../lib/useScrollReveal'

function SkillGroup({ group, index }) {
  const [ref, isVisible] = useScrollReveal()
  const reveal = revealClasses(isVisible, index * 80)

  return (
    <div ref={ref} style={reveal.style} className={reveal.className}>
      <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-forest-300">
        {group.label}
      </h3>
      <p className="mt-2 text-base leading-relaxed text-forest-100">
        {group.items.map((item, i) => (
          <span key={item}>
            {item}
            {i < group.items.length - 1 && (
              <span className="text-forest-300/40"> &middot; </span>
            )}
          </span>
        ))}
      </p>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="bg-forest-950 py-16">
      <div className="px-6 lg:pr-[clamp(72px,12.5vw-56px,124px)]">
        <p className="font-body text-sm font-bold uppercase tracking-[0.2em] text-forest-100 sm:text-base">
          Skills
        </p>

        <div className="mt-8 max-w-3xl space-y-4">
          {skillGroups.map((group, i) => (
            <SkillGroup key={group.label} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
