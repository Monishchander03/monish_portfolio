import {
  BadgeCheck,
  BarChart3,
  Bot,
  BrainCircuit,
  Database,
  Github,
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
  resume: '/resume.txt',
};

export const navItems = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Certifications', href: '#certifications', id: 'certifications' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const socials = [
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
];

export const stats = [
  { label: 'Projects Completed', value: '12+' },
  { label: 'Certifications', value: '03' },
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
    items: ['React', 'Flask', 'Git', 'Docker'],
  },
  {
    title: 'Analytics',
    icon: BarChart3,
    items: ['Looker Studio', 'Power BI', 'Data Visualization'],
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

export const experience = [
  {
    role: 'Junior AI & Data Engineer',
    period: 'Present',
    points: [
      'Built analytics projects that translate raw metrics into business-ready decisions.',
      'Created dashboard experiences for sales, operations, and executive reporting.',
      'Explored AI solutions using machine learning, neural networks, and intelligent automation.',
      'Supported data engineering tasks across SQL, ETL workflows, and pipeline planning.',
    ],
  },
];

export const heroHighlights = [
  { label: 'Modeling', icon: BrainCircuit },
  { label: 'Pipelines', icon: Workflow },
  { label: 'Insights', icon: Sparkles },
];
