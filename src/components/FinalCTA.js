export default function FinalCTA() {
  return (
    <section
      id="apply"
      className="relative px-6 py-24 md:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.10)_0%,transparent_70%)]" />

      {/* faint mountain silhouette behind text */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none opacity-[0.06]">
        <svg
          viewBox="0 0 1200 400"
          className="w-full h-2/3"
          preserveAspectRatio="xMidYEnd slice"
          fill="white"
        >
          <path d="M600 40 L1100 380 L100 380 Z" />
        </svg>
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <span className="text-xs font-heading font-semibold tracking-[0.3em] uppercase text-silver">
          Final Call
        </span>
        <h2 className="mt-4 text-4xl md:text-6xl font-heading font-bold text-silver leading-tight">
          The Mountain Doesn&rsquo;t Climb Itself.
        </h2>
        <p className="mt-6 text-gray-400 max-w-xl mx-auto text-base md:text-lg">
          Spots are limited each cohort. If you&rsquo;re serious about becoming
          an elite closer, apply now.
        </p>
        <a
          href="#"
          className="btn-shimmer mt-10 inline-block text-black font-heading font-semibold px-10 py-4 rounded-full uppercase tracking-wider text-sm"
        >
          Apply To Join SCG
        </a>
        <div className="mt-6 text-xs uppercase tracking-[0.3em] text-gray-600">
          Application takes ~5 min · No obligation
        </div>
      </div>
    </section>
  );
}
