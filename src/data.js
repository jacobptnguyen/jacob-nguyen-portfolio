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
    date: 'Aug 2026',
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
      'Resolved 20+ IT tickets, including password resets, DUO MFA setup, account lockouts, and campus badge access, communicating with students by phone and Ebbot Chat while staying calm and clear with those who were frustrated or racing to get back into class before a deadline.',
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
    date: 'Aug 2026 – Present',
    stack: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'react-zoom-pan-pinch', 'Vercel Web Analytics', 'Vercel'],
    description:
      '120+ unique visitors and counting. Redesigned from a three-level nav (categories → colors → zoom) into a single scrollable gallery of 25+ color cards, each independently pinch-zoomable, pannable, and rotatable right in place.',
    github: 'https://github.com/jacobptnguyen/salon-menu',
    demo: 'https://salon-menu-jade.vercel.app/',
    image: { src: '/images/salon-menu-gallery.jpg', alt: 'Salon Menu single-screen scrollable gallery' },
  },
  {
    name: 'Rate My Stuff',
    date: 'Aug 2026',
    stack: ['MERN', 'Express', 'MongoDB', 'Mongoose', 'TypeScript', 'Render'],
    description:
      'Full-stack app with a RESTful API and full CRUD for ratings, comments, and images. Responsive React/TypeScript frontend with React Router, deployed to Render with GitHub CI/CD.',
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
    items: [
      'Communication',
      'Active Listening',
      'Patience',
      'Problem-Solving',
      'Time Management',
      'Conflict Resolution',
      'Customer Service',
      'Teamwork',
      'Adaptability',
      'Attention to Detail',
    ],
  },
]

export const resumeUrl = '/Jacob_Nguyen_resume.pdf'
