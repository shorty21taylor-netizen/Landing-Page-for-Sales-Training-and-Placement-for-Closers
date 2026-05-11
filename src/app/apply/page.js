'use client';
import { useState } from 'react';

const EXPERIENCE_OPTIONS = [
  'No experience yet',
  '< 1 year',
  '1–3 years',
  '3–5 years',
  '5+ years',
];

const MIN_WHY = 50;
const DEFAULT_BOOKING_URL = 'https://calendar.app.google/HybDWoE9eW1NSJfTA';

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    experience: '',
    why: '',
  });

  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || DEFAULT_BOOKING_URL;

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your full name.';
    if (!form.email.trim()) return 'Please enter your email.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return 'That email doesn’t look right.';
    if (!form.experience) return 'Please select your sales experience.';
    if (form.why.trim().length < MIN_WHY)
      return `Tell us a bit more — minimum ${MIN_WHY} characters.`;
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Submit failed (${res.status}).`);
      }
      setSubmitted(true);
    } catch (e) {
      setError(e.message || 'Something went wrong. Try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* subtle accent glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,165,250,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 pt-16 md:pt-24 pb-24">
        {/* Brand / back */}
        <div className="mb-10 text-center">
          <a
            href="/"
            className="inline-block text-xs font-heading tracking-[0.3em] uppercase text-gray-500 hover:text-white transition-colors"
          >
            ← Summit Closing Group
          </a>
        </div>

        {!submitted ? (
          <>
            <div className="text-center mb-10">
              <span className="text-xs font-heading font-semibold tracking-[0.3em] uppercase text-silver">
                Apply To Join
              </span>
              <h1 className="mt-4 text-3xl md:text-5xl font-heading font-bold text-silver">
                Tell us about you.
              </h1>
              <p className="mt-4 text-gray-400 text-sm md:text-base">
                Quick qualifier — takes ~2 min. We’ll get back within 24h if
                you’re a fit.
              </p>
            </div>

            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-10 space-y-6"
              noValidate
            >
              {/* Name */}
              <div>
                <label className="block text-xs font-heading uppercase tracking-[0.25em] text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  required
                  autoComplete="name"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
                  placeholder="Jane Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-heading uppercase tracking-[0.25em] text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  required
                  autoComplete="email"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              {/* Experience */}
              <div>
                <label className="block text-xs font-heading uppercase tracking-[0.25em] text-gray-400 mb-3">
                  Sales Experience
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {EXPERIENCE_OPTIONS.map((opt) => {
                    const checked = form.experience === opt;
                    return (
                      <label
                        key={opt}
                        className={`cursor-pointer flex items-center gap-3 px-4 py-3 rounded-lg border transition-all ${
                          checked
                            ? 'border-accent bg-accent/10'
                            : 'border-white/10 bg-black/30 hover:border-white/25'
                        }`}
                      >
                        <input
                          type="radio"
                          name="experience"
                          value={opt}
                          checked={checked}
                          onChange={update('experience')}
                          className="sr-only"
                        />
                        <span
                          className={`w-3 h-3 rounded-full border ${
                            checked
                              ? 'border-accent bg-accent'
                              : 'border-white/30'
                          }`}
                        />
                        <span className="text-sm">{opt}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Why */}
              <div>
                <label className="block text-xs font-heading uppercase tracking-[0.25em] text-gray-400 mb-2">
                  Why do you want this?
                </label>
                <textarea
                  value={form.why}
                  onChange={update('why')}
                  rows={5}
                  required
                  minLength={MIN_WHY}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors resize-none"
                  placeholder="Tell us what's driving you to become a closer right now..."
                />
                <div className="mt-1 text-right text-xs text-gray-600">
                  {form.why.trim().length}/{MIN_WHY} min
                </div>
              </div>

              {error && (
                <div
                  role="alert"
                  className="text-sm text-red-300 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3"
                >
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="btn-shimmer w-full text-black font-heading font-semibold px-8 py-4 rounded-xl uppercase tracking-wider text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Submitting…' : 'Submit Application'}
              </button>
            </form>
          </>
        ) : (
          <div className="rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-xl p-8 md:p-12 text-center shadow-[0_0_60px_-15px_rgba(96,165,250,0.3)]">
            <div className="mx-auto w-14 h-14 rounded-full border border-accent flex items-center justify-center mb-6">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="text-accent"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-silver">
              Got it. Pick a time below for your discovery call.
            </h2>
            <p className="mt-3 text-gray-400 text-sm md:text-base max-w-md mx-auto">
              Google Calendar opens in a new tab so you can grab a slot. We’ll
              send the invite once it’s locked in.
            </p>

            {/* Google Calendar booking pages send X-Frame-Options: SAMEORIGIN,
                so an iframe embed is blocked. We use a primary button + tab
                fallback instead. */}
            <div className="mt-10 flex flex-col items-center gap-4">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex items-center justify-center gap-2 text-black font-heading font-semibold px-10 py-4 rounded-xl uppercase tracking-wider text-sm"
              >
                Open booking page
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path d="M14 3h7v7" />
                  <path d="M10 14L21 3" />
                  <path d="M21 14v7H3V3h7" />
                </svg>
              </a>
              <a
                href={bookingUrl}
                className="text-xs uppercase tracking-[0.25em] text-gray-500 hover:text-white transition-colors"
              >
                or open in current tab
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
