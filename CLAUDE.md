# Jacob Nguyen Portfolio

## Project Overview
Single-page personal portfolio site for Jacob Nguyen, a CS grad (UC Davis, June 2026) job-hunting for a junior/entry-level software engineering role. Goal: ship a clean, fast, project-first site. The first screen must land immediately, and visitors who keep reading are assumed to have time, so rich motion and polish are welcome.

## Tech Stack
- React + Vite
- Tailwind CSS
- Framer Motion for light transitions (fade/slide-in on scroll, eased page-load entrance for the hero)
- Deploy target: Vercel, GitHub-integrated for CI/CD on push to `main`

## Structure
Single-page scrolling site. **The shared sections (Education, Experience, Projects, Skills) keep the résumé's relative order (`resume/resume.tex`); sections that exist only on the site (Open Source) are placed by impact.** Current order:
1. Header — left rail on desktop (file-tree nav, contact links), sticky top bar on phones; includes photo, name, and contact links (email, GitHub, LinkedIn)
2. Hero — name, headline, pitch, resume download + primary CTAs, and contact link row
3. Education
4. Experience — reverse-chronological, most SWE-relevant roles first (paid roles only)
5. Open Source — one card per organisation, merged work only; lives in the `openSource` array in `src/data.js`
6. Projects — one full-width card per project, browsed through category tabs (`projectCategories`, each project has a `category`; "All" is the default so nothing is hidden)
7. Skills — grouped by category as they appear in `src/data.js`
8. Footer — contact links repeated (email, GitHub, LinkedIn, resume)

## Content Source

**`src/data.js` is the single source of truth for all site content** — contact info, education, experience, projects, and skills. Do not hardcode content into this file (CLAUDE.md); resumes, roles, and projects change over time and a content snapshot here will drift out of sync with the real data and go stale. When content needs updating, edit `src/data.js` directly and follow the writing guidelines below.

## Two Surfaces, Two Bars

**The portfolio is the superset. The resume is the curated cut.** They are intentionally
different, and a difference between them is not drift to be reconciled.

- **`src/data.js` (site)** holds everything worth showing. Scrolling is cheap and a card
  costs almost nothing, so an entry only has to be real and accurate to earn a place.
  Smaller contributions and roles that are not strictly SWE belong here. Open (unmerged) PRs never do: only merged work appears anywhere on the site.
- **`resume/resume.tex`** is one page and space is the binding constraint. Every line must
  outrank the line it displaces. Cut anything that does not earn its height for a SWE
  screen, even when it is true and even when it is on the site.

So the normal outcome is **keep on site, cut from resume**, not remove from both. Before
cutting something, ask which surface it fails on. Wording fixes and factual corrections
still apply to both.

## Content Writing Guidelines

Apply these to every bullet, description, and headline in `src/data.js` and `resume/resume.tex`.

- **Lead with an action verb.** Built, Resolved, Merged, Shipped, Replaced, Eliminated. Never "Responsible for" or "Worked on."
- **Follow an XYZ shape:** accomplished [X], measured by [Y], by doing [Z]. Outcome first, evidence second, method last.
- **A metric must measure impact, not volume.** Adoption, time saved, scale handled, problems eliminated are worth front-loading. Lines of code, file counts, commit counts, PR counts and hours spent are not: they measure how much work happened, not whether it mattered.
- **Put the metric in the first few words.** Recruiters read in an L: down the left edge, then across whatever catches them. A number buried mid-sentence is a number nobody sees. The shape is action verb, then metric, then context: "Reached 450+ unique visitors with a QR-code menu that replaced the salon's one shared binder", never "Replaced the salon's one shared binder ... Reached 450+ unique visitors." Keeping the problem statement is still required, it just moves behind the number instead of in front of it.

## Standard Portfolio Practices to Follow
- Shared sections follow the résumé's order, not a general "projects first" heuristic — see Structure above. Within Projects, the strongest project leads.
- Each project card shows: name, tech stack, GitHub link, live demo link when one exists
- **Every line of body copy is a bullet point, never a paragraph.** Applies to both Experience and Projects: each project's description is a bulleted list (`bullets` array in `src/data.js`), same as Experience entries — no single flowing `description` paragraph
- Resume available as a direct PDF download/link, not just embedded text
- Contact info (email + GitHub + LinkedIn) visible without hunting — in header, hero, and footer
- Mobile-first responsive layout
- Accessible by default: semantic HTML, labeled interactive elements, sufficient color contrast
- Only list a skill if it's demonstrated by something currently shown on the site (a project, a role, a bullet) — remove skills whose only backing project/entry gets removed
- Ship fast: get a live, working v1 deployed before polishing further

## Design Notes

**Current direction: "Console"** (dark-first, editor-style; tokens in `src/index.css`). Still open to change. The site is being revamped — palette, typography, layout, density, and overall character are design decisions to be made, not constraints to work around. Do not preserve the current look for its own sake.

What does not move is legibility. None of the following are style preferences; anything a reader has to squint at is lost.

- **Contrast floor.** Body text meets WCAG AA (4.5:1 against its actual background); large headings meet 3:1. Muted and tertiary text — dates, captions, category labels — is still text meant to be read and meets the same 4.5:1 floor, whatever the palette. Hover states may shift tone but never drop below it.
- **Hierarchy is unambiguous at a glance.** Headline > section titles > body, established by more than one signal (size, weight, and color together — not color alone).
- **Every interactive element has an obvious state and an accessible name.** No unlabeled icons. Visible focus state on everything focusable.
- **Motion respects `prefers-reduced-motion`, and content is always readable at rest.** Rich motion is welcome (staggered entrances, scroll progress, sliding indicators, hover lifts), but keep it short (under ~300ms per element), never hide text behind an animation that must finish before it can be read, and never animate keyboard-initiated actions. Reduced motion means gentler, not zero: keep opacity transitions, drop movement.
- **Type stays consistent.** Two families with fixed jobs: JetBrains Mono for headings, nav, labels, dates, chips and links; Schibsted Grotesk for bullet and paragraph copy only, so long text stays skimmable.
