'use client';
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <img
            src="/scg-logo.png"
            alt="Summit Closing Group"
            className="h-10 md:h-12 w-auto brightness-0 invert"
          />
        </a>
        <a
          href="#apply"
          className="btn-shimmer text-black font-heading font-semibold text-sm px-5 py-2.5 rounded-full uppercase tracking-wider"
        >
          Apply
        </a>
      </div>
    </nav>
  );
}
