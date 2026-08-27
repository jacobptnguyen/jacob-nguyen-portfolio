import { contact } from '../data'

const navLinks = [
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-neutral-50/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-sm font-bold tracking-tight text-neutral-900 hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-300"
        >
          <span className="h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-neutral-300 dark:border-neutral-700">
            <img
              src="/images/profile.png"
              alt="Jacob Nguyen"
              width="44"
              height="44"
              className="h-full w-full object-cover"
            />
          </span>
          Jacob Nguyen
        </a>

        <nav aria-label="Primary" className="hidden gap-6 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${contact.email}`}
            aria-label="Email Jacob Nguyen"
            className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
          >
            Email
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Jacob Nguyen on GitHub"
            className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
          >
            GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Jacob Nguyen on LinkedIn"
            className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  )
}
