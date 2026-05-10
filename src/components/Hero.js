'use client';
import Image from 'next/image';
import GridBackground from './GridBackground';

function MountainBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* LEFT mountain photo — sharp, fully visible */}
      <div className="absolute top-0 left-0 h-full w-1/2 md:w-2/5 opacity-100">
        <img
          src="/mountain-1.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover scale-110"
        />
      </div>

      {/* RIGHT mountain photo — sharp, fully visible */}
      <div className="absolute top-0 right-0 h-full w-1/2 md:w-2/5 opacity-100">
        <img
          src="/mountain-3.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover scale-110"
        />
      </div>

      {/* CENTER mountain photo — lightly softened so the VSL floats clearly */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-3/4 w-3/4 md:w-1/2 opacity-90">
        <img
          src="/mountain-2.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover blur-sm scale-110"
        />
      </div>

      {/* Targeted dark halo behind H1 / eyebrow / sub so the copy stays readable */}
      <div className="absolute inset-x-0 top-[26%] h-[22%] bg-[radial-gradient(ellipse_55%_70%_at_center,rgba(0,0,0,0.6)_0%,transparent_75%)]" />

      {/* Targeted dark halo behind the VSL frame */}
      <div className="absolute inset-x-0 top-[50%] h-[38%] bg-[radial-gradient(ellipse_55%_60%_at_center,rgba(0,0,0,0.5)_0%,transparent_80%)]" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start px-6 pt-6 pb-24 text-center overflow-hidden">
      {/* Full-width sharp mountain photo backdrop */}
      <MountainBackdrop />

      {/* Subtle grid layer on top of mountains */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <GridBackground />
      </div>

      <div className="relative z-10 w-full">
        {/* LOGO — inverted (black-on-white file → white-on-black) */}
        <div className="mt-8 md:mt-12 mb-10 md:mb-14">
          <Image
            src="/scg-logo.png"
            alt="Summit Closing Group"
            width={1536}
            height={1024}
            priority
            unoptimized
            className="mx-auto w-[280px] md:w-[420px] lg:w-[520px] h-auto invert drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]"
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

        {/* VSL — clean glass frame floating above the sharp mountain scene */}
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
