import { GraduationCap, Lightbulb, Rocket } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { stats } from '../data/portfolio.js';

export default function About() {
  return (
    <section id="about" className="section-padding relative" aria-labelledby="about-title">
      <div className="container-shell">
        <SectionHeading
          eyebrow="About"
          title="Engineering intelligent systems with data at the core."
          description="A focused AI & Data Engineer profile built around practical machine learning, analytics, and reliable data workflows."
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="glass-panel rounded-[36px] p-7 sm:p-9">
            {/* About profile card with professional placeholders. */}
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { icon: GraduationCap, title: 'MCA Graduate', copy: 'Strong academic foundation in computer applications and systems thinking.' },
                { icon: Rocket, title: 'Junior AI & Data Engineer', copy: 'Focused on AI workflows, analytics delivery, and data engineering execution.' },
                { icon: Lightbulb, title: 'Problem Solver', copy: 'Passionate about turning complex real-world problems into intelligent solutions.' },
              ].map(({ icon: Icon, title, copy }) => (
                <div key={title} className="rounded-[28px] border border-ink/8 bg-white p-5">
                  <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-volt text-ink shadow-glow">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/62">{copy}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-4xl text-lg leading-9 text-ink/68">
              I work across AI, analytics, data engineering, and full stack
              development, with a practical mindset for building systems that make
              data useful. My goal is to create intelligent solutions that are
              clear, reliable, and grounded in measurable outcomes.
            </p>
          </Reveal>

          <div className="grid gap-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.08}>
                <div className="rounded-[30px] border border-ink/8 bg-carbon p-7 text-white shadow-premium">
                  <p className="text-5xl font-black text-volt">{stat.value}</p>
                  <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-white/56">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
