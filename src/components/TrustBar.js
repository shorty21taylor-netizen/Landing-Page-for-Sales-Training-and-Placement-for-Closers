const stats = [
  { value: "200+", label: "Closers Placed" },
  { value: "14 Days", label: "Avg. Time-to-Hire" },
  { value: "$48M+", label: "Client Revenue Closed" },
  { value: "90 Day", label: "Replacement Guarantee" },
];

export default function TrustBar() {
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
