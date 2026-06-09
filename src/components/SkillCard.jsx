import { motion } from 'framer-motion';

export default function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="dark-glass-panel group rounded-[28px] p-6 transition hover:border-volt/50"
    >
      <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-volt text-ink shadow-glow transition group-hover:scale-105">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-2xl font-black text-white">{skill.title}</h3>
      <div className="mt-6 flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-sm font-semibold text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
