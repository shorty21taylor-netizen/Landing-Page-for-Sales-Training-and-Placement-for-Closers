'use client';
import Image from 'next/image';
import GridBackground from './GridBackground';

function MountainBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a1628] to-[#0b1220]" />

      {/* LEFT mountain photo */}
      <div className="absolute top-0 left-0 h-full w-1/2 md:w-2/5 opacity-[0.85]">
        <img
          src="/mountain-1.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover blur-xl scale-110"
        />
      </div>

      {/* RIGHT mountain photo */}
      <div className="absolute top-0 right-0 h-full w-1/2 md:w-2/5 opacity-[0.85]">
        <img
          src="/mountain-3.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover blur-xl scale-110"
        />
      </div>

      {/* CENTER mountain photo — sits behind the VSL */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-3/4 w-3/4 md:w-1/2 opacity-70">
        <img
          src="/mountain-2.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover blur-2xl scale-110"
        />
      </div>

      {/* Lighter vignette so peaks read through */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.15)_55%,rgba(0,0,0,0.65)_100%)]" />

      {/* Softer edge fades */}
      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/80 via-black/30 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black via-black/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Lighter cool atmospheric tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a1628]/15 to-[#0a1628]/35 mix-blend-multiply" />

      {/* Subtle white horizon glow centered behind VSL */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[35%] bg-white/5 blur-3xl rounded-full" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start px-6 pt-6 pb-24 text-center overflow-hidden">
      {/* Full-width mountain photo backdrop */}
      <MountainBackdrop />

      {/* Subtle grid layer on top of mountains */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <GridBackground />
      </div>

      <div className="relative z-10 w-full">
        {/* LOGO */}
        <div className="mt-8 md:mt-12 mb-10 md:mb-14">
          <Image
            src="/scg-logo.png"
            alt="Summit Closing Group"
            width={520}
            height={520}
            priority
            unoptimized
            className="mx-auto w-[280px] md:w-[420px] lg:w-[520px] h-auto drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          />
        </div>

        {/* Eyebrow */}
        <div className="inline-block border border-white/15 rounded-full px-4 py-1.5 text-xs tracking-[0.25em] uppercase bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent mb-6">
          Elite Closer Program • Now Enrolling
        </div>

        {/* H1 */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto bg-gradient-to-br from-white via-gray-300 to-white bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
          Become An Elite Remote Closer In 90 Days
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mt-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
          Get trained by 7-figure closers, placed into vetted high-ticket offers, and paid commission from day one. No experience required — just the grit to climb.
        </p>

        {/* VSL — clean glass frame floating above the blurred mountain scene */}
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
