// py-3/-my-3 grows the tap target to ~45px without shifting the layout.
// Accent is the link colour (6.2:1 on light, 12:1 on dark), underlined at rest
// so a link never depends on colour alone.
const base =
  'group inline-block py-3 -my-3 font-mono font-medium text-accent underline decoration-accent/50 decoration-1 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink'

export function ExternalLink({ href, children, className = '', ...rest }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${base} ${className}`} {...rest}>
      {children}{' '}
      <span aria-hidden="true" className="inline-block transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
        &#8599;
      </span>
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

export function ContactRow({ contact, resumeUrl, className = '', ...rest }) {
  return (
    <ul className={`flex flex-wrap items-center gap-x-6 gap-y-3 text-date ${className}`} aria-label="Contact" {...rest}>
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
