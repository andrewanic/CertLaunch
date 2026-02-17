'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-200 ${scrolled ? 'bg-white shadow-sm border-b border-neutral-200' : 'bg-white/95 backdrop-blur-sm border-b border-neutral-200'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex-shrink-0">
            <Logo />
          </a>

          {/* Desktop: inline email capture */}
          <form className="hidden sm:flex items-center gap-3">
            <span className="text-xs font-medium text-neutral-500 whitespace-nowrap">Get a personalized career plan and exclusive discount code</span>
            <input
              type="email"
              placeholder="you@email.com"
              required
              className="w-48 border border-neutral-300 rounded-lg px-3 py-2 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder-neutral-400"
            />
            <button
              type="submit"
              className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              Submit
            </button>
          </form>

          {/* Mobile: just show submit button that scrolls to bottom capture */}
          <a href="#bottom-capture" className="sm:hidden bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors">
            Get Plan
          </a>
        </div>
      </nav>
    </>
  );
}
