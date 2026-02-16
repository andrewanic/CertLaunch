const US_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware',
  'Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas',
  'Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi',
  'Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York',
  'North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina',
  'South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia',
  'Wisconsin','Wyoming',
];

const categories = [
  { emoji: '🏠', name: 'Real Estate', desc: 'Pre-license, exam prep, and continuing education for agents and brokers.', savings: 'Save up to $150', bg: 'bg-blue-50' },
  { emoji: '💰', name: 'Mortgage Loan Originator', desc: 'NMLS-approved SAFE Act courses and exam prep for MLO licensing.', savings: 'Save up to $120', bg: 'bg-emerald-50' },
  { emoji: '📋', name: 'Appraisal', desc: 'Qualifying education for trainee, licensed, and certified appraiser levels.', savings: 'Save up to $200', bg: 'bg-violet-50' },
  { emoji: '🛡️', name: 'Insurance', desc: 'P&C, life, health, and multi-line producer pre-license education.', savings: 'Save up to $90', bg: 'bg-amber-50' },
  { emoji: '🔍', name: 'Home Inspection', desc: 'State-required training and field hours for certified home inspectors.', savings: 'Save up to $175', bg: 'bg-rose-50' },
  { emoji: '✍️', name: 'Notary', desc: 'Notary public training, exam prep, and renewal courses for every state.', savings: 'Save up to $60', bg: 'bg-teal-50' },
];

const trustBadges = [
  'No pay-to-rank',
  'Prices never inflated',
  'Real student reviews',
  'Editorially independent',
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className || 'w-4 h-4 text-accent-500'} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero-gradient pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-tight text-white mb-4">
              Compare Verified<br className="hidden sm:block" /> Licensing Schools
            </h1>
            <p className="text-lg sm:text-xl text-blue-200 leading-relaxed mb-3 max-w-2xl mx-auto">
              The trusted marketplace for career switchers. Compare state-approved schools side&#8209;by&#8209;side — then save with exclusive discount codes you won&apos;t find anywhere else.
            </p>
            <p className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-accent-400 mb-8">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
              </svg>
              Students save $127 on average
            </p>

            {/* Selector Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-2xl shadow-black/20 max-w-xl mx-auto text-left">
              <p className="text-sm font-semibold text-neutral-800 mb-4">Find your school in 30 seconds:</p>
              <div className="grid sm:grid-cols-2 gap-3 mb-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-500 mb-1.5">License Type</label>
                  <select className="w-full border border-neutral-300 rounded-lg px-3 py-2.5 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent pr-8 appearance-none">
                    <option value="">Select license…</option>
                    <option>Real Estate Agent</option>
                    <option>Mortgage Loan Originator (MLO)</option>
                    <option>Appraiser</option>
                    <option>Insurance Producer</option>
                    <option>Home Inspector</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-500 mb-1.5">Your State</label>
                  <select className="w-full border border-neutral-300 rounded-lg px-3 py-2.5 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent pr-8 appearance-none">
                    <option value="">Select state…</option>
                    {US_STATES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm py-3 rounded-lg transition-colors">
                Compare Schools &amp; See Discounts →
              </button>
              <p className="text-xs text-neutral-400 text-center mt-3">Free to use · No account required · All schools state-approved</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SOCIAL PROOF BAR ============ */}
      <section className="bg-neutral-50 border-b border-neutral-200 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-neutral-500">
          <div className="flex items-center gap-2">
            <CheckIcon />
            <span><strong className="text-neutral-700">50</strong> states covered</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon />
            <span><strong className="text-neutral-700">100%</strong> state-approved schools</span>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-2">How It Works</p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-neutral-900">Licensed in three simple steps</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {[
              { num: '1', title: 'Select Your License & State', desc: 'Tell us what license you need and where you\u2019re located. We\u2019ll surface only state-approved options.' },
              { num: '2', title: 'Compare Schools Side-by-Side', desc: 'See pricing, pass rates, format, and reviews in a clean comparison table. No hidden agenda — we show everything.' },
              { num: '3', title: 'Enroll & Save Instantly', desc: 'Apply an exclusive discount code at checkout. Savings are applied instantly — no gimmicks, no strings.' },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 font-bold text-xl flex items-center justify-center mx-auto mb-5">
                  {step.num}
                </div>
                <h3 className="font-display font-bold text-lg text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LICENSE CATEGORIES ============ */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-2">License Categories</p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-neutral-900">Start your new career</h2>
            <p className="mt-3 text-neutral-500 max-w-lg mx-auto">Choose a license type to compare approved schools, see real student reviews, and unlock exclusive savings.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <a key={cat.name} href="#" className="card-hover bg-white rounded-xl border border-neutral-200 p-6 block">
                <div className={`w-10 h-10 rounded-lg ${cat.bg} flex items-center justify-center mb-4 text-2xl`}>
                  {cat.emoji}
                </div>
                <h3 className="font-display font-bold text-neutral-900 mb-1">{cat.name}</h3>
                <p className="text-sm text-neutral-500 mb-3">{cat.desc}</p>
                <span className="savings-badge text-xs font-semibold text-white px-2.5 py-1 rounded-full">
                  {cat.savings}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRANSPARENCY ============ */}
      <section className="py-16 sm:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-2">Transparency</p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-neutral-900 mb-4">How we make money</h2>
          <p className="text-neutral-500 leading-relaxed mb-8">
            CertLaunch earns a referral fee when you enroll through our links. This never changes the price you pay — in fact, our exclusive codes make it <em>lower</em>. We refuse to rank schools by commission. Our comparisons are honest, and our incentives are aligned with yours: helping you find the best school at the best price.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-sm text-neutral-600 bg-white rounded-full px-4 py-2 border border-neutral-200">
                <CheckIcon />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EMAIL CAPTURE ============ */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-brand-900 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">Get the free Licensing Roadmap</h2>
            <p className="text-blue-200 max-w-lg mx-auto mb-6">
              A step-by-step PDF covering requirements, timelines, costs, and the best school for your state. Plus exclusive discount codes delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@email.com"
                required
                className="flex-1 rounded-lg px-4 py-3 text-sm bg-white text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-400"
              />
              <button
                type="submit"
                className="bg-accent-500 hover:bg-accent-600 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
              >
                Send My Roadmap
              </button>
            </form>
            <p className="text-xs text-blue-300 mt-4">No spam. Unsubscribe anytime. We respect your inbox.</p>
          </div>
        </div>
      </section>
    </>
  );
}
