import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Card from './Card'
import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="mx-auto max-w-shell px-6 py-12">
      <Reveal>
        <SectionHeading id="skills-heading" title="Skills" />
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(15rem,1fr))]">
          {skills.map((group) => (
            <Card key={group.category} className="!p-5">
              {/* Category label outranks its own chips: darker and bolder. */}
              <h3 className="text-label uppercase text-ink">{group.category}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-chip px-2.5 py-1 text-micro text-body"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
