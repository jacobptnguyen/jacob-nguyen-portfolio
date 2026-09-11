import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="mx-auto max-w-shell px-6 py-12">
      <Reveal>
        <SectionHeading id="projects-heading" title="Projects" />
      </Reveal>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.name}>
            <Reveal>
              <ProjectCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
