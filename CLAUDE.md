# Jacob Nguyen Portfolio

## Project Overview
Single-page personal portfolio site for Jacob Nguyen, a CS grad (UC Davis, June 2026) job-hunting for a junior/entry-level software engineering role. Goal: ship a clean, fast, project-first site that a recruiter can scan in under a minute.

## Tech Stack
- React + Vite
- Tailwind CSS
- Framer Motion for light transitions (fade/slide-in on scroll, eased page-load entrance for the hero)
- Deploy target: Vercel, GitHub-integrated for CI/CD on push to `main`

## Structure
Single-page scrolling site, in this fixed order:
1. Header — sticky, includes photo, name, nav, and contact links (email, GitHub, LinkedIn)
2. Hero — name, headline, one-line pitch, resume download + primary CTAs, and a footer-style contact link row
3. Education
4. Experience — reverse-chronological, most SWE-relevant roles first
5. Projects — one full-width card per project (title, bulleted description, tech stack, GitHub link, live demo link when available, screenshot when available)
6. Skills — grouped by category (Languages, Frontend, Backend, Databases, Tools & Platforms, Soft Skills)
7. Footer — contact links repeated (email, GitHub, LinkedIn, resume)

## Content Source

**`src/data.js` is the single source of truth for all site content** — contact info, education, experience, projects, and skills. Do not hardcode content into this file (CLAUDE.md); resumes, roles, and projects change over time and a content snapshot here will drift out of sync with the real data and go stale. When content needs updating, edit `src/data.js` directly and follow the writing guidelines below.

## Content Writing Guidelines

Apply these to every bullet, description, and headline added to `src/data.js`:

- **Lead with an action verb.** Built, Resolved, Merged, Designed, Escalated, Replaced, Directed — never "Responsible for" or "Worked on."
- **Follow an XYZ shape:** accomplished [X], measured by [Y], by doing [Z]. State the concrete outcome first, back it with a number, then explain the method — not the other way around.
- **Prioritize metrics, and put them early.** Counts, percentages, and scale ("120+ unique visitors," "25+ interactive cards," "20+ IT tickets," "full CRUD REST API") belong at the front of a sentence, not buried at the end.
- **Prefer measurable/concrete language over generic claims** — "full CRUD," "CI/CD deploy," "20+ tickets resolved" over vague claims like "helped with support" or "worked on the backend."

## Standard Portfolio Practices to Follow
- Project-first: top projects visible near the top, no long scroll to reach them
- Each project card shows: name, tech stack, GitHub link, live demo link when one exists
- **Every line of body copy is a bullet point, never a paragraph.** Applies to both Experience and Projects: each project's description is a bulleted list (`bullets` array in `src/data.js`), same as Experience entries — no single flowing `description` paragraph
- Resume available as a direct PDF download/link, not just embedded text
- Contact info (email + GitHub + LinkedIn) visible without hunting — in header, hero, and footer
- Mobile-first responsive layout
- Accessible by default: semantic HTML, labeled interactive elements, sufficient color contrast
- Only list a skill if it's demonstrated by something currently shown on the site (a project, a role, a bullet) — remove skills whose only backing project/entry gets removed
- Ship fast: get a live, working v1 deployed before polishing further

## Design Notes
- Keep visual style consistent with Salon Menu (Tailwind + Framer Motion aesthetic) since it's Jacob's most polished frontend work
- Favor a clean, minimal, dark-or-light neutral palette over heavy branding — let projects speak
- Use a single font family across the entire site (the default sans stack) — no monospace/code-style accents on dates, tags, labels, or anywhere else; consistency reads cleaner than a "developer portfolio" gimmick
- Visibility and clarity first: strong contrast, generous whitespace, clear visual hierarchy (headline > section titles > body text) so key info is never buried
- **Text color contrast floor (Tailwind neutral scale) — do not go lighter than these:**
  - Primary text (names, headings): `neutral-900` light / `neutral-100` dark
  - Body and link text: `neutral-700` light / `neutral-300` dark
  - Muted/tertiary text (dates, category labels, captions): `neutral-600` light / `neutral-400` dark
  - Never use `neutral-500` or lighter (light mode) / `neutral-500` or lighter (dark mode) for any text meant to be read — it's too faint. `neutral-500` is reserved for non-text decoration only (e.g., icon-only elements), and hover states may dip toward the base tier but never below it.
- Every interactive element (links, buttons, nav) has an obvious, legible state — no low-contrast text or unlabeled icons
- Smooth animations throughout via Framer Motion: fade/slide-in on scroll for sections, subtle hover transitions on project cards and buttons, eased page-load entrance for the hero — motion should feel polished, not distracting, and respect `prefers-reduced-motion`
