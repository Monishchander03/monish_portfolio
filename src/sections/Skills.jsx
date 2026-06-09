import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';
import SkillCard from '../components/SkillCard.jsx';
import { skills } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-carbon">
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-volt/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/8 blur-[140px]" />
      <div className="container-shell relative z-10">
        <SectionHeading
          light
          eyebrow="Skills"
          title="A practical stack for AI, data, analytics, and delivery."
          description="Core technologies grouped by how they support intelligent systems from model exploration to dashboard-ready decisions."
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
              }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
