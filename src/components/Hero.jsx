import { motion, useReducedMotion } from 'framer-motion'
import { contact, resumeUrl } from '../data'

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  const container = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.1 },
    },
  }
  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  }

  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-10 pt-16 sm:pb-12 sm:pt-24">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col-reverse items-center gap-10 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex-1">
          <motion.p
            variants={item}
            className="text-sm font-medium text-neutral-600 dark:text-neutral-400"
          >
            hi, I&apos;m
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-2 text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl"
          >
            Jacob Nguyen
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-3 text-lg font-medium text-neutral-700 dark:text-neutral-300 sm:text-xl"
          >
            Gen AI + Full Stack Intern @ Think Round | IT Intern @ Hartnell College | Open Source
            Contributor | UC Davis CS &rsquo;26
          </motion.p>
          <motion.p
            variants={item}
            className="mt-4 max-w-2xl text-base text-neutral-700 dark:text-neutral-300 sm:text-lg"
          >
            Currently a Gen AI + Full Stack Intern at Think Round and an IT Intern at Hartnell
            College, with hands-on React, Node/Express, and MongoDB experience. My project Salon
            Menu has had 220+ unique visitors and 25+ interactive cards. B.S. Computer
            Science, UC Davis. Seeking roles in software engineering.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={resumeUrl}
              download
              className="rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-neutral-50 transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="rounded-md border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-900 transition-colors hover:border-neutral-400 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:border-neutral-600 dark:hover:bg-neutral-900"
            >
              View Projects
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            <a
              href={`mailto:${contact.email}`}
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
            >
              {contact.email}
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
            >
              GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-neutral-200 dark:border-neutral-800 sm:h-48 sm:w-48"
        >
          <img
            src="/images/profile.png"
            alt="Jacob Nguyen"
            width="192"
            height="192"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
