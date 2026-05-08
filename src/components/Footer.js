export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-10">
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
    </footer>
  );
}
