import type { Metadata } from 'next';
import Link from 'next/link';
import SchoolComparison from './SchoolComparison';

const SCHOOL_COUNT = 6;

export const metadata: Metadata = {
  title: 'Best Online Real Estate Schools in New York (2026) | Compare & Save | CertLaunch',
  description: 'Compare the best real estate schools in New York for 2026. Get your NY real estate license with exclusive discounts. See requirements, costs, exam info, and how much agents earn.',
  keywords:
    'best real estate schools new york, new york real estate license, how to get real estate license in new york, new york real estate license cost, new york real estate exam, eaccessny, ny dos real estate',
};

const faqs = [
  {
    q: 'How much does it cost to get a real estate license in New York?',
    a: 'Total costs range from $254 to $870+. This includes the 77-hour pre-license course ($99–$689), state exam fee ($15), license application ($65), and fingerprinting ($75–$100). Using a CertLaunch discount code can reduce your course cost.',
  },
  {
    q: 'How long does it take to get a real estate license in New York?',
    a: 'Most students complete the process in 2–12 weeks. The 77-hour pre-license course can be finished in as little as 2–3 weeks studying full-time, or 4–8 weeks part-time. After you pass the course final exam, you can schedule the state exam through eAccessNY.',
  },
  {
    q: 'What are the requirements to get a real estate license in New York?',
    a: 'You must be at least 18 years old, complete 77 hours of DOS-approved pre-license education, pass the school final exam, pass the NY state exam with a score of 70% or higher, find a sponsoring broker, and apply through eAccessNY.',
  },
  {
    q: 'Is the New York real estate exam hard?',
    a: 'The NY real estate exam has a first-time pass rate of approximately 50–60%. It consists of 75 multiple-choice questions, and you need 70% (53 correct) to pass. Choosing a course package with exam prep tools can improve your odds of passing on the first attempt.',
  },
  {
    q: 'Can I take the New York real estate course online?',
    a: 'Yes. Many New York DOS-approved schools offer online, self-paced 77-hour pre-license courses, which allow you to study on your schedule from anywhere in the state.',
  },
  {
    q: 'How much do real estate agents make in New York?',
    a: 'New York real estate agents commonly earn about $85,000–$107,000 per year statewide. In high-value markets like Manhattan and parts of Long Island, top producers can earn $150,000–$300,000+ depending on volume, price points, and brokerage split.',
  },
  {
    q: 'Do I need a college degree to become a real estate agent in New York?',
    a: 'No. New York does not require a college degree to obtain a real estate license. You must complete the 77-hour course, pass the state exam, and meet the basic eligibility requirements.',
  },
  {
    q: 'What is the best real estate school in New York?',
    a: 'The best school depends on your budget and learning style. RealEstateU is a strong value option and includes an exclusive CertLaunch discount code. Aceable Agent is well-rated for mobile learning. The CE Shop and Colibri are strong picks for students who want more structured exam-prep tools.',
  },
  {
    q: 'How do I choose between online and in-person real estate classes in New York?',
    a: 'Online courses are typically cheaper and more flexible. Live or classroom formats can provide more structure and real-time instructor interaction. If you learn best with a set schedule and live support, consider providers that offer live instruction; if you prefer flexibility, a self-paced online course is usually the best fit.',
  },
  {
    q: 'Can I get my New York real estate license if I have a criminal record?',
    a: 'It depends on the offense and your rehabilitation. The NY Department of State reviews applications individually, and a conviction does not automatically disqualify you. If you have concerns, review Article 23-A guidance and consider contacting the DOS for clarity before applying.',
  },
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
            Compare {SCHOOL_COUNT} New York DOS-approved schools. Find the best price with exclusive CertLaunch discounts and get your real estate license faster.
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
            <h3 className="font-bold text-neutral-900 mb-3">Commission Structure (Typical Example)</h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              New York real estate agents commonly earn <strong>2.5%–3%</strong> commission per transaction. On a <strong>$450,000</strong> home, that&apos;s approximately <strong>$11,250–$13,500</strong> in gross commission per sale. New agents often start on a <strong>50/50 to 70/30</strong> split with their brokerage, which puts take-home commission at roughly <strong>$5,625–$9,450</strong> per deal.
              Closing <strong>4–8</strong> deals in your first year is a typical range, translating to <strong>$22,500–$75,600</strong> from commissions.
            </p>

            <h4 className="font-semibold text-neutral-800 text-sm mb-2">Top-Earning New York Markets</h4>
            <div className="flex flex-wrap gap-2">
              {['Manhattan', 'Brooklyn', 'Queens', 'Long Island', 'Westchester', 'The Hamptons', 'Hudson Valley', 'Buffalo'].map((market) => (
                <span key={market} className="bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1 text-xs text-neutral-600">{market}</span>
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
              {
                step: '1',
                title: 'Complete 77 Hours of Pre-License Education',
                desc: 'Enroll in a New York DOS-approved 77-hour salesperson qualifying course. Courses can be completed online at your own pace or in a classroom setting, depending on the provider.',
              },
              {
                step: '2',
                title: 'Pass the Course Final Exam',
                desc: 'Each school requires you to pass a proctored final exam at the end of the course. This is separate from the state licensing exam.',
              },
              {
                step: '3',
                title: 'Schedule and Pass the State Exam (eAccessNY)',
                desc: 'Register through eAccessNY to take the New York real estate salesperson exam. The exam has 75 multiple-choice questions and requires a 70% score to pass. Exam fee: $15.',
              },
              {
                step: '4',
                title: 'Find a Sponsoring Broker',
                desc: 'New York requires you to work under a licensed broker. Compare brokerages in your area and consider training, splits, support, and lead opportunities.',
              },
              {
                step: '5',
                title: 'Apply for Your License (eAccessNY)',
                desc: 'Submit your license application through eAccessNY. Application fee: $65. Your sponsoring broker must sign off on your application before it can be processed.',
              },
              {
                step: '6',
                title: 'Start Your Career',
                desc: 'After your license is approved and activated under your broker, you can legally practice real estate in New York.',
              },
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
                <li className="flex items-start gap-2"><CheckIcon /><span>Exam administered by NY Department of State via eAccessNY</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ COST BREAKDOWN ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">New York Real Estate License Cost</h2>
          <p className="text-neutral-600 mb-6">Here&apos;s the full cost breakdown to get your New York real estate license in 2026:</p>

          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  { item: 'Pre-License Course (77 hours)', low: '$99', high: '$689', note: 'Use CertLaunch discount when available' },
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
                  <td className="px-6 py-4 text-xs text-accent-600 font-semibold">Savings available with CertLaunch discount codes</td>
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
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Passing score:</strong> 70% (53 correct)</span></li>
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
            <h3 className="font-bold text-amber-800 mb-2">Exam prep tip</h3>
            <p className="text-sm text-amber-700">
              The New York real estate exam has an estimated <strong>50–60%</strong> first-time pass rate. Packages that include exam-prep tools (practice exams, flashcards, readiness tracking) can meaningfully improve your probability of passing on the first attempt.
              New York&apos;s exam is administered by the NY Department of State through <strong>eAccessNY</strong>.
            </p>
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
