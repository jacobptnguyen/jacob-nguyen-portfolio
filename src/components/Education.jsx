import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Card from './Card'
import { education } from '../data'

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="mx-auto max-w-shell px-6 py-12">
      <Reveal>
        <SectionHeading id="education-heading" title="Education" />
        <Card>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="text-entry text-ink">{education.school}</h3>
            <span className="text-date tabular-nums text-muted">{education.date}</span>
          </div>
          <p className="mt-1 text-org text-body">
            {education.degree} · GPA {education.gpa}
          </p>
        </Card>
      </Reveal>
    </section>
  )
}
