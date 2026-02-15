'use client';

import Link from 'next/link';
import { useState } from 'react';
import verticals from '@/data/verticals.json';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CL</span>
            </div>
            <span className="text-xl font-bold text-primary">
              Cert<span className="text-accent">Launch</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setCareersOpen(true)}
              onMouseLeave={() => setCareersOpen(false)}
            >
              <button className="text-text-light hover:text-primary font-medium flex items-center gap-1 py-2">
                Browse Careers
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {careersOpen && (
                <div className="absolute top-full left-0 bg-white rounded-xl shadow-lg border border-gray-100 py-2 w-64">
                  {verticals.map((v) => (
                    <Link
                      key={v.slug}
                      href={`/careers/${v.slug}`}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-bg-alt transition-colors"
                    >
                      <span className="text-xl">{v.icon}</span>
                      <span className="text-sm font-medium text-text">{v.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/about" className="text-text-light hover:text-primary font-medium">
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-bg-alt"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-1">
            <p className="text-xs font-semibold text-text-lighter uppercase tracking-wider px-3 py-2">Careers</p>
            {verticals.map((v) => (
              <Link
                key={v.slug}
                href={`/careers/${v.slug}`}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-bg-alt"
                onClick={() => setMobileOpen(false)}
              >
                <span>{v.icon}</span>
                <span className="text-sm font-medium">{v.name}</span>
              </Link>
            ))}
            <hr className="my-2" />
            <Link
              href="/about"
              className="block px-3 py-2 rounded-lg hover:bg-bg-alt text-sm font-medium"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
