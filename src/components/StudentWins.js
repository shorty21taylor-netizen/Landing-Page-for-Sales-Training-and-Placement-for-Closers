import { promises as fs } from 'fs';
import path from 'path';

// Real video testimonials — rendered before the placeholder grid items.
const VIDEO_TESTIMONIALS = [
  {
    name: 'Yen',
    src: '/yen-testimonial.mp4',
    headline: '$4,900 in commissions in his first 4 days',
    quote:
      '“Instantly placed and started taking sales calls just 2 days after joining. The system actually works — I’m proof.”',
    stat: '$4,900 · First 4 days',
  },
  {
    name: 'Cayden',
    src: '/cayden-testimonial.mp4',
    headline: '$80,000 cash collected on outbound in his first month',
    quote:
      '“$8,000 in commissions in my pocket month one. The system, the offers, the coaching — it all just works.”',
    stat: '$80K collected · $8K commission · Month 1',
  },
];

// 4 placeholder testimonials — Anthony will swap as more real ones come in.
const TESTIMONIALS = [
  {
    name: 'Devon K.',
    initials: 'DK',
    color: 'bg-emerald-500',
    headline: '$8,500 my first full month closing',
    quote:
      '“I came in with zero sales experience. The training is no-fluff, the coaching calls actually move the needle, and the partner they placed me with had warm calls waiting. First full month: $8.5k.”',
    stat: '$8,500 month one',
  },
  {
    name: 'Sarah L.',
    initials: 'SL',
    color: 'bg-amber-500',
    headline: 'Zero sales experience to outearning my old salary 3x',
    quote:
      '“I was making $52k a year teaching and never thought I could sell anything. Now I close high-ticket coaching offers and I’m on pace to triple my old salary by year-end.”',
    stat: '3x my W2 salary',
  },
  {
    name: 'Tyler M.',
    initials: 'TM',
    color: 'bg-violet-500',
    headline: 'Placed with a SaaS partner in week 5',
    quote:
      '“The structure is the whole game. Skill, reps, and a real offer waiting at the end of the runway. I was on live demos for a SaaS partner by week five and never looked back.”',
    stat: 'Placed week 5',
  },
  {
    name: 'Aisha P.',
    initials: 'AP',
    color: 'bg-cyan-500',
    headline: 'Single mom, working from home, $11k last month',
    quote:
      '“As a single mom the location freedom was non-negotiable. Summit gave me a real career I can run from my kitchen table. Last month I cleared $11k in commissions.”',
    stat: '$11k last month',
  },
];

function VideoTestimonialCard({ name, src, headline, quote, stat }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:border-white/30 transition-all duration-300 flex flex-col shadow-[0_0_50px_-15px_rgba(96,165,250,0.5)]">
      <div className="relative bg-black h-[400px] md:h-[480px] flex items-center justify-center overflow-hidden">
        <video
          src={src}
          controls
          preload="metadata"
          playsInline
          className="w-full h-full object-contain"
        />
        {/* Verified badge — floating, click-through */}
        <div className="pointer-events-none absolute top-3 left-3 flex items-center gap-1.5 text-[10px] font-heading tracking-[0.25em] uppercase text-white bg-black/70 backdrop-blur-sm border border-accent/40 rounded-full px-2.5 py-1">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" className="text-accent">
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
        <p className="text-sm text-gray-400 leading-relaxed flex-1">
          {quote}
        </p>
        <div className="mt-5 pt-4 border-t border-white/10 text-xs font-heading uppercase tracking-[0.25em] text-accent">
          {stat}
        </div>
      </div>
    </div>
  );
}

async function getWinsImages() {
  try {
    const dir = path.join(process.cwd(), 'public', 'wins');
    const files = await fs.readdir(dir);
    return files
      .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
      .sort()
      .map((f) => `/wins/${f}`);
  } catch {
    return [];
  }
}

export default async function StudentWins() {
  const images = await getWinsImages();

  return (
    <section id="student-wins" className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-x-0 top-0 divider-line" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-heading font-semibold tracking-[0.3em] uppercase text-silver">
            Student Wins
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-heading font-bold text-silver">
            250+ Closers Placed. $2.4M+ in Commissions Paid Out.
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Real students. Real numbers. Real placements.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Real video testimonials */}
          {VIDEO_TESTIMONIALS.map((v) => (
            <VideoTestimonialCard key={v.name} {...v} />
          ))}

          {/* Placeholder text testimonials — Anthony will swap as more real ones come in */}
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-7 hover:border-white/25 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center font-heading font-bold text-white text-sm`}
                >
                  {t.initials}
                </div>
                <div className="font-heading font-semibold text-white text-sm">
                  {t.name}
                </div>
              </div>
              <div className="text-white font-heading font-semibold text-base leading-snug mb-3">
                {t.headline}
              </div>
              <p className="text-sm text-gray-400 leading-relaxed flex-1">
                {t.quote}
              </p>
              <div className="mt-5 pt-4 border-t border-white/10 text-xs font-heading uppercase tracking-[0.25em] text-accent">
                {t.stat}
              </div>
            </div>
          ))}
        </div>

        {/* Income screenshots */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <span className="text-xs font-heading font-semibold tracking-[0.3em] uppercase text-silver">
              Income Screenshots
            </span>
            <h3 className="mt-4 text-2xl md:text-3xl font-heading font-bold text-silver">
              The Receipts.
            </h3>
          </div>
          {images.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((src) => (
                <div
                  key={src}
                  className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-white/25 transition-colors"
                >
                  <img
                    src={src}
                    alt="Student income screenshot"
                    className="w-full h-auto block"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-10 text-center text-gray-500 text-sm max-w-2xl mx-auto">
              Income screenshots coming soon — drop{' '}
              <code className="text-gray-300 bg-black/50 px-1.5 py-0.5 rounded">
                .jpg
              </code>{' '}
              files into{' '}
              <code className="text-gray-300 bg-black/50 px-1.5 py-0.5 rounded">
                /public/wins/
              </code>{' '}
              to populate this grid.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
