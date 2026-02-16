import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'email-subscribers.json');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, career, source, timestamp } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Read existing subscribers
    let subscribers: Record<string, unknown>[] = [];
    try {
      const data = await fs.readFile(DATA_FILE, 'utf-8');
      subscribers = JSON.parse(data);
    } catch {
      // File doesn't exist yet, start fresh
    }

    // Check for duplicate
    if (subscribers.some((s) => s.email === email)) {
      return NextResponse.json({ ok: true, message: 'Already subscribed' });
    }

    // Add new subscriber
    subscribers.push({
      email,
      career: career || 'Not specified',
      source: source || 'unknown',
      timestamp: timestamp || new Date().toISOString(),
    });

    // Ensure data directory exists
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify(subscribers, null, 2));

    return NextResponse.json({ ok: true, count: subscribers.length });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
