const wins = [
  {
    name: "Jordan M.",
    role: "Former bartender → Closer",
    quote:
      "Quit my $48K job 60 days in. Did $14K in commission last month. SCG gave me a real career, not another course.",
    metric: "$14K / month",
  },
  {
    name: "Sasha P.",
    role: "Placed: high-ticket fitness offer",
    quote:
      "I had zero sales experience. The training, the call reviews, the room — it's the only reason I'm closing today.",
    metric: "First $10K month",
  },
  {
    name: "Devontae K.",
    role: "Placed: B2B coaching program",
    quote:
      "Other programs leave you with a PDF. SCG put me on real calls in week 8 and held my hand until I was dialed.",
    metric: "Top 5 on leaderboard",
  },
];

export default function Results() {
  return (
    <section id="results" className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-x-0 top-0 divider-line" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-heading font-semibold tracking-[0.3em] uppercase text-silver">
            Student Wins
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-heading font-bold text-silver">
            Real People. Real Commissions.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {wins.map((w) => (
            <div
              key={w.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-white/25 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="text-xs font-heading uppercase tracking-[0.3em] text-accent">
                {w.metric}
              </div>
              <p className="mt-6 text-gray-200 leading-relaxed">
                &ldquo;{w.quote}&rdquo;
              </p>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="font-heading font-semibold text-white">
                  {w.name}
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">
                  {w.role}
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
