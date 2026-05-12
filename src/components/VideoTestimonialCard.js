'use client';
import { useRef, useState } from 'react';

export default function VideoTestimonialCard({
  name,
  src,
  poster,
  headline,
  quote,
  stat,
}) {
  const videoRef = useRef(null);
  const [activated, setActivated] = useState(false);

  const activate = () => {
    if (activated) return;
    const v = videoRef.current;
    if (!v) return;
    // Promote this single video to full preload + start playback.
    // The other 5 cards stay at preload="none" so they fetch zero bytes.
    try {
      v.preload = 'auto';
    } catch {}
    setActivated(true);
    const p = v.play();
    if (p && typeof p.catch === 'function') {
      // Autoplay can fail (user gesture rules, codec). Controls stay visible
      // either way — user can hit play again. Don't crash on it.
      p.catch(() => {});
    }
  };

  return (
    <div className="rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:border-white/30 transition-all duration-300 flex flex-col shadow-[0_0_50px_-15px_rgba(96,165,250,0.5)]">
      <div className="relative bg-black h-[400px] md:h-[480px] flex items-center justify-center overflow-hidden">
        {/* Always-mounted <video> with poster + preload="none" + controls.
            The browser shows the poster image natively; no video bytes
            are fetched until activate() promotes preload to "auto". */}
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          preload="none"
          controls
          playsInline
          onClick={activate}
          className="w-full h-full object-contain"
        />

        {/* Custom play overlay covers the video before first activation,
            intercepting all clicks so we run our activate() handler.
            After activation the overlay unmounts and native controls win. */}
        {!activated && (
          <button
            type="button"
            onClick={activate}
            aria-label={`Play ${name}'s video testimonial`}
            className="group absolute inset-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/60 focus:ring-inset"
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/95 backdrop-blur-sm border border-white/40 flex items-center justify-center shadow-[0_0_40px_-5px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="black">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-heading tracking-[0.3em] uppercase text-white bg-black/60 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1 whitespace-nowrap">
              Tap To Play
            </div>
          </button>
        )}

        {/* Verified badge — floating, click-through, always visible */}
        <div className="pointer-events-none absolute top-3 left-3 z-10 flex items-center gap-1.5 text-[10px] font-heading tracking-[0.25em] uppercase text-white bg-black/70 backdrop-blur-sm border border-accent/40 rounded-full px-2.5 py-1">
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.8"
            className="text-accent"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>Verified · Real Student</span>
        </div>
      </div>

      <div className="p-6 md:p-7 flex flex-col flex-1">
        <div className="font-heading font-semibold text-white text-sm mb-3">
          {name}
        </div>
        <div className="text-white font-heading font-semibold text-base leading-snug mb-3">
          {headline}
        </div>
        <p className="text-sm text-gray-400 leading-relaxed flex-1">{quote}</p>
        <div className="mt-5 pt-4 border-t border-white/10 text-xs font-heading uppercase tracking-[0.25em] text-accent">
          {stat}
        </div>
      </div>
    </div>
  );
}
