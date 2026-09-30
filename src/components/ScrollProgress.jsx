import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'

// Reading progress: a thin accent line across the top of the viewport.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, { stiffness: 220, damping: 32, mass: 0.3 })
  const reduce = useReducedMotion()
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: reduce ? scrollYProgress : smooth }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-accent"
    />
  )
}
