import Link from 'next/link';
import verticals from '@/data/verticals.json';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Launch Your Career.{' '}
              <span className="text-accent-light">Skip the Degree.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              Compare licensing courses, certification programs, and continuing education from top schools. 
              Find the fastest, most affordable path to a licensed career.
            </p>

            {/* Search Bar */}
            <div className="mt-10 max-w-xl mx-auto">
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
          </div>
        </div>
      </section>

      {/* Featured Verticals */}
      <section className="py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text">
              Explore Licensed Careers
            </h2>
            <p className="mt-3 text-lg text-text-light max-w-2xl mx-auto">
              No four-year degree required. These careers pay well and you can start in weeks, not years.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map((v) => (
              <Link
                key={v.slug}
                href={`/careers/${v.slug}`}
                className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-accent/40 hover:shadow-lg transition-all duration-200"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-semibold text-text group-hover:text-primary transition-colors">
                  {v.name}
                </h3>
                <p className="mt-2 text-sm text-text-light leading-relaxed">
                  {v.shortDescription}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-text-lighter">
                  <span className="bg-bg-alt px-2 py-1 rounded">{v.avgSalary}</span>
                  <span className="bg-bg-alt px-2 py-1 rounded">{v.timeToLicense}</span>
                </div>
                <div className="mt-4 text-accent font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore schools
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}

            {/* Coming Soon Card */}
            <div className="bg-white/50 rounded-xl p-6 border border-dashed border-gray-300 flex flex-col items-center justify-center text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-text-lighter">More Coming Soon</h3>
              <p className="mt-2 text-sm text-text-lighter">
                We&apos;re adding new career paths every month. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text">
              How CertLaunch Works
            </h2>
            <p className="mt-3 text-lg text-text-light">
              Three simple steps to your new career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Choose Your Career',
                desc: 'Browse licensed careers that match your interests. See salary ranges, time to license, and what the job is actually like.',
                icon: '🎯',
              },
              {
                step: '02',
                title: 'Compare Schools',
                desc: 'View side-by-side comparisons of approved schools in your state. Compare prices, formats, ratings, and features.',
                icon: '📊',
              },
              {
                step: '03',
                title: 'Get Licensed',
                desc: 'Enroll in the best course for you, complete your education, pass your exam, and launch your new career.',
                icon: '🎓',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-3xl mb-6">
                  {item.icon}
                </div>
                <div className="text-xs font-bold text-accent uppercase tracking-widest mb-2">Step {item.step}</div>
                <h3 className="text-xl font-semibold text-text mb-3">{item.title}</h3>
                <p className="text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50', label: 'States Covered' },
              { value: '200+', label: 'Schools Listed' },
              { value: '5', label: 'Career Paths' },
              { value: '$0', label: 'Always Free to Use' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-extrabold text-accent-light">{stat.value}</div>
                <div className="mt-1 text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bg-alt">
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
