export default function SectionHeading({ index, title }) {
  return (
    <div className="mb-8 flex items-baseline gap-3">
      <span className="font-mono text-sm text-neutral-400 dark:text-neutral-600">{index}</span>
      <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
        {title}
      </h2>
      <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
    </div>
  )
}
