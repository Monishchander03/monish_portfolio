import Reveal from './Reveal.jsx';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <Reveal className={`mx-auto mb-12 flex max-w-3xl flex-col ${alignment}`}>
      <span
        className={`mb-4 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] ${
          light
            ? 'border-white/15 bg-white/10 text-volt'
            : 'border-ink/10 bg-white/70 text-ink'
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`max-w-3xl text-balance text-4xl font-black leading-[1.02] sm:text-5xl lg:text-6xl ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-base leading-8 sm:text-lg ${
            light ? 'text-white/64' : 'text-ink/62'
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
