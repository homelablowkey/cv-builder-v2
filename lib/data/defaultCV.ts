import { CVData } from '../types/cv';

export const defaultCV: CVData = {
  hero: {
    tagline: 'Open to new opportunities',
    name: 'Salehuddin',
    title: 'Fullstack Developer',
    summary: 'Building scalable web applications for the fintech and insurance sectors. 6+ years shipping production features across React, Next.js, NestJS, and Angular.',
    stats: [
      { icon: 'Users', label: 'Active Users Supported', value: '1M+' },
      { icon: 'Briefcase', label: 'Years Experience', value: '6+' },
      { icon: 'GitBranch', label: 'APIs Tested (Under 5 min)', value: '363' },
    ],
    socials: [
      { icon: 'Mail', url: 'mailto:salehloke@gmail.com', label: 'Email' },
      { icon: 'Linkedin', url: '#', label: 'LinkedIn' },
      { icon: 'Github', url: '#', label: 'GitHub' },
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
      duties: [
        { text: 'Architected a centralized data hub for the user management module, migrating from a single-database architecture to support over', highlight: '1 million active users' },
        { text: "Designed the", highlight: "'Enjoy Reward'" },
        { text: 'Spearheaded end-to-end development of the', highlight: 'DLSM' },
        { text: 'Overhauled DLSM logging system, reducing average debugging time per case from 2 hours to 1 hour —', highlight: '50% efficiency gain' },
        { text: 'Established E2E automated testing with Playwright. Built API smoke/parity suites covering', highlight: '363 APIs' },
        { text: 'Mapped system architecture using', highlight: 'C4 diagrams' },
      ],
    },
    {
      date: 'Mar 2023 — Nov 2023',
      title: 'Senior Frontend Developer',
      company: 'Tranglo',
      location: 'Kuala Lumpur',
      duties: [
        { text: 'Directed frontend development for wallet module dashboards. Standardized responsive UI components using AngularJS, increasing sprint velocity by an estimated', highlight: '30%' },
        { text: 'Integrated frontend dashboards with real-time payment gateway services for high-fidelity transaction monitoring.' },
        { text: 'Established a structured documentation workflow that clarified requirements and improved cross-team collaboration.' },
        { text: 'Implemented robust component architecture and state management design patterns. Mentored junior developers on best practices.' },
      ],
    },
    {
      date: 'Aug 2021 — Mar 2023',
      title: 'Software Developer',
      company: 'Tranglo',
      location: 'Kuala Lumpur',
      duties: [
        { text: 'Developed catering wallet modules with real-time balance tracking and transaction history.' },
        { text: 'Executed RESTful API integrations between frontend dashboards and payment gateway services.' },
        { text: 'Contributed to UI/UX improvements that directly reduced user-reported issues.' },
      ],
    },
    {
      date: 'Jul 2019 — Aug 2021',
      title: 'Software Engineer',
      company: 'i-Stone Systems Sdn. Bhd.',
      location: 'Malaysia',
      duties: [
        { text: 'Built internal web applications for enterprise clients using .NET Framework 4.5, Bootstrap, and vanilla JavaScript.' },
        { text: 'Designed database schemas and implemented CRUD operations to support the daily operations and business management of over', highlight: '150 enterprise users' },
      ],
    },
  ],
  managementQuotes: [
    { text: 'I lead by empowering teams. I believe the best code comes from people who feel ownership over their work.' },
    { text: "Mentoring is my force multiplier — I've guided junior developers from first commits to shipping production features independently." },
    { text: 'I balance hands-on coding with architectural oversight, ensuring quality without becoming a bottleneck.' },
    { text: "When things break at 2 AM, I'm the one who stays calm, finds the root cause, and fixes it — then writes the post-mortem so it never happens again." },
  ],
  adaptability: [
    { title: 'Fintech Pressure Cooker', description: 'At Etiqa, I joined a team managing 1M+ users with zero documentation. Within weeks I was architecting a cross-database data hub and establishing C4 diagrams that became the team\'s reference. I don\'t just adapt — I make the environment better.' },
    { title: 'Startup Speed at Scale', description: 'At Tranglo, sprint velocity jumped 30% after I standardized our AngularJS component library. I turned chaotic requirements into structured Jira workflows and mentored juniors so the team could scale without me being the bottleneck.' },
  ],
  drives: [
    { icon: 'Hammer', title: 'Building things that last', description: "I don't write code for today. I architect systems that the next developer will thank me for. Clean abstractions, thorough tests, and documentation are my love language." },
    { icon: 'Target', title: 'Solving real problems', description: 'Every line of code should earn its place. Whether it\'s cutting debug time by 50% or automating 363 API tests in under 5 minutes, I measure success by impact.' },
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
      bullets: [],
      tags: ['Proxmox VE','Docker','Nginx','Cloudflare','Tailscale','Linux'],
      githubUrl: '',
      liveUrl: '#',
    },
  ],
  education: [
    { icon: 'GraduationCap', title: 'Bachelor of Engineering', field: 'Mechatronics, Robotics & Automation', institution: 'Universiti Teknologi Malaysia (UTM)', period: '2016 — 2019' },
    { icon: 'Certificate', title: 'Diploma', field: 'Electrical Mechatronics', institution: 'Universiti Teknologi Malaysia (UTM)', period: 'Completed' },
    { icon: 'Award', title: 'UI/UX Design Certification', field: 'Professional Credential', institution: 'Iverson Associates Sdn Bhd', period: 'Nov 2022' },
  ],
  contact: {
    email: 'salehloke@gmail.com',
    linkedin: '#',
    github: '#',
    location: 'Bandar Enstek, Negeri Sembilan, Malaysia',
  },
};
