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
            My journey into data started back in Hong Kong as a young
            student taking AP Statistics. These days
            I&rsquo;m a Master of Engineering candidate in Data Science at
            UCLA, after finishing a B.S. in Data Theory and Atmospheric
            &amp; Oceanic Sciences. It&rsquo;s a strange combo on paper, but
            it left me just as comfortable modeling climate patterns as I am
            fine-tuning transformers.
          </p>
          <p className="text-lg leading-relaxed text-ink-700">
            Along the way I&rsquo;ve worked as an atmospheric data scientist
            at HKUST and a data analyst intern at PricewaterhouseCoopers.
            But outside of coursework, I&rsquo;m usually tackling problems
            that fascinate me. That&rsquo;s honestly where I&rsquo;ve learned
            the most, so take a look at what I&rsquo;ve been building below.
          </p>
        </div>
      </div>
    </section>
  )
}
