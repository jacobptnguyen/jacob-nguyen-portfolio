# Jacob Nguyen Portfolio

## Project Overview
Single-page personal portfolio site for Jacob Nguyen, a CS grad (UC Davis, June 2026) job-hunting for a junior/entry-level software engineering role. Goal: ship a clean, fast, project-first site that a recruiter can scan in under a minute.

## Tech Stack
- React + Vite
- Tailwind CSS
- Framer Motion for light transitions (optional, matches Salon Menu project style)
- Deploy target: Vercel, GitHub-integrated for CI/CD on push to `main`

## Structure
Single-page scrolling site, sections mirror resume order:
1. Header — persistent, includes name and contact links (email, LinkedIn, GitHub)
2. Hero — name, title ("Software Engineer" or "CS Grad, UC Davis"), one-line pitch, resume download button
3. Education — UC Davis, BS Computer Science, Jun 2026
4. Experience — Monterey Peninsula College software developer role
5. Projects — 4 projects (Salon Menu, Rate My Stuff, Outdone, Leetweak), 3-column grid on desktop (wraps to 1 column on mobile)
6. Skills — grouped by category (Languages, Frontend, Backend, Databases, Tools)
7. Footer — contact links repeated (email, LinkedIn, GitHub)

## Content Source (from resume)

**Contact:** jacobptnguyen@gmail.com | linkedin.com/in/jacob-nguyen | github.com/jacobptnguyen

**Education:** University of California, Davis — BS Computer Science, Graduated Jun 2026

**Experience:**
- Software Developer, Monterey Peninsula College (Jun–Jul 2024)
  - Built a data visualization tool in Component Pascal (BlackBox Framework) parsing arbitrary CSVs into a linked-list structure, dynamically rendering histograms
  - Designed a binning algorithm for multi-histogram rendering, mentored by an industry mentor at Applied Solar Energy

**Projects:**
- **Salon Menu** (2026) — React, Vite, Tailwind CSS, JavaScript, Framer Motion, Vercel. Mobile-first digital nail polish menu, 25+ colors across 4 categories. Three-level nav (categories → colors → zoom) with Framer Motion transitions and swatch fallback. Accessible UI: semantic buttons, text labels for keyboard/colorblind users.
  - GitHub: https://github.com/jacobptnguyen/salon-menu
- **Rate My Stuff** (Aug 2026) — MERN, Express, MongoDB, Mongoose, TypeScript, Render. Full-stack app, RESTful API, full CRUD for ratings/comments/images. Responsive React/TypeScript frontend with React Router. Deployed to Render with GitHub CI/CD.
  - GitHub: https://github.com/jacobptnguyen/rate-my-stuff
- **Outdone** (Aug 2026) — Python, Flask, Anthropic API, cron. Full-stack personal automation tool integrating the Anthropic API, Gmail SMTP, and cron scheduling, with a self-contained JSON-based data layer requiring no database. Includes a Flask web UI for CRUD-style goal management and a dedup algorithm with fallback logic to prevent repetitive output.
  - GitHub: https://github.com/jacobptnguyen/outdone
- **Leetweak** (Aug 2026) — Python, Streamlit, GraphQL. Full-stack local analytics tool that integrates with LeetCode's public GraphQL API to rank topic proficiency and recommend targeted practice problems, replacing a multi-step manual workflow with a single automated fetch-rank-filter pipeline.
  - GitHub: https://github.com/jacobptnguyen/leetweak

**Technical Skills:**
- Languages: JavaScript, TypeScript, Python, Component Pascal, HTML/CSS
- Frontend: React, React Router, Tailwind CSS, Framer Motion, Vite, Streamlit
- Backend: Node.js, Express, Flask, RESTful APIs, GraphQL
- Databases: MongoDB, Mongoose
- Tools & Platforms: Git, GitHub, Vercel, Render, CI/CD, cron, Anthropic API

**Resume source of truth:** `Jacob_Nguyen_resume.pdf`. Sections: Education, Experience (Monterey Peninsula College), Projects (Salon Menu, Rate My Stuff, Outdone, Leetweak), and Technical Skills — matches Content Source above.

## Standard Portfolio Practices to Follow
- Project-first: top projects visible near the top, no long scroll to reach them
- Each project card shows: name, tech stack, 1-2 line outcome/description, GitHub link, live demo link
- Prefer measurable/concrete descriptions over generic ones ("full CRUD," "CI/CD deploy," "25+ colors across 4 categories") — reuse resume bullet phrasing, don't dilute it
- Resume available as a direct PDF download/link, not just embedded text
- Contact info (email + GitHub + LinkedIn) visible without hunting, ideally in header/hero and footer
- Mobile-first responsive layout
- Accessible by default: semantic HTML, labeled interactive elements, sufficient color contrast — consistent with the accessibility work already shown in the Salon Menu project
- Ship fast: get a live, working v1 deployed before polishing further

## Design Notes
- Keep visual style consistent with Salon Menu (Tailwind + Framer Motion aesthetic) since it's Jacob's most polished frontend work
- Favor a clean, minimal, dark-or-light neutral palette over heavy branding — let projects speak
- Use monospace or code-adjacent accents sparingly (e.g., section labels) to signal "developer portfolio" without being gimmicky
- Visibility and clarity first: strong contrast, generous whitespace, clear visual hierarchy (headline > section titles > body text) so key info is never buried
- Every interactive element (links, buttons, nav) has an obvious, legible state — no low-contrast text or unlabeled icons
- Smooth animations throughout via Framer Motion: fade/slide-in on scroll for sections, subtle hover transitions on project cards and buttons, eased page-load entrance for the hero — motion should feel polished, not distracting, and respect `prefers-reduced-motion`
