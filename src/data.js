export const contact = {
  email: 'jacobptnguyen@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jacob-nguyen-138267262/',
  github: 'https://github.com/jacobptnguyen',
}

export const education = {
  school: 'University of California, Davis',
  degree: 'B.S. Computer Science, Minor in Statistics',
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
      'Built macro-chatbot, which builds a recipe ingredient-by-ingredient and returns exact macros via a RAG pipeline over USDA FoodData Central, with recipe generation on Claude and automatic failover to a local Ollama model.',
    ],
    links: [{ label: 'macro-chatbot on GitHub', href: 'https://github.com/jacobptnguyen/macro-chatbot' }],
  },
  {
    role: 'Open Source Contributor',
    org: 'freeCodeCamp',
    employmentType: 'Open Source',
    date: 'Aug 2026 – Present',
    bullets: [
      "Replaced regex/string-matching test assertions with behavior-based assertions in freeCodeCamp's Linked List Workshop, letting learner solutions using arrow functions or alternate styles pass without weakening test rigor.",
      'Replaced regex-based test assertions with behavior-based tests in a JavaScript workshop, part of a broader curriculum-wide initiative to make grading more reliable for learners.',
      "Rewrote ambiguous VS Code extension descriptions in freeCodeCamp's curriculum and corrected a misleading quiz question about the Error Lens extension.",
    ],
    links: [
      { label: 'PR #69655', href: 'https://github.com/freeCodeCamp/freeCodeCamp/pull/69655' },
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
      'Resolved 50+ IT support requests from students and staff over the phone and via Ebbot Chat, including password resets, DUO MFA setup/troubleshooting, account lockouts, and campus badge access.',
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
    name: 'AutoFit',
    stack: ['Next.js', 'TypeScript', 'Flask', 'Python', 'scikit-learn', 'Claude API'],
    bullets: [
      'Built an end-to-end AutoML tool that turns a raw CSV upload into a fitted model, using Claude to pick the target variable, predictor columns, model type, and evaluation metrics so no ML expertise is required from the user.',
      'Added a 1-5 data-quality score assessing completeness and authenticity rather than just predictions, manual override of any AI decision with instant client-side re-fitting, and production safeguards (4MB upload limit, 50K row cap, rate limiting, zero data persistence).',
    ],
    github: 'https://github.com/jacobptnguyen/AutoFit',
    demo: 'https://auto-fit-pi.vercel.app',
    image: { src: '/images/autofit.png', alt: 'AutoFit data-quality score and gradient boosting model results, showing predicted vs. actual price and feature importance' },
  },
  {
    name: 'Salon Menu',
    stack: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'react-zoom-pan-pinch', 'Vercel Web Analytics', 'Vercel'],
    bullets: [
      'Drove 220+ unique visitors via QR-code scans with a single-screen gallery of 25+ interactable cards, independently pinch-zoomable, pannable, and rotatable, built with React.',
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
    items: ['React', 'React Router', 'Next.js', 'Tailwind CSS', 'Vite', 'react-zoom-pan-pinch'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'RESTful APIs', 'Flask', 'scikit-learn'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'Mongoose'],
  },
  {
    category: 'AI/ML & APIs',
    items: ['Claude API', 'RAG', 'Ollama', 'USDA FoodData Central API'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Vercel', 'Render', 'CI/CD', 'DUO MFA'],
  },
  {
    category: 'Soft Skills',
    items: ['Communication', 'Problem-Solving', 'Time Management', 'Customer Service'],
  },
]

export const resumeUrl = '/Jacob_Nguyen_resume.pdf'
