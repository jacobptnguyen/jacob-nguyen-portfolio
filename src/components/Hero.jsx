import { Fragment, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { contact, hero, resumeUrl } from '../data'
import { ContactRow } from './Links'
import Rich from './Rich'

const button =
  'rounded-lg px-5 py-3 font-mono text-date font-semibold transition-[transform,background-color,border-color] duration-150 active:scale-[0.97]'

// Entrance is CSS (.rise / .char), not JS, so the headline can never be gated
// behind a script that is slow, blocked, or broken.
export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80])

  let n = 0
  const words = hero.name.split(' ')

  return (
    <section ref={ref} id="top" aria-labelledby="hero-name" className="grid-bg border-b border-hair">
      <div className="mx-auto max-w-shell px-6 pb-14 pt-12 lg:pt-16">
        <div className="flex flex-col-reverse gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <p aria-hidden="true" className="rise mb-4 font-mono text-date text-muted" style={{ '--i': 0 }}>
              <span className="text-accent">$</span> whoami
            </p>
            <h1 id="hero-name" aria-label={hero.name} className="text-display text-ink">
              {words.map((word, wi) => (
                <Fragment key={wi}>
                  {wi > 0 && ' '}
                  <span aria-hidden="true" className="inline-block whitespace-nowrap">
                    {[...word].map((c, ci) => (
                      <span key={ci} className="char" style={{ '--i': n++ }}>
                        {c}
                      </span>
                    ))}
                  </span>
                </Fragment>
              ))}
              <span aria-hidden="true" className="caret" />
            </h1>

            <p className="rise mt-5 max-w-2xl font-mono text-headline font-semibold text-ink" style={{ '--i': 9 }}>
              {hero.headline}
            </p>
            <p className="rise mt-4 max-w-2xl text-lede text-body" style={{ '--i': 10 }}>
              <Rich text={hero.pitch} />
            </p>

            <div className="rise mt-8 flex flex-wrap items-center gap-3" style={{ '--i': 11 }}>
              <a href={resumeUrl} download className={`${button} bg-accent text-on-accent hover:bg-ink`}>
                Download Resume
              </a>
              <a href="#projects" className={`${button} border border-hair bg-surface text-ink hover:border-accent`}>
                View projects
              </a>
            </div>

            <ContactRow contact={contact} className="rise mt-6" style={{ '--i': 12 }} />
          </div>

          <motion.div
            style={{ y: photoY, '--i': 4 }}
            className="rise h-28 w-28 shrink-0 overflow-hidden rounded-full sm:h-44 sm:w-44"
          >
            <img src={hero.photo.src} alt={hero.photo.alt} width="176" height="176" className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
