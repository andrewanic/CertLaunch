'use client';

import { useState } from 'react';

interface EmailCaptureProps {
  variant: 'hero' | 'section' | 'sticky' | 'gate' | 'exit';
  onSuccess?: () => void;
}

const careers = [
  'Real Estate Agent',
  'Mortgage Loan Officer',
  'Insurance Agent',
  'Home Inspector',
  'Appraiser',
  'Not Sure Yet',
];

export default function EmailCapture({ variant, onSuccess }: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [career, setCareer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, career, source: variant, timestamp: new Date().toISOString() }),
      });
      setSubmitted(true);
      onSuccess?.();
    } catch {
      // Still show success to avoid blocking UX
      setSubmitted(true);
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-2 text-accent font-semibold text-lg animate-fade-in">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        Check your inbox! Your free guide is on the way.
      </div>
    );
  }

  // Hero variant — inline under search bar
  if (variant === 'hero') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-xl text-text bg-white/90 backdrop-blur border-0 text-base focus:outline-none focus:ring-4 focus:ring-accent/30"
          required
        />
        <select
          value={career}
          onChange={(e) => setCareer(e.target.value)}
          className="px-4 py-3 rounded-xl text-text bg-white/90 backdrop-blur border-0 text-base focus:outline-none focus:ring-4 focus:ring-accent/30"
        >
          <option value="">Career interest...</option>
          {careers.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl transition-colors whitespace-nowrap disabled:opacity-60"
        >
          {loading ? '...' : 'Get Free Guide →'}
        </button>
      </form>
    );
  }

  // Section variant — full-width CTA section
  if (variant === 'section') {
    return (
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-5 py-4 rounded-xl text-text bg-white border border-gray-200 text-base focus:outline-none focus:ring-4 focus:ring-accent/30"
            required
          />
          <select
            value={career}
            onChange={(e) => setCareer(e.target.value)}
            className="px-5 py-4 rounded-xl text-text bg-white border border-gray-200 text-base focus:outline-none focus:ring-4 focus:ring-accent/30"
          >
            <option value="">Pick a career...</option>
            {careers.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl transition-colors whitespace-nowrap text-lg disabled:opacity-60"
          >
            {loading ? 'Sending...' : 'Get My Free Roadmap →'}
          </button>
        </div>
        <p className="mt-3 text-sm text-center opacity-70">
          Free. No spam. Unsubscribe anytime.
        </p>
      </form>
    );
  }

  // Gate variant — unlock discount pricing
  if (variant === 'gate') {
    return (
      <form onSubmit={handleSubmit} className="max-w-md mx-auto text-center">
        <div className="flex flex-col gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full px-5 py-4 rounded-xl text-text bg-white border border-accent/30 text-base focus:outline-none focus:ring-4 focus:ring-accent/30"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl transition-colors text-lg disabled:opacity-60"
          >
            {loading ? 'Unlocking...' : '🔓 Unlock Discount Prices'}
          </button>
        </div>
        <p className="mt-2 text-xs opacity-60">Join 10,000+ smart career changers</p>
      </form>
    );
  }

  // Sticky variant — bottom bar
  if (variant === 'sticky') {
    return (
      <form onSubmit={handleSubmit} className="flex items-center gap-3 max-w-3xl mx-auto">
        <span className="text-white font-semibold hidden sm:inline whitespace-nowrap">🎓 Free Licensing Roadmap →</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="flex-1 px-4 py-2 rounded-lg text-text bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2 bg-white text-primary font-bold rounded-lg text-sm hover:bg-gray-100 transition-colors whitespace-nowrap disabled:opacity-60"
        >
          {loading ? '...' : 'Get It Free'}
        </button>
      </form>
    );
  }

  // Exit intent variant
  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="flex flex-col gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="w-full px-5 py-4 rounded-xl text-text bg-white border border-gray-200 text-base focus:outline-none focus:ring-4 focus:ring-accent/30"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl transition-colors text-lg disabled:opacity-60"
        >
          {loading ? '...' : 'Send My Free Cheat Sheet →'}
        </button>
      </div>
    </form>
  );
}
