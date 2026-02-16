'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Desktop sticky nav */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-200 ${scrolled ? 'bg-white shadow-sm border-b border-neutral-200' : 'bg-white/95 backdrop-blur-sm border-b border-neutral-200'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">CL</span>
            </div>
            <span className="font-display font-bold text-xl text-neutral-900">CertLaunch</span>
          </Link>

          <div className="hidden sm:flex items-center gap-6">
            <a href="#how-it-works" className="text-sm font-medium text-neutral-500 hover:text-neutral-800 transition-colors">How It Works</a>
            <a href="#categories" className="text-sm font-medium text-neutral-500 hover:text-neutral-800 transition-colors">Licenses</a>
            <a href="#hero-cta" className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm">
              Compare Schools
            </a>
          </div>

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

        {mobileOpen && (
          <div className="sm:hidden border-t border-neutral-200 bg-white px-4 py-4 space-y-3">
            <a href="#how-it-works" className="block text-sm font-medium text-neutral-600 py-2" onClick={() => setMobileOpen(false)}>How It Works</a>
            <a href="#categories" className="block text-sm font-medium text-neutral-600 py-2" onClick={() => setMobileOpen(false)}>Licenses</a>
            <a href="#hero-cta" className="block w-full text-center bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors" onClick={() => setMobileOpen(false)}>
              Compare Schools
            </a>
          </div>
        )}
      </nav>

      {/* Mobile sticky bottom CTA bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-200 px-4 py-3 safe-area-bottom">
        <a href="#hero-cta" className="block w-full text-center bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold py-3 rounded-lg transition-colors shadow-lg shadow-brand-600/20">
          See Discounts
        </a>
      </div>
    </>
  );
}
