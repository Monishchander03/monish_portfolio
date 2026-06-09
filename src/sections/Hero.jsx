import { Download, MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { heroHighlights, profile, socials } from '../data/portfolio.js';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32 sm:pt-36"
      aria-labelledby="hero-title"
    >
      {/* Ambient AI/data background treatment. */}
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-volt/50 blur-[110px]" />
      <div className="absolute -right-28 top-32 h-72 w-72 rounded-full bg-volt/35 blur-[120px]" />
      <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-ink/10 blur-[120px]" />
      <div className="absolute inset-0 bg-grid-fade bg-[length:44px_44px] opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />

      <div className="container-shell relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-sm font-bold shadow-[0_12px_40px_rgba(10,10,10,0.08)] backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-volt shadow-glow" />
            AI & Data Engineer
          </div>
          <h1
            id="hero-title"
            className="max-w-5xl text-balance text-5xl font-black leading-[0.98] tracking-[-0.02em] text-ink sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Building AI Solutions That Turn Data Into Decisions
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/66 sm:text-xl">
            AI & Data Engineer focused on Machine Learning, Data Engineering,
            Analytics, and Intelligent Systems.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="focus-ring group inline-flex items-center justify-center gap-2 rounded-full bg-carbon px-7 py-4 text-base font-bold text-white shadow-premium transition hover:shadow-glow"
            >
              View Projects
              <MoveRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resume}
              download
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-ink/10 bg-white/72 px-7 py-4 text-base font-bold text-ink shadow-[0_12px_40px_rgba(10,10,10,0.08)] backdrop-blur transition hover:border-volt hover:bg-volt"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="focus-ring grid h-12 w-12 place-items-center rounded-full border border-ink/10 bg-white/72 text-ink shadow-[0_10px_35px_rgba(10,10,10,0.07)] backdrop-blur transition hover:border-volt hover:bg-carbon hover:text-volt"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xl"
          aria-hidden="true"
        >
          <div className="absolute -inset-8 rounded-full bg-volt/40 blur-[90px]" />
          <div className="glass-panel relative overflow-hidden rounded-[40px] p-5">
            <div className="rounded-[32px] bg-carbon p-5 text-white">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">
                    Decision Engine
                  </p>
                  <p className="mt-2 text-2xl font-black">Live Intelligence Layer</p>
                </div>
                <div className="rounded-full bg-volt px-4 py-2 text-sm font-black text-ink">
                  98%
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {heroHighlights.map(({ label, icon: Icon }, index) => (
                  <motion.div
                    key={label}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4,
                      delay: index * 0.35,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="rounded-3xl border border-white/10 bg-white/8 p-4"
                  >
                    <Icon className="h-7 w-7 text-volt" />
                    <p className="mt-5 text-sm font-bold text-white/76">{label}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.06] p-5">
                <div className="mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.18em] text-white/42">
                  <span>Pipeline Health</span>
                  <span>Optimized</span>
                </div>
                <div className="grid grid-cols-8 items-end gap-2">
                  {[46, 72, 55, 86, 68, 94, 78, 108].map((height) => (
                    <div
                      key={height}
                      className="rounded-t-full bg-volt shadow-glow"
                      style={{ height: `${height}px` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
