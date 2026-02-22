import type { Metadata } from 'next';
import Link from 'next/link';
import SchoolComparison from './SchoolComparison';

export const metadata: Metadata = {
  title: 'How to Get a Real Estate License in North Carolina (2026) | Requirements & Costs',
  description: 'Learn how to become a real estate agent in North Carolina. Step-by-step guide on NCREC requirements, exam details, costs, and top schools.',
  keywords: 'north carolina real estate license, how to get real estate license in nc, nc real estate license requirements, north carolina real estate schools, nc real estate exam',
};

const faqs = [
  {
    q: 'How much does it cost to get a real estate license in North Carolina?',
    a: 'The total cost is typically between $425 and $650. This includes the pre-license course ($250–$450), application fee ($100), exam fee ($60), and criminal record check ($15–$45).',
  },
  {
    q: 'How long does it take to become a real estate agent in North Carolina?',
    a: 'Most people complete the process in 2 to 4 months. The 75-hour course can be finished in a few weeks if studying full-time, but allow extra time for application processing and exam scheduling.',
  },
  {
    q: 'What is a Provisional Broker in North Carolina?',
    a: 'A Provisional Broker is an entry-level license status. To remove the "Provisional" status and become a full Broker, you must complete 90 hours of post-licensing education within 18 months of licensure.',
  },
  {
    q: 'Is the North Carolina real estate exam hard?',
    a: 'Yes, it is considered challenging. You must pass both the National (80 questions) and State (40 questions) sections separately. The State section is known for being particularly specific about NC license law.',
  },
  {
    q: 'Can I take the North Carolina pre-license course online?',
    a: 'Yes, the NCREC allows synchronous (livestream) and asynchronous (self-paced) online courses, as long as they are from an approved provider.',
  },
  {
    q: 'Do I need a college degree to get a real estate license in NC?',
    a: 'No, a college degree is not required. You must be at least 18 years old, have a Social Security number, and meet the character requirements.',
  },
  {
    q: 'How much do real estate agents make in North Carolina?',
    a: 'The average annual income for NC agents is around $78,000, but this varies widely. Top producers in markets like Charlotte or Raleigh can earn well over $100,000 annually.',
  },
  {
    q: 'What is the background check requirement?',
    a: 'All applicants must order a criminal record report through the Commission\'s approved vendor, Criminal Record Check (CRC), which searches state and national databases.',
  },
  {
    q: 'What happens if I fail the North Carolina real estate exam?',
    a: 'If you fail one section (National or State), you can retake just that section. You must pay a $50 fee per retake and wait at least 10 days between attempts.',
  },
  {
    q: 'Does North Carolina have license reciprocity with other states?',
    a: 'North Carolina does not have full reciprocity, but they offer "limited reciprocity" (waivers) for current licensees from other states, often allowing them to bypass the pre-license course and/or National exam.',
  },
];

function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 text-accent-500 flex-shrink-0 ${className}`} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function NorthCarolinaRealEstatePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero-gradient pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-sm text-blue-300 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/careers/real-estate" className="hover:text-white transition-colors">Real Estate</Link>
            <span>/</span>
            <span className="text-white">North Carolina</span>
          </nav>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            How to Get a Real Estate License in North Carolina (2026)
          </h1>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl">
            Compare approved NC real estate schools and get your license in 5 simple steps.
          </p>
          {/* Stats bar */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Course Cost</p>
              <p className="text-white font-bold text-lg">$250 – $450</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Time to License</p>
              <p className="text-white font-bold text-lg">2 – 4 months</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Avg Salary</p>
              <p className="text-white font-bold text-lg">$77,969/yr</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Required Hours</p>
              <p className="text-white font-bold text-lg">75 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SCHOOL COMPARISON (Client Component) ============ */}
      <SchoolComparison />

      {/* ============ EARNING POTENTIAL ============ */}
      <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-6">How Much Do Real Estate Agents Make in North Carolina?</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <p className="text-sm text-neutral-500 mb-1">Average Annual Income</p>
              <p className="text-3xl font-extrabold text-neutral-900">$45,000 – $78,000</p>
              <p className="text-xs text-neutral-400 mt-1">Based on North Carolina market data</p>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <p className="text-sm text-neutral-500 mb-1">Top Earners</p>
              <p className="text-3xl font-extrabold text-accent-500">$102,000+</p>
              <p className="text-xs text-neutral-400 mt-1">Experienced agents in top markets</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-neutral-200 p-6">
            <h3 className="font-bold text-neutral-900 mb-3">Commission Structure</h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              North Carolina real estate agents typically earn 2.5%–3% commission per transaction. On a $320,000 home (NC median), that&apos;s approximately <strong>$8,000–$9,600 per sale</strong>. New agents on a 60/40 split with their brokerage would keep $4,800–$5,760. Closing 4–6 deals your first year is a common benchmark, putting first-year earnings at $20,000–$35,000.
            </p>
            <h4 className="font-semibold text-neutral-800 text-sm mb-2">Top-Earning North Carolina Markets</h4>
            <div className="flex flex-wrap gap-2">
              {['Charlotte', 'Raleigh', 'Durham', 'Greensboro', 'Winston-Salem', 'Fayetteville', 'Wilmington', 'Asheville'].map((city) => (
                <span key={city} className="bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1 text-xs text-neutral-600">{city}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW TO GET LICENSED ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">How to Get a Real Estate License in North Carolina</h2>
          <div className="space-y-6">
            {[
              { step: '1', title: 'Complete 75 Hours of Pre-License Education', desc: 'Enroll in a NCREC-approved 75-hour Broker Prelicensing course. This course covers real estate principles, law, and practice in North Carolina.' },
              { step: '2', title: 'Pass the Course Final Exam', desc: 'Successfully pass the school\'s final exam with a minimum score (typically 75% or higher) to receive your Certificate of Completion.' },
              { step: '3', title: 'Submit Your License Application', desc: 'Apply online with the North Carolina Real Estate Commission (NCREC) and pay the $100 application fee.' },
              { step: '4', title: 'Order Your Criminal Record Check', desc: 'Request a criminal record report through the Commission-approved vendor, Criminal Record Check (CRC), for approximately $15–$45.' },
              { step: '5', title: 'Schedule and Pass the State Exam', desc: 'Book your exam with Pearson VUE. The comprehensive exam has 120 scored questions, and you must pass both National and State sections.' },
              { step: '6', title: 'Obtain Your Provisional Broker License', desc: 'Upon passing, you will be issued a Provisional Broker license. To activate it, a Broker-in-Charge (BIC) must file an activation form.' },
              { step: '7', title: 'Complete Post-Licensing Education', desc: 'To remove "Provisional" status, complete 90 hours of post-licensing education (three 30-hour courses) within 18 months of licensure.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 font-bold text-lg flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-display font-bold text-neutral-900 mb-1">{item.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ REQUIREMENTS ============ */}
      <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">North Carolina Real Estate License Requirements</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Eligibility Requirements</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-accent-500 mt-0.5" /><span>Must be at least 18 years old</span></li>
                <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-accent-500 mt-0.5" /><span>Must have a Social Security number</span></li>
                <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-accent-500 mt-0.5" /><span>Must be a US citizen or lawfully admitted alien</span></li>
                <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-accent-500 mt-0.5" /><span>No college degree required</span></li>
                <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-accent-500 mt-0.5" /><span>Must have a good character and reputation (background check)</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Education & Exam Requirements</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-accent-500 mt-0.5" /><span>75 hours of approved pre-license education</span></li>
                <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-accent-500 mt-0.5" /><span>Pass school final exam</span></li>
                <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-accent-500 mt-0.5" /><span>Pass North Carolina state exam (120 questions)</span></li>
                <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-accent-500 mt-0.5" /><span>National Section: 57/80 correct to pass</span></li>
                <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-accent-500 mt-0.5" /><span>State Section: 29/40 correct to pass</span></li>
                <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-accent-500 mt-0.5" /><span>Exam administered by Pearson VUE</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ COST BREAKDOWN ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">North Carolina Real Estate License Cost</h2>
          <p className="text-neutral-600 mb-6">Here&apos;s the complete breakdown of what it costs to get your North Carolina real estate license in 2026:</p>
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  { item: 'Pre-License Course', low: '$250', high: '$450', note: '75-hr course (online or classroom)' },
                  { item: 'License Application Fee', low: '$100', high: '$100', note: 'Paid to NCREC' },
                  { item: 'State Exam Fee', low: '$60', high: '$60', note: 'Pearson VUE (Comprehensive)' },
                  { item: 'Criminal Record Check', low: '$15', high: '$45', note: 'Vendor fees vary' },
                ].map((row, i) => (
                  <tr key={row.item} className={i % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-neutral-800">{row.item}</td>
                    <td className="px-6 py-4 text-neutral-600">{row.low} – {row.high}</td>
                    <td className="px-6 py-4 text-neutral-400 text-xs">{row.note}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-neutral-200 bg-brand-50">
                  <td className="px-6 py-4 font-bold text-neutral-900">Estimated Total</td>
                  <td className="px-6 py-4 font-bold text-brand-600">$425 – $655+</td>
                  <td className="px-6 py-4 text-xs text-accent-600 font-semibold">Save up to 30% with CertLaunch</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============ EXAM DETAILS ============ */}
      <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-6">The North Carolina Real Estate Exam</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Exam Details</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-accent-500 mt-0.5" /><span><strong>Questions:</strong> 120 (80 National, 40 State)</span></li>
                <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-accent-500 mt-0.5" /><span><strong>Passing Score:</strong> Approx. 72%</span></li>
                <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-accent-500 mt-0.5" /><span><strong>Time Limit:</strong> 3.5 hours</span></li>
                <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-accent-500 mt-0.5" /><span><strong>Provider:</strong> Pearson VUE</span></li>
                <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-accent-500 mt-0.5" /><span><strong>Cost:</strong> $60 (Comprehensive)</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Key Topics</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-accent-500 mt-0.5" /><span>Property Ownership and Interest</span></li>
                <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-accent-500 mt-0.5" /><span>Real Estate Contracts and Agency</span></li>
                <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-accent-500 mt-0.5" /><span>North Carolina License Law</span></li>
                <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-accent-500 mt-0.5" /><span>North Carolina Commission Rules</span></li>
                <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 text-accent-500 mt-0.5" /><span>Landlord and Tenant Laws</span></li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-bold text-amber-800 mb-2">💡 Exam Prep Tip</h3>
            <p className="text-sm text-amber-700">The North Carolina exam places heavy emphasis on state-specific laws. Ensure you master the 40-question State section, as many candidates struggle there.</p>
          </div>
        </div>
      </section>

      {/* ============ TIMELINE ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-6">How Long Does It Take?</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl border border-neutral-200 p-6 text-center">
              <p className="text-3xl font-extrabold text-brand-600 mb-2">3–5 weeks</p>
              <p className="text-sm font-semibold text-neutral-800">Full-time</p>
              <p className="text-xs text-neutral-500 mt-1">Studying 6–8 hours/day</p>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6 text-center">
              <p className="text-3xl font-extrabold text-brand-600 mb-2">6–10 weeks</p>
              <p className="text-sm font-semibold text-neutral-800">Part-time</p>
              <p className="text-xs text-neutral-500 mt-1">Studying 1–2 hours/day</p>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6 text-center">
              <p className="text-3xl font-extrabold text-brand-600 mb-2">3–5 months</p>
              <p className="text-sm font-semibold text-neutral-800">Casual pace</p>
              <p className="text-xs text-neutral-500 mt-1">A few hours per week</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MID-PAGE EMAIL CAPTURE ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-brand-900 rounded-2xl p-8 text-center">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
              Get the Complete North Carolina Real Estate Guide
            </h2>
            <p className="text-blue-200 text-sm mb-6">
              Step-by-step requirements, top school recommendations, and your exclusive discount code — delivered to your inbox.
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
                className="bg-accent-500 hover:bg-accent-600 text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
              >
                Get My Free Guide
              </button>
            </form>
            <p className="text-xs text-blue-300 mt-3">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* ============ FAQs ============ */}
      <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl border border-neutral-200 p-6">
                <h3 className="font-bold text-neutral-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
