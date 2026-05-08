import GridBackground from "./GridBackground";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-24 px-6 overflow-hidden"
    >
      <GridBackground />

      <div className="relative max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        <img
          src="/scg-logo.png"
          alt="SCG"
          className="h-10 w-auto mb-6 opacity-90"
        />

        <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-heading font-semibold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-silver">
          Place • Train • Scale
        </span>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-heading font-bold leading-[1.05] tracking-tight max-w-5xl text-silver">
          Place Elite Closers In Your Business In 14 Days
        </h1>

        <p className="mt-6 text-base md:text-lg text-gray-400 max-w-2xl">
          Done-for-you sales talent + fractional sales management. Backed by a
          90-day replacement guarantee.
        </p>

        <div className="mt-12 w-full">
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_-15px_rgba(96,165,250,0.3)] vsl-glow">
            {/* VSL EMBED — replace this div with <iframe ... /> */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-500">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-xs tracking-[0.3em] uppercase">
                VSL Embed Placeholder
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#apply"
            className="btn-shimmer text-black font-heading font-semibold px-8 py-4 rounded-full uppercase tracking-wider text-sm"
          >
            Apply Now
          </a>
          <a
            href="#results"
            className="border border-white/20 hover:border-white/40 transition-colors text-white font-heading font-semibold px-8 py-4 rounded-full uppercase tracking-wider text-sm"
          >
            See Results
          </a>
        </div>
      </div>
    </section>
  );
}
