import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { contact } from '../data'

const navLinks = [
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Open Source', href: '#open-source' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
]

const chromeLink =
  'inline-flex min-h-[44px] items-center whitespace-nowrap font-mono text-date font-medium text-muted transition-colors hover:text-ink'

function useActiveSection() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const els = navLinks.map((l) => document.getElementById(l.href.slice(1))).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-20% 0px -65% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return active
}

export default function Header() {
  const active = useActiveSection()
  const reduce = useReducedMotion()

  return (
    <header className="sticky top-0 z-50 border-b border-hair bg-bg/95 backdrop-blur-md lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:backdrop-blur-none">
      <div className="flex flex-wrap items-center gap-x-4 px-6 py-1 lg:flex-col lg:items-stretch lg:gap-y-8 lg:py-8">
        <a
          href="#top"
          className="mr-auto inline-flex min-h-[44px] items-center gap-2.5 font-mono text-date font-bold tracking-tight text-ink transition-colors hover:text-accent lg:mr-0"
        >
          <span className="h-8 w-8 shrink-0 overflow-hidden rounded-full">
            <img src="/images/profile.png" alt="" width="32" height="32" className="h-full w-full object-cover" />
          </span>
          Jacob Nguyen
        </a>

        {/* Nav and contacts share one scrollable row on phones so the sticky
            header stays two rows tall; on desktop they stack as a file tree. */}
        <div className="order-last flex w-full items-center gap-x-6 overflow-x-auto [mask-image:linear-gradient(to_right,black_calc(100%-28px),transparent)] lg:order-none lg:flex-col lg:items-stretch lg:gap-y-8 lg:overflow-visible lg:[mask-image:none]">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-5 lg:flex-col lg:items-stretch lg:gap-0">
              {navLinks.map((link) => {
                const current = active === link.href.slice(1)
                return (
                  <li key={link.href} className="relative">
                    {current && (
                      <motion.span
                        layoutId="nav-indicator"
                        aria-hidden="true"
                        transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 500, damping: 40 }}
                        className="absolute inset-y-0 left-0 hidden w-0.5 bg-accent lg:block"
                      />
                    )}
                    <a
                      href={link.href}
                      aria-current={current ? 'true' : undefined}
                      className={`${chromeLink} lg:w-full lg:border-l-2 lg:border-hair lg:pl-3 ${
                        current ? 'text-ink' : ''
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <ul className="flex items-center gap-5 lg:flex-col lg:items-stretch lg:gap-0" aria-label="Contact">
            <li>
              <a href={`mailto:${contact.email}`} aria-label="Email Jacob Nguyen" className={chromeLink}>
                Email
              </a>
            </li>
            <li>
              <a href={contact.github} target="_blank" rel="noreferrer" aria-label="Jacob Nguyen on GitHub" className={chromeLink}>
                GitHub
              </a>
            </li>
            <li>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="Jacob Nguyen on LinkedIn" className={chromeLink}>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
