import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { projects } from '../data/portfolio.js';

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute -right-20 top-24 h-72 w-72 rounded-full bg-volt/35 blur-[130px]" />
      <div className="container-shell relative z-10">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work across AI systems, data products, and analytics."
          description="Premium project cards with concise summaries, technology tags, and action links ready for GitHub or live deployment."
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
