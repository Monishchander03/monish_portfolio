const visualStyles = {
  assistant: ['w-24 left-6 top-12', 'w-36 right-5 top-8', 'w-28 right-12 bottom-8'],
  radar: ['w-28 left-7 top-10', 'w-40 right-8 top-12', 'w-20 left-16 bottom-9'],
  platform: ['w-40 left-6 top-9', 'w-24 right-8 top-8', 'w-32 right-12 bottom-8'],
  dashboard: ['w-32 left-7 top-10', 'w-44 right-6 top-9', 'w-28 left-20 bottom-8'],
};

export default function ProjectVisual({ type = 'assistant', icon: Icon }) {
  const bars = visualStyles[type] ?? visualStyles.assistant;

  return (
    <div className="relative h-56 overflow-hidden rounded-[28px] border border-white/12 bg-carbon">
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-volt/40 blur-3xl" />
      <div className="absolute -bottom-24 left-4 h-48 w-48 rounded-full bg-white/12 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(199,255,61,0.18),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.10),transparent_45%)]" />
      <div className="absolute inset-0 bg-grid-fade bg-[length:28px_28px] opacity-20" />
      <div className="absolute left-6 top-6 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/10 text-volt backdrop-blur">
        <Icon className="h-6 w-6" />
      </div>
      {bars.map((bar, index) => (
        <div
          key={bar}
          className={`absolute h-8 rounded-full border border-white/10 bg-white/14 backdrop-blur-md ${bar}`}
          style={{ opacity: 0.72 - index * 0.1 }}
        />
      ))}
      <div className="absolute bottom-6 left-6 right-6 grid grid-cols-5 items-end gap-2">
        {[42, 78, 56, 96, 64].map((height, index) => (
          <div
            key={height}
            className="rounded-t-full bg-volt/85 shadow-glow"
            style={{ height: `${height + index * 4}px` }}
          />
        ))}
      </div>
    </div>
  );
}
