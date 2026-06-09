import { CheckCircle2 } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { education } from '../data/portfolio.js';

export default function Education() {
  return (
    <section id="education" className="section-padding relative bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Education"
          title="Advanced qualifications in AI, Data Science, and Computer Applications."
          description="Specialized training and credentials from leading institutions in India."
        />
        <div className="mx-auto max-w-4xl">
          {education.map((item) => (
            <Reveal key={item.degree}>
              <article className="relative rounded-[34px] border border-ink/8 bg-white p-7 shadow-premium sm:p-9 mb-6 transition hover:-translate-y-1 hover:border-volt hover:shadow-glow">
                {/* Vertical timeline marker. */}
                <div className="absolute left-8 top-10 hidden h-[calc(100%-5rem)] w-px bg-gradient-to-b from-volt via-ink/12 to-transparent sm:block" />
                <div className="grid gap-8 sm:grid-cols-[120px_1fr]">
                  <div>
                    <span className="inline-flex rounded-full bg-volt px-4 py-2 text-sm font-black text-ink">
                      {item.period}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black">{item.degree}</h3>
                    <p className="mt-2 text-lg font-semibold text-ink border-l-4 border-volt pl-4">{item.institution}</p>
                    <p className="mt-1 text-base text-ink/68">University: {item.university}</p>
                    <ul className="mt-6 grid gap-4">
                      <li className="flex gap-3 text-base leading-7 text-ink/68">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-volt [filter:drop-shadow(0_0_12px_rgba(199,255,61,0.9))]" />
                        <span>{item.specialization}</span>
                      </li>
                      {item.cgpa && (
                        <li className="flex gap-3 text-base leading-7 text-ink/68">
                          <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-volt [filter:drop-shadow(0_0_12px_rgba(199,255,61,0.9))]" />
                          <span>{item.cgpa}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
