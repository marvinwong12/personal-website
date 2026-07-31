import { Mail } from 'lucide-react'

const email = 'marvin.cy.wong@gmail.com'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-forest-950 py-28 text-ivory-50"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-forest-700/30 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="font-body text-xs font-semibold uppercase tracking-widest text-forest-300">
          Contact
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ivory-50 sm:text-5xl">
          Building something interesting?
        </h2>

        <a
          href={`mailto:${email}`}
          className="mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full bg-gold-500 px-8 py-4 font-body text-xs font-semibold uppercase tracking-widest text-ink-900 transition-colors hover:bg-gold-400"
        >
          <Mail size={16} aria-hidden="true" />
          Say hello
        </a>
      </div>
    </section>
  )
}
