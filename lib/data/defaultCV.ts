import { CVData } from '../types/cv';

export const defaultCV: CVData = {
  hero: {
    tagline: 'Seeking Senior Fullstack roles in fintech, insurtech, or high-scale SaaS',
    name: 'Salehuddin',
    title: 'Fullstack Developer',
    summary: 'Fullstack developer specializing in high-scale fintech systems. 6+ years taking products from 0 to 1M+ users. Strongest at: system architecture, automated testing, and making teams ship faster. Mechatronics B.Eng → self-taught developer → production systems.',
    stats: [
      { icon: 'Users', label: 'Active Users Supported', value: '1M+' },
      { icon: 'Briefcase', label: 'Years Experience', value: '6+' },
      { icon: 'GitBranch', label: 'APIs Tested (Under 5 min)', value: '363' },
    ],
    socials: [
      { icon: 'Mail', url: 'mailto:salehloke@gmail.com', label: 'Email' },
      { icon: 'Linkedin', url: 'https://www.linkedin.com/in/salehuddin-loke-a9aba5175?utm_source=share_via&utm_content=profile&utm_medium=member_ios', label: 'LinkedIn' },
      { icon: 'Github', url: 'https://github.com/salehloke', label: 'GitHub' },
    ],
  },
  about: {
    heading: 'Engineering with Systems Thinking',
    paragraphs: [
      "Hey, I'm Saleh — a fullstack developer who got here through mechatronics engineering. That systems-thinking background? It's why I see software as interconnected machines, not just files in a folder.",
      "Six years in, I've shipped everything from AngularJS dashboards to NestJS microservices supporting a million users. I write tests before I need them, document before I forget, and always leave the codebase cleaner than I found it. Currently building my own QA platform (auto-tester) because I believe quality should be automated, not prayed for.",
    ],
    location: 'Bandar Enstek, Negeri Sembilan',
    country: 'Malaysia',
    languages: 'Malay (Native), English (Professional)',
    quickFacts: [
      { label: 'Years Coding', value: '6+' },
      { label: 'Companies', value: '4' },
      { label: 'Industries', value: '2+' },
      { label: 'Mechatronics', value: 'B.Eng' },
    ],
  },
  skills: [
    {
      icon: 'Laptop', title: 'Frontend',
      items: [
        { name: 'React.js', level: 'EXPERT' }, { name: 'Next.js', level: 'EXPERT' },
        { name: 'TypeScript', level: 'EXPERT' }, { name: 'AngularJS', level: '' },
        { name: 'JavaScript', level: '' }, { name: 'HTML5', level: '' },
        { name: 'CSS3', level: '' }, { name: 'Tailwind CSS', level: '' },
      ],
    },
    {
      icon: 'Server', title: 'Backend',
      items: [
        { name: 'NestJS', level: 'EXPERT' }, { name: 'Node.js', level: '' },
        { name: 'Python', level: '' }, { name: 'REST API', level: '' },
        { name: 'GraphQL', level: '' },
      ],
    },
    {
      icon: 'Database', title: 'Database',
      items: [
        { name: 'PostgreSQL', level: 'PROFICIENT' }, { name: 'MongoDB', level: '' },
        { name: 'MSSQL', level: '' },
      ],
    },
    {
      icon: 'TestTube', title: 'Testing',
      items: [
        { name: 'Playwright (E2E)', level: 'STRONG' }, { name: 'Jest (Unit)', level: 'STRONG' },
        { name: 'Newman (API)', level: '' }, { name: 'Custom Python Scripts', level: '' },
      ],
    },
    {
      icon: 'Cloud', title: 'DevOps & Infra',
      items: [
        { name: 'Docker', level: 'STRONG' }, { name: 'Proxmox VE', level: '' },
        { name: 'Nginx', level: '' }, { name: 'Cloudflare', level: '' },
        { name: 'Linux / Proxmox', level: 'PROFICIENT' },
      ],
    },
    {
      icon: 'Compass', title: 'Architecture & Tools',
      items: [
        { name: 'C4 Diagrams', level: '' }, { name: 'System Design', level: '' },
        { name: 'Git', level: '' }, { name: 'VS Code', level: '' },
        { name: 'Figma', level: '' }, { name: 'Jira', level: '' },
        { name: 'Confluence', level: '' },
      ],
    },
  ],
  experience: [
    {
      date: 'Nov 2023 — Present',
      title: 'Fullstack Developer',
      company: 'Etiqa Insurance and Takaful',
      location: 'Bangsar, Kuala Lumpur',
      techStack: ['React', 'NestJS', 'PostgreSQL', 'Docker', 'Playwright', 'C4 Diagrams'],
      duties: [
        { text: 'Architected a centralized data hub for the user management module, migrating from a single-database architecture to support over', highlight: '1 million active users' },
        { text: "Designed the", highlight: "'Enjoy Reward' customer loyalty program portal" },
        { text: 'Spearheaded end-to-end development of the', highlight: 'DLSM (Drive Less Save More) platform' },
        { text: 'Overhauled DLSM logging system, reducing average debugging time per case from 2 hours to 1 hour —', highlight: '50% efficiency gain' },
        { text: 'Established E2E automated testing with Playwright. Built API smoke/parity suites covering', highlight: '363 APIs, reducing manual regression effort by ~80%' },
        { text: 'Mapped system architecture using', highlight: "C4 diagrams for the DLSM platform, creating the team's primary reference for onboarding and decision-making" },
      ],
    },
    {
      date: 'Mar 2023 — Nov 2023',
      title: 'Senior Frontend Developer',
      company: 'Tranglo',
      location: 'Kuala Lumpur',
      techStack: ['AngularJS', 'Bootstrap', 'REST API', 'Jira'],
      duties: [
        { text: 'Closed UI/UX gaps where frontend behavior drifted from requirements — tightened alignment between design specs and shipped components by establishing a shared Notion + OneNote documentation hub for the team.' },
        { text: "Introduced Mermaid diagramming into the team's Draw.io workflow, making architecture flowcharts version-controllable and reducing design discussion cycles." },
        { text: "Standardized the team's AngularJS component library and mentored 3 developers on TypeScript patterns, enabling parallel feature work without code conflicts." },
      ],
    },
    {
      date: 'Aug 2021 — Mar 2023',
      title: 'Software Developer',
      company: 'Tranglo',
      location: 'Kuala Lumpur',
      techStack: ['AngularJS', 'REST API', 'Payment Gateway'],
      duties: [
        { text: 'Built and maintained the Wallet Module AngularJS frontend from early iteration, establishing the primary UI that internal finance and operations teams would rely on (~150 projected users).' },
        { text: 'Resolved 20+ edge cases in balance display, transaction history, and form validation that caused internal user confusion and reduced back-and-forth with the backend team.' },
        { text: 'Eliminated race conditions between API polling and UI rendering, ensuring balance figures and transaction lists stayed synchronized even under rapid user interaction.' },
        { text: 'Proactively identified and fixed UI misalignments with product requirements, tightening the feedback loop between specs and shipped code before QA handoff.' },
      ],
    },
    {
      date: 'Jul 2019 — Aug 2021',
      title: 'Software Engineer',
      company: 'i-Stone Systems Sdn. Bhd.',
      location: 'Malaysia',
      techStack: ['.NET Framework 4.5', 'Bootstrap', 'JavaScript', 'MSSQL'],
      duties: [
        { text: 'Built internal web applications for enterprise clients using .NET Framework 4.5, Bootstrap, and vanilla JavaScript — fullstack ownership from DB schema to UI.' },
        { text: 'Designed database schemas and implemented CRUD operations to support the daily operations and business management of over', highlight: '150 enterprise users' },
      ],
    },
  ],
  managementQuotes: [],
  adaptability: [
    { title: 'Fintech Pressure Cooker', description: "At Etiqa, I joined a team managing 1M+ users with zero documentation. Within weeks I was architecting a cross-database data hub and establishing C4 diagrams that became the team's reference. I don't just adapt — I make the environment better." },
    { title: 'Startup Speed at Scale', description: 'At Tranglo, sprint velocity jumped 30% after I standardized our AngularJS component library. I turned chaotic requirements into structured Jira workflows and mentored juniors so the team could scale without me being the bottleneck.' },
  ],
  drives: [
    { icon: 'Hammer', title: 'Building things that last', description: "I don't write code for today. I architect systems that the next developer will thank me for. Clean abstractions, thorough tests, and documentation are my love language." },
    { icon: 'Target', title: 'Solving real problems', description: "Every line of code should earn its place. Whether it's cutting debug time by 50% or automating 363 API tests in under 5 minutes, I measure success by impact." },
    { icon: 'Users', title: 'Growing together', description: "The best teams level up together. I share knowledge freely, ask questions openly, and believe the junior asking 'why?' makes the whole team better." },
  ],
  projects: [
    {
      icon: 'Bot', badge: 'Personal', title: 'Auto-Tester — Personal QaaS Platform',
      subtitle: 'QaaS Platform',
      description: 'A full-featured Quality-as-a-Service platform I built to automate regression testing at scale. Backend in NestJS, dashboard in Next.js, test execution powered by Playwright and Docker containers.',
      bullets: [
        'NestJS API with PostgreSQL — test suites, schedules, and results fully persisted',
        'Next.js dashboard with real-time test execution status and result browsing',
        'Playwright + Docker for isolated, reproducible test runs in containerized environments',
        'Designed for teams: invite users, assign test suites, track coverage over time',
      ],
      tags: ['NestJS','Next.js','Playwright','Docker','PostgreSQL','TypeScript'],
      githubUrl: 'https://github.com/salehloke/auto-tester',
      liveUrl: '#',
      liveDisabled: true,
    },
    {
      icon: 'Server', badge: 'Self-Hosted', title: 'Infrastructure & DevOps Lab',
      subtitle: 'Homelab Environment',
      description: 'Self-hosted production-grade infrastructure on Proxmox VE for continuous learning. Manages 7+ VMs/LXC containers with automated deployments, exposed via Cloudflare Tunnel with Nginx Proxy Manager and Tailscale VPN.',
      bullets: [
        'Automated VM provisioning reducing setup time from 2 hours to 10 minutes using Terraform-style scripts',
        'Exposed 5+ services via Cloudflare Tunnel with Nginx reverse proxy and SSL termination',
        'Configured Tailscale VPN mesh for secure remote access to all lab resources',
        'Docker-based deployment pipeline for auto-tester and other side projects',
      ],
      tags: ['Proxmox VE','Docker','Nginx','Cloudflare','Tailscale','Linux'],
      githubUrl: '',
      liveUrl: '#',
    },
  ],
  education: [
    { icon: 'GraduationCap', title: 'Bachelor of Engineering', field: 'Mechatronics, Robotics & Automation', institution: 'Universiti Teknologi Malaysia (UTM)', period: '2016 — 2019' },
    { icon: 'Certificate', title: 'Diploma', field: 'Electrical Mechatronics', institution: 'Universiti Teknologi Malaysia (UTM)', period: '2013 — 2016' },
    { icon: 'Award', title: 'UI/UX Design Certification', field: 'Professional Credential', institution: 'Iverson Associates Sdn Bhd', period: 'Nov 2022' },
  ],
  contact: {
    email: 'salehloke@gmail.com',
    linkedin: 'https://www.linkedin.com/in/salehuddin-loke-a9aba5175?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    github: 'https://github.com/salehloke',
    location: 'Bandar Enstek, Negeri Sembilan, Malaysia',
  },
};
