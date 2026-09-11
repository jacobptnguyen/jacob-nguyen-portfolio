import Card from './Card'
import Bullets from './Bullets'
import { ExternalLink } from './Links'

function Shot({ image, label, capped }) {
  return (
    <a
      href={image.src}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="block overflow-hidden rounded-lg border border-hair transition-opacity hover:opacity-90"
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className={`max-h-64 w-full object-contain ${capped ? '' : 'sm:max-h-none'}`}
      />
    </a>
  )
}

export default function ProjectCard({ project }) {
  const images = project.images ?? (project.image ? [project.image] : [])

  return (
    <Card>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="text-entry text-ink">{project.name}</h3>
        {project.date && <span className="text-date tabular-nums text-muted">{project.date}</span>}
      </div>

      <div className="mt-4 flex flex-col gap-6 sm:flex-row">
        <div className="min-w-0 sm:flex-1">
          <Bullets items={project.bullets} />

          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`${project.name} tech stack`}>
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-chip px-2.5 py-1 text-micro text-body"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-date">
            <ExternalLink href={project.github} aria-label={`${project.name} on GitHub`}>
              GitHub
            </ExternalLink>
            {project.demo && (
              <ExternalLink href={project.demo} aria-label={`${project.name} live demo`}>
                Live demo
              </ExternalLink>
            )}
          </div>
        </div>

        {images.length > 0 && (
          <div className="flex shrink-0 flex-col gap-2 sm:w-64">
            {images.map((image, i) => (
              <Shot
                key={`${image.src}-${i}`}
                image={image}
                capped={images.length > 1}
                label={`${project.name} screenshot${images.length > 1 ? ` ${i + 1}` : ''}, open full size`}
              />
            ))}
          </div>
        )}
      </div>
    </Card>
  )
}
