const forYou = [
  "You’re hungry to build real income, not chase another shiny object",
  "You can hold a conversation and want to actually talk to people",
  "You’re willing to put in 10–15 hours a week during active training",
  "You’re done with “make money online” gurus and want a real vehicle",
];

const notForYou = [
  "You want a get-rich-quick scheme with zero effort",
  "You’re not willing to get on the phone with strangers",
  "You won’t do the work even if it’s handed to you",
  "You’re looking for a magic bullet",
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-accent">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-red-400/80">
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="6" y1="18" x2="18" y2="6" />
    </svg>
  );
}

export default function WhoThisIsFor() {
  return (
    <section id="who-for" className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-x-0 top-0 divider-line" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-heading font-semibold tracking-[0.3em] uppercase text-silver">
            Honest Check
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-heading font-bold text-silver">
            Is This For You?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* For you */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10">
            <span className="text-xs font-heading font-semibold tracking-[0.3em] uppercase text-accent">
              This Is For You If…
            </span>
            <ul className="mt-6 space-y-4">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-4 text-gray-200 leading-relaxed">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 flex items-center justify-center"><CheckIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not for you */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10">
            <span className="text-xs font-heading font-semibold tracking-[0.3em] uppercase text-red-400/80">
              This Isn&rsquo;t For You If…
            </span>
            <ul className="mt-6 space-y-4">
              {notForYou.map((item) => (
                <li key={item} className="flex items-start gap-4 text-gray-400 leading-relaxed">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 flex items-center justify-center"><XIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
