import { contact, hero, resumeUrl } from '../data'
import { ContactRow } from './Links'

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-name" className="mx-auto max-w-shell px-6 pb-14 pt-12 sm:pt-20">
      <div className="hero-rise flex flex-col-reverse gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          {hero.badge && (
            <p className="lime-mark mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-label text-on-lime">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-on-lime" />
              {hero.badge}
            </p>
          )}

          <h1 id="hero-name" className="text-display text-ink">
            {hero.name}
          </h1>

          <p className="mt-4 max-w-2xl text-headline font-semibold text-ink">{hero.headline}</p>

          <p className="mt-4 max-w-2xl text-lede text-body">{hero.pitch}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={resumeUrl}
              download
              className="rounded-full bg-ink px-6 py-3 text-date font-semibold text-bg shadow-card transition-[transform,box-shadow] duration-150 hover:-translate-y-px hover:shadow-card-hover active:translate-y-0 active:scale-[0.97]"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="rounded-full border border-hair bg-surface px-6 py-3 text-date font-semibold text-ink shadow-card transition-[transform,box-shadow] duration-150 hover:-translate-y-px hover:shadow-card-hover active:translate-y-0 active:scale-[0.97]"
            >
              View projects
            </a>
          </div>

          <ContactRow contact={contact} className="mt-6" />
        </div>

        <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full ring-1 ring-hair sm:h-44 sm:w-44">
          <img
            src={hero.photo.src}
            alt={hero.photo.alt}
            width="176"
            height="176"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
