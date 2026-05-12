import { promises as fs } from 'fs';
import path from 'path';
import VideoTestimonialCard from './VideoTestimonialCard';

// Real video testimonials — click-to-load. Posters render instantly,
// the actual <video> only mounts when a visitor taps a card.
const VIDEO_TESTIMONIALS = [
  {
    name: 'Yen',
    src: '/yen-testimonial.mp4',
    poster: '/yen-poster.jpg',
    headline: '$5,600 in commissions in his first 4 days',
    quote:
      '“Instantly placed and started taking sales calls just 2 days after joining. The system actually works — I’m proof.”',
    stat: '$5,600 · First 4 days',
  },
  {
    name: 'Cayden',
    src: '/cayden-testimonial.mp4',
    poster: '/cayden-poster.jpg',
    headline: '$80,000 cash collected on outbound in his first month',
    quote:
      '“$8,000 in commissions in my pocket month one. The system, the offers, the coaching — it all just works.”',
    stat: '$80K collected · $8K commission · Month 1',
  },
  {
    name: 'Ayah',
    src: '/ayah-testimonial.mp4',
    poster: '/ayah-poster.jpg',
    headline: 'Brand new to high ticket. $15K in commissions her first month.',
    quote:
      '“I had zero high ticket sales experience before joining Summit. One month in I’d already done $15,000 in commissions — the training and the offers actually deliver.”',
    stat: '$15,000 commission · Month 1 · No prior high ticket experience',
  },
  {
    name: 'Jarissa',
    src: '/jarissa-testimonial.mp4',
    poster: '/jarissa-poster.jpg',
    headline: 'Left life insurance. $3,300 in 3 days. Zero cold calls.',
    quote:
      '“I was scared to leave my book of business behind in life insurance. With Summit I did $3,300 in commissions in 3 days — all inbound, no paid leads, no cold calling.”',
    stat: '$3,300 commission · 3 days · 100% inbound',
  },
  {
    name: 'Ray',
    src: '/ray-testimonial.mp4',
    poster: '/ray-poster.jpg',
    headline: 'New to high ticket. $5,000 in 2 weeks. Pacing $10K/month.',
    quote:
      '“I came in brand new to high ticket sales. Two weeks in I’d already done $5,000 in commissions, pacing $10,000/month — the system actually delivers what it promises.”',
    stat: '$5,000 commission · 2 weeks · Pacing $10K/mo',
  },
];

// Remaining placeholder testimonial — Anthony will swap as more real ones come in.
const TESTIMONIALS = [
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
          {/* Real video testimonials (click-to-load) */}
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
