export default function Footer() {
  return (
    <footer className="relative">
      <section
        id="apply"
        className="relative px-6 py-24 md:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.08)_0%,transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="text-xs font-heading font-semibold tracking-[0.3em] uppercase text-silver">
            Ready To Scale
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-heading font-bold text-silver">
            Place Your Next Elite Closer
          </h2>
          <p className="mt-6 text-gray-400 max-w-xl mx-auto">
            Apply now. If we're a fit, we'll book a 20-minute strategy call and
            map your placement plan.
          </p>
          <a
            href="#"
            className="btn-shimmer mt-10 inline-block text-black font-heading font-semibold px-10 py-4 rounded-full uppercase tracking-wider text-sm"
          >
            Apply Now
          </a>
        </div>
      </section>

      <div className="border-t border-white/10 px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/scg-logo.png" alt="SCG" className="h-7 w-auto" />
            <span className="font-heading text-xs tracking-[0.25em] uppercase text-gray-500">
              Summit Closing Group
            </span>
          </div>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Summit Closing Group. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
