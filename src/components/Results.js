const results = [
  {
    name: "Marcus T.",
    role: "Coaching Offer — High Ticket",
    quote:
      "Placed two closers in 11 days. Did $214K in the first 30 days post-placement.",
    metric: "$214K / 30 days",
  },
  {
    name: "Aria L.",
    role: "Agency Owner",
    quote:
      "Their fractional manager rebuilt our pipeline ops. Close rate jumped from 18% to 31%.",
    metric: "18% → 31% close rate",
  },
  {
    name: "Devon R.",
    role: "B2B SaaS Founder",
    quote:
      "We were drowning in unqualified calls. SCG installed a closer + the systems to feed him. Game over.",
    metric: "3.2x pipeline velocity",
  },
];

export default function Results() {
  return (
    <section id="results" className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-x-0 top-0 divider-line" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-heading font-semibold tracking-[0.3em] uppercase text-silver">
            Client Results
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-heading font-bold text-silver">
            Numbers That Speak Louder Than Pitches
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {results.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-white/25 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="text-xs font-heading uppercase tracking-[0.3em] text-accent">
                {r.metric}
              </div>
              <p className="mt-6 text-gray-200 leading-relaxed">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="font-heading font-semibold text-white">
                  {r.name}
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">
                  {r.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 divider-line" />
    </section>
  );
}
