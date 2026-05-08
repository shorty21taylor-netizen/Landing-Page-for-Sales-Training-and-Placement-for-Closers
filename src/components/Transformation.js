const before = [
  "Inconsistent income",
  "No mentor, no map",
  "Burned by gurus and courses",
  "Watching from the sidelines",
];

const after = [
  "Closing high-ticket calls",
  "On a 6-figure trajectory",
  "Inside the elite room",
  "Building a real career",
];

export default function Transformation() {
  return (
    <section id="transformation" className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-x-0 top-0 divider-line" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-heading font-semibold tracking-[0.3em] uppercase text-silver">
            The Transformation
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-heading font-bold text-silver">
            Where You Are vs. 90 Days From Now
          </h2>
        </div>

        <div className="relative grid md:grid-cols-2 gap-6 md:gap-0 items-stretch">
          {/* BEFORE */}
          <div className="rounded-2xl md:rounded-r-none border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 md:p-12 relative">
            <div className="absolute top-6 right-6 text-xs font-heading tracking-[0.3em] uppercase text-gray-600">
              Today
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-300">
              Before
            </h3>
            <ul className="mt-8 space-y-5">
              {before.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-4 text-gray-400 line-through decoration-gray-700"
                >
                  <span className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-700">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <line x1="6" y1="6" x2="18" y2="18" />
                      <line x1="6" y1="18" x2="18" y2="6" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Triangle divider on desktop */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-14 h-14 rounded-full bg-black border border-white/20 flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="text-white"
                fill="currentColor"
              >
                <path d="M12 3 L22 21 L2 21 Z" />
              </svg>
            </div>
          </div>

          {/* AFTER */}
          <div className="rounded-2xl md:rounded-l-none border border-white/10 md:border-l-0 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl p-8 md:p-12 shadow-[0_0_60px_-25px_rgba(96,165,250,0.4)] relative">
            <div className="absolute top-6 right-6 text-xs font-heading tracking-[0.3em] uppercase text-accent">
              90 Days In
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-silver">
              After
            </h3>
            <ul className="mt-8 space-y-5">
              {after.map((a) => (
                <li key={a} className="flex items-center gap-4 text-white">
                  <span className="w-6 h-6 flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      className="text-white"
                      fill="currentColor"
                    >
                      <path d="M12 3 L22 21 L2 21 Z" />
                    </svg>
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 divider-line" />
    </section>
  );
}
