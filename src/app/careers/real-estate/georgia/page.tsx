import type { Metadata } from 'next';
import Link from 'next/link';
import SchoolComparison from './SchoolComparison';

export const metadata: Metadata = {
  title: 'Best Online Real Estate Schools in Georgia (2026) | CertLaunch',
  description: 'Compare the best real estate schools in Georgia for 2026. Get your Georgia real estate license with exclusive discounts. See requirements, costs, exam info, and how much agents earn.',
  keywords: 'best real estate schools georgia, georgia real estate license, how to get real estate license in georgia, georgia real estate license cost, georgia real estate exam, georgia real estate license requirements',
};

const faqs = [
  {
    q: 'How much does it cost to get a real estate license in Georgia?',
    a: 'The total cost is typically between $500 and $800. This includes the 75-hour pre-license course ($125–$450), the $121 state exam fee, the $170 license application fee, and approximately $40 for a background check.',
  },
  {
    q: 'How long does it take to get a real estate license in Georgia?',
    a: 'Most students complete the process in 3 to 8 weeks. The 75-hour course can be finished in under a month if you study full-time, but may take longer if you study part-time.',
  },
  {
    q: 'What are the requirements for a Georgia real estate license?',
    a: 'You must be at least 18 years old, have a high school diploma or GED, complete 75 hours of approved education, pass a background check, and pass the state licensing exam.',
  },
  {
    q: 'Is the Georgia real estate exam hard?',
    a: 'The exam is challenging because you must pass both the National and State sections with a 75% score. Comprehensive exam prep is highly recommended to ensure you pass on the first try.',
  },
  {
    q: 'Can I take the Georgia real estate course online?',
    a: 'Yes, the Georgia Real Estate Commission (GREC) allows you to take the 75-hour pre-license course entirely online. Online courses offer flexibility to study at your own pace.',
  },
  {
    q: 'How much do real estate agents make in Georgia?',
    a: 'The average annual income for a Georgia real estate agent is typically between $60,000 and $85,000. Top producers in busy markets like Atlanta can earn significantly more, often exceeding $110,000.',
  },
  {
    q: 'Do I need a college degree to be a real estate agent in Georgia?',
    a: 'No, you do not need a college degree. The minimum education requirement is a high school diploma or a GED.',
  },
  {
    q: 'What is the best real estate school in Georgia?',
    a: 'The best school depends on your learning style. RealEstateU is a popular choice for its affordable, self-paced online packages that include the required 75-hour course. AceableAgent and The CE Shop are also top-rated for their interactive content.',
  },
  {
    q: 'How do I choose between online and in-person classes?',
    a: 'Online classes are best for students who need flexibility and a lower cost. In-person classes are better if you prefer a structured classroom environment and direct interaction with an instructor.',
  },
  {
    q: 'Can I get a real estate license in Georgia with a criminal record?',
    a: 'It is possible, but you must disclose your history. You will need to provide a GCIC criminal history report, and the Commission will review your background to determine eligibility.',
  },
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function GeorgiaRealEstatePage() {
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
            <span className="text-white">Georgia</span>
          </nav>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Best Online Real Estate Schools in Georgia (2026)
          </h1>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl">
            Compare top GREC-approved schools. Find the best price with exclusive CertLaunch discounts and get your Georgia real estate license faster.
          </p>
          {/* Stats bar */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Course Cost</p>
              <p className="text-white font-bold text-lg">$125 – $450</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Time to License</p>
              <p className="text-white font-bold text-lg">3 – 8 weeks</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Avg Salary</p>
              <p className="text-white font-bold text-lg">$60,000/yr</p>
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
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-6">How Much Do Real Estate Agents Make in Georgia?</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <p className="text-sm text-neutral-500 mb-1">Average Annual Income</p>
              <p className="text-3xl font-extrabold text-neutral-900">$60,000 – $85,000</p>
              <p className="text-xs text-neutral-400 mt-1">Based on Georgia market data</p>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <p className="text-sm text-neutral-500 mb-1">Top Earners</p>
              <p className="text-3xl font-extrabold text-accent-500">$110,000+</p>
              <p className="text-xs text-neutral-400 mt-1">Experienced agents in top markets</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-neutral-200 p-6">
            <h3 className="font-bold text-neutral-900 mb-3">Commission Structure</h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              Georgia real estate agents typically earn 2.5%–3% commission per transaction. On a $340,000 home (Georgia median), that&apos;s approximately <strong>$8,500–$10,200 per sale</strong>. New agents on a 70/30 split with their brokerage would keep $5,950–$7,140. Closing 6–8 deals your first year is a common benchmark, putting first-year earnings at $35,700–$57,100.
            </p>
            <h4 className="font-semibold text-neutral-800 text-sm mb-2">Top-Earning Georgia Markets</h4>
            <div className="flex flex-wrap gap-2">
              {['Atlanta', 'Augusta', 'Savannah', 'Columbus', 'Macon', 'Sandy Springs', 'Roswell', 'Athens'].map((city) => (
                <span key={city} className="bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1 text-xs text-neutral-600">{city}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW TO GET LICENSED ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">How to Get a Real Estate License in Georgia</h2>
          <div className="space-y-6">
            {[
              { step: '1', title: 'Complete 75 Hours of Pre-License Education', desc: 'Enroll in a GREC-approved 75-hour Salesperson Pre-license course. You must pass the course final exam with a score of 72% or higher.' },
              { step: '2', title: 'Obtain a GCIC Criminal History Report', desc: 'Visit a local sheriff\'s office or police station to obtain a Georgia Crime Information Center (GCIC) report. This report is valid for 60 days and must be brought to the exam center.' },
              { step: '3', title: 'Pass the Georgia Real Estate Salesperson Exam', desc: 'Register with PSI to take the state exam. The exam consists of 152 questions, and you must score 75% or higher on both the National and State portions.' },
              { step: '4', title: 'Apply for Your License', desc: 'You can apply for your license immediately at the PSI test center after passing. Bring your Lawful Presence Verification and the $170 license fee.' },
              { step: '5', title: 'Find a Sponsoring Broker', desc: 'To activate your license, you must be sponsored by a Georgia broker. If you don\'t have a broker yet, you can apply for an inactive license.' },
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
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">Georgia Real Estate License Requirements</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Eligibility Requirements</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span>Must be at least 18 years old</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Must have a high school diploma or GED</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Must have a US Social Security number</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Must provide a GCIC criminal history report (no more than 60 days old)</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Education & Exam Requirements</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span>75 hours of approved pre-license education</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Pass school final exam (72% minimum)</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Pass Georgia state exam (152 questions, 75% to pass)</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Exam administered by PSI</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ COST BREAKDOWN ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">Georgia Real Estate License Cost</h2>
          <p className="text-neutral-600 mb-6">Here&apos;s the complete breakdown of what it costs to get your Georgia real estate license in 2026:</p>
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  { item: 'Pre-License Course (75 hours)', low: '$125', high: '$450', note: 'Use CertLaunch discount' },
                  { item: 'State Exam Fee', low: '$121', high: '$121', note: 'PSI' },
                  { item: 'License Application', low: '$170', high: '$170', note: 'Georgia Real Estate Commission' },
                  { item: 'GCIC Background Check', low: '$25', high: '$40', note: 'Local police/sheriff' },
                  { item: 'Lawful Presence Verification', low: 'Included', high: 'Included', note: 'Part of application' },
                ].map((row, i) => (
                  <tr key={row.item} className={i % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-neutral-800">{row.item}</td>
                    <td className="px-6 py-4 text-neutral-600">{row.low} – {row.high}</td>
                    <td className="px-6 py-4 text-neutral-400 text-xs">{row.note}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-neutral-200 bg-brand-50">
                  <td className="px-6 py-4 font-bold text-neutral-900">Estimated Total</td>
                  <td className="px-6 py-4 font-bold text-brand-600">$441 – $781+</td>
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
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-6">The Georgia Real Estate Exam</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Exam Details</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Format:</strong> 152 multiple-choice questions</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Passing score:</strong> 75% on both sections</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Time limit:</strong> 4 hours</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Provider:</strong> PSI</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Cost:</strong> $121</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Exam Topics</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span>Property ownership and land use controls</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Real estate valuation and market analysis</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Financing and contracts</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>General principles of agency</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Georgia real estate license law</span></li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-bold text-amber-800 mb-2">💡 Exam Prep Tip</h3>
            <p className="text-sm text-amber-700">The Georgia exam requires passing BOTH the National (100 questions) and State (52 questions) sections with a 75%. Don&apos;t neglect the state-specific laws. Schools that include exam prep packages (like RealEstateU&apos;s Study Guide or Colibri&apos;s Exam Prep) can help you focus on the areas that matter most.</p>
          </div>
        </div>
      </section>

      {/* ============ TIMELINE ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-6">How Long Does It Take?</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl border border-neutral-200 p-6 text-center">
              <p className="text-3xl font-extrabold text-brand-600 mb-2">3–4 weeks</p>
              <p className="text-sm font-semibold text-neutral-800">Full-time</p>
              <p className="text-xs text-neutral-500 mt-1">Studying 4–6 hours/day</p>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6 text-center">
              <p className="text-3xl font-extrabold text-brand-600 mb-2">6–8 weeks</p>
              <p className="text-sm font-semibold text-neutral-800">Part-time</p>
              <p className="text-xs text-neutral-500 mt-1">Studying 1–2 hours/day</p>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6 text-center">
              <p className="text-3xl font-extrabold text-brand-600 mb-2">3–6 months</p>
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
              Get the Complete Georgia Real Estate Guide
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
