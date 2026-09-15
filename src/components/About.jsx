export default function About() {
  return (
    <section id="about" className="bg-forest-950 py-16">
      <div className="px-6 lg:pr-[clamp(72px,12.5vw-56px,124px)]">
        <p className="font-body text-sm font-bold uppercase tracking-[0.2em] text-forest-100 sm:text-base">
          About Me
        </p>

        <div className="mt-6 w-full max-w-[20rem] overflow-hidden border border-forest-300/20">
          <img
            src="/profile.jpg"
            alt="Portrait of Marvin Wong"
            className="aspect-square w-full object-cover object-[center_20%]"
            width={1200}
            height={900}
          />
        </div>

        <div className="mt-8 max-w-3xl space-y-6">
          <p className="text-base leading-relaxed text-forest-100">
            I&rsquo;m a current Master of Engineering candidate in Data
            Science at UCLA, where I have not only been learning about
            advanced NLP and massive-scale machine learning, but have also been honing
            my professional skills through product management and financial
            analysis classes. Prior to this, I earned dual B.S.
            degrees in Data Theory and Atmospheric &amp; Oceanic Sciences,
            where I learned how to use my data science toolkit to solve
            problems across disparate fields.
          </p>
          <p className="text-base leading-relaxed text-forest-100">
            Along the way I&rsquo;ve picked up valuable skills working as an atmospheric data scientist
            at HKUST and a data analyst intern at PwC.
            Outside of coursework, I enjoy tackling problems that fascinate
            me. Please check out some of what I&rsquo;ve been building below.
          </p>
        </div>
      </div>
    </section>
  )
}
