import type { Metadata } from 'next';
import Link from 'next/link';
import SchoolComparison from './SchoolComparison';

export const metadata: Metadata = {
  title: 'Best Online Real Estate Schools in New York (2026) | Compare & Save | CertLaunch',
  description: 'Compare the best real estate schools in New York for 2026. Get your NY real estate license with exclusive discounts. See requirements, costs, exam info, and how much agents earn.',
  keywords: 'best real estate schools new york, new york real estate license, how to get real estate license in new york, new york real estate license cost, ny real estate exam, new york real estate license requirements',
};

const faqs = [
  { q: 'How much does it cost to get a real estate license in New York?', a: 'Total costs range from $254 to $870+. This includes the 77-hour pre-license course ($99–$689), state exam fee ($15), license application ($65), and fingerprinting ($75–$100). Using a CertLaunch discount code can save you up to 20% on your course.' },
  { q: 'How long does it take to get a real estate license in New York?', a: 'Most students complete the process in 2–12 weeks. The 77-hour pre-license course can be finished in as little as 2 weeks studying full-time. After passing the course, you can schedule your state exam within days through eAccessNY.' },
  { q: 'What are the requirements to get a real estate license in New York?', a: 'You must be at least 18 years old, complete 77 hours of approved pre-license education, pass the school final exam, pass the NY state exam with a score of 70% or higher, find a sponsoring broker, and apply through eAccessNY.' },
  { q: 'Is the New York real estate exam hard?', a: 'The NY real estate exam has a first-time pass rate of approximately 50–60%. It consists of 75 multiple-choice questions, and you need 70% (53 correct) to pass. Proper preparation with exam prep tools significantly improves your chances.' },
  { q: 'Can I take the New York real estate course online?', a: 'Yes. Most schools listed on CertLaunch offer online, state-approved 77-hour pre-license courses. Online courses are self-paced, meaning you can study on your own schedule from anywhere.' },
  { q: 'How much do real estate agents make in New York?', a: 'New York real estate agents earn an average of $85,000–$107,000 per year statewide. In New York City, top agents earn $150,000–$300,000+. First-year agents typically earn $22,000–$75,000 depending on market and effort.' },
  { q: 'Do I need a college degree to become a real estate agent in New York?', a: 'No. New York does not require a college degree to obtain a real estate license. You only need to complete the 77-hour pre-license course, pass the state exam, and meet the basic application requirements.' },
  { q: 'What is the best real estate school in New York?', a: 'The best school depends on your budget and learning style. RealEstateU offers the best value starting at $99 with CertLaunch discount. Aceable Agent is top-rated for mobile learning. NYREI offers in-person classes with lifetime job placement. Compare all options above to find your best fit.' },
  { q: 'How do I choose between online and in-person real estate classes in New York?', a: 'Online courses offer flexibility and are typically cheaper ($99–$339). In-person classes provide structured schedules and networking opportunities. If you prefer classroom learning with job placement support, consider NYREI. If you want self-paced study, RealEstateU or Aceable are great options.' },
  { q: 'Can I get my New York real estate license if I have a criminal record?', a: 'It depends on the offense. The NY DOS reviews each application individually. Under Article 23-A, a conviction does not automatically disqualify you. The state considers factors like rehabilitation and time elapsed. You may want to consult with the DOS before enrolling.' },
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function NewYorkRealEstatePage() {
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
            <span className="text-white">New York</span>
          </nav>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Best Online Real Estate Schools in New York (2026)
          </h1>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl">
            Compare 10 New York DOS-approved schools. Find the best price with exclusive CertLaunch discounts and get your real estate license faster.
          </p>
          {/* Stats bar */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Course Cost</p>
              <p className="text-white font-bold text-lg">$99 – $689</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Time to License</p>
              <p className="text-white font-bold text-lg">2 – 12 weeks</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Avg Salary</p>
              <p className="text-white font-bold text-lg">$95,000/yr</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Required Hours</p>
              <p className="text-white font-bold text-lg">77 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SCHOOL COMPARISON (Client Component) ============ */}
      <SchoolComparison />

      {/* ============ EARNING POTENTIAL ============ */}
      <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-6">How Much Do Real Estate Agents Make in New York?</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <p className="text-sm text-neutral-500 mb-1">Average Annual Income</p>
              <p className="text-3xl font-extrabold text-neutral-900">$85,000 – $107,000</p>
              <p className="text-xs text-neutral-400 mt-1">Based on New York market data</p>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <p className="text-sm text-neutral-500 mb-1">Top Earners</p>
              <p className="text-3xl font-extrabold text-accent-500">$150,000 – $300,000+</p>
              <p className="text-xs text-neutral-400 mt-1">Experienced agents in top markets</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-neutral-200 p-6">
            <h3 className="font-bold text-neutral-900 mb-3">Commission Structure</h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              New York real estate agents typically earn 2.5%–3% commission per transaction. On a $450,000 home (New York median), that&apos;s approximately <strong>$11,250–$13,500 per sale</strong>. New agents on a 50/50 to 70/30 split with their brokerage would keep $5,625–$9,450. Closing 4–8 deals your first year is a common benchmark, putting first-year earnings at $22,500–$75,600.
            </p>
            <h4 className="font-semibold text-neutral-800 text-sm mb-2">Top-Earning New York Markets</h4>
            <div className="flex flex-wrap gap-2">
              {['Manhattan', 'Brooklyn', 'Queens', 'Long Island', 'Westchester', 'The Hamptons', 'Hudson Valley', 'Buffalo'].map((city) => (
                <span key={city} className="bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1 text-xs text-neutral-600">{city}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW TO GET LICENSED ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">How to Get a Real Estate License in New York</h2>
          <div className="space-y-6">
            {[
              { step: '1', title: 'Complete 77 Hours of Pre-License Education', desc: 'Enroll in a New York DOS-approved 77-hour salesperson qualifying course. All schools listed above are approved. Courses can be completed online at your own pace or in a classroom.' },
              { step: '2', title: 'Pass the Course Final Exam', desc: 'Each school requires you to pass a proctored final exam at the end of the course. This is separate from the state exam.' },
              { step: '3', title: 'Schedule and Pass the State Exam', desc: 'Register through eAccessNY to take the NY real estate salesperson exam. The exam has 75 multiple-choice questions and requires a 70% score to pass. Exam fee: $15.' },
              { step: '4', title: 'Find a Sponsoring Broker', desc: 'New York requires you to work under a licensed broker. Research brokerages in your area — many schools like NYREI offer job placement assistance.' },
              { step: '5', title: 'Apply for Your License', desc: 'Submit your license application through eAccessNY. Application fee: $65. Your sponsoring broker must sign off on your application before it can be processed.' },
              { step: '6', title: 'Start Your Career', desc: 'Once your license is approved and activated under your broker, you can legally practice real estate in New York.' },
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
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">New York Real Estate License Requirements</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Eligibility Requirements</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span>Must be at least 18 years old</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Must be a US citizen or lawful permanent resident</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>No college degree required</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Must pass background check (via eAccessNY)</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Education & Exam Requirements</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span>77 hours of approved pre-license education</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Pass school proctored final exam</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Pass NY state exam (75 questions, 70% to pass)</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Exam administered by NY Department of State</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ COST BREAKDOWN ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">New York Real Estate License Cost</h2>
          <p className="text-neutral-600 mb-6">Here&apos;s the complete breakdown of what it costs to get your New York real estate license in 2026:</p>
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  { item: 'Pre-License Course (77 hours)', low: '$99', high: '$689', note: 'Use CertLaunch discount' },
                  { item: 'State Exam Fee', low: '$15', high: '$15', note: 'eAccessNY' },
                  { item: 'License Application', low: '$65', high: '$65', note: 'NY DOS' },
                  { item: 'Fingerprinting', low: '$75', high: '$100', note: 'IdentoGO' },
                  { item: 'Background Check', low: 'Included', high: 'Included', note: 'Part of application' },
                ].map((row, i) => (
                  <tr key={row.item} className={i % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-neutral-800">{row.item}</td>
                    <td className="px-6 py-4 text-neutral-600">{row.low} – {row.high}</td>
                    <td className="px-6 py-4 text-neutral-400 text-xs">{row.note}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-neutral-200 bg-brand-50">
                  <td className="px-6 py-4 font-bold text-neutral-900">Estimated Total</td>
                  <td className="px-6 py-4 font-bold text-brand-600">$254 – $870+</td>
                  <td className="px-6 py-4 text-xs text-accent-600 font-semibold">Save up to 20% with CertLaunch</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============ NEW YORK REAL ESTATE EXAM ============ */}
      <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-6">The New York Real Estate Exam</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Exam Details</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Format:</strong> 75 multiple-choice questions</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Passing score:</strong> 70% (53 correct answers)</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Time limit:</strong> 1.5 hours</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Provider:</strong> NY Department of State (eAccessNY)</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Cost:</strong> $15</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Exam Topics</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span>License law and regulations</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Agency and fiduciary responsibilities</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Contracts and legal aspects</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Property ownership and land use</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Real estate math and calculations</span></li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-bold text-amber-800 mb-2">💡 Exam Prep Tip</h3>
            <p className="text-sm text-amber-700">The NY real estate exam has a ~50-60% first-time pass rate. The exam is administered by the NY DOS (not Pearson VUE like most states). Schools that include exam prep packages (practice tests, flashcards, simulated exams) significantly improve your chances of passing on the first try. Consider the Deluxe or Premium packages from Aceable, CE Shop, or Colibri if exam prep is important to you.</p>
          </div>
        </div>
      </section>

      {/* ============ TIMELINE ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-6">How Long Does It Take?</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl border border-neutral-200 p-6 text-center">
              <p className="text-3xl font-extrabold text-brand-600 mb-2">2–3 weeks</p>
              <p className="text-sm font-semibold text-neutral-800">Full-time</p>
              <p className="text-xs text-neutral-500 mt-1">Studying 4–6 hours/day</p>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6 text-center">
              <p className="text-3xl font-extrabold text-brand-600 mb-2">4–8 weeks</p>
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
              Get the Complete New York Real Estate Guide
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
