import { motion, useReducedMotion } from 'framer-motion'

// Content is never invisible while it waits. Opacity starts at 0.55 (readable)
// and the observer fires while the element is still below the fold, so a fast
// scroller never arrives at a bullet that hasn't resolved yet.
export default function Reveal({ children, className }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.55, y: shouldReduceMotion ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0, margin: '0px 0px 15% 0px' }}
      transition={
        shouldReduceMotion
          ? { duration: 0.18, ease: [0.23, 1, 0.32, 1] }
          : { type: 'spring', stiffness: 260, damping: 30, mass: 0.9, opacity: { duration: 0.16 } }
      }
    >
      {children}
    </motion.div>
  )
}
