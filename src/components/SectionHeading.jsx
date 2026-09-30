import { motion, useReducedMotion } from 'framer-motion'
import { ease, inView } from '../motion'

export default function SectionHeading({ title, id }) {
  const reduce = useReducedMotion()
  return (
    <h2 id={id} className="mb-6 text-section text-ink">
      <span aria-hidden="true" className="mr-2 text-accent">#</span>
      {title}
      {/* Rule draws in under the title as it arrives: marks where a section starts. */}
      <motion.span
        aria-hidden="true"
        className="mt-3 block h-px origin-left bg-accent/50"
        initial={{ scaleX: reduce ? 1 : 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={inView}
        transition={{ duration: 0.6, ease }}
      />
    </h2>
  )
}
