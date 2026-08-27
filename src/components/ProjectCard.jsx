export default function ProjectCard({ project }) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          {project.name}
        </h3>
        {project.date && (
          <span className="text-sm text-neutral-600 dark:text-neutral-400">
            {project.date}
          </span>
        )}
      </div>

      <div className="mt-3 flex flex-col gap-5 sm:flex-row">
        <div className="sm:flex-1">
          <p className="text-neutral-700 dark:text-neutral-300">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:decoration-neutral-700 dark:hover:text-neutral-100"
            >
              GitHub ↗
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:decoration-neutral-700 dark:hover:text-neutral-100"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </div>

        {project.images && (
          <div className="flex shrink-0 gap-2 sm:w-72">
            {project.images.map((image) => (
              <a
                key={image.src}
                href={image.src}
                target="_blank"
                rel="noreferrer"
                className="block min-w-0 flex-1"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-40 w-full rounded-md border border-neutral-200 object-cover transition-opacity hover:opacity-90 dark:border-neutral-800"
                />
              </a>
            ))}
          </div>
        )}

        {project.image && (
          <a
            href={project.image.src}
            target="_blank"
            rel="noreferrer"
            className="block shrink-0 sm:w-56"
          >
            <img
              src={project.image.src}
              alt={project.image.alt}
              className="rounded-md border border-neutral-200 transition-opacity hover:opacity-90 dark:border-neutral-800"
            />
          </a>
        )}
      </div>
    </div>
  )
}
