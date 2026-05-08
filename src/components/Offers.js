const offers = [
  {
    tag: "Offer 01",
    title: "Closer Placement",
    desc: "We source, vet, and place pre-trained elite closers directly into your business — fully ramped within 14 days.",
    bullets: [
      "Vetted from a 1,200+ closer talent pool",
      "Pre-trained on objection handling + frameworks",
      "90-day performance guarantee",
      "Full onboarding + script alignment",
    ],
    cta: "Place A Closer",
  },
  {
    tag: "Offer 02",
    title: "Fractional Sales Management",
    desc: "An embedded sales leader running your pipeline, coaching your team, and building your call review systems — without a full-time hire.",
    bullets: [
      "Weekly call reviews + coaching",
      "KPI dashboard & pipeline ops",
      "Script + offer optimization",
      "Hire & ramp future reps",
    ],
    cta: "Get A Sales Leader",
  },
];

export default function Offers() {
  return (
    <section id="offers" className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-heading font-semibold tracking-[0.3em] uppercase text-silver">
            What We Do
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-heading font-bold text-silver">
            Two Ways To Scale Your Sales Org
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {offers.map((o) => (
            <div
              key={o.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10 hover:border-white/25 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-heading tracking-[0.3em] uppercase text-gray-500">
                  {o.tag}
                </span>
                {/* triangle accent */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  className="text-white/40 group-hover:text-accent transition-colors"
                  fill="currentColor"
                >
                  <path d="M12 3 L22 21 L2 21 Z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">
                {o.title}
              </h3>
              <p className="mt-4 text-gray-400 leading-relaxed">{o.desc}</p>
              <ul className="mt-6 space-y-3">
                {o.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      className="mt-1 flex-shrink-0 text-white"
                      fill="currentColor"
                    >
                      <path d="M12 3 L22 21 L2 21 Z" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#apply"
                className="mt-8 inline-flex items-center gap-2 text-sm font-heading font-semibold uppercase tracking-wider text-white border-b border-white/30 hover:border-white pb-1 transition-colors"
              >
                {o.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
