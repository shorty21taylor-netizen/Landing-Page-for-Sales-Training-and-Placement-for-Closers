const PILLARS = [
  {
    title: 'Skill',
    desc: 'Master the frames, tonality, objections, and closes that separate $3k closers from $30k ones.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Reps',
    desc: 'On real prospect calls within weeks — not roleplays. Actual conversations, actual money.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A14 14 0 0 1 4 7a2 2 0 0 1 1-3z" />
      </svg>
    ),
  },
  {
    title: 'Offers',
    desc: 'Placed with vetted commission-paying partners. No more “go find your own offer”.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M10 13a3 3 0 1 0-4-4l-2 2a3 3 0 0 0 4 4z" />
        <path d="M14 11a3 3 0 1 0 4 4l2-2a3 3 0 0 0-4-4z" />
        <path d="M9 14l6-6" />
      </svg>
    ),
  },
];

export default function Pillars() {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-x-0 top-0 divider-line" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-heading font-semibold tracking-[0.3em] uppercase text-silver">
            The Mechanism
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-heading font-bold text-silver">
            The Difference: We Don&rsquo;t Just Train You. We Place You.
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Three things have to be true for you to win as a closer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-white/25 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl border border-white/15 bg-black/30 flex items-center justify-center text-accent mb-6">
                {p.icon}
              </div>
              <h3 className="font-heading text-2xl font-bold text-white uppercase tracking-wide">
                {p.title}
              </h3>
              <p className="mt-4 text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
