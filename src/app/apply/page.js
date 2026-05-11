'use client';
import { useState } from 'react';

const EXPERIENCE_OPTIONS = [
  'No experience yet',
  'Less than 1 year',
  '1-3 years',
  '3-5 years',
  '5+ years',
];

const MIN_NAME = 2;
const MIN_WHY = 80;
const MAX_WHY = 600;
const DEFAULT_BOOKING_URL = 'https://calendar.app.google/HybDWoE9eW1NSJfTA';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(field, value) {
  const v = (value ?? '').toString();
  switch (field) {
    case 'name': {
      const trimmed = v.trim();
      if (!trimmed) return 'Please enter your full name.';
      if (trimmed.length < MIN_NAME)
        return `Name must be at least ${MIN_NAME} characters.`;
      return null;
    }
    case 'email': {
      const trimmed = v.trim();
      if (!trimmed) return 'Please enter your email.';
      if (!EMAIL_RE.test(trimmed)) return 'That email doesn’t look right.';
      return null;
    }
    case 'phone': {
      const trimmed = v.trim();
      if (!trimmed) return 'Please enter your phone number.';
      const digits = trimmed.replace(/\D/g, '');
      if (digits.length < 7) return 'That phone number looks too short.';
      return null;
    }
    case 'experience':
      if (!v) return 'Please select your experience level.';
      return null;
    case 'why': {
      const len = v.trim().length;
      if (len === 0) return 'Please tell us why.';
      if (len < MIN_WHY) return `Minimum ${MIN_WHY} characters.`;
      if (len > MAX_WHY) return `Max ${MAX_WHY} characters.`;
      return null;
    }
    default:
      return null;
  }
}

function computeErrors(form) {
  return {
    name: validateField('name', form.name),
    email: validateField('email', form.email),
    phone: validateField('phone', form.phone),
    experience: validateField('experience', form.experience),
    why: validateField('why', form.why),
  };
}

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    why: '',
  });
  const [touched, setTouched] = useState({});
  const [forceShow, setForceShow] = useState(false);

  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || DEFAULT_BOOKING_URL;

  const errors = computeErrors(form);
  const valid = Object.values(errors).every((e) => !e);

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));
  const onBlur = (field) => () =>
    setTouched((t) => ({ ...t, [field]: true }));
  const showErr = (field) => (touched[field] || forceShow) && errors[field];

  const whyLen = form.why.trim().length;
  const counterText =
    whyLen < MIN_WHY
      ? `${whyLen} / ${MIN_WHY} minimum`
      : `${whyLen} / ${MAX_WHY} max`;
  const counterClass =
    whyLen < MIN_WHY
      ? 'text-gray-500'
      : whyLen > MAX_WHY
      ? 'text-red-300'
      : 'text-accent';

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    if (!valid) {
      setForceShow(true);
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
      setSubmitError(e.message || 'Something went wrong. Try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase =
    'w-full bg-black/40 border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 transition-colors';
  const inputOk =
    'border-white/10 focus:border-accent focus:ring-accent/50';
  const inputBad =
    'border-red-500/60 focus:border-red-400 focus:ring-red-400/40';
  const inputCls = (field) =>
    `${inputBase} ${showErr(field) ? inputBad : inputOk}`;

  return (
    <main className="relative min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,165,250,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 pt-16 md:pt-24 pb-24">
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
                Quick qualifier — 5 questions, ~2 min. We’ll get back within
                24h if you’re a fit.
              </p>
            </div>

            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-10 space-y-6"
              noValidate
            >
              {/* 1. Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-heading uppercase tracking-[0.25em] text-gray-400 mb-2"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  onBlur={onBlur('name')}
                  required
                  minLength={MIN_NAME}
                  autoComplete="name"
                  className={inputCls('name')}
                  placeholder="First and last"
                />
                {showErr('name') && (
                  <p className="mt-2 text-xs text-red-300">{errors.name}</p>
                )}
              </div>

              {/* 2. Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-heading uppercase tracking-[0.25em] text-gray-400 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  onBlur={onBlur('email')}
                  required
                  autoComplete="email"
                  className={inputCls('email')}
                  placeholder="you@email.com"
                />
                {showErr('email') && (
                  <p className="mt-2 text-xs text-red-300">{errors.email}</p>
                )}
              </div>

              {/* 3. Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-heading uppercase tracking-[0.25em] text-gray-400 mb-2"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={update('phone')}
                  onBlur={onBlur('phone')}
                  required
                  autoComplete="tel"
                  className={inputCls('phone')}
                  placeholder="+1 (555) 555-5555"
                />
                <p className="mt-2 text-xs text-gray-500">
                  We may text you a reminder before your call.
                </p>
                {showErr('phone') && (
                  <p className="mt-1 text-xs text-red-300">{errors.phone}</p>
                )}
              </div>

              {/* 4. Experience */}
              <div>
                <span className="block text-xs font-heading uppercase tracking-[0.25em] text-gray-400 mb-3">
                  How much sales or communication experience do you have?
                </span>
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                  onBlur={onBlur('experience')}
                >
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
                          onChange={(e) => {
                            update('experience')(e);
                            setTouched((t) => ({ ...t, experience: true }));
                          }}
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
                {showErr('experience') && (
                  <p className="mt-2 text-xs text-red-300">
                    {errors.experience}
                  </p>
                )}
              </div>

              {/* 5. Why */}
              <div>
                <label
                  htmlFor="why"
                  className="block text-xs font-heading uppercase tracking-[0.25em] text-gray-400 mb-2"
                >
                  Why do you want to become a closer? Why now?
                </label>
                <textarea
                  id="why"
                  value={form.why}
                  onChange={update('why')}
                  onBlur={onBlur('why')}
                  rows={6}
                  required
                  minLength={MIN_WHY}
                  maxLength={MAX_WHY}
                  className={`${inputCls('why')} resize-none`}
                  placeholder="Be honest. What's driving this decision right now? What's not working in your current situation?"
                />
                <div className="mt-1 flex items-center justify-between gap-3">
                  {showErr('why') ? (
                    <p className="text-xs text-red-300">{errors.why}</p>
                  ) : (
                    <span />
                  )}
                  <span className={`text-xs ${counterClass}`}>
                    {counterText}
                  </span>
                </div>
              </div>

              {submitError && (
                <div
                  role="alert"
                  className="text-sm text-red-300 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3"
                >
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={!valid || submitting}
                className="btn-shimmer w-full text-black font-heading font-semibold px-8 py-4 rounded-xl uppercase tracking-wider text-sm disabled:opacity-40 disabled:cursor-not-allowed"
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
