'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start px-6 pt-6 pb-24 text-center overflow-hidden">
      {/* Full-bleed mountain photo backdrop */}
      <img
        src="/mountain-1.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Soft black halo behind the headline block so white text stays readable */}
      <div className="absolute inset-x-0 top-[24%] h-[24%] bg-[radial-gradient(ellipse_55%_70%_at_center,rgba(0,0,0,0.65)_0%,transparent_80%)] pointer-events-none" />

      <div className="relative z-10 w-full">
        {/* LOGO */}
        <div className="mt-8 md:mt-12 mb-10 md:mb-14 flex justify-center">
          <img
            src="/scg-logo.svg"
            alt="Summit Closing Group"
            className="w-[480px] md:w-[560px] lg:w-[640px] h-auto select-none"
            style={{
              filter:
                'contrast(1.05) drop-shadow(0 0 12px rgba(255,255,255,0.9)) drop-shadow(0 0 32px rgba(255,255,255,0.65)) drop-shadow(0 0 64px rgba(255,255,255,0.4)) drop-shadow(0 0 120px rgba(255,255,255,0.25))',
            }}
          />
        </div>

        {/* Eyebrow */}
        <div className="inline-block border border-white/15 rounded-full px-4 py-1.5 text-xs tracking-[0.25em] uppercase bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent mb-6">
          Elite Closer Program • Now Accepting Applications
        </div>

        {/* H1 */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl mx-auto bg-gradient-to-br from-white via-gray-300 to-white bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
          Build a 6-Figure Sales Career in 12 Months — Guaranteed.
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mt-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Get trained by 7-figure closers, placed into vetted high-ticket offers, and on a clear path to $100K+ in your first year. We don’t teach theory — we hand you the playbook, the partners, and the calls.
        </p>

        {/* VSL */}
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden border border-white/20 bg-black/50 backdrop-blur-2xl shadow-[0_0_100px_-10px_rgba(255,255,255,0.25)] mt-12">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-300">
            <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <span className="text-xs tracking-[0.3em] uppercase">VSL Embed Placeholder</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a
            href="/apply"
            className="btn-shimmer text-black px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center"
          >
            Apply To Join
          </a>
          <a
            href="#student-wins"
            className="border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:border-white/40 transition bg-black/30 backdrop-blur-sm inline-flex items-center justify-center"
          >
            See Real Student Results
          </a>
        </div>

        {/* Proof bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs md:text-sm text-gray-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          <span>250+ closers placed</span>
          <span className="text-gray-500" aria-hidden="true">·</span>
          <span>$2.4M+ in student commissions in 2025</span>
          <span className="text-gray-500" aria-hidden="true">·</span>
          <span>4.9★ avg rating</span>
        </div>
      </div>
    </section>
  );
}
