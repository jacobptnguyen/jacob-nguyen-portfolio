import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Card from './Card'
import Bullets from './Bullets'
import { ExternalLink } from './Links'
import { slug } from '../slug'

// orgFirst leads with the organisation: for open source the role is identical
// on every card, so the org is the useful heading.
export default function Experience({ entries, id = 'experience', title = 'Experience', orgFirst = false }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mx-auto max-w-shell px-6 py-12">
      <Reveal>
        <SectionHeading id={`${id}-heading`} title={title} />
      </Reveal>
      <ul className="space-y-4">
        {entries.map((job) => (
          <li key={`${job.role}-${job.org}`} id={slug(job.org)}>
            <Reveal>
              <Card>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-entry text-ink">{orgFirst ? job.org : job.role}</h3>
                  <span className="font-mono text-date tabular-nums text-muted">{job.date}</span>
                </div>
                <p className="mt-1 text-org font-medium text-body">
                  {orgFirst ? job.role : job.org}
                  {!orgFirst && job.employmentType && <span className="text-muted"> &middot; {job.employmentType}</span>}
                </p>

                <div className="mt-4 flex flex-col gap-6 sm:flex-row">
                  <div className="min-w-0 sm:flex-1">
                    <Bullets items={job.bullets} />
                    {job.links && (
                      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-date">
                        {job.links.map((link) => (
                          <ExternalLink key={link.href} href={link.href}>
                            {link.label}
                          </ExternalLink>
                        ))}
                      </div>
                    )}
                  </div>

                  {job.poster && (
                    <figure className="shrink-0 sm:w-52">
                      <a
                        href={job.poster.src}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${job.poster.caption}, open full size`}
                        className="block overflow-hidden rounded-lg border border-hair transition-opacity hover:opacity-90"
                      >
                        <img
                          src={job.poster.src}
                          alt={job.poster.alt}
                          loading="lazy"
                          width="1487"
                          height="1127"
                          className="max-h-64 w-full object-contain sm:max-h-none"
                        />
                      </a>
                      <figcaption className="mt-2 text-micro text-muted">{job.poster.caption}</figcaption>
                    </figure>
                  )}
                </div>
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
