import type { Metadata } from 'next';
import Link from 'next/link';
import SchoolComparison from './SchoolComparison';

export const metadata: Metadata = {
  title: 'Best Online Real Estate Schools in Pennsylvania (2026) | Compare & Save | CertLaunch',
  description: 'Compare the best real estate schools in Pennsylvania for 2026. Get your PA real estate license with exclusive discounts. See requirements, costs, exam info, and how much agents earn.',
  keywords: 'best real estate schools pennsylvania, pennsylvania real estate license, how to get real estate license in pa, pennsylvania real estate license cost, pa real estate exam, pennsylvania real estate license requirements',
};

const faqs = [
  { q: 'How much does it cost to get a real estate license in Pennsylvania?', a: 'Total costs range from $327 to $805+. This includes the pre-license course ($149–$627), state exam fee ($49), license application ($107), and background check ($22). Using CertLaunch discounts can significantly lower your course cost.' },
  { q: 'How long does it take to get a real estate license in Pennsylvania?', a: 'Most people complete the process in 4 to 12 weeks. Pennsylvania requires 75 hours of pre-license education, which you can complete at your own pace online. After finishing your coursework, you\'ll need to schedule and pass the state exam, then apply for your license.' },
  { q: 'What are the requirements to get a real estate license in Pennsylvania?', a: 'You must be at least 18 years old, have a high school diploma or GED, complete 75 hours of PREC-approved pre-license education, pass the state licensing exam, clear a background check, and find a sponsoring broker.' },
  { q: 'Is the Pennsylvania real estate exam hard?', a: 'The PA exam is moderately challenging, with roughly 64% of candidates passing on their first attempt. The state-specific section tends to be harder than the national portion. Schools that include exam prep packages can significantly boost your pass rate.' },
  { q: 'Can I take the Pennsylvania real estate course online?', a: 'Yes! Pennsylvania allows you to complete all 75 hours of pre-license education online through PREC-approved schools. Online courses let you study at your own pace from anywhere. Compare online schools on CertLaunch to find the best fit and price.' },
  { q: 'How much do real estate agents make in Pennsylvania?', a: 'The median annual salary for real estate sales agents in Pennsylvania is approximately $54,300 according to BLS data. Top earners in markets like Philadelphia and Pittsburgh can make $100,000 to $200,000+ per year.' },
  { q: 'Do I need a college degree to get a real estate license in Pennsylvania?', a: 'No, Pennsylvania does not require a college degree. You need a high school diploma or GED, plus completion of the 75-hour pre-license course. This makes real estate one of the most accessible career paths available.' },
  { q: 'What is the best real estate school in Pennsylvania?', a: 'The best school depends on your priorities — budget, study style, and timeline. CertLaunch compares all PREC-approved online schools side-by-side so you can find the right fit. Use exclusive CertLaunch discount codes to save on any school you choose.' },
  { q: 'How do I choose between online and in-person real estate school in Pennsylvania?', a: 'Online courses offer flexibility and are often more affordable. In-person classes provide structured schedules and face-to-face interaction. Most Pennsylvania students choose online for convenience. Compare both options on CertLaunch to see pricing and features.' },
  { q: 'Can I get a real estate license in Pennsylvania with a criminal record?', a: 'Having a criminal record does not automatically disqualify you. The Pennsylvania Real Estate Commission reviews each application individually, considering the nature and severity of offenses. You must disclose any criminal history on your application.' },
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function PennsylvaniaRealEstatePage() {
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
            <span className="text-white">Pennsylvania</span>
          </nav>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Best Online Real Estate Schools in Pennsylvania (2026)
          </h1>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl">
            Compare 8 Pennsylvania PREC-approved schools. Find the best price with exclusive CertLaunch discounts and get your real estate license faster.
          </p>
          {/* Stats bar */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Course Cost</p>
              <p className="text-white font-bold text-lg">$149 – $627</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Time to License</p>
              <p className="text-white font-bold text-lg">4 – 12 weeks</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Avg Salary</p>
              <p className="text-white font-bold text-lg">$54,300/yr</p>
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
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-6">How Much Do Real Estate Agents Make in Pennsylvania?</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <p className="text-sm text-neutral-500 mb-1">Average Annual Income</p>
              <p className="text-3xl font-extrabold text-neutral-900">$48,000 – $70,000</p>
              <p className="text-xs text-neutral-400 mt-1">Based on Pennsylvania market data</p>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <p className="text-sm text-neutral-500 mb-1">Top Earners</p>
              <p className="text-3xl font-extrabold text-accent-500">$100,000 – $200,000+</p>
              <p className="text-xs text-neutral-400 mt-1">Experienced agents in top markets</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-neutral-200 p-6">
            <h3 className="font-bold text-neutral-900 mb-3">Commission Structure</h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              Pennsylvania real estate agents typically earn 2.5%–3% commission per transaction. On a $286,000 home (PA median), that&apos;s approximately <strong>$7,150–$8,580 per sale</strong>. New agents on a 70/30 split with their brokerage would keep $5,005–$6,006. Closing 6–8 deals your first year is a common benchmark, putting first-year earnings at $30,000–$48,000.
            </p>
            <h4 className="font-semibold text-neutral-800 text-sm mb-2">Top-Earning Pennsylvania Markets</h4>
            <div className="flex flex-wrap gap-2">
              {['Philadelphia', 'Pittsburgh', 'Lehigh Valley', 'King of Prussia', 'Lancaster', 'Harrisburg', 'Bucks County', 'Chester County'].map((city) => (
                <span key={city} className="bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1 text-xs text-neutral-600">{city}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW TO GET LICENSED ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">How to Get a Real Estate License in Pennsylvania</h2>
          <div className="space-y-6">
            {[
              { step: '1', title: 'Complete 75 Hours of Pre-License Education', desc: 'Enroll in a Pennsylvania Real Estate Commission (PREC)-approved 75-hour pre-license course covering Real Estate Fundamentals (30 hours) and Real Estate Practice (45 hours). Courses can be completed online or in-person.' },
              { step: '2', title: 'Pass the Course Final Exam', desc: 'You must pass the final exam for each course module. Upon passing, your school will issue a Certificate of Completion required to schedule the state licensing exam.' },
              { step: '3', title: 'Schedule and Pass the State Licensing Exam', desc: 'Register with Pearson VUE and pay the $49 exam fee. The exam has 120 questions (80 national + 40 state-specific) and you need 75% on both sections to pass.' },
              { step: '4', title: 'Complete a Background Check', desc: 'Submit fingerprints and pay the $22 background check fee. Pennsylvania requires a criminal history check through the Pennsylvania State Police.' },
              { step: '5', title: 'Apply for Your Salesperson License', desc: 'Submit your license application to the Pennsylvania Real Estate Commission with the $107 fee (includes $72 license fee, $25 application fee, and $10 recovery fund fee).' },
              { step: '6', title: 'Find a Sponsoring Broker', desc: 'Pennsylvania requires all new salespersons to work under a licensed real estate broker. Your license cannot be activated until a broker sponsors you.' },
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
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">Pennsylvania Real Estate License Requirements</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Eligibility Requirements</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span>Must be at least 18 years old</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Must have a high school diploma or GED</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Must have a US Social Security number</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>No college degree required</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Must pass a criminal background check</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Education & Exam Requirements</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span>75 hours of PREC-approved pre-license education</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Pass school final exam for each course module</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Pass Pennsylvania state licensing exam</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Exam administered by Pearson VUE</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ COST BREAKDOWN ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">Pennsylvania Real Estate License Cost</h2>
          <p className="text-neutral-600 mb-6">Here&apos;s the complete breakdown of what it costs to get your Pennsylvania real estate license in 2026:</p>
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  { item: 'Pre-License Course', low: '$149', high: '$627', note: 'Use CertLaunch discount' },
                  { item: 'State Exam Fee', low: '$49', high: '$49', note: 'Pearson VUE' },
                  { item: 'License Application', low: '$107', high: '$107', note: 'PA Real Estate Commission' },
                  { item: 'Background Check', low: '$22', high: '$22', note: 'PA State Police' },
                  { item: 'Fingerprinting', low: 'Included', high: 'Included', note: 'Included in background check fee' },
                ].map((row, i) => (
                  <tr key={row.item} className={i % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-neutral-800">{row.item}</td>
                    <td className="px-6 py-4 text-neutral-600">{row.low} – {row.high}</td>
                    <td className="px-6 py-4 text-neutral-400 text-xs">{row.note}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-neutral-200 bg-brand-50">
                  <td className="px-6 py-4 font-bold text-neutral-900">Estimated Total</td>
                  <td className="px-6 py-4 font-bold text-brand-600">$327 – $805+</td>
                  <td className="px-6 py-4 text-xs text-accent-600 font-semibold">Save up to 30% with CertLaunch</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============ PENNSYLVANIA REAL ESTATE EXAM ============ */}
      <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-6">The Pennsylvania Real Estate Exam</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Exam Details</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Format:</strong> 120 multiple-choice questions</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Passing score:</strong> 75% (both sections)</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Time limit:</strong> 3 hours</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Provider:</strong> Pearson VUE</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span><strong>Cost:</strong> $49</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Exam Topics</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span>Real estate principles and practices</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Pennsylvania real estate law</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Contracts and agency relationships</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Property ownership and land use</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Real estate math and calculations</span></li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-bold text-amber-800 mb-2">💡 Exam Prep Tip</h3>
            <p className="text-sm text-amber-700">The Pennsylvania state-specific section has a lower pass rate (~46%) than the national section (~61%). Focus extra study time on PA real estate law and Commission regulations. Schools like RealEstateU and AceableAgent offer excellent exam prep tools to help you master these topics.</p>
          </div>
        </div>
      </section>

      {/* ============ TIMELINE ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-6">How Long Does It Take?</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl border border-neutral-200 p-6 text-center">
              <p className="text-3xl font-extrabold text-brand-600 mb-2">4–5 weeks</p>
              <p className="text-sm font-semibold text-neutral-800">Full-time</p>
              <p className="text-xs text-neutral-500 mt-1">Studying 4–6 hours/day</p>
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
              Get the Complete Pennsylvania Real Estate Guide
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
