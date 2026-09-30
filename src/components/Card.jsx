export default function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-card border border-hair bg-surface p-6 transition-[border-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-accent/60 sm:px-7 ${className}`}
    >
      {children}
    </div>
  )
}
