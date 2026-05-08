const phases = [
  {
    num: "01",
    label: "Phase One",
    weeks: "Weeks 1–3",
    title: "Foundations",
    desc: "Sales psychology, tonality, frame control, and the closer mindset. Learn the frameworks every elite closer runs on autopilot.",
  },
  {
    num: "02",
    label: "Phase Two",
    weeks: "Weeks 4–6",
    title: "Mastery",
    desc: "Live role plays, recorded call breakdowns, and objection-handling drills. You stop sounding like a rep and start sounding like a closer.",
  },
  {
    num: "03",
    label: "Phase Three",
    weeks: "Weeks 7–9",
    title: "Placement",
    desc: "Interview prep, vetting, and direct match into a partner offer. You're done watching — you're on calls and getting paid.",
  },
  {
    num: "04",
    label: "Phase Four",
    weeks: "Week 10+",
    title: "Scale",
    desc: "Ongoing mentorship, leaderboard competition, and a path to senior closer. You don't graduate out — you graduate up.",
  },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-heading font-semibold tracking-[0.3em] uppercase text-silver">
            The Curriculum
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-heading font-bold text-silver">
            The Climb, In Four Phases
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Every phase is a base camp. You earn your way up.
          </p>
        </div>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((p, i) => (
            <div
              key={p.num}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-white/25 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <svg
                    viewBox="0 0 64 64"
                    className="absolute inset-0 w-full h-full text-white/20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M32 6 L58 56 L6 56 Z" />
                  </svg>
                  <span className="relative font-heading font-bold text-white text-xs">
                    {p.num}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-heading tracking-[0.3em] uppercase text-gray-500">
                    {p.label}
                  </span>
                  <span className="text-[10px] font-heading tracking-[0.2em] uppercase text-accent mt-0.5">
                    {p.weeks}
                  </span>
                </div>
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
