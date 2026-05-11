import { promises as fs } from 'fs';
import path from 'path';

async function founderImageExists() {
  try {
    await fs.access(path.join(process.cwd(), 'public', 'founder.jpg'));
    return true;
  } catch {
    return false;
  }
}

export default async function Founder() {
  const hasPhoto = await founderImageExists();

  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-x-0 top-0 divider-line" />
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-10 md:gap-14 items-center">
        {/* Photo column */}
        <div className="md:col-span-2 flex justify-center md:justify-start">
          {hasPhoto ? (
            <img
              src="/founder.jpg"
              alt="Anthony, Founder of Summit Closing Group"
              className="w-full max-w-sm rounded-2xl border border-white/10 shadow-[0_0_60px_-15px_rgba(96,165,250,0.3)] object-cover"
            />
          ) : (
            <div className="w-full max-w-sm aspect-square rounded-2xl border border-dashed border-white/15 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/40 to-white/10 border border-white/20 flex items-center justify-center text-5xl font-heading font-bold text-white">
                A
              </div>
            </div>
          )}
        </div>

        {/* Copy column */}
        <div className="md:col-span-3">
          <span className="text-xs font-heading font-semibold tracking-[0.3em] uppercase text-silver">
            The Founder
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-heading font-bold text-silver leading-tight">
            Why I Built Summit.
          </h2>
          <div className="mt-8 space-y-5 text-gray-300 leading-relaxed">
            <p>
              I built Summit because I watched too many people pour thousands into &ldquo;remote closer&rdquo; programs that handed them a Google Drive folder and a pat on the back. No partners. No path. No actual closing.
            </p>
            <p>
              I&rsquo;ve personally closed multi-seven figures in high-ticket offers and built closing teams for partner brands across coaching, SaaS, and agency. The closers I&rsquo;ve trained earn $8k–$30k/month consistently — not because they’re special, but because they had the three things every closer needs: real skill, real reps, and real offers.
            </p>
            <p className="text-white">That&rsquo;s what we hand you here.</p>
          </div>
          <div className="mt-8 text-sm font-heading uppercase tracking-[0.25em] text-gray-500">
            — Anthony, Founder of Summit Closing Group
          </div>
        </div>
      </div>
    </section>
  );
}
