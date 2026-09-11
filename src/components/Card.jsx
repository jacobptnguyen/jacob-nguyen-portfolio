export default function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-card border border-hair bg-surface p-[1.6rem] shadow-card sm:px-7 ${className}`}
    >
      {children}
    </div>
  )
}
