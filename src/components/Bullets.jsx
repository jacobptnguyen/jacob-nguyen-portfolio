import { motion, useReducedMotion } from 'framer-motion'
import Rich from './Rich'
import { inView, itemVariants, listVariants } from '../motion'

export default function Bullets({ items }) {
  const reduce = useReducedMotion()
  const item = itemVariants(reduce, { x: -10 })
  return (
    <motion.ul
      className="space-y-2.5"
      variants={listVariants(0.07)}
      initial="hidden"
      whileInView="show"
      viewport={inView}
    >
      {items.map((text) => (
        <motion.li key={text} variants={item} className="flex gap-3 text-copy text-body">
          <span aria-hidden="true" className="font-mono font-bold leading-[1.65] text-accent">
            &rsaquo;
          </span>
          <span className="min-w-0">
            <Rich text={text} />
          </span>
        </motion.li>
      ))}
    </motion.ul>
  )
}
