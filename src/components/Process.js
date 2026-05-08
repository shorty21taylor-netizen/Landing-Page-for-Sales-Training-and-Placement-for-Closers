const steps = [
  {
    num: "01",
    title: "Apply & Diagnose",
    desc: "Quick 20-min strategy call. We map your offer, average ticket, lead flow, and current sales gaps to design the placement plan.",
  },
  {
    num: "02",
    title: "Match & Train",
    desc: "We pull from our trained closer pool, match on offer + vertical, and run a 5-day onboarding tuned to your scripts and CRM.",
  },
  {
    num: "03",
    title: "Place & Scale",
    desc: "Closer goes live within 14 days. Fractional manager monitors KPIs, runs call reviews, and tightens your sales engine.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-heading font-semibold tracking-[0.3em] uppercase text-silver">
            How It Works
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-heading font-bold text-silver">
            From Application To Closer In 14 Days
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-white/25 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <svg
                    viewBox="0 0 64 64"
                    className="absolute inset-0 w-full h-full text-white/15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M32 6 L58 56 L6 56 Z" />
                  </svg>
                  <span className="relative font-heading font-bold text-white text-sm">
                    {s.num}
                  </span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-white">
                {s.title}
              </h3>
              <p className="mt-4 text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
