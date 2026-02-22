import type { Metadata } from 'next';
import Link from 'next/link';
import SchoolComparison from './SchoolComparison';

export const metadata: Metadata = {
  title: 'Best Online Real Estate Schools in Arizona (2026) | Compare & Save | CertLaunch',
  description: 'Compare the best real estate schools in Arizona for 2026. Get your Arizona real estate license with exclusive discounts. See requirements, costs, exam info, and how much agents earn.',
  keywords: 'best real estate schools arizona, arizona real estate license, how to get real estate license in az, arizona real estate license cost, az real estate exam, arizona real estate license requirements',
};

const faqs = [
  { q: 'How much does it cost to get a real estate license in Arizona?', a: 'Total costs typically range from $550 to $800+. This includes the pre-license course ($350–$600), exam fee ($75), license fee ($60), and fingerprint clearance card (~$67).' },
  { q: 'How long does it take to become a real estate agent in Arizona?', a: 'Most students complete the process in 4 to 10 weeks. The 90-hour course can be finished in as little as 2-3 weeks if studying full-time, but allow extra time for the fingerprint clearance card processing.' },
  { q: 'What are the requirements for an Arizona real estate license?', a: 'You must be at least 18 years old, have legal presence in the US, complete 90 hours of pre-license education plus a 6-hour contract writing course, pass the state exam, and obtain a Fingerprint Clearance Card.' },
  { q: 'Is the Arizona real estate exam hard?', a: 'The Arizona exam is considered challenging due to its length (180 questions) and 5-hour time limit. First-time pass rates hover around 60%. Thorough exam prep is highly recommended.' },
  { q: 'Can I take the Arizona real estate course online?', a: 'Yes, ADRE approves online pre-license courses. Online courses offer flexibility to study at your own pace compared to classroom settings.' },
  { q: 'Do I need a college degree to be a real estate agent in Arizona?', a: 'No, a college degree is not required. You only need to meet the age and education requirements set by the Arizona Department of Real Estate.' },
  { q: 'How much do real estate agents make in Arizona?', a: 'The average annual income for Arizona real estate agents is around $80,000, with top earners making well over $115,000. Income depends on commission splits and sales volume.' },
  { q: 'What is the 6-hour Contract Writing Course?', a: 'It is a mandatory separate course that teaches you how to write and understand Arizona real estate contracts. You must complete this course before applying for your license.' },
  { q: 'How do I get a Fingerprint Clearance Card in Arizona?', a: 'You must apply through the Arizona Department of Public Safety (DPS). This involves submitting an application and having your fingerprints taken by an approved vendor or law enforcement agency.' },
  { q: 'Can I get an Arizona real estate license with a criminal record?', a: 'It is possible, but you must disclose all prior convictions on your application. The ADRE reviews each case individually, and a Fingerprint Clearance Card is required for licensure.' },
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function ArizonaRealEstatePage() {
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
            <span className="text-white">Arizona</span>
          </nav>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Best Online Real Estate Schools in Arizona (2026)
          </h1>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl">
            Compare 7 ADRE-approved schools. Find the best price with exclusive CertLaunch discounts and get your real estate license faster.
          </p>
          {/* Stats bar */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Course Cost</p>
              <p className="text-white font-bold text-lg">$350 – $600</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Time to License</p>
              <p className="text-white font-bold text-lg">3 – 10 weeks</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Avg Salary</p>
              <p className="text-white font-bold text-lg">$79,949/yr</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Required Hours</p>
              <p className="text-white font-bold text-lg">96 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SCHOOL COMPARISON (Client Component) ============ */}
      <SchoolComparison />

      {/* ============ EARNING POTENTIAL ============ */}
      <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-6">How Much Do Real Estate Agents Make in Arizona?</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <p className="text-sm text-neutral-500 mb-1">Average Annual Income</p>
              <p className="text-3xl font-extrabold text-neutral-900">$50,000 – $80,000</p>
              <p className="text-xs text-neutral-400 mt-1">Based on Arizona market data</p>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <p className="text-sm text-neutral-500 mb-1">Top Earners</p>
              <p className="text-3xl font-extrabold text-accent-500">$115,000+</p>
              <p className="text-xs text-neutral-400 mt-1">Experienced agents in top markets</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-neutral-200 p-6">
            <h3 className="font-bold text-neutral-900 mb-3">Commission Structure</h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              Arizona real estate agents typically earn 2.5%–3% commission per transaction. On a $430,000 home (AZ median), that&apos;s approximately <strong>$10,750–$12,900 per sale</strong>. New agents on a 70/30 split with their brokerage would keep $7,525–$9,030. Closing 4–6 deals your first year is a common benchmark, putting first-year earnings at $30,000–$54,000.
            </p>
            <h4 className="font-semibold text-neutral-800 text-sm mb-2">Top-Earning Arizona Markets</h4>
            <div className="flex flex-wrap gap-2">
              {['Phoenix', 'Scottsdale', 'Tucson', 'Mesa', 'Chandler', 'Gilbert', 'Glendale', 'Tempe'].map((city) => (
                <span key={city} className="bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1 text-xs text-neutral-600">{city}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW TO GET LICENSED ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">How to Get a Real Estate License in Arizona</h2>
          <div className="space-y-6">
            {[
              { step: '1', title: 'Complete 90 Hours of Pre-License Education', desc: 'Enroll in an ADRE-approved 90-hour pre-license course. This course covers real estate principles, law, and practice in Arizona.' },
              { step: '2', title: 'Pass the School Final Exam', desc: 'Successfully pass the course final exam with a score of at least 80%. This is required to receive your Pre-Licensure Education Certificate.' },
              { step: '3', title: 'Complete the 6-Hour Contract Writing Course', desc: 'Take the required 6-hour Introduction to Contract Writing course. This must be completed before applying for your license.' },
              { step: '4', title: 'Obtain a Fingerprint Clearance Card', desc: 'Apply for a Fingerprint Clearance Card (FCC) through the Arizona Department of Public Safety (DPS). This background check can take several weeks.' },
              { step: '5', title: 'Pass the Arizona Real Estate Exam', desc: 'Schedule your exam with Pearson VUE. The exam consists of 180 questions, and you must score at least 75% to pass.' },
              { step: '6', title: 'Apply for Your Arizona Real Estate License', desc: 'Submit your application to the Arizona Department of Real Estate (ADRE) within one year of passing the state exam.' },
              { step: '7', title: 'Find a Sponsoring Broker', desc: 'To activate your license, you must be hired by an Arizona designated broker who will approve your hiring on the ADRE online system.' },
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
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">Arizona Real Estate License Requirements</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Eligibility Requirements</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span>Must be at least 18 years old</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Must provide proof of legal presence in the US</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>No college degree required</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Must obtain a Fingerprint Clearance Card (background check)</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Education & Exam Requirements</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span>90 hours of approved pre-license education</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>6 hours of contract writing education</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Pass school final exam (80% or higher)</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Pass Arizona state exam (180 questions, 75% to pass)</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Exam administered by Pearson VUE</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ COST BREAKDOWN ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">Arizona Real Estate License Cost</h2>
          <p className="text-neutral-600 mb-6">Here&apos;s the complete breakdown of what it costs to get your Arizona real estate license in 2026:</p>
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  { item: 'Pre-License Course', low: '$350', high: '$599', note: '90-hr course + 6-hr contract writing' },
                  { item: 'Exam Application & Fee', low: '$75', high: '$75', note: 'Pearson VUE' },
                  { item: 'Original License Fee', low: '$60', high: '$60', note: 'ADRE ($50 license + $10 recovery fund)' },
                  { item: 'Fingerprint Clearance Card', low: '$67', high: '$67', note: 'DPS Fee (vendor fees may apply)' },
                ].map((row, i) => (
                  <tr key={row.item} className={i % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-neutral-800">{row.item}</td>
                    <td className="px-6 py-4 text-neutral-600">{row.low} – {row.high}</td>
                    <td className="px-6 py-4 text-neutral-400 text-xs">{row.note}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-neutral-200 bg-brand-50">
                  <td className="px-6 py-4 font-bold text-neutral-900">Estimated Total</td>
                  <td className="px-6 py-4 font-bold text-brand-600">$552 – $801+</td>
                  <td className="px-6 py-4 text-xs text-accent-600 font-semibold">Save up to 30% with CertLaunch</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============ ARIZONA REAL ESTATE EXAM ============ */}
      <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-6">The Arizona Real Estate Exam</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Exam Details</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Format:</strong> 180 multiple-choice questions</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Passing score:</strong> 75%</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Time limit:</strong> 5 hours (300 minutes)</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Provider:</strong> Pearson VUE</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Cost:</strong> $75 (includes application)</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Exam Topics</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span>Real Estate Statutes and Commissioner&apos;s Rules</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Agency Relationships and Managerial Duties</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Contracts and Contract Law</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Property Interests, Estates, and Tenancies</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Government Rights and Real Estate Law</span></li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-bold text-amber-800 mb-2">💡 Exam Prep Tip</h3>
            <p className="text-sm text-amber-700">The Arizona exam is long (5 hours) and comprehensive. Focus heavily on the 6-hour contract writing content and state-specific statutes. Schools like RealEstateU and AceableAgent offer excellent exam prep tools to help you master these topics.</p>
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
              <p className="text-xs text-neutral-500 mt-1">Studying 6–8 hours/day</p>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6 text-center">
              <p className="text-3xl font-extrabold text-brand-600 mb-2">6–10 weeks</p>
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
              Get the Complete Arizona Real Estate Guide
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
