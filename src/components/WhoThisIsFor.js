const stuck = [
  "Still trading hours for dollars at a job with no ceiling",
  "Tired of cold leads, dead-end gigs, and broken promises",
  "No mentor, no playbook — figuring it out alone",
  "Plateaued at $5K/mo and watching others lap you",
];

const ready = [
  "Coachable, hungry, allergic to mediocrity",
  "Willing to put in the reps when no one's watching",
  "Want a real career — not a side hustle or get-rich-quick",
  "Ready to bet on yourself for the next 90 days",
];

function List({ title, items, accentClass, iconPath }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10">
      <span
        className={`text-xs font-heading font-semibold tracking-[0.3em] uppercase ${accentClass}`}
      >
        {title}
      </span>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-4 text-gray-200 leading-relaxed"
          >
            <span className="mt-1 flex-shrink-0 w-5 h-5 flex items-center justify-center">
              {iconPath}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function WhoThisIsFor() {
  return (
    <section id="for-you" className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-heading font-semibold tracking-[0.3em] uppercase text-silver">
            Be Honest With Yourself
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-heading font-bold text-silver">
            Are You Stuck — Or Are You Ready?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <List
            title="You're Stuck If..."
            items={stuck}
            accentClass="text-gray-400"
            iconPath={
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="text-gray-500"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            }
          />
          <List
            title="You're Ready If..."
            items={ready}
            accentClass="text-accent"
            iconPath={
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                className="text-white"
                fill="currentColor"
              >
                <path d="M12 3 L22 21 L2 21 Z" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}
