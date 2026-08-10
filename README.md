# Jacob Nguyen Portfolio

Single-page portfolio site for Jacob Nguyen, CS grad (UC Davis, June 2026).

![Header preview](docs/header.png)

**Live demo:** [your-site.vercel.app](#)

## Tech Stack

| Layer | Tech |
| --- | --- |
| Framework | [React](https://react.dev) + [Vite](https://vitejs.dev) |
| Styling | [Tailwind CSS](https://tailwindcss.com) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Deployment | [Vercel](https://vercel.com), GitHub-integrated CI/CD |

`React` · `Vite` · `Tailwind CSS` · `Framer Motion` · `JavaScript` · `Vercel`

## Getting Started

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Project Structure

```
src/
  components/   # Header, Hero, Education, Experience, Projects, Skills, Footer
  data.js       # all site content (contact, experience, projects, skills)
  App.jsx
public/
  images/       # profile photo, project screenshots
  Jacob_Nguyen_resume.pdf
```

## Content

All copy, links, and project data live in [`src/data.js`](src/data.js) — update project info, skills, or contact links there rather than in the components.
