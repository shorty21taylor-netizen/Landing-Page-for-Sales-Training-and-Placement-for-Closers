const stats = [
  { value: "$10K+", label: "Avg Monthly Rep Earnings" },
  { value: "200+", label: "Reps Placed" },
  { value: "30+", label: "Partner Offers In Network" },
  { value: "90 Days", label: "To Placement" },
];

export default function StatsBar() {
  return (
    <section className="relative px-6 py-16 border-y border-white/10 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-heading text-3xl md:text-4xl font-bold text-silver">
              {s.value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.25em] text-gray-500">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
