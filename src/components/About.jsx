export default function About() {
  return (
    <section id="about" className="bg-ivory-50 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-[0.4fr_0.6fr]">
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-forest-600">
            About Me
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            Who I Am
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-ink-700">
            I&rsquo;m a current Master of Engineering candidate in Data
            Science at UCLA, where I haven&rsquo;t just been learning about
            advanced NLP or massive scale machine learning, but also honing
            my professional skills through product management and financial
            analysis classes. Prior to this, I had gotten my dual B.S.
            degrees in Data Theory and Atmospheric &amp; Oceanic Sciences,
            where I learned how to use my data science toolkit in solving
            problems across disparate fields.
          </p>
          <p className="text-lg leading-relaxed text-ink-700">
            Along the way I&rsquo;ve worked as an atmospheric data scientist
            at HKUST and a data analyst intern at PricewaterhouseCoopers.
            Outside of coursework, I&rsquo;m tackling problems that fascinate
            me. Check out some of what I&rsquo;ve been building below.
          </p>
        </div>
      </div>
    </section>
  )
}
