// py-3/-my-3 grows the tap target to ~45px without shifting the layout.
// The underline uses --mark, not lime: lime is 1.25:1 on a light card and
// would leave links with no visible affordance at rest in light mode.
const base =
  'inline-block py-3 -my-3 font-medium text-link underline decoration-mark decoration-2 underline-offset-4 transition-colors hover:text-ink hover:decoration-lime'

export function ExternalLink({ href, children, className = '', ...rest }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${base} ${className}`} {...rest}>
      {children} <span aria-hidden="true">↗</span>
    </a>
  )
}

export function PlainLink({ href, children, className = '', ...rest }) {
  return (
    <a href={href} className={`${base} ${className}`} {...rest}>
      {children}
    </a>
  )
}

export function ContactRow({ contact, resumeUrl, className = '' }) {
  return (
    <ul className={`flex flex-wrap items-center gap-x-6 gap-y-3 text-date ${className}`} aria-label="Contact">
      <li>
        <PlainLink href={`mailto:${contact.email}`}>{contact.email}</PlainLink>
      </li>
      <li>
        <ExternalLink href={contact.github} aria-label="Jacob Nguyen on GitHub">
          GitHub
        </ExternalLink>
      </li>
      <li>
        <ExternalLink href={contact.linkedin} aria-label="Jacob Nguyen on LinkedIn">
          LinkedIn
        </ExternalLink>
      </li>
      {resumeUrl && (
        <li>
          <PlainLink href={resumeUrl} download>
            Resume (PDF)
          </PlainLink>
        </li>
      )}
    </ul>
  )
}
