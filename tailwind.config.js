// A bare var() can't take Tailwind's /opacity modifier (bg-accent/50 would
// emit nothing), so mix the token with transparent at the requested alpha.
const token = (name) => `color-mix(in srgb, var(--${name}) calc(<alpha-value> * 100%), transparent)`

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // Hover styles apply only on devices that can hover, so taps never stick.
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      // Mono carries the identity (headings, nav, labels, dates, chips);
      // sans is reserved for bullet copy so paragraphs stay skimmable.
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['"Schibsted Grotesk"', 'ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
      },
      colors: {
        bg: token('bg'),
        surface: token('surface'),
        ink: token('ink'),
        body: token('body'),
        muted: token('muted'),
        hair: token('border'),
        chip: token('chip'),
        accent: token('accent'),
        'on-accent': token('on-accent'),
      },
      // WARNING: these keys must never collide with a key in `colors` above.
      // Tailwind emits `text-<key>` for both maps, and the color wins silently
      // with no build error.
      fontSize: {
        display: ['clamp(2.25rem, 7vw, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.045em', fontWeight: '800' }],
        section: ['1.5rem', { lineHeight: '1.2', letterSpacing: '-0.03em', fontWeight: '700' }],
        headline: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.02em' }],
        entry: ['1.125rem', { lineHeight: '1.3', letterSpacing: '-0.02em', fontWeight: '700' }],
        lede: ['1.0625rem', { lineHeight: '1.65' }],
        copy: ['1rem', { lineHeight: '1.65' }],
        org: ['0.9375rem', { lineHeight: '1.5' }],
        date: ['0.875rem', { lineHeight: '1.5' }],
        label: ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.02em', fontWeight: '700' }],
        micro: ['0.8125rem', { lineHeight: '1.35' }],
      },
      borderRadius: { card: '10px' },
      maxWidth: { shell: '62rem' },
    },
  },
  plugins: [],
}
