import { FileText, Mail, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons'
import { useResumeModal } from '../context/ResumeModalContext'
import { prefersReducedMotion } from '../lib/motionPreference'

const NAME = 'Marvin Wong'
const email = 'marvin.cy.wong@gmail.com'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  { label: 'Email', href: `mailto:${email}`, Icon: Mail },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ching-yu-marvin-wong-23570a184/',
    Icon: LinkedinIcon,
  },
  { label: 'GitHub', href: 'https://github.com/marvinwong12', Icon: GithubIcon },
]

function TypedName() {
  const [typed, setTyped] = useState(prefersReducedMotion ? NAME : '')
  const [done, setDone] = useState(prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion) return

    let i = 0
    const interval = setInterval(() => {
      i += 1
      setTyped(NAME.slice(0, i))
      if (i >= NAME.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, 110)

    return () => clearInterval(interval)
  }, [])

  return (
    <span aria-hidden="true">
      {typed}
      {!done && (
        <span className="animate-blink ml-1 inline-block w-[0.5ch] font-mono">|</span>
      )}
    </span>
  )
}

function NavLine({ isActive }) {
  return (
    <span
      className={`h-px shrink-0 bg-forest-300/40 transition-all duration-300 group-hover:w-14 group-hover:bg-ivory-50 ${
        isActive ? 'w-14 bg-ivory-50' : 'w-8'
      }`}
      aria-hidden="true"
    />
  )
}

export default function Sidebar() {
  const { openResume } = useResumeModal()
  const [active, setActive] = useState('about')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header className="border-b border-forest-300/15 bg-forest-950 px-6 py-8 lg:hidden">
        <div className="flex items-center justify-between">
          <a href="#top" className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ivory-50">
            <TypedName />
            <span className="sr-only">{NAME}</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="cursor-pointer text-ivory-50"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <p className="mt-2 text-lg text-forest-100">Data Scientist</p>

        <ul className="mt-6 flex items-center gap-6">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={label === 'Email' ? undefined : '_blank'}
                rel={label === 'Email' ? undefined : 'noreferrer'}
                aria-label={label}
                title={label}
                className="flex cursor-pointer items-center text-forest-300 transition-colors hover:text-ivory-50"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={openResume}
              aria-label="View resume"
              title="View resume"
              className="flex cursor-pointer items-center text-forest-300 transition-colors hover:text-ivory-50"
            >
              <FileText size={18} aria-hidden="true" />
            </button>
          </li>
        </ul>
      </header>

      {open && (
        <ul className="border-b border-forest-300/15 bg-forest-950 px-6 pb-6 pt-2 lg:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-body text-sm font-semibold uppercase tracking-widest text-forest-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:flex lg:w-1/2 lg:flex-col lg:justify-between lg:py-16 lg:pl-[clamp(72px,12.5vw-56px,124px)]">
        <div>
          <a
            href="#top"
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ivory-50"
          >
            <TypedName />
            <span className="sr-only">{NAME}</span>
          </a>
          <p className="mt-3 text-lg text-forest-100">Data Scientist</p>

          <nav className="mt-16" aria-label="Section navigation">
            <ul className="space-y-5">
              {links.map((link) => {
                const isActive = active === link.href.slice(1)
                return (
                  <li key={link.href}>
                    <a href={link.href} className="group flex items-center gap-4">
                      <NavLine isActive={isActive} />
                      <span
                        className={`font-body text-xs font-semibold uppercase tracking-widest transition-colors group-hover:text-ivory-50 ${
                          isActive ? 'text-ivory-50' : 'text-forest-300'
                        }`}
                      >
                        {link.label}
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        <ul className="flex items-center gap-6">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={label === 'Email' ? undefined : '_blank'}
                rel={label === 'Email' ? undefined : 'noreferrer'}
                aria-label={label}
                title={label}
                className="flex cursor-pointer items-center text-forest-300 transition-colors hover:text-ivory-50"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={openResume}
              aria-label="View resume"
              title="View resume"
              className="flex cursor-pointer items-center text-forest-300 transition-colors hover:text-ivory-50"
            >
              <FileText size={18} aria-hidden="true" />
            </button>
          </li>
        </ul>
      </aside>
    </>
  )
}
