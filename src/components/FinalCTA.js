export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative px-6 py-32 md:py-44 overflow-hidden"
    >
      {/* Mountain background */}
      <img
        src="/mountain-1.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Strong dark overlay so text reads */}
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="text-xs font-heading font-semibold tracking-[0.3em] uppercase text-silver">
          Next Cohort Closes Soon
        </span>
        <h2 className="mt-4 text-4xl md:text-6xl font-heading font-bold text-silver leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          Ready to Build a 6-Figure Sales Career?
        </h2>
        <p className="mt-6 text-gray-200 max-w-xl mx-auto text-base md:text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
          We accept a limited number of new closers each month. Apply now to lock your spot in the next cohort — and start your 12-month path to six figures.
        </p>
        <a
          href="/apply"
          className="btn-shimmer mt-10 inline-block text-black font-heading font-semibold px-10 py-4 rounded-full uppercase tracking-wider text-sm"
        >
          Apply To Join
        </a>
        <div className="mt-6 text-xs uppercase tracking-[0.25em] text-gray-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
          Free to apply · No commitment · Discovery call before any decision.
        </div>
      </div>
    </section>
  );
}
