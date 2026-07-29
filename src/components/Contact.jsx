import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons'

const email = 'marvin.cy.wong@gmail.com'

const socials = [
  {
    label: 'Email',
    value: email,
    href: `mailto:${email}`,
    Icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'ching-yu-marvin-wong',
    href: 'https://www.linkedin.com/in/ching-yu-marvin-wong-23570a184/',
    Icon: LinkedinIcon,
  },
  {
    label: 'GitHub',
    value: 'marvinwong12',
    href: 'https://github.com/marvinwong12',
    Icon: GithubIcon,
  },
]

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
        <p className="font-mono text-xs uppercase tracking-widest text-forest-300">
          05 &mdash; Contact
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ivory-50 sm:text-5xl">
          Building something interesting?
          <br />
          <span className="text-gold-400">Let&rsquo;s talk.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-forest-200">
          I&rsquo;m looking for new-grad Data Science / ML Engineering roles
          starting 2026. Reach out &mdash; I usually reply within a day or
          two.
        </p>

        <a
          href={`mailto:${email}`}
          className="mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full bg-gold-500 px-8 py-4 font-mono text-xs uppercase tracking-widest text-ink-900 transition-colors hover:bg-gold-400"
        >
          <Mail size={16} aria-hidden="true" />
          Say hello
        </a>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-4 border-t border-forest-800 pt-10 sm:grid-cols-3">
          {socials.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={label === 'Email' ? undefined : '_blank'}
              rel={label === 'Email' ? undefined : 'noreferrer'}
              className="group flex cursor-pointer flex-col items-center gap-2 rounded-xl px-4 py-4 transition-colors hover:bg-forest-900"
            >
              <Icon
                size={20}
                className="text-forest-300 transition-colors group-hover:text-gold-400"
                aria-hidden="true"
              />
              <span className="font-mono text-[0.7rem] uppercase tracking-widest text-forest-300 group-hover:text-ivory-50">
                {label}
              </span>
              <span className="text-sm text-ivory-100">{value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
