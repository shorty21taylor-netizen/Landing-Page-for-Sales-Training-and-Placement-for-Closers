'use client';
import { useState } from "react";

const faqs = [
  {
    q: "How fast can a closer actually be placed?",
    a: "Our average is 14 days from application to first live call. Some clients move faster if their offer + scripts are already documented.",
  },
  {
    q: "What kind of businesses do you work with?",
    a: "High-ticket coaches, agencies, B2B service providers, and SaaS founders selling offers between $3K–$50K. If your AOV is below $1K, we usually aren't the right fit.",
  },
  {
    q: "What does the 90-day guarantee cover?",
    a: "If a placed closer underperforms or leaves within 90 days, we replace them at no cost. We also retrain on your offer to make sure the next match is dialed.",
  },
  {
    q: "Do I need existing lead flow?",
    a: "Yes. SCG places closers and builds sales infrastructure — we don't run paid ads. You'll need at least 50–100 qualified booked calls per month for placement to make sense.",
  },
  {
    q: "What's the difference between Closer Placement and Fractional Sales Management?",
    a: "Placement = a closer takes calls in your business. Fractional Sales Management = a senior leader runs your team, coaches reps, and builds your sales ops. Most clients use both.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-heading font-semibold tracking-[0.3em] uppercase text-silver">
            FAQ
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-heading font-bold text-silver">
            Questions, Answered
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:border-white/25 transition-colors"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 text-left p-6"
                >
                  <span className="font-heading font-semibold text-white text-base md:text-lg">
                    {f.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-white/20 transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
