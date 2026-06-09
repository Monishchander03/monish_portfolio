import { useEffect, useMemo, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { navItems, profile } from '../data/portfolio.js';
import { useActiveSection } from '../hooks/useActiveSection.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavigate = () => setMenuOpen(false);

  return (
    <motion.header
      animate={{ y: 0 }}
      initial={{ y: -96 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-4 z-50 px-4"
    >
      <nav
        className={`container-shell flex items-center justify-between rounded-full border transition-all duration-300 ${
          scrolled
            ? 'border-ink/10 bg-white/86 py-2 shadow-premium backdrop-blur-2xl'
            : 'border-white/70 bg-white/62 py-3 shadow-[0_18px_70px_rgba(10,10,10,0.08)] backdrop-blur-xl'
        }`}
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="focus-ring rounded-full px-2 text-sm font-black uppercase tracking-[0.16em]"
          onClick={handleNavigate}
        >
          Monish Chander<span className="text-volt">.</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`focus-ring relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                activeSection === item.id ? 'text-ink' : 'text-ink/58 hover:text-ink'
              }`}
            >
              {activeSection === item.id && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-volt"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download
            className="focus-ring hidden items-center gap-2 rounded-full bg-carbon px-5 py-3 text-sm font-bold text-white transition hover:bg-ink hover:shadow-glow sm:inline-flex"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
          <button
            className="focus-ring inline-grid h-11 w-11 place-items-center rounded-full bg-carbon text-white lg:hidden"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="container-shell mt-3 rounded-[28px] border border-white/70 bg-white/92 p-3 shadow-premium backdrop-blur-2xl lg:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={handleNavigate}
              className={`block rounded-2xl px-4 py-3 text-sm font-bold ${
                activeSection === item.id ? 'bg-volt text-ink' : 'text-ink/68'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resume}
            download
            className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-carbon px-4 py-3 text-sm font-bold text-white"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
