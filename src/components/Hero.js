'use client';
import Image from 'next/image';
import GridBackground from './GridBackground';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start px-6 pt-6 pb-24 text-center overflow-hidden">
      <GridBackground />
      <div className="relative z-10 w-full">
        {/* LOGO — big and bold at top */}
        <div className="mt-8 md:mt-12 mb-10 md:mb-14">
          <Image
            src="/scg-logo.png"
            alt="Summit Closing Group"
            width={520}
            height={520}
            priority
            className="mx-auto w-[280px] md:w-[420px] lg:w-[520px] h-auto drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          />
        </div>

        {/* Eyebrow */}
        <div className="inline-block border border-white/15 rounded-full px-4 py-1.5 text-xs tracking-[0.25em] uppercase bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent mb-6">
          Elite Closer Program • Now Enrolling
        </div>

        {/* H1 */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto bg-gradient-to-br from-white via-gray-300 to-white bg-clip-text text-transparent">
          Become An Elite Remote Closer In 90 Days
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-6">
          Get trained by 7-figure closers, placed into vetted high-ticket offers, and paid commission from day one. No experience required — just the grit to climb.
        </p>

        {/* VSL */}
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_-15px_rgba(96,165,250,0.3)] mt-12">
          {/* VSL EMBED — replace this div with <iframe ... /> */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-500">
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
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
          <button className="border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:border-white/40 transition">
            Watch Student Wins
          </button>
        </div>
      </div>
    </section>
  );
}
