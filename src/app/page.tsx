import Link from 'next/link';
import verticals from '@/data/verticals.json';
import EmailCapture from '@/components/EmailCapture';
import StickyEmailBar from '@/components/StickyEmailBar';
import ExitIntent from '@/components/ExitIntent';

const careerImages: Record<string, { img: string; price: string }> = {
  'real-estate': { img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop', price: 'From $69' },
  'mortgage-loan-officer': { img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop', price: 'From $99' },
  'appraisal': { img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop', price: 'From $149' },
  'insurance': { img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop', price: 'From $79' },
  'home-inspection': { img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop', price: 'From $149' },
};

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Real Estate Agent',
    state: 'Florida',
    quote: 'I got licensed in 6 weeks and closed my first deal a month later. CertLaunch helped me find the most affordable school in my state.',
    rating: 5,
  },
  {
    name: 'Marcus J.',
    role: 'Mortgage Loan Officer',
    state: 'Texas',
    quote: 'The side-by-side comparison made it so easy. I saved $200 on my MLO course compared to what I was about to pay.',
    rating: 5,
  },
  {
    name: 'Jennifer L.',
    role: 'Insurance Agent',
    state: 'California',
    quote: "I was stuck in retail making $15/hour. Now I'm a licensed insurance agent earning six figures. Best decision I ever made.",
    rating: 5,
  },
];

const featuredSchools = [
  {
    name: 'RealEstateU',
    rating: 4.8,
    reviews: '225,000+',
    regularPrice: '$399',
    salePrice: '$69',
    badge: 'Best Value',
    badgeColor: 'bg-green-500',
    states: '22+ States',
    features: ['Self-paced online', '30-day guarantee', 'BBB A+ rated'],
  },
  {
    name: 'Kaplan Real Estate',
    rating: 4.5,
    reviews: '50,000+',
    regularPrice: '$499',
    salePrice: '$299',
    badge: 'Most Popular',
    badgeColor: 'bg-blue-500',
    states: '30+ States',
    features: ['Live + online options', 'Exam prep included', 'Career support'],
  },
  {
    name: 'The CE Shop',
    rating: 4.6,
    reviews: '100,000+',
    regularPrice: '$449',
    salePrice: '$199',
    badge: 'Top Rated',
    badgeColor: 'bg-purple-500',
    states: '45+ States',
    features: ['Interactive courses', 'Pass guarantee', 'Mobile-friendly'],
  },
];

const states = [
  'Alabama', 'Arizona', 'California', 'Colorado', 'Florida', 'Georgia',
  'Illinois', 'Indiana', 'Michigan', 'Minnesota', 'Missouri', 'New Jersey',
  'New York', 'North Carolina', 'Ohio', 'Pennsylvania', 'Tennessee', 'Texas',
  'Virginia', 'Washington',
];

export default function Home() {
  return (
    <>
      {/* Sticky Email Bar + Exit Intent */}
      <StickyEmailBar />
      <ExitIntent />

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden min-h-[600px] flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&h=1080&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-accent-light text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent-light rounded-full animate-pulse" />
              Trusted by 225,000+ students nationwide
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Find the Best School.{' '}
              <span className="text-accent-light">Pay the Lowest Price.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl">
              Compare licensing courses from top-rated schools across all 50 states.
              Exclusive discounts only on CertLaunch.
            </p>

            {/* Search bar */}
            <div className="mt-8 max-w-xl">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-text-lighter" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="What career do you want to start?"
                  className="w-full pl-12 pr-4 py-4 rounded-xl text-text bg-white shadow-xl border-0 text-base focus:outline-none focus:ring-4 focus:ring-accent/30"
                  readOnly
                />
              </div>
            </div>

            {/* Email capture under search */}
            <div className="mt-4">
              <p className="text-blue-200 text-sm mb-3">Or get a free personalized career plan →</p>
              <EmailCapture variant="hero" />
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-blue-200">
              <span className="flex items-center gap-2">🎓 225,000+ Students</span>
              <span className="flex items-center gap-2">⭐ 4.6/5 BBB Rating</span>
              <span className="flex items-center gap-2">💰 Avg. $150 Saved</span>
              <span className="flex items-center gap-2">🔒 30-Day Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CAREER CATEGORIES (Visual Cards) ============ */}
      <section className="py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text">
              Explore Licensed Careers
            </h2>
            <p className="mt-3 text-lg text-text-light max-w-2xl mx-auto">
              No four-year degree required. Start earning in weeks, not years.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map((v) => {
              const meta = careerImages[v.slug] || { img: '', price: '' };
              return (
                <Link
                  key={v.slug}
                  href={`/careers/${v.slug}`}
                  className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-64"
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${meta.img}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-accent/50 rounded-2xl transition-all" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{v.icon}</span>
                      <span className="text-xs font-bold text-accent-light bg-black/30 px-2 py-1 rounded-full">{meta.price}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{v.name}</h3>
                    <p className="text-sm text-gray-300 mt-1">{v.shortDescription}</p>
                    <div className="mt-3 flex items-center gap-4 text-xs text-gray-400">
                      <span>{v.avgSalary}</span>
                      <span>•</span>
                      <span>{v.timeToLicense}</span>
                    </div>
                  </div>
                </Link>
              );
            })}

            {/* Coming Soon Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-gray-300">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-xl font-bold text-text-lighter">More Coming Soon</h3>
              <p className="mt-2 text-sm text-text-lighter">
                CDL, Nursing, HVAC, Electrician, and more. We&apos;re adding new career paths every month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text">How CertLaunch Saves You Money</h2>
            <p className="mt-3 text-lg text-text-light">Three steps to a new career at the lowest price.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: '01', title: 'Compare Schools', icon: '🔍',
                desc: 'See every approved school side-by-side. Real prices, real reviews, real data — not sponsored rankings.',
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
              },
              {
                step: '02', title: 'Get Exclusive Discounts', icon: '💰',
                desc: 'We negotiate lower prices you won\'t find anywhere else. See the regular price vs. your CertLaunch discount.',
                img: 'https://images.unsplash.com/photo-1553729459-uj8uT0locIC?w=400&h=250&fit=crop',
              },
              {
                step: '03', title: 'Launch Your Career', icon: '🚀',
                desc: 'Enroll, study online at your pace, pass the exam, and start earning. Most people get licensed in 2-8 weeks.',
                img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
              },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="relative rounded-xl overflow-hidden mb-6 h-40">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${item.img}')` }}
                  />
                  <div className="absolute inset-0 bg-primary/20" />
                  <div className="absolute top-3 left-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                    Step {item.step}
                  </div>
                </div>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold text-text mb-3">{item.title}</h3>
                <p className="text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EMAIL CAPTURE — UNLOCK DISCOUNTS ============ */}
      <section className="py-16 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm px-4 py-2 rounded-full mb-4">
              💰 Exclusive Member Pricing
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text">
              Unlock CertLaunch Discount Prices
            </h2>
            <p className="mt-4 text-lg text-text-light">
              Our members save an average of <strong className="text-text">$150</strong> on licensing courses.
              Enter your email to see exclusive pricing on every school — up to 40% off.
            </p>
            <div className="mt-8">
              <EmailCapture variant="gate" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURED SCHOOLS (NerdWallet-style) ============ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text">Top-Rated Schools</h2>
              <p className="mt-2 text-lg text-text-light">Trusted by hundreds of thousands of students.</p>
            </div>
            <Link href="/about" className="hidden sm:inline-flex items-center gap-1 text-sm text-accent hover:text-accent-dark font-medium transition-colors">
              How We Rank Schools
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredSchools.map((school) => (
              <div key={school.name} className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow p-6 relative">
                {/* Badge */}
                <span className={`absolute top-4 right-4 ${school.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {school.badge}
                </span>

                {/* School name + rating */}
                <h3 className="text-xl font-bold text-text">{school.name}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(Math.floor(school.rating))}
                    {school.rating % 1 > 0 && '½'}
                  </div>
                  <span className="text-sm font-semibold text-text">{school.rating}</span>
                  <span className="text-sm text-text-lighter">({school.reviews} students)</span>
                </div>

                {/* States */}
                <div className="mt-3 text-sm text-text-lighter">{school.states}</div>

                {/* Pricing */}
                <div className="mt-4 p-4 bg-bg-alt rounded-xl">
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-extrabold text-accent">{school.salePrice}</span>
                    <span className="text-lg text-text-lighter line-through">{school.regularPrice}</span>
                  </div>
                  <div className="text-xs text-accent font-semibold mt-1">CertLaunch Discount Price</div>
                </div>

                {/* Features */}
                <ul className="mt-4 space-y-2">
                  {school.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-text-light">
                      <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="mt-6 w-full py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl transition-colors">
                  View Courses →
                </button>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-text-lighter">
            CertLaunch earns commissions from partner schools. This does not affect our rankings.{' '}
            <Link href="/about" className="text-accent hover:underline">How We Make Money</Link>
          </p>
        </div>
      </section>

      {/* ============ FIND SCHOOLS IN YOUR STATE ============ */}
      <section className="py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text">Find Schools in Your State</h2>
            <p className="mt-3 text-lg text-text-light">Every state has different licensing requirements. We&apos;ve got them all covered.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {states.map((state) => (
              <Link
                key={state}
                href={`/careers/real-estate/${state.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white rounded-xl px-4 py-3 text-center text-sm font-medium text-text hover:bg-accent hover:text-white transition-colors border border-gray-100 hover:border-accent shadow-sm"
              >
                {state}
              </Link>
            ))}
            <Link
              href="/careers/real-estate"
              className="bg-accent/10 rounded-xl px-4 py-3 text-center text-sm font-bold text-accent hover:bg-accent hover:text-white transition-colors border border-accent/20 hover:border-accent"
            >
              All 50 States →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text">Real Students. Real Careers.</h2>
            <p className="mt-3 text-lg text-text-light">Join thousands who launched new careers through CertLaunch.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 shadow-md border border-gray-50">
                <div className="flex text-yellow-400 text-lg mb-4">
                  {'★'.repeat(t.rating)}
                </div>
                <p className="text-text-light leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-text">{t.name}</div>
                    <div className="text-sm text-text-lighter">{t.role} • {t.state}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CERTLAUNCH (Trust Builder) ============ */}
      <section className="py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text">
                Why 225,000+ Students Trust Our Partner Schools
              </h2>
              <div className="mt-8 space-y-5">
                {[
                  { icon: '✅', text: 'State-approved courses in all 50 states' },
                  { icon: '💰', text: 'Lowest price guarantee — we negotiate exclusive discounts' },
                  { icon: '💻', text: 'Study online, at your own pace, on any device' },
                  { icon: '🔒', text: '30-day money-back guarantee on partner schools' },
                  { icon: '🎓', text: 'No degree required — start earning in weeks, not years' },
                  { icon: '📊', text: 'Transparent rankings — see exactly how we rate schools' },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <span className="text-text-light text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/about" className="text-accent hover:text-accent-dark font-medium text-sm inline-flex items-center gap-1">
                  How We Make Money — Full Transparency
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden shadow-2xl h-96 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop')" }}
              />
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 border border-gray-100">
                <div className="text-3xl font-extrabold text-accent">$150</div>
                <div className="text-sm text-text-lighter">Average savings<br />per student</div>
              </div>
              {/* Floating badge card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex text-yellow-400">★★★★★</div>
                <div className="text-xs text-text-lighter mt-1">4.6/5 BBB Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ EMAIL CAPTURE — MAIN CTA ============ */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c476?w=1920&h=600&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-accent/80" />
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <div className="text-4xl mb-4">🗺️</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Not Sure Where to Start?
          </h2>
          <p className="mt-4 text-lg text-blue-100 leading-relaxed">
            Get your <strong className="text-white">free personalized licensing roadmap</strong>.
            We&apos;ll show you exactly what you need, how long it takes, and what it costs in your state.
          </p>
          <div className="mt-8">
            <EmailCapture variant="section" />
          </div>
          <p className="mt-4 text-sm text-blue-200">Join 10,000+ future professionals who started here</p>
        </div>
      </section>

      {/* ============ BLOG/CONTENT TEASER ============ */}
      <section className="py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text">Career Guides & Resources</h2>
            <p className="mt-3 text-lg text-text-light">Expert advice to help you make the right choice.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'How to Get Your Real Estate License in 2026',
                desc: 'The complete step-by-step guide covering requirements, costs, and timelines for every state.',
                img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=300&fit=crop',
                tag: 'Real Estate',
              },
              {
                title: 'Real Estate Agent Salary by State (2026)',
                desc: 'What do agents really earn? We break down average salaries, commission structures, and top-earning states.',
                img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=300&fit=crop',
                tag: 'Salary Guide',
              },
              {
                title: 'Online School vs. Classroom: Which Is Right for You?',
                desc: 'The pros and cons of each format, plus how to choose the best option for your learning style.',
                img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop',
                tag: 'Advice',
              },
            ].map((article) => (
              <div key={article.title} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${article.img}')` }}
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-bold text-primary px-3 py-1 rounded-full">
                    {article.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-text group-hover:text-accent transition-colors">{article.title}</h3>
                  <p className="mt-2 text-sm text-text-light leading-relaxed">{article.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-accent font-medium text-sm">
                    Read Guide
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATS BAR ============ */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50', label: 'States Covered' },
              { value: '225K+', label: 'Students Enrolled' },
              { value: '$150', label: 'Average Savings' },
              { value: '5', label: 'Career Paths' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-extrabold text-accent-light">{stat.value}</div>
                <div className="mt-1 text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text">
            Ready to Skip the Degree?
          </h2>
          <p className="mt-4 text-lg text-text-light leading-relaxed">
            Thousands of people launch licensed careers every month without a college degree.
            The only thing between you and a new career is a licensing course.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/careers/real-estate"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-colors text-lg"
            >
              Browse Careers
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-text font-semibold rounded-xl border border-gray-200 transition-colors text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
