export default function Bullets({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-copy text-body">
          <span
            aria-hidden="true"
            className="lime-mark mt-[0.5em] h-[0.4rem] w-[0.4rem] shrink-0 rounded-[2px]"
          />
          <span className="min-w-0">{item}</span>
        </li>
      ))}
    </ul>
  )
}
