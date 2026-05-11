'use client';
import { useState } from "react";

const faqs = [
  {
    q: "Do I need sales experience to apply?",
    a: "No. About half of our placed closers came in with zero sales experience. What matters is communication ability and willingness to do the work. We teach the rest from scratch.",
  },
  {
    q: "How much does the program cost?",
    a: "Pricing is shared on the discovery call after you apply. The right answer depends on your situation — we make sure Summit is actually a fit before quoting numbers.",
  },
  {
    q: "How fast can I get placed?",
    a: "Most students are on real sales calls within 30 days. Active commission usually starts in week 4–6. Consistent closer income is typically 60–90 days for committed students.",
  },
  {
    q: "What’s the time commitment?",
    a: "10–15 hours per week during training, then full-time hours once you’re placed. Closing becomes your job at that point. This is a real career path, not passive income.",
  },
  {
    q: "How is this different from other closer programs?",
    a: "Most programs are training only. They teach you to close, then send you off to find your own offer — where most people get stuck. We train AND place. You’re never on your own.",
  },
  {
    q: "What if it doesn’t work for me?",
    a: "Complete the program, show up to coaching, hit your activity benchmarks. If you’re not generating closer income within 90 days of finishing, we refund every penny. Risk is on us.",
  },
  {
    q: "What kind of offers will I close?",
    a: "High-ticket coaching, consulting, agency services, and SaaS — typically $3k–$25k offer prices. Commissions usually run 8–15% per close, paid weekly.",
  },
  {
    q: "How does payment work — 1099 or W2?",
    a: "1099 contractor with each partner. You’re effectively running your own closing business — we set you up with partners and the playbook, you set your own hours and income ceiling.",
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
            Common Questions.
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
