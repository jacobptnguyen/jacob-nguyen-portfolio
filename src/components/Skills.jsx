import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Card from './Card'
import { skills } from '../data'
import { inView, itemVariants, listVariants } from '../motion'

export default function Skills() {
  const reduce = useReducedMotion()
  const chip = itemVariants(reduce, { y: 6 })
  return (
    <section id="skills" aria-labelledby="skills-heading" className="mx-auto max-w-shell px-6 py-12">
      <Reveal>
        <SectionHeading id="skills-heading" title="Skills" />
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(15rem,1fr))]">
          {skills.map((group) => (
            <Card key={group.category} className="!p-5">
              {/* Category label outranks its own chips: brighter and bolder. */}
              <h3 className="text-label uppercase text-ink">{group.category}</h3>
              <motion.ul
                className="mt-3 flex flex-wrap gap-1.5"
                variants={listVariants(0.03)}
                initial="hidden"
                whileInView="show"
                viewport={inView}
              >
                {group.items.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={chip}
                    className="rounded-md bg-chip px-2.5 py-1 font-mono text-micro text-body transition-colors hover:bg-accent hover:text-on-accent"
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </Card>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
