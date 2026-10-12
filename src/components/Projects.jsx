import { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import { projects, projectCategories } from '../data'
import { slug } from '../slug'

const tabs = ['All', ...projectCategories]
const CAP = 3
const countFor = (tab) => (tab === 'All' ? projects.length : projects.filter((p) => p.category === tab).length)

export default function Projects() {
  const [active, setActive] = useState('All')
  const [expanded, setExpanded] = useState(false)
  const refs = useRef([])
  const reduceMotion = useReducedMotion()
  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active)
  const shown = expanded ? visible : visible.slice(0, CAP)
  const select = (tab) => {
    setActive(tab)
    setExpanded(false)
  }

  const onKeyDown = (e, i) => {
    const next = { ArrowRight: (i + 1) % tabs.length, ArrowLeft: (i - 1 + tabs.length) % tabs.length, Home: 0, End: tabs.length - 1 }[e.key]
    if (next === undefined) return
    e.preventDefault()
    select(tabs[next])
    refs.current[next]?.focus()
  }

  return (
    <section id="projects" aria-labelledby="projects-heading" className="mx-auto max-w-shell px-6 py-12">
      <Reveal>
        <SectionHeading id="projects-heading" title="Projects" />
      </Reveal>

      <div role="tablist" aria-label="Project categories" className="mb-6 flex gap-1 overflow-x-auto border-b border-hair">
        {tabs.map((tab, i) => {
          const selected = tab === active
          return (
            <button
              key={tab}
              ref={(el) => (refs.current[i] = el)}
              role="tab"
              id={`project-tab-${i}`}
              aria-selected={selected}
              aria-controls="project-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => select(tab)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`relative min-h-[44px] whitespace-nowrap px-4 font-mono text-date font-medium transition-colors active:scale-[0.97] ${
                selected ? 'text-ink' : 'text-muted hover:text-ink'
              }`}
            >
              {tab} <span className="text-muted">{countFor(tab)}</span>
              {selected && (
                <motion.span
                  layoutId="project-tab-underline"
                  transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 500, damping: 40 }}
                  className="absolute inset-x-2 -bottom-px h-0.5 bg-accent"
                />
              )}
            </button>
          )
        })}
      </div>

      <div role="tabpanel" id="project-panel" aria-labelledby={`project-tab-${tabs.indexOf(active)}`}>
        <motion.ul
          key={active}
          className="space-y-4"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
        >
          {shown.map((project) => (
            <li key={project.name} id={slug(project.name)}>
              <Reveal>
                <ProjectCard project={project} />
              </Reveal>
            </li>
          ))}
        </motion.ul>

        {shown.length < visible.length && (
          <button
            type="button"
            aria-controls="project-panel"
            onClick={() => setExpanded(true)}
            className="mt-6 min-h-[44px] rounded-lg border border-hair bg-surface px-5 py-3 font-mono text-date font-semibold text-ink transition-[transform,border-color] duration-150 hover:border-accent active:scale-[0.97]"
          >
            See more <span className="text-muted">{visible.length - shown.length}</span>
          </button>
        )}
      </div>
    </section>
  )
}
