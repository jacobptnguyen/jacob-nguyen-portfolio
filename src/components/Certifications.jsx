import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Card from './Card'
import { ExternalLink } from './Links'
import { certifications } from '../data'

export default function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="mx-auto max-w-shell px-6 py-12">
      <Reveal>
        <SectionHeading id="certifications-heading" title="Certifications" />
        <Card>
          <ul className="space-y-3">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <ExternalLink href={cert.href} className="text-org" aria-label={`Verify ${cert.name} on Credly`}>
                  {cert.name}
                </ExternalLink>
                <span className="font-mono text-date tabular-nums text-muted">Issued {cert.issued} &middot; Expires {cert.expires}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Reveal>
    </section>
  )
}
