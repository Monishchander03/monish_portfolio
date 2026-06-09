import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { certifications } from '../data/portfolio.js';

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials that support reliable engineering foundations."
          description="Networking and enterprise infrastructure knowledge that complements AI, analytics, and data engineering work."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {certifications.map(({ title, detail, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.1}>
              <article className="h-full rounded-[30px] border border-ink/8 bg-surface p-7 shadow-[0_18px_60px_rgba(10,10,10,0.07)] transition hover:-translate-y-1 hover:border-volt hover:shadow-glow">
                <div className="mb-7 grid h-14 w-14 place-items-center rounded-2xl bg-carbon text-volt">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black leading-tight">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/62">{detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
