'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-200 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">CL</span>
          </div>
          <span className="font-display font-bold text-xl text-neutral-900">CertLaunch</span>
        </Link>

        {/* Desktop: centered email capture */}
        <form className="hidden sm:flex items-center gap-3 flex-1 justify-center max-w-lg mx-auto">
          <span className="text-xs font-medium text-neutral-500 whitespace-nowrap">Free Licensing Roadmap →</span>
          <input
            type="email"
            placeholder="you@email.com"
            required
            className="flex-1 min-w-0 border border-neutral-300 rounded-lg px-3 py-2 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent placeholder-neutral-400"
          />
          <button
            type="submit"
            className="bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors whitespace-nowrap"
          >
            Send My Roadmap
          </button>
        </form>

        {/* Spacer for balance */}
        <div className="w-[140px] hidden sm:block" />

        {/* Mobile menu button */}
        <button
          className="sm:hidden p-2 rounded-lg hover:bg-neutral-100"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden border-t border-neutral-200 bg-white px-4 py-4">
          <p className="text-xs font-medium text-neutral-500 mb-2">Free Licensing Roadmap →</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="you@email.com"
              required
              className="border border-neutral-300 rounded-lg px-3 py-2 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent placeholder-neutral-400"
            />
            <button
              type="submit"
              className="bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
            >
              Send My Roadmap
            </button>
          </form>
        </div>
      )}
    </nav>
  );
}
