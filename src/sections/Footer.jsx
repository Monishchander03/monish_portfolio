import { socials, profile } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="bg-carbon py-8 text-white">
      <div className="container-shell flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row">
        <div>
          <p className="text-lg font-black">{profile.name}</p>
          <p className="mt-1 text-sm text-white/48">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/68 transition hover:border-volt hover:text-volt"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
