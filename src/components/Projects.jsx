import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-10">
      <Reveal>
        <SectionHeading title="Projects" />
      </Reveal>
      <div className="space-y-6">
        {projects.map((project) => (
          <Reveal key={project.name}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
