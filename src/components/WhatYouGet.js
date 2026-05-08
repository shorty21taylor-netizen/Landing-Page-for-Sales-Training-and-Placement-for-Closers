const pillars = [
  {
    tag: "01",
    title: "Elite Training",
    desc: "Frameworks, tonality drills, and call breakdowns from closers running $100K+/mo books. The same playbook the top 1% use — taught directly.",
  },
  {
    tag: "02",
    title: "Direct Placement",
    desc: "Once you've earned it, we match you into vetted partner offers paying real commission. No cold lead farms, no MLM nonsense.",
  },
  {
    tag: "03",
    title: "1-on-1 Mentorship",
    desc: "Weekly call reviews, live ride-alongs, and a senior closer holding you accountable. You don't graduate alone — you graduate dialed.",
  },
  {
    tag: "04",
    title: "Closer Community",
    desc: "Daily Zoom rooms, an active Slack of operators, and a brotherhood that pushes you. Your network becomes the floor you stand on.",
  },
];

export default function WhatYouGet() {
  return (
    <section id="what-you-get" className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-heading font-semibold tracking-[0.3em] uppercase text-silver">
            What You Get
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-heading font-bold text-silver">
            Everything You Need To Become Elite
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-white/25 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-heading text-xs tracking-[0.3em] uppercase text-gray-500">
                  {p.tag}
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  className="text-white/40 group-hover:text-accent transition-colors"
                  fill="currentColor"
                >
                  <path d="M12 3 L22 21 L2 21 Z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-white">
                {p.title}
              </h3>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
