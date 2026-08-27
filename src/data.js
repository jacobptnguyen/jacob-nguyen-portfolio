export const contact = {
  email: 'jacobptnguyen@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jacob-nguyen-138267262/',
  github: 'https://github.com/jacobptnguyen',
}

export const education = {
  school: 'University of California, Davis',
  degree: 'BS Computer Science',
  gpa: '3.59',
  date: 'Graduated Jun 2026',
}

export const experience = [
  {
    role: 'Gen AI + Full Stack Intern',
    org: 'Think Round',
    employmentType: 'Internship',
    date: 'Aug 2026 – Present',
    bullets: [
      'Built macro-chatbot, a local CLI tool that generates an original recipe from whatever ingredients are on hand and returns an exact calorie, protein, carb, and fat breakdown from a real nutrition lookup, closing the gap between recipe apps that assume you know what to cook and macro trackers that assume you know what you ate.',
    ],
    links: [{ label: 'macro-chatbot on GitHub', href: 'https://github.com/jacobptnguyen/macro-chatbot' }],
  },
  {
    role: 'Open Source Contributor',
    org: 'freeCodeCamp',
    employmentType: 'Open Source',
    date: 'Aug 2026 – Present',
    bullets: [
      'Replaced regex-based test assertions with behavior-based tests in a JavaScript workshop, part of a broader curriculum-wide initiative to make grading more reliable for learners.',
      "Rewrote ambiguous VS Code extension descriptions in freeCodeCamp's curriculum and corrected a misleading quiz question about the Error Lens extension.",
    ],
    links: [
      { label: 'PR #69515', href: 'https://github.com/freeCodeCamp/freeCodeCamp/pull/69515' },
      { label: 'PR #69475', href: 'https://github.com/freeCodeCamp/freeCodeCamp/pull/69475' },
    ],
  },
  {
    role: 'IT Intern',
    org: 'Hartnell College',
    employmentType: 'Internship',
    date: 'Aug 2026 – Present',
    bullets: [
      'Resolved 20+ IT tickets, including password resets, DUO MFA setup, account lockouts, and campus badge access, communicating with students by phone and Ebbot Chat.',
      'Triaged issues in real time, distinguishing what could be resolved directly from what needed escalation, and communicated technical details clearly to coworkers when handing off inactive-account, missing-student-ID, or badge-access issues.',
      "Directed students to the right resource when a request fell outside IT's scope, reducing back-and-forth and getting them to the correct department faster.",
    ],
  },
  {
    role: 'Software Engineer Intern',
    org: 'Monterey Peninsula College',
    employmentType: 'Internship',
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
    stack: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'react-zoom-pan-pinch', 'Vercel Web Analytics', 'Vercel'],
    bullets: [
      'Drove 120+ unique visitors via QR-code scans with a single-screen gallery of 25+ interactable cards, independently pinch-zoomable, pannable, and rotatable, built with React.',
      'Resolved a scroll-vs-zoom gesture conflict by gating pan activation on zoom state, and built a swatch-color fallback for missing photos, keeping the app backend-free and accessible (semantic buttons, reduced-motion support).',
    ],
    github: 'https://github.com/jacobptnguyen/salon-menu',
    demo: 'https://salon-menu-jade.vercel.app/',
    image: { src: '/images/salon-menu-gallery.jpg', alt: 'Salon Menu single-screen scrollable gallery' },
  },
  {
    name: 'Rate My Stuff',
    stack: ['MERN', 'Express', 'MongoDB', 'Mongoose', 'TypeScript', 'Render'],
    bullets: [
      'Engineered a RESTful API in Node.js/Express with full CRUD for ratings, comments, and images, backed by MongoDB/Mongoose.',
      'Built a responsive React/TypeScript frontend with React Router, deployed to Render with GitHub CI/CD.',
    ],
    github: 'https://github.com/jacobptnguyen/rate-my-stuff',
    demo: 'https://rate-my-stuff.onrender.com/',
    image: { src: '/images/rate-my-stuff.jpg', alt: 'Rate My Stuff item rating card screenshot' },
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Component Pascal', 'HTML/CSS'],
  },
  {
    category: 'Frontend',
    items: ['React', 'React Router', 'Tailwind CSS', 'Framer Motion', 'Vite', 'react-zoom-pan-pinch'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'RESTful APIs'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'Mongoose'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Vercel', 'Vercel Web Analytics', 'Render', 'CI/CD', 'DUO MFA'],
  },
  {
    category: 'Soft Skills',
    items: ['Communication', 'Problem-Solving', 'Time Management', 'Customer Service'],
  },
]

export const resumeUrl = '/Jacob_Nguyen_resume.pdf'
