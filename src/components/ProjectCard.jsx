import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectVisual from './ProjectVisual.jsx';

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className="group rounded-[32px] border border-ink/8 bg-white p-3 shadow-[0_20px_70px_rgba(10,10,10,0.08)] transition hover:border-volt/80 hover:shadow-glow"
    >
      <ProjectVisual type={project.visual} icon={project.icon} />
      <div className="p-5">
        <h3 className="text-2xl font-black leading-tight text-ink">{project.title}</h3>
        <p className="mt-4 text-sm leading-7 text-ink/62">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-ink/8 bg-surface px-3 py-1.5 text-xs font-bold text-ink/68"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.github}
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/10 px-4 py-2.5 text-sm font-bold transition hover:border-ink hover:bg-ink hover:text-white"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={project.demo}
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-volt px-4 py-2.5 text-sm font-bold text-ink transition hover:bg-carbon hover:text-white"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}
