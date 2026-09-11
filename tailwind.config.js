/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Schibsted Grotesk"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'sans-serif',
        ],
      },
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        body: 'var(--body)',
        muted: 'var(--muted)',
        hair: 'var(--border)',
        chip: 'var(--chip)',
        lime: 'var(--lime)',
        'on-lime': 'var(--on-lime)',
        link: 'var(--link)',
        mark: 'var(--mark)',
      },
      // Each step carries its own leading + tracking, per the type scale.
      // WARNING: these keys must never collide with a key in `colors` above.
      // Tailwind emits `text-<key>` for both maps, and the color wins silently
      // with no build error — a size key named the same as a color renders text
      // in that color at the wrong size. This already bit us once (`chip`).
      fontSize: {
        display: ['clamp(3rem, 8vw, 5rem)', { lineHeight: '0.98', letterSpacing: '-0.04em', fontWeight: '700' }],
        section: ['1.75rem', { lineHeight: '1.15', letterSpacing: '-0.03em', fontWeight: '700' }],
        headline: ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.015em' }],
        entry: ['1.25rem', { lineHeight: '1.25', letterSpacing: '-0.02em', fontWeight: '700' }],
        lede: ['1.0625rem', { lineHeight: '1.6', letterSpacing: '-0.003em' }],
        copy: ['1rem', { lineHeight: '1.6', letterSpacing: '-0.003em' }],
        org: ['0.9375rem', { lineHeight: '1.5' }],
        date: ['0.875rem', { lineHeight: '1.5' }],
        label: ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.02em', fontWeight: '700' }],
        micro: ['0.8125rem', { lineHeight: '1.35' }],
      },
      borderRadius: { card: '18px' },
      boxShadow: {
        card: 'var(--shadow)',
        'card-hover': 'var(--shadow-hover)',
      },
      maxWidth: { shell: '64rem' },
    },
  },
  plugins: [],
}
