import type { Metadata } from 'next';
import Link from 'next/link';
import SchoolComparison from './SchoolComparison';

export const metadata: Metadata = {
  title: 'Best Online Real Estate Schools in California (2026) | Compare & Save | CertLaunch',
  description: 'Compare the best real estate schools in California for 2026. Get your California real estate license with exclusive discounts. See requirements, costs, exam info, and how much agents earn.',
  keywords: 'best real estate schools california, california real estate license, how to get real estate license in california, california real estate license cost, california real estate exam, california real estate license requirements',
};

const faqs = [
  {
    q: "How much does it cost to get a real estate license in California?",
    a: "Total costs typically range from $600 to $1,150+. This includes the pre-license course ($99–$600), the state exam fee ($100), the license fee ($350), and fingerprinting costs (~$49–$75)."
  },
  {
    q: "How long does it take to get a California real estate license?",
    a: "It usually takes 3 to 6 months. California requires a minimum of 18 days per course (3 courses total), so the fastest possible time is 54 days for education, plus application processing and exam scheduling time."
  },
  {
    q: "What are the requirements for a California real estate license?",
    a: "You must be at least 18 years old, complete 135 hours of approved education (3 college-level courses), pass the state exam with a score of 70% or higher, and pass a background check."
  },
  {
    q: "Is the California real estate exam hard?",
    a: "Yes, it is challenging. The pass rate for first-time takers hover around 50–55%. The exam consists of 150 multiple-choice questions, and you must answer at least 105 correctly (70%) to pass."
  },
  {
    q: "Can I take the California real estate course online?",
    a: "Yes, most students complete the 135 hours of required education online. Ensure the provider is approved by the California Department of Real Estate (DRE)."
  },
  {
    q: "How much do real estate agents make in California?",
    a: "Incomes vary widely, but the average active agent earns around $85,000 per year. Top producers in major markets like Los Angeles or San Francisco can earn well over $200,000 annually."
  },
  {
    q: "Do I need a college degree to be a real estate agent in California?",
    a: "No, a college degree is not required. However, the three required pre-license courses (Real Estate Principles, Real Estate Practice, and an elective) are considered college-level instruction."
  },
  {
    q: "What is the best real estate school in California?",
    a: "The best school depends on your learning style. RealEstateU offers an affordable, self-paced option, while schools like Aceable and Allied offer interactive online formats. Look for DRE-approved providers with high student ratings."
  },
  {
    q: "How do I choose between online and in-person classes?",
    a: "Online classes offer flexibility and are usually cheaper, making them ideal for those with jobs. In-person classes provide structure and networking but are more expensive and require a set schedule."
  },
  {
    q: "Can I get a California real estate license with a criminal record?",
    a: "It is possible, but you must be honest on your application. The DRE reviews applicants with criminal convictions on a case-by-case basis. Failure to disclose a conviction is grounds for denial."
  }
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function CaliforniaRealEstatePage() {
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
            <span className="text-white">California</span>
          </nav>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Best Online Real Estate Schools in California (2026)
          </h1>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl">
            Compare the top 10 DRE-approved schools. Find the best price with exclusive CertLaunch discounts and get your California real estate license faster.
          </p>
          {/* Stats bar */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Course Cost</p>
              <p className="text-white font-bold text-lg">$99 – $599</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Time to License</p>
              <p className="text-white font-bold text-lg">3 – 6 months</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Avg Salary</p>
              <p className="text-white font-bold text-lg">$85,000/yr</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Required Hours</p>
              <p className="text-white font-bold text-lg">135 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SCHOOL COMPARISON (Client Component) ============ */}
      <SchoolComparison />

      {/* ============ EARNING POTENTIAL ============ */}
      <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-6">How Much Do Real Estate Agents Make in California?</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <p className="text-sm text-neutral-500 mb-1">Average Annual Income</p>
              <p className="text-3xl font-extrabold text-neutral-900">$65,000 – $120,000</p>
              <p className="text-xs text-neutral-400 mt-1">Based on California market data</p>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <p className="text-sm text-neutral-500 mb-1">Top Earners</p>
              <p className="text-3xl font-extrabold text-accent-500">$150,000 – $250,000+</p>
              <p className="text-xs text-neutral-400 mt-1">Experienced agents in top markets</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-neutral-200 p-6">
            <h3 className="font-bold text-neutral-900 mb-3">Commission Structure</h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              California real estate agents typically earn 2.5%–3% commission per transaction. On a $850,000 home (California median), that&apos;s approximately <strong>$21,250–$25,500 per sale</strong>. New agents on a 70/30 split with their brokerage would keep $14,875–$17,850. Closing 3–5 deals your first year is a common benchmark, putting first-year earnings at $45,000–$89,000.
            </p>
            <h4 className="font-semibold text-neutral-800 text-sm mb-2">Top-Earning California Markets</h4>
            <div className="flex flex-wrap gap-2">
              {['Los Angeles', 'San Diego', 'San Francisco', 'Sacramento', 'San Jose', 'Irvine', 'Riverside', 'Fresno'].map((city) => (
                <span key={city} className="bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1 text-xs text-neutral-600">{city}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW TO GET LICENSED ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">How to Get a Real Estate License in California</h2>
          <div className="space-y-6">
            {[
              { step: '1', title: 'Complete 135 Hours of Pre-License Education', desc: 'Complete three college-level courses: Real Estate Principles, Real Estate Practice, and one elective from the DRE-approved list.' },
              { step: '2', title: 'Apply for the Exam and License', desc: 'Submit your application to the California Department of Real Estate (DRE) along with proof of completed education.' },
              { step: '3', title: 'Submit Fingerprints', desc: 'Get fingerprinted by a Live Scan service provider using the DRE form to initiate your background check.' },
              { step: '4', title: 'Pass the State Exam', desc: 'Schedule and pass the California real estate salesperson exam. You must score at least 70%.' },
              { step: '5', title: 'Find a Sponsoring Broker', desc: 'To activate your license and start working, you must be hired by a licensed California real estate broker.' },
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
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">California Real Estate License Requirements</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Eligibility Requirements</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span>Must be at least 18 years old</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Must be honest and truthful (background check)</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Proof of legal presence in the US</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>No college degree required</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Education & Exam Requirements</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span>135 hours of approved pre-license education</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Pass course final exams</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Pass California state exam (150 questions, 70% to pass)</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Exam administered by the DRE</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ COST BREAKDOWN ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">California Real Estate License Cost</h2>
          <p className="text-neutral-600 mb-6">Here&apos;s the complete breakdown of what it costs to get your California real estate license in 2026:</p>
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  { item: 'Pre-License Course', low: '$99', high: '$599', note: 'Varies by school' },
                  { item: 'Exam Fee', low: '$100', high: '$100', note: 'Paid to DRE' },
                  { item: 'License Fee', low: '$350', high: '$350', note: 'Paid to DRE' },
                  { item: 'Fingerprinting', low: '$49', high: '$75', note: 'Processing + rolling fee' },
                ].map((row, i) => (
                  <tr key={row.item} className={i % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-neutral-800">{row.item}</td>
                    <td className="px-6 py-4 text-neutral-600">{row.low} – {row.high}</td>
                    <td className="px-6 py-4 text-neutral-400 text-xs">{row.note}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-neutral-200 bg-brand-50">
                  <td className="px-6 py-4 font-bold text-neutral-900">Estimated Total</td>
                  <td className="px-6 py-4 font-bold text-brand-600">$600 – $1,150+</td>
                  <td className="px-6 py-4 text-xs text-accent-600 font-semibold">Save up to 30% with CertLaunch</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============ CALIFORNIA REAL ESTATE EXAM ============ */}
      <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-6">The California Real Estate Exam</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Exam Details</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Format:</strong> 150 multiple-choice questions</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Passing score:</strong> 70% (105 correct answers)</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Time limit:</strong> 3 hours</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Provider:</strong> California DRE</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Cost:</strong> $100</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Exam Topics</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span>Property Ownership and Land Use Controls</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Laws of Agency and Fiduciary Duties</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Property Valuation and Market Analysis</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Financing</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Practice of Real Estate and Mandated Disclosures</span></li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-bold text-amber-800 mb-2">💡 Exam Prep Tip</h3>
            <p className="text-sm text-amber-700">The California exam is known for tricky wording. Focus on vocabulary and take as many practice exams as possible.</p>
          </div>
        </div>
      </section>

      {/* ============ TIMELINE ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-6">How Long Does It Take?</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl border border-neutral-200 p-6 text-center">
              <p className="text-3xl font-extrabold text-brand-600 mb-2">2.5 – 3 months</p>
              <p className="text-sm font-semibold text-neutral-800">Full-time</p>
              <p className="text-xs text-neutral-500 mt-1">Courses require min. 18 days each (54 days total)</p>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6 text-center">
              <p className="text-3xl font-extrabold text-brand-600 mb-2">4 – 6 months</p>
              <p className="text-sm font-semibold text-neutral-800">Part-time</p>
              <p className="text-xs text-neutral-500 mt-1">Studying evenings and weekends</p>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6 text-center">
              <p className="text-3xl font-extrabold text-brand-600 mb-2">6 – 12 months</p>
              <p className="text-sm font-semibold text-neutral-800">Casual pace</p>
              <p className="text-xs text-neutral-500 mt-1">One course at a time</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MID-PAGE EMAIL CAPTURE ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-brand-900 rounded-2xl p-8 text-center">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
              Get the Complete California Real Estate Guide
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
