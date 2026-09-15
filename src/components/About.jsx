import { revealClasses, useScrollReveal } from '../lib/useScrollReveal'

export default function About() {
  const [photoRef, photoVisible] = useScrollReveal()
  const [textRef, textVisible] = useScrollReveal()
  const photoReveal = revealClasses(photoVisible)
  const textReveal = revealClasses(textVisible, 100)

  return (
    <section id="about" className="bg-forest-950 py-16">
      <div className="px-6 lg:pr-[clamp(72px,12.5vw-56px,124px)]">
        <p className="font-body text-sm font-bold uppercase tracking-[0.2em] text-forest-100 sm:text-base">
          About Me
        </p>

        <div
          ref={photoRef}
          style={photoReveal.style}
          className={`mt-6 w-full max-w-[20rem] overflow-hidden border border-forest-300/20 ${photoReveal.className}`}
        >
          <img
            src="/profile.jpg"
            alt="Portrait of Marvin Wong"
            className="aspect-square w-full object-cover object-[center_20%]"
            width={1200}
            height={900}
          />
        </div>

        <div
          ref={textRef}
          style={textReveal.style}
          className={`mt-8 max-w-3xl space-y-6 ${textReveal.className}`}
        >
          <p className="text-base leading-relaxed text-forest-100">
            Hi! I&rsquo;m Marvin, a current Master of Engineering candidate in
            Data Science at UCLA. My core expertises include experimentation,
            computer vision and massive-scale machine learning. I&rsquo;m also
            honing my professional skills through product management and
            financial analysis classes. Prior to this, I earned dual B.S.
            degrees in Data Theory and Atmospheric &amp; Oceanic Sciences,
            where I learned how to use my data science toolkit to solve
            problems across disparate fields.
          </p>
          <p className="text-base leading-relaxed text-forest-100">
            Along the way I&rsquo;ve picked up valuable skills conducting
            research into geometric-based retrieval algorithms for robots at
            UCLA and as an Atmospheric Data Scientist at HKUST looking into
            the El Ni&ntilde;o Southern Oscillation. I have also worked as a
            Data Science Intern at PwC and Data Analyst Intern at Hysan
            Development Company.
          </p>
          <p className="text-base leading-relaxed text-forest-100">
            Outside of work and school, I enjoy tackling problems that
            fascinate me. Please check out some of what I&rsquo;ve been
            building below.
          </p>
        </div>
      </div>
    </section>
  )
}
