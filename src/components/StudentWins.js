import VideoTestimonialCard from './VideoTestimonialCard';

// All 6 slots are real video testimonials — no placeholders.
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

export default function StudentWins() {
  return (
    <section id="student-wins" className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-x-0 top-0 divider-line" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-heading font-semibold tracking-[0.3em] uppercase text-silver">
            Student Wins
          </span>
          <h2
            className="mt-4 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-silver leading-tight"
            style={{
              filter:
                'drop-shadow(0 0 24px rgba(255,255,255,0.45)) drop-shadow(0 0 56px rgba(255,255,255,0.25)) drop-shadow(0 0 120px rgba(255,255,255,0.15))',
            }}
          >
            150 Closers Placed This Year. $2M+ in Commissions Paid Out.
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
      </div>
    </section>
  );
}
