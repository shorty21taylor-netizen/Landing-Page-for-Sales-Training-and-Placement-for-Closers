import { promises as fs } from 'fs';
import path from 'path';
import VideoTestimonialCard from './VideoTestimonialCard';

// All 6 slots are now real video testimonials — no placeholders left.
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
  {
    name: 'Adeel',
    src: '/adeel-testimonial.mp4',
    poster: '/adeel-poster.jpg',
    headline: '17 years old. New to high ticket. $5K in commission month 1.',
    quote:
      '“I’m only 17 and I had zero high ticket sales experience. Summit placed me in my first month and I did $72,000 in cash collected as a setter — $5,000 in commission straight to me.”',
    stat: '$72K cash collected · $5K commission · Age 17 · Month 1',
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
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            From age 17 to career-switchers, beginners to insurance veterans — every student here is real, named, and on the record.
          </p>
        </div>

        {/* Testimonial grid — 6 real video testimonials, click-to-load */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEO_TESTIMONIALS.map((v) => (
            <VideoTestimonialCard key={v.name} {...v} />
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
