import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useResumeModal } from '../context/ResumeModalContext'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { label: 'Resume', action: 'resume' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { openResume } = useResumeModal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'translate-y-0 border-b border-forest-300/15 bg-forest-950/90 opacity-100 backdrop-blur'
          : 'pointer-events-none -translate-y-full border-b border-transparent bg-transparent opacity-0'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-[4.5rem] py-4">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-ivory-50"
        >
          Marvin Wong
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) =>
            link.action === 'resume' ? (
              <li key={link.label}>
                <button
                  type="button"
                  onClick={openResume}
                  className="cursor-pointer font-body text-xs font-semibold uppercase tracking-widest text-forest-100 transition-colors hover:text-gold-400"
                >
                  {link.label}
                </button>
              </li>
            ) : (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body font-semibold text-xs uppercase tracking-widest text-forest-100 transition-colors hover:text-gold-400"
                >
                  {link.label}
                </a>
              </li>
            ),
          )}
        </ul>

        <button
          type="button"
          className="cursor-pointer text-ivory-50 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-forest-300/15 bg-forest-950 px-[4.5rem] pb-6 pt-2 md:hidden">
          {links.map((link) =>
            link.action === 'resume' ? (
              <li key={link.label}>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false)
                    openResume()
                  }}
                  className="block w-full cursor-pointer py-3 text-left font-body text-sm font-semibold uppercase tracking-widest text-forest-100"
                >
                  {link.label}
                </button>
              </li>
            ) : (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-body font-semibold text-sm uppercase tracking-widest text-forest-100"
                >
                  {link.label}
                </a>
              </li>
            ),
          )}
        </ul>
      )}
    </header>
  )
}
