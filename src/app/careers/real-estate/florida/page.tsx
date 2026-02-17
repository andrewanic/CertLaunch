import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Real Estate Schools in Florida (2026) — Compare & Save | CertLaunch',
  description: 'Compare the best real estate licensing schools in Florida. See prices, discounts, ratings, and reviews. Save up to 80% with exclusive CertLaunch discount codes.',
};

const topSchools = [
  {
    name: 'RealEstateU',
    regularPrice: 349,
    discountPrice: 69,
    discountCode: 'CERTLAUNCH',
    rating: 4.5,
    format: 'Self-paced online',
    badge: 'Best Value',
    badgeColor: 'bg-accent-500',
    bullets: ['Lowest price in Florida', '63-hour course completed at your pace', '30-day money-back guarantee'],
  },
  {
    name: 'Aceable Agent',
    regularPrice: 299,
    discountPrice: 199,
    discountCode: 'CERTLAUNCH',
    rating: 4.3,
    format: 'App + online',
    badge: null,
    badgeColor: '',
    bullets: ['Mobile app for studying anywhere', 'Bite-sized lessons', 'Great for busy schedules'],
  },
  {
    name: '360 Training',
    regularPrice: 349,
    discountPrice: 279,
    discountCode: 'CERTLAUNCH',
    rating: 4.0,
    format: 'Self-paced online',
    badge: null,
    badgeColor: '',
    bullets: ['ARELLO-approved courses', 'Print-friendly study materials', 'Strong customer support'],
  },
  {
    name: 'The CE Shop',
    regularPrice: 449,
    discountPrice: 349,
    discountCode: 'CERTLAUNCH',
    rating: 4.6,
    format: 'Interactive online',
    badge: 'Top Rated',
    badgeColor: 'bg-brand-500',
    bullets: ['Interactive, engaging content', 'Excellent pass rates', 'Exam prep tools included'],
  },
  {
    name: 'Colibri (Gold Coast)',
    regularPrice: 499,
    discountPrice: 399,
    discountCode: 'CERTLAUNCH',
    rating: 4.5,
    format: 'Live + online',
    badge: null,
    badgeColor: '',
    bullets: ['Live instructor option available', 'Florida-focused curriculum', 'Career resources included'],
  },
];

const otherSchools = [
  {
    name: 'Kaplan Real Estate',
    regularPrice: 499,
    discountPrice: null,
    discountCode: null,
    rating: 4.2,
    format: 'Live + online',
    bullets: ['Well-known national brand', 'In-person classes available', 'Instructor support'],
  },
  {
    name: 'Dearborn Real Estate',
    regularPrice: 399,
    discountPrice: null,
    discountCode: null,
    rating: 3.8,
    format: 'Online',
    bullets: ['Straightforward coursework', 'Affordable pricing', 'No-frills approach'],
  },
  {
    name: 'Bob Hogue School of Real Estate',
    regularPrice: 299,
    discountPrice: null,
    discountCode: null,
    rating: 4.1,
    format: 'Live + online',
    bullets: ['Florida local institution', 'In-person classes in Tampa Bay area', 'Strong local reputation'],
  },
];

const faqs = [
  { q: 'How much does it cost to get a real estate license in Florida?', a: 'Total costs range from $275 to $800+. This includes the pre-license course ($69–$499), state exam fee ($57.75), license application ($83.75), fingerprinting (~$55), and background check. Using a CertLaunch discount code can save you up to $280 on the course alone.' },
  { q: 'How long does it take to get a real estate license in Florida?', a: 'Most students complete the process in 2–8 weeks. The 63-hour pre-license course can be finished in as little as 2 weeks if studying full-time, or up to 6 months part-time. After passing the course, you can schedule your state exam within 1–2 weeks.' },
  { q: 'What are the requirements to get a real estate license in Florida?', a: 'You must be at least 18 years old, have a US Social Security number, complete 63 hours of approved pre-license education, pass the Florida state exam with a score of 75% or higher, submit fingerprints, pass a background check, and apply through the Florida DBPR.' },
  { q: 'Is the Florida real estate exam hard?', a: 'The Florida real estate exam has a pass rate of approximately 50–60% on the first attempt. It consists of 100 multiple-choice questions, and you need 75% to pass. Proper preparation with a quality pre-license course and exam prep significantly improves your chances.' },
  { q: 'Can I take the Florida real estate course online?', a: 'Yes. All schools listed on CertLaunch offer online, state-approved 63-hour pre-license courses. Online courses are self-paced, meaning you can study on your own schedule from anywhere in Florida.' },
  { q: 'How much do real estate agents make in Florida?', a: 'Florida real estate agents earn an average of $55,000–$75,000 per year. Top agents in markets like Miami, Orlando, and Tampa can earn $100,000–$200,000+. Income depends on commission structure, brokerage, and market activity.' },
  { q: 'Do I need a college degree to become a real estate agent in Florida?', a: 'No. Florida does not require a college degree to obtain a real estate license. You only need to complete the 63-hour pre-license course, pass the state exam, and meet the basic application requirements.' },
  { q: 'What is the best real estate school in Florida?', a: 'The best school depends on your budget and learning style. RealEstateU offers the lowest price at $69 with a CertLaunch discount. The CE Shop is top-rated for interactive content. Colibri (Gold Coast) offers live instructor-led classes. Compare all options above to find your best fit.' },
  { q: 'How do I choose between online and in-person real estate classes in Florida?', a: 'Online courses offer flexibility and are typically cheaper. In-person classes provide structured schedules and direct instructor interaction. If you are self-motivated and prefer studying at your own pace, online is ideal. If you prefer a classroom setting, consider Colibri or Bob Hogue School.' },
  { q: 'Can I get my Florida real estate license if I have a criminal record?', a: 'It depends on the offense. The Florida DBPR reviews each application individually. Felonies and certain misdemeanors may disqualify you, but many offenses do not automatically prevent licensure. You can apply for a pre-determination before taking the course to find out your eligibility.' },
];

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.3;
  return (
    <span className="flex items-center gap-1">
      <span className="text-yellow-400 text-sm">{'★'.repeat(full)}{half ? '½' : ''}</span>
      <span className="text-sm font-medium text-neutral-600">{rating}</span>
    </span>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function FloridaRealEstatePage() {
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
            <span className="text-white">Florida</span>
          </nav>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Get Your Real Estate License in Florida
          </h1>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl">
            Compare {topSchools.length + otherSchools.length} approved schools. Find the best price with exclusive CertLaunch discounts.
          </p>
          {/* Stats bar */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Course Cost</p>
              <p className="text-white font-bold text-lg">$69 – $499</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Time to License</p>
              <p className="text-white font-bold text-lg">2 – 8 weeks</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Avg Salary</p>
              <p className="text-white font-bold text-lg">$65,000/yr</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <p className="text-blue-300 text-xs font-medium">Required Hours</p>
              <p className="text-white font-bold text-lg">63 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TOP SCHOOLS COMPARISON ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display font-bold text-2xl text-neutral-900">Top {topSchools.length} Schools — Sorted by Price</h2>
              <p className="text-neutral-500 text-sm mt-1">Lowest price first. All schools are Florida DBPR-approved.</p>
            </div>
          </div>

          {/* Desktop: Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-neutral-200 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wide">
                  <th className="pb-3 pr-4">School</th>
                  <th className="pb-3 pr-4">Price</th>
                  <th className="pb-3 pr-4">Discount Code</th>
                  <th className="pb-3 pr-4">Rating</th>
                  <th className="pb-3 pr-4">Format</th>
                  <th className="pb-3"></th>
                </tr>
              </thead>
              <tbody>
                {topSchools.map((school) => {
                  const pct = Math.round(((school.regularPrice - school.discountPrice) / school.regularPrice) * 100);
                  return (
                    <tr key={school.name} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                      <td className="py-5 pr-4">
                        <div className="flex items-start gap-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-display font-bold text-neutral-900">{school.name}</span>
                              {school.badge && (
                                <span className={`${school.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}>{school.badge}</span>
                              )}
                            </div>
                            <ul className="mt-2 space-y-1">
                              {school.bullets.map((b) => (
                                <li key={b} className="flex items-start gap-1.5 text-xs text-neutral-500">
                                  <CheckIcon />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </td>
                      <td className="py-5 pr-4">
                        <span className="text-neutral-400 line-through text-sm">${school.regularPrice}</span>
                        <span className="block text-xl font-extrabold text-accent-500">${school.discountPrice}</span>
                        <span className="text-xs font-semibold text-accent-600">{pct}% off</span>
                      </td>
                      <td className="py-5 pr-4">
                        <span className="inline-block bg-accent-500/10 border border-accent-500/30 text-accent-600 font-mono font-bold text-sm px-3 py-1.5 rounded-lg">
                          {school.discountCode}
                        </span>
                      </td>
                      <td className="py-5 pr-4">
                        <Stars rating={school.rating} />
                      </td>
                      <td className="py-5 pr-4">
                        <span className="text-sm text-neutral-600">{school.format}</span>
                      </td>
                      <td className="py-5">
                        <a href="#" className="inline-flex items-center bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap">
                          Enroll with Discount →
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile: Cards */}
          <div className="lg:hidden space-y-4">
            {topSchools.map((school) => {
              const pct = Math.round(((school.regularPrice - school.discountPrice) / school.regularPrice) * 100);
              return (
                <div key={school.name} className="bg-white rounded-xl border border-neutral-200 p-5 relative">
                  {school.badge && (
                    <span className={`absolute top-4 right-4 ${school.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full`}>{school.badge}</span>
                  )}
                  <h3 className="font-display font-bold text-lg text-neutral-900 mb-1">{school.name}</h3>
                  <Stars rating={school.rating} />
                  <p className="text-xs text-neutral-500 mt-1 mb-3">{school.format}</p>
                  <ul className="space-y-1 mb-4">
                    {school.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-1.5 text-sm text-neutral-600">
                        <CheckIcon />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-neutral-400 line-through">${school.regularPrice}</span>
                    <span className="text-2xl font-extrabold text-accent-500">${school.discountPrice}</span>
                    <span className="savings-badge text-xs font-bold text-white px-2 py-0.5 rounded-full">{pct}% off</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs text-neutral-500">Use code:</span>
                    <span className="bg-accent-500/10 border border-accent-500/30 text-accent-600 font-mono font-bold text-sm px-3 py-1.5 rounded-lg">
                      {school.discountCode}
                    </span>
                  </div>
                  <a href="#" className="block w-full text-center bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm py-3 rounded-lg transition-colors">
                    Enroll with Discount →
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ OTHER SCHOOLS ============ */}
      <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-xl text-neutral-900 mb-6">All Other Schools in Florida</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherSchools.map((school) => (
              <div key={school.name} className="bg-white rounded-xl border border-neutral-200 p-5">
                <h3 className="font-display font-bold text-neutral-900 mb-1">{school.name}</h3>
                <Stars rating={school.rating} />
                <p className="text-xs text-neutral-500 mt-1 mb-3">{school.format}</p>
                <ul className="space-y-1 mb-4">
                  {school.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-1.5 text-sm text-neutral-600">
                      <CheckIcon />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mb-4">
                  <span className="text-xl font-extrabold text-neutral-800">${school.regularPrice}</span>
                  <span className="text-xs text-neutral-400 ml-2">No discount available yet</span>
                </div>
                <a href="#" className="block w-full text-center bg-neutral-800 hover:bg-neutral-900 text-white font-semibold text-sm py-3 rounded-lg transition-colors">
                  Visit School →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW TO GET LICENSED ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">How to Get Your Real Estate License in Florida</h2>
          <div className="space-y-6">
            {[
              { step: '1', title: 'Complete 63 Hours of Pre-License Education', desc: 'Enroll in a Florida DBPR-approved 63-hour pre-license course. All schools listed above are approved. Courses can be completed online at your own pace.' },
              { step: '2', title: 'Pass the Course Final Exam', desc: 'Each school requires you to pass a final exam at the end of the course. This is separate from the state exam and is typically easier.' },
              { step: '3', title: 'Submit Fingerprints & Background Check', desc: 'Schedule fingerprinting through an approved vendor (~$55). The Florida DBPR will conduct a background check as part of your application.' },
              { step: '4', title: 'Pass the Florida State Exam', desc: 'Register with Pearson VUE to take the Florida real estate exam. The exam has 100 questions and requires a 75% score to pass. Cost: $57.75.' },
              { step: '5', title: 'Apply for Your License', desc: 'Submit your license application to the Florida DBPR. Application fee: $83.75. Once approved, you can activate your license under a sponsoring broker.' },
              { step: '6', title: 'Find a Sponsoring Broker & Start Your Career', desc: 'Florida requires you to work under a licensed broker. Research brokerages in your area and choose one that fits your goals.' },
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
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">Florida Real Estate Licensing Requirements</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Eligibility</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span>Must be at least 18 years old</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Must have a US Social Security number</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>No college degree required</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Must pass background check</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3">Education & Exam</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2"><CheckIcon /><span>63 hours of approved pre-license education</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Pass school final exam</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Pass Florida state exam (100 questions, 75% to pass)</span></li>
                <li className="flex items-start gap-2"><CheckIcon /><span>Exam administered by Pearson VUE</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ COST BREAKDOWN ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-8">Total Cost Breakdown</h2>
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  { item: 'Pre-License Course (63 hours)', low: '$69', high: '$499', note: 'Use CertLaunch discount' },
                  { item: 'State Exam Fee', low: '$57.75', high: '$57.75', note: 'Pearson VUE' },
                  { item: 'License Application', low: '$83.75', high: '$83.75', note: 'Florida DBPR' },
                  { item: 'Fingerprinting', low: '$50', high: '$60', note: 'Approved vendor' },
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
                  <td className="px-6 py-4 font-bold text-brand-600">$260 – $700+</td>
                  <td className="px-6 py-4 text-xs text-accent-600 font-semibold">Save up to $280 with CertLaunch</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============ TIMELINE ============ */}
      <section className="py-12 sm:py-16 bg-neutral-50">
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

      {/* ============ EARNING POTENTIAL ============ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl text-neutral-900 mb-6">Earning Potential in Florida</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <p className="text-sm text-neutral-500 mb-1">Average Annual Income</p>
              <p className="text-3xl font-extrabold text-neutral-900">$55,000 – $75,000</p>
              <p className="text-xs text-neutral-400 mt-1">Based on Florida market data</p>
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
              Florida real estate agents typically earn 2.5%–3% commission per transaction. On a $400,000 home (Florida median), that&apos;s approximately <strong>$10,000–$12,000 per sale</strong>. New agents on a 70/30 split with their brokerage would keep $7,000–$8,400. Closing 6–8 deals your first year is a common benchmark, putting first-year earnings at $42,000–$67,000.
            </p>
            <h4 className="font-semibold text-neutral-800 text-sm mb-2">Top-Earning Florida Markets</h4>
            <div className="flex flex-wrap gap-2">
              {['Miami-Dade', 'Palm Beach', 'Orlando', 'Tampa Bay', 'Jacksonville', 'Naples', 'Fort Lauderdale', 'Sarasota'].map((city) => (
                <span key={city} className="bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1 text-xs text-neutral-600">{city}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ MID-PAGE EMAIL CAPTURE ============ */}
      <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-brand-900 rounded-2xl p-8 text-center">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
              Get the Complete Florida Real Estate Guide
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
      <section className="py-12 sm:py-16">
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
