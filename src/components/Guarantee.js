export default function Guarantee() {
  return (
    <section id="guarantee" className="relative py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-xl p-10 md:p-14 text-center shadow-[0_0_80px_-15px_rgba(96,165,250,0.25)]">
          {/* Shield icon */}
          <div className="mx-auto w-16 h-16 rounded-2xl border border-accent/40 bg-accent/10 flex items-center justify-center mb-8 text-accent">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2 L20 5 V12 C20 16.5 17 20 12 22 C7 20 4 16.5 4 12 V5 Z" />
              <polyline points="9 12 11 14 15 10" strokeWidth="2" />
            </svg>
          </div>

          <span className="text-xs font-heading font-semibold tracking-[0.3em] uppercase text-silver">
            Our Promise
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-heading font-bold text-silver leading-tight">
            Do the Work, Get Results — Or Your Money Back.
          </h2>
          <p className="mt-8 text-gray-300 leading-relaxed max-w-2xl mx-auto text-base md:text-lg">
            Complete every module. Show up to every coaching call. Hit your activity benchmarks. Do the work — and if you’re not generating closer income within 90 days of completing the program, we refund every penny. That’s how confident we are in this system.
          </p>
          <div className="mt-10 inline-block text-xs font-heading uppercase tracking-[0.3em] text-gray-500 border border-white/10 rounded-full px-5 py-2 bg-black/30">
            No fine print. No catch. Just do the work.
          </div>
        </div>
      </div>
    </section>
  );
}
