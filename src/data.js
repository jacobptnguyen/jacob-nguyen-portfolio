export const contact = {
  email: 'jacobptnguyen@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jacob-nguyen-138267262/',
  github: 'https://github.com/jacobptnguyen',
}

export const hero = {
  name: 'Jacob Nguyen',
  headline:
    "SWE Intern @ Aprentech | Full Stack Engineer Intern @ VettyFilms | Gen AI + Full Stack Intern @ Think Round | UC Davis CS '26",
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
  coursework: [
    'Machine Learning',
    'Artificial Intelligence',
    'Statistical Data Science',
    'Database Systems',
    'Data Structures',
    'Algorithm Design & Analysis',
    'Object-Oriented Programming',
    'Operating Systems',
  ],
}

export const certifications = [
  { name: 'CompTIA Security+', issued: 'Jul 2026', expires: 'Jul 2029', href: 'https://www.credly.com/badges/738ad813-8fcb-4c3f-9ed6-e99327f2cf99/public_url' },
  { name: 'CompTIA Network+', issued: 'May 2026', expires: 'Jul 2029', href: 'https://www.credly.com/badges/c4b33121-b4b0-4238-af2e-7905396f3398/public_url' },
  { name: 'CompTIA A+', issued: 'Mar 2026', expires: 'Jul 2029', href: 'https://www.credly.com/badges/ac53f6b2-afeb-4ef8-9d0a-ec26b20d6231/public_url' },
]

export const experience = [
  {
    role: 'Software Engineer Intern',
    org: 'Aprentech',
    employmentType: 'Internship',
    location: 'Greenfield, CA (Remote)',
    date: 'Oct 2026 – Present',
    bullets: [
      'Redesigned the account onboarding flow, cutting the verification steps before first use of the core service from **4** to **2** and replacing access checks duplicated across web and mobile API endpoints with one shared server-side helper that still works with older app builds',
      'Restructured the backend by splitting monolithic route and service files into focused modules with no change in behavior, enforcing account-status checks across web and mobile APIs, and moving legacy URLs to clean routes with method-preserving redirects',
      'Rebuilt the frontend on a shared design system with reusable components, bilingual English/Spanish support, and accessibility features, and cut site image weight **88%** to speed up page loads',
    ],
  },
  {
    role: 'Full Stack Engineer Intern',
    org: 'VettyFilms',
    employmentType: 'Internship',
    location: 'Monterey, CA (Remote)',
    date: 'Oct 2026 – Present',
    bullets: [
      'Develop and maintain full-stack features for an open-beta platform connecting filmmakers with freelance creative professionals',
      "Redesigned the platform's user interface to a new design system, delivering a consistent experience across the entire site",
      'Strengthened the reliability and security of payment, hiring, and account workflows by identifying issues through independent code audits and resolving them with tested fixes',
    ],
  },
  {
    role: 'Gen AI + Full Stack Intern',
    org: 'Think Round',
    employmentType: 'Internship',
    location: 'San Francisco, CA (Remote)',
    date: 'Aug 2026 – Present',
    bullets: [
      "Reviewed and merged **3** teammates' PRs as full stack co-lead, triaging a **25**-finding production code review into per-person sub-issues grouped by shared files to avoid merge conflicts",
      "Nearly tripled the AI agent platform's guardrail tests from **14** to **40** by adding **Pydantic** schema validation that swaps malformed LLM responses for a safe fallback, a **19**-case regression set, and a first LLM-judge baseline for two chatbots",
      "Cut **Sanity** publish-to-live time to about **30 seconds** (from a full redeploy) with ISR revalidation, and rebuilt the Paradise Project page on the production **Next.js**/**TypeScript** site to match its Figma design, adding a list/grid view toggle",
    ],
    links: [
      { label: '6 merged PRs on GitHub', href: 'https://github.com/search?q=org%3AThink-Round-Inc+author%3Ajacobptnguyen+is%3Apr+is%3Amerged&type=pullrequests' },
    ],
  },
  {
    role: 'IT Intern',
    org: 'Hartnell College',
    employmentType: 'Internship',
    location: 'Salinas, CA',
    date: 'Aug 2026 – Present',
    bullets: [
      'Resolved **50+** IT support requests from students and staff by phone and live chat, including password resets, MFA setup and troubleshooting, account lockouts, and campus badge access',
      'Triaged incoming requests in real time, resolving routine issues directly and escalating the rest with the diagnostic context needed for a coworker to continue without starting over',
    ],
  },
  {
    role: 'Machine Learning Researcher',
    org: 'PRISM ML Lab, UC Davis',
    employmentType: 'Part-time',
    location: 'Davis, CA (Remote)',
    date: 'Oct – Dec 2025',
    bullets: [
      "Designed **4** LLM evaluation tasks that **Gemini 2.5** failed, each with a **Python** verification script, a computed ground truth, and an analysis of the error, catching invented data rows, malformed fields, and correct code paired with wrong reported output",
      "Wrote **7** test questions to evaluate a **RAG** marketing agent on **Mistral-7B** and **Gemini 2.0 Flash**, covering competitor analysis, market trends, and target audiences across three startup scenarios",
    ],
  },
  {
    role: 'Software Engineer Intern',
    org: 'Monterey Peninsula College',
    employmentType: 'Internship',
    location: 'Monterey, CA',
    date: 'Jun – Jul 2024',
    bullets: [
      'Built a data visualization tool in Component Pascal (BlackBox Framework) parsing arbitrary CSVs into a linked-list structure, dynamically rendering histograms',
      'Designed a binning algorithm for multi-histogram rendering, mentored by an industry mentor at Applied Solar Energy',
    ],
    poster: {
      src: '/images/mpc-data-viz-poster.jpg',
      alt: 'NSF / C6-LSAMP research poster: "Data Visualization in an Object Oriented Pascal Based Language" by Jacob Nguyen and Grant McGregor, Monterey Peninsula College Computer Science Department',
      caption: 'NSF / C6-LSAMP research poster on the project',
      width: 1487,
      height: 1127,
    },
  },
]

export const openSource = [
  {
    role: 'Open Source Contributor',
    org: 'freeCodeCamp',
    employmentType: 'Open Source',
    location: 'Remote',
    date: 'Aug 2026 – Oct 2026',
    bullets: [
      "Fixed **4** freeCodeCamp curriculum workshops and labs (**JavaScript** and **TypeScript**) by replacing brittle regex/string-matching test assertions with behavior- and AST-based checks, so arrow functions and alternate styles pass without weakening test rigor",
      "Corrected inaccurate DAG, disconnected-graph, binary-search-tree, and priority-queue definitions in freeCodeCamp's Graphs and Trees review, and added missing coverage of BFS/DFS mechanics, adjacency list vs. matrix complexity, shortest paths, tries, and array-backed heaps",
      "Rewrote ambiguous VS Code extension descriptions in freeCodeCamp's curriculum and corrected a misleading quiz question about the Error Lens extension",
    ],
    links: [
      { label: '6 merged PRs on GitHub', href: 'https://github.com/freeCodeCamp/freeCodeCamp/pulls?q=is%3Apr+author%3Ajacobptnguyen+is%3Amerged' },
    ],
  },
  {
    role: 'Open Source Contributor',
    org: 'Open Energy Dashboard',
    employmentType: 'Open Source',
    location: 'Remote',
    date: 'Sep – Oct 2026',
    bullets: [
      "Merged a fix into Open Energy Dashboard's Docker setup so a database setting is defined once instead of twice, by reusing the shared docker-compose variable block for the database build args",
      "Eliminated a recurring webpack build warning by excluding a Plotly mapbox dependency that references a source map it doesn't ship from source-map-loader",
    ],
    links: [
      { label: '2 merged PRs on GitHub', href: 'https://github.com/OpenEnergyDashboard/OED/pulls?q=is%3Apr+author%3Ajacobptnguyen+is%3Amerged' },
    ],
  },
  {
    role: 'Open Source Contributor',
    org: 'OpenRFM',
    employmentType: 'Open Source',
    location: 'Remote',
    date: 'Jan 2026',
    bullets: [
      'Added a static upload-requirements hint to OpenRFM, an open-source customer-segmentation tool, listing the three required CSV columns (CustomerID, TransactionDate, TransactionAmount) before file selection to head off failed uploads caused by mismatched headers',
    ],
    links: [
      { label: 'Upload column hint PR', href: 'https://github.com/kamalu-chioma/OpenRFM/pull/13' },
    ],
  },
]

export const projects = [
  {
    name: 'Salon Calendar',
    category: 'Web Apps',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Supabase', 'PostgreSQL', 'Vercel'],
    bullets: [
      "Captured **125+** real appointments on one shared calendar that replaced a salon's stack of per-employee paper books, which gave no single view of the day and sat one coffee spill away from lost bookings. Syncs across every device instantly via **Supabase** Realtime",
      "Engineered a time parser across **36** asserted cases, so staff type appointments exactly as they write them on paper ('230 Full set', '2;30', '2:30p', 24-hour). Stored plain date and time columns instead of timestamps, since UTC conversion silently shifts a booking to the wrong day",
    ],
    github: 'https://github.com/jacobptnguyen/salon_calendar',
    demo: 'https://saloncalendar.vercel.app/',
    image: { src: '/images/salon-calendar.png', alt: 'Salon Calendar month view showing a full month of appointments' },
  },
  {
    name: 'Salon Menu',
    category: 'Web Apps',
    stack: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'react-zoom-pan-pinch', 'Vercel Web Analytics', 'Vercel'],
    bullets: [
      "Reached **450+** unique visitors with a QR-code menu that replaced a salon's single shared swatch binder, where one customer browsing left everyone else waiting. Built the gallery as **30+** independently pinch-zoomable, pannable, and rotatable cards on one screen",
      'Resolved a scroll-vs-zoom gesture conflict by gating pan activation on zoom state, and built a swatch-color fallback for missing photos, keeping the static bundle backend-free and accessible (semantic buttons, reduced-motion support)',
    ],
    github: 'https://github.com/jacobptnguyen/salon-menu',
    demo: 'https://salon-menu-jade.vercel.app/',
    images: [
      { src: '/images/salon-menu-gallery.jpg', alt: 'Salon Menu single-screen scrollable gallery' },
      { src: '/images/salon-menu-qr-code.jpg', alt: 'QR code for Salon Menu posted in the salon' },
    ],
  },
  {
    name: 'AutoFit',
    category: 'AI & Machine Learning',
    stack: ['Next.js', 'TypeScript', 'Flask', 'Python', 'scikit-learn', 'Claude API'],
    bullets: [
      'Built an end-to-end **AutoML** pipeline on **Next.js**, **Flask**, and **scikit-learn** where **Claude** selects the target variable, predictor columns, model type, and evaluation metrics from a raw CSV upload',
      'Added a 1-5 data-quality score assessing completeness and authenticity rather than just predictions, manual override of any AI decision with instant client-side re-fitting, and production safeguards (4MB upload limit, 50K row cap, rate limiting, zero data persistence)',
    ],
    github: 'https://github.com/jacobptnguyen/AutoFit',
    demo: 'https://auto-fit-pi.vercel.app',
    image: { src: '/images/autofit.png', alt: 'AutoFit data-quality score and gradient boosting model results, showing predicted vs. actual price and feature importance' },
  },
  {
    name: 'pseudofy',
    category: 'Web Apps',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Claude API', 'Zod', 'GitHub API', 'Vercel'],
    bullets: [
      'Built a **Next.js**/**TypeScript** app that fetches a public repo\'s tree and file contents through the **GitHub API** and grades a file tree rebuilt from memory against the real code',
      'Scored answers on a weighted rubric (30% structure, 40% purpose, 30% relationships) with per-file feedback marking each file matched, misplaced, or nonexistent, using **Claude** structured outputs validated with **Zod**. Users bring their own API key, kept only in their browser',
    ],
    github: 'https://github.com/jacobptnguyen/pseudofy',
    demo: 'https://pseudofy-gn4q.vercel.app',
    image: { src: '/images/pseudofy.png', alt: 'pseudofy grading the salon-menu repo: a file tree rebuilt from memory on the left, an explanation of Gallery.jsx in the editor, and a score of 95 out of 100 with structure, purpose, and relationships sub-scores and written feedback on the right' },
  },
  {
    name: 'Rate My Stuff',
    category: 'Web Apps',
    stack: ['React', 'TypeScript', 'React Router', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Render'],
    bullets: [
      'Built a full-stack **MERN** app with a **RESTful API** in **Node.js**/**Express** covering full CRUD over items, ratings, comments, and images, persisted in **MongoDB** through **Mongoose**',
      'Shipped a **React**/**TypeScript** frontend with **React Router** and **Vite**, including a validated form with live preview, a seed script that loads CC0 data from The Met\'s Open Access collection, and a system-aware theme that loads without a flash, deployed on **Render**',
    ],
    github: 'https://github.com/jacobptnguyen/rate-my-stuff',
    demo: 'https://rate-my-stuff.onrender.com/',
    image: { src: '/images/rate-my-stuff.png', alt: 'Rate My Stuff collection view showing a teapot rated 9/10 and a pocket watch rated 10/10 as cards' },
  },
  {
    name: 'Delay Classifier',
    category: 'AI & Machine Learning',
    stack: ['Python', 'scikit-learn', 'pandas', 'NumPy', 'Streamlit', 'Jupyter'],
    bullets: [
      'Reached **0.72 ROC-AUC** and **67% accuracy** against a 55.5% always-on-time baseline, choosing a Random Forest over Logistic Regression and HistGradientBoosting on a held-out 20% of US flights (airline, airports, departure hour, length)',
      'Deployed a live **Streamlit** app with a custom HTML and CSS departures-board design and a split-flap animation',
    ],
    github: 'https://github.com/jacobptnguyen/delay-classifier',
    demo: 'https://delay-classifier.streamlit.app/',
    image: { src: '/images/delay-classifier.png', alt: 'Delay Classifier app showing a 43% chance of delay for a 9E flight from ATL to LAX, labeled likely on time' },
  },
  {
    name: 'Sounding',
    category: 'AI & Machine Learning',
    stack: ['JavaScript', 'Claude API', 'WoRMS', 'iNaturalist', 'GSAP', 'OGL', 'Vercel'],
    bullets: [
      'Built a three-stage identification pipeline: **Claude** proposes up to 5 candidate species from a free-text description, the World Register of Marine Species (**WoRMS**) verifies each name, and **iNaturalist** supplies the photo, so an unverified guess drops off instead of becoming a made-up answer',
      'Framed the search as a dive: a WebGL shader draws light caustics, the water darkens through five depth zones, and each find gets a full-screen slide with a depth gauge, in vanilla JavaScript with **GSAP** and **OGL**, with reduced-motion and keyboard support',
    ],
    github: 'https://github.com/jacobptnguyen/sounding',
    demo: 'https://sounding-two.vercel.app',
    image: { src: '/images/sounding.jpg', alt: 'Sounding home screen: sunlit water with a search bar that reads "Don\'t know its name? Describe it." and three example descriptions' },
  },
  {
    name: 'macro-chatbot',
    category: 'AI & Machine Learning',
    stack: ['Python', 'Flask', 'Claude API', 'Ollama', 'USDA FoodData Central'],
    bullets: [
      'Built a chatbot that builds a recipe ingredient-by-ingredient and returns exact macros via a **RAG** pipeline over USDA FoodData Central, with recipe generation on **Claude** and automatic failover to a local **Ollama** model',
      'Covered ingredients USDA can\'t match with an LLM-estimated macro breakdown, rejected inputs that aren\'t real ingredients, and shared one conversation engine between a **Flask** web UI and a CLI',
    ],
    github: 'https://github.com/jacobptnguyen/macro-chatbot',
    image: { src: '/images/macro-chatbot.png', alt: 'macro-chatbot showing a finished chicken and rice recipe followed by a macro summary of 525 kcal, 66 g protein, 42 g carbs, and 7.7 g fat' },
  },
]

export const projectCategories = ['AI & Machine Learning', 'Web Apps']

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
    items: ['Claude API', 'RAG', 'Ollama', 'scikit-learn', 'pandas', 'NumPy'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Vercel', 'Sanity CMS', 'Docker'],
  },
]

export const resumeUrl = '/Jacob_Nguyen_resume.pdf'
