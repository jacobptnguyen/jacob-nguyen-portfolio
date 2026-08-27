import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { education } from '../data'

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-10">
      <Reveal>
        <SectionHeading title="Education" />
        <div className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            {education.school}
          </h3>
          <p className="mt-1 text-neutral-700 dark:text-neutral-300">
            {education.degree} · GPA {education.gpa}
          </p>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            {education.date}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
