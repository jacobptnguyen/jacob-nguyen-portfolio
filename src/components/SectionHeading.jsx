export default function SectionHeading({ title, id }) {
  return (
    <h2 id={id} className="mb-6 flex items-center gap-3 text-section text-ink">
      <span aria-hidden="true" className="lime-mark h-3 w-3 shrink-0 rounded-[3px]" />
      {title}
    </h2>
  )
}
