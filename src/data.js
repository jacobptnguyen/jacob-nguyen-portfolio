export const contact = {
  email: 'jacobptnguyen@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jacob-nguyen-138267262/',
  github: 'https://github.com/jacobptnguyen',
}

export const hero = {
  name: 'Jacob Nguyen',
  headline:
    "Gen AI + Full Stack Intern @ Think Round | Open Source Contributor | UC Davis CS '26",
  pitch:
    "I build things that take a step out of someone's day. **AutoFit** turns a raw CSV into a "
    + "fitted model with no ML expertise, and two apps replaced a local salon's paper appointment "
    + "book and color-swatch binder. And I write code other people actually use, merged into "
    + "**freeCodeCamp**'s curriculum, **Think Round**'s production site, and that salon's daily routine.",
  photo: { src: '/images/profile.png', alt: 'Jacob Nguyen' },
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
      "Shipped **3** merged PRs into Think Round's production **Next.js**/**TypeScript** site, building a Communities section with a list/grid toggle for the Paradise Project page and extending the **Sanity CMS** schema with a new subtitle field.",
      'Eliminated stale exhibit content on the Paradise Project page by adding ISR revalidation (revalidate = 30), so **Sanity** publishes appear within 30 seconds instead of waiting on a full redeploy.',
      'Built macro-chatbot, which builds a recipe ingredient-by-ingredient and returns exact macros via a **RAG** pipeline over USDA FoodData Central, with recipe generation on **Claude** and automatic failover to a local **Ollama** model.',
    ],
    links: [
      { label: '3 merged PRs on GitHub', href: 'https://github.com/Think-Round-Inc/ThinkRound-New-Website/pulls?q=is%3Apr+author%3Ajacobptnguyen+is%3Amerged' },
      { label: 'macro-chatbot on GitHub', href: 'https://github.com/jacobptnguyen/macro-chatbot' },
    ],
  },
  {
    role: 'Open Source Contributor',
    org: 'freeCodeCamp',
    employmentType: 'Open Source',
    date: 'Aug 2026 – Present',
    bullets: [
      "Merged **4 PRs** into freeCodeCamp, replacing regex/string-matching test assertions with behavior-based assertions across curriculum workshops and labs, so learner solutions using arrow functions or alternate styles pass without weakening test rigor.",
      "Rewrote ambiguous VS Code extension descriptions in freeCodeCamp's curriculum and corrected a misleading quiz question about the Error Lens extension.",
    ],
    links: [
      { label: '4 merged PRs on GitHub', href: 'https://github.com/freeCodeCamp/freeCodeCamp/pulls?q=is%3Apr+author%3Ajacobptnguyen+is%3Amerged' },
    ],
  },
  {
    role: 'Open Source Contributor',
    org: 'OpenRFM',
    employmentType: 'Open Source',
    date: 'Jan 2026',
    bullets: [
      'Added a static upload-requirements hint to OpenRFM, an open-source customer-segmentation tool, listing the three required CSV columns (CustomerID, TransactionDate, TransactionAmount) before file selection to head off failed uploads caused by mismatched headers.',
    ],
    links: [
      { label: 'Upload column hint PR', href: 'https://github.com/kamalu-chioma/OpenRFM/pull/13' },
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
      'Built an end-to-end AutoML tool that turns a raw CSV upload into a fitted model, using **Claude** to pick the target variable, predictor columns, model type, and evaluation metrics so no ML expertise is required from the user.',
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
      "Reached **450+** unique visitors with a QR-code menu that replaced a salon's single shared swatch binder, where one customer browsing left everyone else waiting. Built the gallery as **30+** independently pinch-zoomable, pannable, and rotatable cards on one screen.",
      'Resolved a scroll-vs-zoom gesture conflict by gating pan activation on zoom state, and built a swatch-color fallback for missing photos, keeping the app backend-free and accessible (semantic buttons, reduced-motion support).',
    ],
    github: 'https://github.com/jacobptnguyen/salon-menu',
    demo: 'https://salon-menu-jade.vercel.app/',
    images: [
      { src: '/images/salon-menu-gallery.jpg', alt: 'Salon Menu single-screen scrollable gallery' },
      { src: '/images/salon-menu-qr-code.jpg', alt: 'QR code for Salon Menu posted in the salon' },
    ],
  },
  {
    name: 'Salon Calendar',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Supabase', 'PostgreSQL', 'Vercel'],
    bullets: [
      "Captured **35+** real appointments on one shared calendar that replaced a salon's stack of per-employee paper books, which gave no single view of the day and sat one coffee spill away from lost bookings. Syncs across every device instantly via **Supabase** Realtime.",
      "Engineered a time parser across **36** asserted cases, so staff type appointments exactly as they write them on paper ('230 Full set', '2;30', '2:30p', 24-hour). Stored plain date and time columns instead of timestamps, since UTC conversion silently shifts a booking to the wrong day.",
    ],
    github: 'https://github.com/jacobptnguyen/salon_calendar',
    demo: 'https://saloncalendar.vercel.app/',
    image: { src: '/images/salon-calendar.png', alt: 'Salon Calendar month view showing a full month of appointments' },
  },
  {
    name: 'Rate My Stuff',
    stack: ['MERN', 'Express', 'MongoDB', 'Mongoose', 'TypeScript', 'Render'],
    bullets: [
      'Engineered a **RESTful API** in **Node.js**/**Express** with full CRUD for ratings, comments, and images, backed by **MongoDB**/Mongoose.',
      'Built a responsive **React**/**TypeScript** frontend with **React Router**, deployed to Render with **GitHub** CI/CD.',
    ],
    github: 'https://github.com/jacobptnguyen/rate-my-stuff',
    demo: 'https://rate-my-stuff.onrender.com/',
    image: { src: '/images/rate-my-stuff.jpg', alt: 'Rate My Stuff item rating card screenshot' },
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'HTML/CSS'],
  },
  {
    category: 'Frontend',
    items: ['React', 'React Router', 'Next.js', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'RESTful APIs', 'Flask'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'Supabase', 'MongoDB'],
  },
  {
    category: 'AI/ML & APIs',
    items: ['Claude API', 'RAG', 'Ollama', 'scikit-learn'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Vercel', 'Sanity CMS'],
  },
]

export const resumeUrl = '/Jacob_Nguyen_resume.pdf'
