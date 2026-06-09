import {
  BadgeCheck,
  BarChart3,
  Bot,
  BrainCircuit,
  Cloud,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Network,
  PanelsTopLeft,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';

export const profile = {
  name: 'Monish Chander',
  role: 'AI & Data Engineer',
  email: 'chandermonish@gmail.com',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/in/monishchander/',
  resume: '/resume.pdf',
};

export const navItems = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Certifications', href: '#certifications', id: 'certifications' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const socials = [
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
];

export const stats = [
  { label: 'Projects Completed', value: '12+' },
  { label: 'Certifications', value: '06' },
  { label: 'Technologies Learned', value: '20+' },
];

export const skills = [
  {
    title: 'AI & Machine Learning',
    icon: BrainCircuit,
    items: ['Python', 'TensorFlow', 'PyTorch', 'CNN', 'Deep Learning'],
  },
  {
    title: 'Data Engineering',
    icon: Database,
    items: ['SQL', 'MongoDB', 'ETL', 'Data Pipelines'],
  },
  {
    title: 'Development',
    icon: ServerCog,
    items: ['React', 'Node.js','Flask', 'Git', 'Docker'],
  },
  {
    title: 'Analytics',
    icon: BarChart3,
    items: ['Looker Studio', 'Power BI', 'Tableau', 'Data Visualization'],
  },
];

export const projects = [
  {
    title: 'WGTD Rewrite Assistant',
    description:
      'An intelligent writing assistant that restructures prompts and content with cleaner intent, stronger context, and more useful output quality.',
    tags: ['NLP', 'Python', 'Prompt Systems', 'AI Workflow'],
    icon: Bot,
    visual: 'assistant',
    github: 'https://github.com/',
    demo: '#contact',
  },
  {
    title: 'Low RCS Aerial Target Detection Using Neural Networks',
    description:
      'Neural-network research prototype for detecting low radar cross-section aerial targets through signal patterns and learned feature extraction.',
    tags: ['Deep Learning', 'CNN', 'Python', 'Detection'],
    icon: Network,
    visual: 'radar',
    github: 'https://github.com/',
    demo: '#contact',
  },
  {
    title: 'Student Connect Platform',
    description:
      'A platform concept for students to connect, share opportunities, collaborate on learning, and streamline campus communication.',
    tags: ['React', 'Flask', 'MongoDB', 'Full Stack'],
    icon: PanelsTopLeft,
    visual: 'platform',
    github: 'https://github.com/',
    demo: '#contact',
  },
  {
    title: 'Executive Sales Analytics Dashboard',
    description:
      'Decision-ready analytics dashboard with KPI tracking, revenue trends, and executive-level insights built for fast business review.',
    tags: ['Power BI', 'Looker Studio', 'SQL', 'Analytics'],
    icon: BarChart3,
    visual: 'dashboard',
    github: 'https://github.com/',
    demo: '#contact',
  },
];

export const certifications = [
  {
    title: 'Google Looker Introduction',
    icon: BarChart3,
    detail: 'Data visualization and business intelligence fundamentals with Google Looker.',
    link: 'https://www.skills.google/public_profiles/f8bccf1e-637c-4f29-a8ca-616170693ee1/badges/24519361?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
  },
  {
    title: 'Databricks Foundation',
    icon: Database,
    detail: 'Data engineering and lakehouse architecture on the Databricks platform.',
    link: 'https://credentials.databricks.com/4f3ec2e8-94d6-44b4-8601-0a121b0f6adb',
  },
  {
    title: 'AWS Foundation',
    icon: Cloud,
    detail: 'Amazon Web Services cloud computing fundamentals and core services.',
  },
  {
    title: 'Cisco Networking Certificate',
    icon: BadgeCheck,
    detail: 'Networking fundamentals, architecture, and enterprise connectivity.',
  },
  {
    title: 'CCNA Switching, Routing and Wireless Essentials',
    icon: Workflow,
    detail: 'Switching, routing, wireless configuration, and practical network design.',
  },
  {
    title: 'CCNA Enterprise Networking, Security and Automation',
    icon: ShieldCheck,
    detail: 'Enterprise networking, security principles, and automation foundations.',
  },
];

export const education = [
  // {
  //   degree: 'M.Tech in AI and Data Science',
  //   institution: 'SRM University, Kattankulathur',
  //   university: 'SRM University',
  //   specialization: 'Artificial Intelligence and Data Science',
  //   status: 'Pursuing',
  //   period: 'Pursuing',
  // },
  {
    degree: 'Master of Computer Application',
    institution: 'Sri Manakula Vinayagar Engineering College, Puducherry',
    university: 'Pondicherry University',
    specialization: 'Specialized in Python, SQL, JavaScript',
    cgpa: '9.1 CGPA',
    status: 'Completed',
    period: 'Completed',
  },
];

export const experience = [
  {
    role: ' Junior AI & Data Engineer',
    company: 'Twilight IT Solutions, Puducherry',
    period: 'Jul 2025 - Present',
    points: [
      'Designed and implemented data engineering pipelines for business intelligence.',
      'Developed AI-powered solutions for data analysis and automation.',
      'Collaborated with cross-functional teams on analytics and machine learning projects.',
      'Optimized data workflows and infrastructure for improved performance.',
      'Contributed to the development of AI models and data-driven applications.',
    ],
  },
  {
    role: 'Machine Learning Intern',
    company: 'Defense Research and Development Organization (DRDO), Bangalore, Govt. of India',
    period: 'Mar 2025 - May 2025',
    points: [
      'Developed and trained machine learning models for defense applications.',
      'Worked on data preprocessing, feature engineering, and model optimization.',
      'Collaborated with senior engineers on research and experimentation.',
      'Contributed to technical documentation and project deliverables.',
    ],
  },
];

export const heroHighlights = [
  { label: 'Modeling', icon: BrainCircuit },
  { label: 'Pipelines', icon: Workflow },
  { label: 'Insights', icon: Sparkles },
];
