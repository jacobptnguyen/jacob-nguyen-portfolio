// Bolds **marked** spans inside a plain content string, so metrics in
// src/data.js emphasize the same way \textbf{} does in resume/resume.tex.
// String.split with a capturing group puts the captures at odd indices.
export default function Rich({ text }) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 ? (
      <strong key={i} className="font-semibold text-ink">
        {part}
      </strong>
    ) : (
      part
    ),
  )
}
