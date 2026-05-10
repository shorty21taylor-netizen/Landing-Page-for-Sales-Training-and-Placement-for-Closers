export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <img
          src="/scg-logo.png"
          alt="Summit Closing Group"
          className="h-9 w-auto brightness-0 invert opacity-80"
        />
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Summit Closing Group. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
