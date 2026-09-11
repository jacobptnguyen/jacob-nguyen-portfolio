import { contact } from '../data'

const navLinks = [
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
]

const chromeLink =
  'inline-flex min-h-[44px] items-center whitespace-nowrap text-date font-medium text-muted transition-colors hover:text-ink'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-hair bg-bg/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-shell flex-wrap items-center gap-x-6 px-6 py-1">
        <a
          href="#top"
          className="mr-auto inline-flex min-h-[44px] items-center gap-2.5 text-date font-bold tracking-tight text-ink transition-colors hover:text-link"
        >
          <span className="h-8 w-8 shrink-0 overflow-hidden rounded-full ring-1 ring-hair">
            <img
              src="/images/profile.png"
              alt=""
              width="32"
              height="32"
              className="h-full w-full object-cover"
            />
          </span>
          Jacob Nguyen
        </a>

        {/* Nav and contacts share one scrollable row on phones so the sticky
            header stays two rows tall instead of three. */}
        <div className="order-last flex w-full items-center gap-x-6 overflow-x-auto [mask-image:linear-gradient(to_right,black_calc(100%-28px),transparent)] sm:order-none sm:w-auto sm:overflow-visible sm:[mask-image:none]">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={chromeLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex items-center gap-5" aria-label="Contact">
            <li>
              <a href={`mailto:${contact.email}`} aria-label="Email Jacob Nguyen" className={chromeLink}>
                Email
              </a>
            </li>
            <li>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Jacob Nguyen on GitHub"
                className={chromeLink}
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Jacob Nguyen on LinkedIn"
                className={chromeLink}
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
