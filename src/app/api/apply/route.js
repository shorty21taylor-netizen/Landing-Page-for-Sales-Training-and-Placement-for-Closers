import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const runtime = 'nodejs';

const MIN_WHY = 50;
const EXPERIENCE_OPTIONS = new Set([
  'No experience yet',
  '< 1 year',
  '1–3 years',
  '3–5 years',
  '5+ years',
]);

function validate(data) {
  if (typeof data !== 'object' || data === null) return 'Bad payload.';
  const { name, email, experience, why } = data;
  if (!name || typeof name !== 'string' || !name.trim()) return 'Missing name.';
  if (
    !email ||
    typeof email !== 'string' ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  )
    return 'Invalid email.';
  if (!experience || !EXPERIENCE_OPTIONS.has(experience))
    return 'Invalid experience selection.';
  if (!why || typeof why !== 'string' || why.trim().length < MIN_WHY)
    return `Why field must be at least ${MIN_WHY} characters.`;
  return null;
}

export async function POST(req) {
  let data;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 });
  }

  const err = validate(data);
  if (err) return NextResponse.json({ error: err }, { status: 400 });

  const record = {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    experience: data.experience,
    why: data.why.trim(),
    submittedAt: new Date().toISOString(),
    ip:
      req.headers.get('x-forwarded-for') ||
      req.headers.get('x-real-ip') ||
      null,
    userAgent: req.headers.get('user-agent') || null,
  };

  console.log('[apply] new submission:', record);

  // Best-effort persistence to /data/applications.json.
  // In serverless deploys this filesystem is ephemeral or read-only, so we
  // swallow errors here — the console log is the source of truth until a
  // real CRM/email integration is wired in.
  try {
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'applications.json');
    await fs.mkdir(dataDir, { recursive: true });

    let existing = [];
    try {
      const raw = await fs.readFile(filePath, 'utf-8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) existing = parsed;
    } catch {
      // file doesn't exist yet — fine
    }
    existing.push(record);
    await fs.writeFile(
      filePath,
      JSON.stringify(existing, null, 2),
      'utf-8'
    );
  } catch (e) {
    console.warn('[apply] failed to persist applications.json:', e?.message);
  }

  return NextResponse.json({ ok: true });
}
