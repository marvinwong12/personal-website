const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
]

export default function Footer() {
  return (
    <footer className="bg-forest-950 py-8 text-forest-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-mono text-xs tracking-wide">
          &copy; {new Date().getFullYear()} Marvin Wong. Built with React &amp;
          Tailwind.
        </p>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest transition-colors hover:text-gold-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
