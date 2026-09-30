import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Card from './Card'
import { education } from '../data'
import { inView, itemVariants, listVariants } from '../motion'

export default function Education() {
  const reduce = useReducedMotion()
  const chip = itemVariants(reduce, { y: 6 })
  return (
    <section id="education" aria-labelledby="education-heading" className="mx-auto max-w-shell px-6 py-12">
      <Reveal>
        <SectionHeading id="education-heading" title="Education" />
        <Card>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="text-entry text-ink">{education.school}</h3>
            <span className="font-mono text-date tabular-nums text-muted">{education.date}</span>
          </div>
          <p className="mt-1 text-org text-body">
            {education.degree} &middot; GPA {education.gpa}
          </p>

          {education.coursework && (
            <>
              <h4 id="coursework-label" className="mt-5 font-mono text-label uppercase text-ink">
                Relevant coursework
              </h4>
              <motion.ul
                aria-labelledby="coursework-label"
                className="mt-3 flex flex-wrap gap-1.5"
                variants={listVariants(0.03)}
                initial="hidden"
                whileInView="show"
                viewport={inView}
              >
                {education.coursework.map((course) => (
                  <motion.li
                    key={course}
                    variants={chip}
                    className="rounded-md bg-chip px-2.5 py-1 font-mono text-micro text-body"
                  >
                    {course}
                  </motion.li>
                ))}
              </motion.ul>
            </>
          )}
        </Card>
      </Reveal>
    </section>
  )
}
