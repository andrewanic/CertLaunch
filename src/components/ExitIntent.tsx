'use client';

import { useState, useEffect } from 'react';
import EmailCapture from './EmailCapture';

export default function ExitIntent() {
  const [show, setShow] = useState(false);
  const [fired, setFired] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !fired) {
        setShow(true);
        setFired(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [fired]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl relative">
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="text-center mb-6">
          <div className="text-4xl mb-3">📋</div>
          <h3 className="text-2xl font-bold text-text">Wait — Don&apos;t Leave Without This!</h3>
          <p className="mt-2 text-text-light">
            Get your <strong>free Licensing Cheat Sheet</strong> — everything you need to know about requirements, costs, and timelines for your state.
          </p>
        </div>
        <EmailCapture variant="exit" onSuccess={() => setTimeout(() => setShow(false), 2000)} />
      </div>
    </div>
  );
}
