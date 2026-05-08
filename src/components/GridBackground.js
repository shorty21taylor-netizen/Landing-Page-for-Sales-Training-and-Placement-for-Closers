'use client';
export default function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] animate-grid-drift" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000_75%)]" />
    </div>
  );
}
