const stats = [
  { value: '4.0', label: 'Graduate GPA, M.Eng Data Science' },
  { value: '5', label: 'Research & industry roles' },
  { value: '8+', label: 'ML & data projects shipped' },
]

export default function About() {
  return (
    <section id="about" className="bg-ivory-50 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-[0.4fr_0.6fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-forest-600">
            01 &mdash; About
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            From Hong Kong to
            <br />
            UCLA, chasing signal
            <br />
            in noisy data.
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-ink-700">
            My journey into data started in Hong Kong. I&rsquo;m now a Master
            of Engineering candidate in Data Science at UCLA, where I also
            completed my B.S. in Data Theory and Atmospheric &amp; Oceanic
            Sciences &mdash; an unusual pairing that taught me to be just as
            comfortable modeling climate signals as I am fine-tuning
            transformers.
          </p>
          <p className="text-lg leading-relaxed text-ink-700">
            Along the way I&rsquo;ve worked as a Graduate Research Assistant
            in UCLA&rsquo;s Computer Science department, an atmospheric data
            scientist at HKUST, and a data analyst intern at
            PricewaterhouseCoopers. Outside of coursework, I build agentic AI
            systems and end-to-end ML pipelines &mdash; the projects below are
            where I actually learn the most.
          </p>

          <dl className="grid grid-cols-3 gap-6 border-t border-ivory-200 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-semibold text-forest-800">
                  {stat.value}
                </dd>
                <p className="mt-1 text-sm leading-snug text-ink-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
