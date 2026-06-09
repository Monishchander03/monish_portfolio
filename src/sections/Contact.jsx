import { Github, Linkedin, Mail, MoveRight } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import { profile } from '../data/portfolio.js';

export default function Contact() {
  const contactItems = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: 'LinkedIn', value: 'Connect on LinkedIn', href: profile.linkedin, icon: Linkedin },
    { label: 'GitHub', value: 'Explore repositories', href: profile.github, icon: Github },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-carbon">
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-volt/25 blur-[140px]" />
      <div className="container-shell relative z-10">
        <Reveal>
          <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-white/[0.06] p-6 text-white shadow-[0_30px_110px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-10 lg:p-12">
            {/* Contact CTA card. */}
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="mb-5 inline-flex rounded-full border border-white/12 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-volt">
                  Contact
                </p>
                <h2 className="text-balance text-4xl font-black leading-[1.02] sm:text-5xl lg:text-6xl">
                  Let&apos;s Build Something Amazing Together
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/64">
                  Open to AI, data engineering, analytics, dashboard, and intelligent
                  systems opportunities.
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-volt px-7 py-4 text-base font-black text-ink transition hover:bg-white"
                >
                  Contact Me
                  <MoveRight className="h-5 w-5" />
                </a>
              </div>
              <div className="grid gap-3">
                {contactItems.map(({ label, value, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="focus-ring flex items-center gap-4 rounded-[24px] border border-white/10 bg-white/[0.07] p-4 transition hover:border-volt/60 hover:bg-white/[0.1]"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-volt text-ink">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-[0.18em] text-white/42">
                        {label}
                      </span>
                      <span className="mt-1 block font-bold text-white">{value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
