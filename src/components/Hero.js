'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start px-6 pt-6 pb-24 text-center overflow-hidden">
      {/* SINGLE full-bleed mountain photo backdrop */}
      <img
        src="/mountain-1.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Soft black halo behind the headline block so white text stays readable */}
      <div className="absolute inset-x-0 top-[24%] h-[24%] bg-[radial-gradient(ellipse_55%_70%_at_center,rgba(0,0,0,0.65)_0%,transparent_80%)] pointer-events-none" />

      <div className="relative z-10 w-full">
        {/* LOGO — bare transparent PNG, bolder strokes (4x black thickeners) + strong white halo */}
        <div className="mt-8 md:mt-12 mb-10 md:mb-14 flex justify-center">
          <img
            src="/scg-logo.png"
            alt="Summit Closing Group"
            className="w-[480px] md:w-[560px] lg:w-[640px] h-auto"
            style={{
              filter:
                'drop-shadow(0 0 1.5px rgba(0,0,0,1)) drop-shadow(0 0 1.5px rgba(0,0,0,1)) drop-shadow(0 0 1.5px rgba(0,0,0,1)) drop-shadow(0 0 1.5px rgba(0,0,0,1)) drop-shadow(0 0 24px rgba(255,255,255,1)) drop-shadow(0 0 56px rgba(255,255,255,0.85)) drop-shadow(0 0 100px rgba(255,255,255,0.65)) drop-shadow(0 0 160px rgba(255,255,255,0.4))',
            }}
          />
        </div>

        {/* Eyebrow */}
        <div className="inline-block border border-white/15 rounded-full px-4 py-1.5 text-xs tracking-[0.25em] uppercase bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent mb-6">
          Elite Closer Program • Now Enrolling
        </div>

        {/* H1 */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto bg-gradient-to-br from-white via-gray-300 to-white bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
          Become An Elite Remote Closer In 90 Days
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mt-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Get trained by 7-figure closers, placed into vetted high-ticket offers, and paid commission from day one. No experience required — just the grit to climb.
        </p>

        {/* VSL — clean glass frame floating above the mountain photo */}
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden border border-white/20 bg-black/50 backdrop-blur-2xl shadow-[0_0_100px_-10px_rgba(255,255,255,0.25)] mt-12">
          {/* VSL EMBED — replace this div with <iframe ... /> */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-300">
            <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <span className="text-xs tracking-[0.3em] uppercase">VSL Embed Placeholder</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button className="btn-shimmer text-black px-8 py-4 rounded-xl font-semibold">
            Apply To Join
          </button>
          <button className="border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:border-white/40 transition bg-black/30 backdrop-blur-sm">
            Watch Student Wins
          </button>
        </div>
      </div>
    </section>
  );
}
