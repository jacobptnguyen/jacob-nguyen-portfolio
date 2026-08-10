export const contact = {
  email: 'jacobptnguyen@gmail.com',
  linkedin: 'https://linkedin.com/in/jacob-nguyen',
  github: 'https://github.com/jacobptnguyen',
}

export const education = {
  school: 'University of California, Davis',
  degree: 'BS Computer Science',
  date: 'Graduated Jun 2026',
}

export const experience = [
  {
    role: 'Software Developer',
    org: 'Monterey Peninsula College',
    date: 'Jun – Jul 2024',
    bullets: [
      'Built a data visualization tool in Component Pascal (BlackBox Framework) parsing arbitrary CSVs into a linked-list structure, dynamically rendering histograms',
      'Designed a binning algorithm for multi-histogram rendering, mentored by an industry mentor at Applied Solar Energy',
    ],
    poster: {
      src: '/images/mpc-data-viz-poster.jpg',
      alt: 'NSF / C6-LSAMP research poster: "Data Visualization in an Object Oriented Pascal Based Language" by Jacob Nguyen and Grant McGregor, Monterey Peninsula College Computer Science Department',
      caption: 'NSF / C6-LSAMP research poster on the project',
    },
  },
]

export const projects = [
  {
    name: 'Salon Menu',
    date: '2026',
    stack: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'Vercel'],
    description:
      'Mobile-first digital nail polish menu with 25+ colors across 4 categories. Three-level nav (categories → colors → zoom) with Framer Motion transitions and swatch fallback. Accessible UI with semantic buttons and text labels for keyboard/colorblind users.',
    github: 'https://github.com/jacobptnguyen/salon-menu',
    demo: null,
    images: [
      { src: '/images/salon-menu-categories.jpg', alt: 'Salon Menu categories screen' },
      { src: '/images/salon-menu-colors.jpg', alt: 'Salon Menu color list screen' },
      { src: '/images/salon-menu-zoom.jpg', alt: 'Salon Menu color zoom screen' },
    ],
  },
  {
    name: 'Rate My Stuff',
    date: 'Aug 2026',
    stack: ['MERN', 'Express', 'MongoDB', 'Mongoose', 'TypeScript', 'Render'],
    description:
      'Full-stack app with a RESTful API and full CRUD for ratings, comments, and images. Responsive React/TypeScript frontend with React Router, deployed to Render with GitHub CI/CD.',
    github: 'https://github.com/jacobptnguyen/rate-my-stuff',
    demo: null,
    image: { src: '/images/rate-my-stuff.jpg', alt: 'Rate My Stuff item rating card screenshot' },
  },
  {
    name: 'Leetweak',
    date: null,
    stack: ['Python', 'Streamlit', 'requests', 'pandas'],
    description:
      "Local app that reads a public LeetCode profile via LeetCode's GraphQL endpoint, ranks problem tags by relative weakness, and recommends one unsolved, non-premium problem to close the gap.",
    github: 'https://github.com/jacobptnguyen/leetweak',
    demo: null,
    image: { src: '/images/leetweak.jpg', alt: 'Leetweak weakest-topic dashboard screenshot' },
  },
  {
    name: 'Outdone',
    date: null,
    stack: ['Python', 'Flask', 'Anthropic API (Claude Haiku)', 'smtplib', 'cron'],
    description:
      'Periodically emails a fake "friend just hit your goal" update as a lighthearted motivation nudge. Flask UI for managing goals, JSON files as the data layer, cron-scheduled daily send via Gmail SMTP.',
    github: 'https://github.com/jacobptnguyen/outdone',
    demo: null,
    image: { src: '/images/outdone.jpg', alt: 'Outdone motivational nudge email screenshot' },
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Component Pascal', 'HTML/CSS'],
  },
  {
    category: 'Frontend',
    items: ['React', 'React Router', 'Tailwind CSS', 'Framer Motion', 'Vite'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Flask', 'RESTful APIs'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'Mongoose'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Vercel', 'Render', 'CI/CD', 'Streamlit', 'cron'],
  },
]

export const resumeUrl = '/Jacob_Nguyen_resume.pdf'
