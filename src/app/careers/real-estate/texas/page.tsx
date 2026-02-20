import type { Metadata } from 'next';
import Link from 'next/link';
import SchoolComparison from './SchoolComparison';

export const metadata: Metadata = {
  title: 'Best Online Real Estate Schools in Texas (2026) | Compare & Save | CertLaunch',
  description: 'Compare the best real estate schools in Texas for 2026. Get your Texas real estate license with exclusive discounts and TREC-approved courses.',
  keywords: 'best real estate schools texas, texas real estate license, how to get real estate license in texas, texas real estate license cost, texas real estate exam, texas real estate license requirements',
};

const faqs = [
  { 
    q: 'How much does it cost to get a real estate license in Texas?', 
    a: 'The total cost is typically between $535 and $900. This includes the 180-hour pre-license course ($250–$600), the TREC application fee ($205), the fingerprinting fee ($38.25), and the state exam fee ($43).' 
  },
  { 
    q: 'How long does it take to get a Texas real estate license?', 
    a: 'It typically takes 3 to 6 months. You must complete 180 classroom hours of education, which is significantly more than most other states.' 
  },
  { 
    q: 'What are the requirements for a Texas real estate license?', 
    a: 'You must be at least 18 years old, a U.S. citizen or lawfully admitted alien, and a resident of Texas. You must complete 180 hours of education, submit an application, pass a background check, and pass the state exam.' 
  },
  { 
    q: 'Is the Texas real estate exam hard?', 
    a: 'The exam is challenging, with a first-time pass rate around 56–60%. It consists of 125 questions, and you must pass both the National (56/85 correct) and State (21/40 correct) portions.' 
  },
  { 
    q: 'Can I take the Texas real estate courses online?', 
    a: 'Yes, TREC approves many providers to offer the 180-hour pre-license coursework entirely online. Online courses allow you to study at your own pace.' 
  },
  { 
    q: 'How much do real estate agents make in Texas?', 
    a: 'The average annual income for Texas real estate agents varies widely but typically ranges from $45,000 to $85,000. Top producers in major markets like Dallas or Austin can earn well over $150,000.' 
  },
  { 
    q: 'Do I need a college degree to be a real estate agent in Texas?', 
    a: 'No, you do not need a college degree. However, you must complete the 180 hours of specific real estate education required by TREC.' 
  },
  { 
    q: 'Who is the exam provider for the Texas real estate exam?', 
    a: 'Pearson VUE administers the Texas real estate sales agent exam. You will schedule your exam through their website after your application is approved by TREC.' 
  },
  { 
    q: 'What happens if I fail the Texas real estate exam?', 
    a: 'If you fail one or both portions, you can retake the failed portion(s). You have three attempts within one year of filing your application. The retake fee is $43.' 
  },
  { 
    q: 'Can I get a Texas real estate license with a criminal record?', 
    a: 'It depends on the offense. TREC evaluates each applicant\'s honesty, trustworthiness, and integrity. You can request a \'Fitness Determination\' from TREC before applying to see if you would be eligible.' 
  }
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function TexasRealEstatePage() {
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
            <span className="text-white">Texas</span>
          </nav>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Best Online Real Estate Schools in Texas (2026)
          </h1>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl">
            Compare 10 TREC-approved schools. Find the best price with exclusive CertLaunch discounts and satisfy the 180-hour requirement faster.
          </p>
          {/* Stats bar */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Course Cost</p>
              <p className="text-white font-bold text-lg">$249 – $599</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Time to License</p>
              <p className="text-white font-bold text-lg">3 – 6 months</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Avg Salary</p>
              <p className="text-white font-bold text-lg">$45,000 – $85,000</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Required Hours</p>
              <p className="text-white font-bold text-lg">180 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SCHOOL COMPARISON (Client Component) ============ */}
      <SchoolComparison />

      {/* ============ EARNING POTENTIAL ============ */}
      <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-6">How Much Do Real Estate Agents Make in Texas?</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <p className="text-sm text-neutral-500 mb-1">Average Annual Income</p>
              <p className="text-3xl font-extrabold text-neutral-900">$45,000 – $85,000</p>
              <p className="text-xs text-neutral-400 mt-1">Based on Texas market data</p>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <p className="text-sm text-neutral-500 mb-1">Top Earners</p>
              <p className="text-3xl font-extrabold text-accent-500">$100,000 – $150,000+</p>
              <p className="text-xs text-neutral-400 mt-1">Experienced agents in top markets</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-neutral-200 p-6">
            <h3 className="font-bold text-neutral-900 mb-3">Commission Structure</h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              Texas real estate agents typically earn 2.5%–3% commission per transaction. On a $340,000 home (Texas median), that&apos;s approximately <strong>$8,500–$10,200 per sale</strong>. New agents on a 60/40 split with their brokerage would keep $5,100–$6,120. Closing 4–6 deals your first year is a common benchmark, putting first-year earnings at $20,000–$37,000.
            </p>
            <h4 className="font-semibold text-neutral-800 text-sm mb-2">Top-Earning Texas Markets</h4>
            <div className="flex flex-wrap gap-2">
              {['Dallas-Fort Worth', 'Houston', 'Austin', 'San Antonio', 'El Paso', 'McAllen', 'Corpus Christi', 'Plano'].map((city) => (
                <span key={city} className="bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1 text-xs text-neutral-600">{city}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW TO GET LICENSED ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">How to Get a Real Estate License in Texas</h2>
          <div className="space-y-6">
            {[
              { 
                step: '1', 
                title: 'Complete 180 Hours of Pre-License Education', 
                desc: 'Take the 6 required 30-hour courses: Principles I & II, Law of Agency, Law of Contracts, Promulgated Contract Forms, and Real Estate Finance.' 
              },
              { 
                step: '2', 
                title: 'File Your Application with TREC', 
                desc: 'Submit your application online using the TREC Online Services portal. The application fee is $205.' 
              },
              { 
                step: '3', 
                title: 'Get Fingerprinted', 
                desc: 'Schedule a fingerprinting appointment with IdentoGO for your background check. The fee is typically around $38.25.' 
              },
              { 
                step: '4', 
                title: 'Pass the Texas Real Estate Exam', 
                desc: 'Schedule your exam with Pearson VUE. The exam has 125 questions, and you must pass both the national and state portions.' 
              },
              { 
                step: '5', 
                title: 'Find a Sponsoring Broker', 
                desc: 'You cannot practice real estate until your license is sponsored by an active Texas broker. Once sponsored, your license becomes active.' 
              }
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
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">Texas Real Estate License Requirements</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Eligibility Requirements</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span>Must be at least 18 years old</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Must be a US citizen or lawfully admitted alien</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Must reside in Texas (unless applying as out-of-state)</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Must meet TREC&apos;s qualifications for honesty, trustworthiness, and integrity</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Education & Exam Requirements</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span>180 hours of approved pre-license education (6 courses)</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Pass course final exams</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Pass Texas state exam (125 questions total)</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Exam administered by Pearson VUE</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ COST BREAKDOWN ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">Texas Real Estate License Cost</h2>
          <p className="text-neutral-600 mb-6">Here&apos;s the complete breakdown of what it costs to get your Texas real estate license in 2026:</p>
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  { item: 'Pre-License Course', low: '$249', high: '$599', note: '180-hour package' },
                  { item: 'License Application', low: '$205', high: '$205', note: 'Paid to TREC' },
                  { item: 'Fingerprinting', low: '$38.25', high: '$38.25', note: 'IdentoGO fee' },
                  { item: 'State Exam Fee', low: '$43', high: '$43', note: 'Per attempt (Pearson VUE)' },
                  { item: 'Background Check', low: 'Included', high: 'Included', note: 'In fingerprint fee' },
                ].map((row, i) => (
                  <tr key={row.item} className={i % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-neutral-800">{row.item}</td>
                    <td className="px-6 py-4 text-neutral-600">{row.low} – {row.high}</td>
                    <td className="px-6 py-4 text-neutral-400 text-xs">{row.note}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-neutral-200 bg-brand-50">
                  <td className="px-6 py-4 font-bold text-neutral-900">Estimated Total</td>
                  <td className="px-6 py-4 font-bold text-brand-600">$535 – $885+</td>
                  <td className="px-6 py-4 text-xs text-accent-600 font-semibold">Save up to 30% with CertLaunch</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============ TEXAS REAL ESTATE EXAM ============ */}
      <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-6">The Texas Real Estate Exam</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Exam Details</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Format:</strong> 125 multiple-choice questions</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Passing score:</strong> National: 56/85 (66%) | State: 21/40 (52.5%)</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Time limit:</strong> 4 hours (240 mins)</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Provider:</strong> Pearson VUE</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Cost:</strong> $43</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Exam Topics</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span>Principles of Real Estate</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Land Use Controls and Regulation</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Valuation and Market Analysis</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Financing</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Laws of Agency</span></li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-bold text-amber-800 mb-2">💡 Exam Prep Tip</h3>
            <p className="text-sm text-amber-700">The Texas exam has a ~56–60% first-time pass rate. Focus heavily on the National portion, which requires a higher percentage (66%) to pass than the State portion. Schools that include exam prep packages significantly improve your chances of passing on the first try.</p>
          </div>
        </div>
      </section>

      {/* ============ TIMELINE ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-6">How Long Does It Take?</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl border border-neutral-200 p-6 text-center">
              <p className="text-3xl font-extrabold text-brand-600 mb-2">4–6 weeks</p>
              <p className="text-sm font-semibold text-neutral-800">Full-time</p>
              <p className="text-xs text-neutral-500 mt-1">Studying 6–8 hours/day</p>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6 text-center">
              <p className="text-3xl font-extrabold text-brand-600 mb-2">2–3 months</p>
              <p className="text-sm font-semibold text-neutral-800">Part-time</p>
              <p className="text-xs text-neutral-500 mt-1">Studying 10–15 hours/week</p>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6 text-center">
              <p className="text-3xl font-extrabold text-brand-600 mb-2">4–6 months</p>
              <p className="text-sm font-semibold text-neutral-800">Casual pace</p>
              <p className="text-xs text-neutral-500 mt-1">Studying 5 hours/week</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MID-PAGE EMAIL CAPTURE ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-brand-900 rounded-2xl p-8 text-center">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
              Get the Complete Texas Real Estate Guide
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
