// Shared motion vocabulary. One curve, short durations, small offsets.
export const ease = [0.23, 1, 0.32, 1]

export const listVariants = (step) => ({ hidden: {}, show: { transition: { staggerChildren: step } } })

// Items start readable (0.4) and never fully hidden; reduced motion drops the offset.
export const itemVariants = (reduce, { x = 0, y = 0 } = {}) => ({
  hidden: { opacity: 0.4, x: reduce ? 0 : x, y: reduce ? 0 : y },
  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.28, ease } },
})

export const inView = { once: true, margin: '0px 0px 15% 0px' }
