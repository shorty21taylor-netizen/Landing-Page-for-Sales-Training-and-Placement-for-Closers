'use client';
import { useState } from "react";

const faqs = [
  {
    q: "Do I need any sales experience to apply?",
    a: "No. Most of our top performers had zero sales experience when they started. We've placed bartenders, college students, ex-military, and corporate burnouts. What we screen for is coachability, work ethic, and clear communication.",
  },
  {
    q: "How long until I'm actually placed and earning?",
    a: "Most students are placed into a partner offer between weeks 7 and 9. Earnings start the moment you're on calls — commission is paid per close, not per month. Top students hit their first $10K month within 90 days.",
  },
  {
    q: "What kind of offers do you place reps into?",
    a: "Vetted high-ticket offers in coaching, B2B services, fitness, agencies, and SaaS — typically priced $3K–$50K. Every partner is screened for lead quality, fair commission splits, and supportive sales culture.",
  },
  {
    q: "How much does the program cost?",
    a: "Pricing depends on the cohort and is discussed on the application call. We're not the cheapest — we're the most accountable. If you're price-shopping, this isn't your room.",
  },
  {
    q: "How much time do I need to commit?",
    a: "Plan on 15–20 hours/week minimum during training: live sessions, role plays, recorded reviews, and self-study. Once placed, it becomes your career — full-time hours and full-time income.",
  },
  {
    q: "What happens if I don't get placed?",
    a: "If you complete the curriculum, hit the milestones, and we don't place you into a partner offer, we keep coaching you until we do. We're invested in your outcome — not just your enrollment.",
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
