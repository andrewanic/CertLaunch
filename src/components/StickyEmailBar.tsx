'use client';

import { useState, useEffect } from 'react';
import EmailCapture from './EmailCapture';

export default function StickyEmailBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [captured, setCaptured] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      if (window.scrollY > 400 && !dismissed && !captured) {
        setVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed, captured]);

  if (!visible || captured) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary/95 backdrop-blur-sm border-t border-white/10 py-3 px-4 z-50 animate-slide-up">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <EmailCapture variant="sticky" onSuccess={() => setCaptured(true)} />
        <button
          onClick={() => { setDismissed(true); setVisible(false); }}
          className="ml-3 text-white/50 hover:text-white transition-colors"
          aria-label="Dismiss"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
