import { FileText, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons'
import { useResumeModal } from '../context/ResumeModalContext'

const email = 'marvin.cy.wong@gmail.com'

const socials = [
  { label: 'Email', href: `mailto:${email}`, Icon: Mail },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ching-yu-marvin-wong-23570a184/',
    Icon: LinkedinIcon,
  },
  { label: 'GitHub', href: 'https://github.com/marvinwong12', Icon: GithubIcon },
]

export default function Footer() {
  const { openResume } = useResumeModal()

  return (
    <footer className="bg-forest-950 py-8 text-forest-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left sm:pr-24">
        <p className="font-body font-semibold text-xs tracking-wide">
          &copy; {new Date().getFullYear()} Marvin Wong. Built with React &amp;
          Tailwind.
        </p>
        <ul className="flex items-center gap-6">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={label === 'Email' ? undefined : '_blank'}
                rel={label === 'Email' ? undefined : 'noreferrer'}
                aria-label={label}
                title={label}
                className="flex cursor-pointer items-center transition-colors hover:text-gold-400"
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
              className="flex cursor-pointer items-center transition-colors hover:text-gold-400"
            >
              <FileText size={18} aria-hidden="true" />
            </button>
          </li>
        </ul>
      </div>
    </footer>
  )
}
