import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-10">
      <Reveal>
        <SectionHeading title="Experience" />
        <div className="space-y-6">
          {experience.map((job) => (
            <div
              key={`${job.role}-${job.org}`}
              className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    {job.role}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {job.org}
                    {job.employmentType && ` · ${job.employmentType}`}
                  </p>
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {job.date}
                </span>
              </div>
              <div className="mt-3 flex flex-col gap-5 sm:flex-row">
                <div className="sm:flex-1">
                  <ul className="list-disc space-y-2 pl-5 text-neutral-700 dark:text-neutral-300">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>

                  {job.links && (
                    <div className="mt-4 flex flex-wrap items-center gap-4">
                      {job.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:decoration-neutral-700 dark:hover:text-neutral-100"
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                {job.poster && (
                  <a
                    href={job.poster.src}
                    target="_blank"
                    rel="noreferrer"
                    className="block shrink-0 sm:w-56"
                  >
                    <img
                      src={job.poster.src}
                      alt={job.poster.alt}
                      className="rounded-md border border-neutral-200 transition-opacity hover:opacity-90 dark:border-neutral-800"
                    />
                    <p className="mt-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                      {job.poster.caption} ↗
                    </p>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
