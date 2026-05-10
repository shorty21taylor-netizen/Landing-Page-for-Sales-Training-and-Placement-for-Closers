'use client';
import Image from 'next/image';
import GridBackground from './GridBackground';

function MountainBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sky gradient — full hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a1628] to-[#1e293b]" />

      {/* Atmospheric horizon glow — wide band across hero */}
      <div className="absolute left-0 right-0 bottom-[30%] h-[40%] bg-gradient-to-t from-white/10 via-white/5 to-transparent blur-2xl" />

      {/* Back mountain range — soft, distant, full width */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[55%] opacity-40 blur-[2px]"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          fill="#334155"
          points="0,400 150,180 300,260 450,140 600,220 750,160 900,240 1050,170 1200,250 1200,400"
        />
      </svg>

      {/* Mid mountain range — full width with snow caps */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[50%] opacity-75"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          fill="#475569"
          points="0,400 100,260 220,320 360,200 520,290 680,220 820,300 960,230 1100,290 1200,250 1200,400"
        />
        <polygon fill="#e2e8f0" points="340,220 360,200 380,225 370,235 350,232" />
        <polygon fill="#e2e8f0" points="660,238 680,220 700,242 690,252 670,250" />
        <polygon fill="#e2e8f0" points="940,248 960,230 980,252 970,262 950,260" />
      </svg>

      {/* Front mountain range — sharp peaks, bright snow caps, full width */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[40%]"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          fill="#1e293b"
          points="0,400 80,300 200,360 320,240 460,330 600,200 740,310 880,250 1020,340 1160,260 1200,310 1200,400"
        />
        <polygon fill="#ffffff" points="300,260 320,240 345,268 330,280 310,278" />
        <polygon fill="#f8fafc" points="580,225 600,200 625,232 610,245 590,243" />
        <polygon fill="#ffffff" points="720,332 740,310 762,338 750,350 730,348" />
        <polygon fill="#f8fafc" points="1140,282 1160,260 1180,285 1170,295 1150,295" />
      </svg>

      {/* Bottom dark fade for depth */}
      <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-black/80 to-transparent" />

      {/* Top fade — keeps the logo area clean black */}
      <div className="absolute top-0 left-0 w-full h-[15%] bg-gradient-to-b from-black to-transparent" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start px-6 pt-6 pb-24 text-center overflow-hidden">
      {/* Full-width mountain backdrop fills the entire hero */}
      <MountainBackdrop />

      {/* Subtle grid layer on top of mountains */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <GridBackground />
      </div>

      <div className="relative z-10 w-full">
        {/* LOGO — big and bold at top */}
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
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto bg-gradient-to-br from-white via-gray-300 to-white bg-clip-text text-transparent">
          Become An Elite Remote Closer In 90 Days
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-6">
          Get trained by 7-figure closers, placed into vetted high-ticket offers, and paid commission from day one. No experience required — just the grit to climb.
        </p>

        {/* VSL — clean glass frame, no inner mountain box */}
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden border border-white/15 bg-black/40 backdrop-blur-xl shadow-[0_0_80px_-10px_rgba(255,255,255,0.25)] mt-12">
          {/* VSL EMBED — replace this div with <iframe ... /> */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-300">
            <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center bg-black/30 backdrop-blur-sm">
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
