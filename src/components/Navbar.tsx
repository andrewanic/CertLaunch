'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-200 ${scrolled ? 'bg-white shadow-sm border-b border-neutral-200' : 'bg-white/95 backdrop-blur-sm border-b border-neutral-200'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="/">
            <Logo />
          </a>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Get My License Plan
          </button>
        </div>
      </nav>

      {/* Mobile sticky bottom CTA */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-200 px-4 py-3 safe-area-bottom">
        <button
          onClick={() => setModalOpen(true)}
          className="block w-full text-center bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold py-3 rounded-lg transition-colors shadow-lg shadow-brand-600/20"
        >
          Get My License Plan
        </button>
      </div>

      {/* Email Capture Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setModalOpen(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 text-xl leading-none"
            >
              ×
            </button>

            <div className="text-center mb-6">
              <h2 className="font-display font-bold text-xl text-neutral-900 mb-2">
                Get Your Personalized License Launch Plan
              </h2>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Answer 3 quick questions and we&apos;ll send you a custom roadmap for your state — including recommended schools and exclusive discounts.
              </p>
            </div>

            <form className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1.5">License Type</label>
                <select className="w-full border border-neutral-300 rounded-lg px-3 py-3 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent appearance-none">
                  <option value="">Select license…</option>
                  <option>Real Estate Agent</option>
                  <option>Mortgage Loan Originator (MLO)</option>
                  <option>Appraiser</option>
                  <option>Insurance Producer</option>
                  <option>Home Inspector</option>
                  <option>Notary</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1.5">Your State</label>
                <select className="w-full border border-neutral-300 rounded-lg px-3 py-3 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent appearance-none">
                  <option value="">Select state…</option>
                  {['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  required
                  className="w-full border border-neutral-300 rounded-lg px-3 py-3 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder-neutral-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold text-sm py-3.5 rounded-lg transition-colors"
              >
                Get My Personalized Plan
              </button>
              <p className="text-xs text-neutral-400 text-center">We&apos;ll never spam you.</p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
