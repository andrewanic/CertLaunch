import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About CertLaunch — Our Mission',
  description: 'CertLaunch helps people start licensed careers without overpriced college. Learn about our mission and how we make money.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            College Is Overpriced.{' '}
            <span className="text-accent-light">We&apos;re the Alternative.</span>
          </h1>
          <p className="mt-6 text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto">
            CertLaunch exists because we believe you shouldn&apos;t need to spend $50,000+ on a degree 
            to start a great career. Licensed professions offer real income, real stability, and real freedom — 
            and the education costs a fraction of college.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Mission */}
        <section>
          <h2 className="text-2xl font-bold text-text mb-6">Our Mission</h2>
          <div className="prose prose-lg max-w-none text-text-light leading-relaxed space-y-4">
            <p>
              The average college graduate leaves school with <strong className="text-text">$37,000 in student debt</strong> and 
              no guarantee of a job. Meanwhile, licensed careers like real estate, mortgage lending, insurance, 
              appraisal, and home inspection offer earning potential of $50,000 to $150,000+ — and you can 
              get started in weeks, not years.
            </p>
            <p>
              The problem? Finding the right licensing course is confusing. Every state has different requirements. 
              There are hundreds of schools with different prices, formats, and quality levels. And most people 
              don&apos;t even know these career paths exist.
            </p>
            <p>
              <strong className="text-text">That&apos;s where CertLaunch comes in.</strong> We&apos;re building the one place 
              where you can explore licensed careers, understand the requirements in your state, and compare 
              approved schools side by side. Think of us as the NerdWallet for licensing education.
            </p>
          </div>
        </section>

        {/* How We Make Money */}
        <section id="how-we-make-money">
          <h2 className="text-2xl font-bold text-text mb-6">How We Make Money</h2>
          <div className="bg-accent/5 rounded-xl border border-accent/20 p-8">
            <p className="text-text-light leading-relaxed mb-4">
              We believe in being transparent about how we earn revenue. Here&apos;s the deal:
            </p>
            <div className="space-y-4 text-text-light leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="text-accent text-xl mt-0.5">✓</span>
                <p>
                  <strong className="text-text">We earn affiliate commissions</strong> when you click through to a school 
                  and enroll. The school pays us a referral fee — you never pay more.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-xl mt-0.5">✓</span>
                <p>
                  <strong className="text-text">CertLaunch is always free</strong> for you. We don&apos;t charge fees, 
                  sell your data, or require accounts.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-xl mt-0.5">✓</span>
                <p>
                  <strong className="text-text">Affiliate relationships don&apos;t affect our rankings.</strong> We list 
                  schools based on quality, price, and user ratings — not who pays us the most.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-xl mt-0.5">✓</span>
                <p>
                  <strong className="text-text">We include non-partner schools too.</strong> Our goal is to be 
                  comprehensive. If a great school doesn&apos;t have an affiliate program, we still list them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-2xl font-bold text-text mb-8">What We Believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Education Should Be Accessible', desc: 'You don\'t need wealthy parents or massive loans to start a professional career.' },
              { title: 'Transparency Builds Trust', desc: 'We tell you exactly how we make money and never let it compromise our recommendations.' },
              { title: 'Information Is Power', desc: 'The more you know about your options, the better decision you\'ll make. We give you all the data.' },
              { title: 'Time Is Valuable', desc: 'Why spend 4 years and $100K when you can get licensed in 3 months for under $500?' },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-text text-lg mb-2">{v.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8">
          <h2 className="text-2xl font-bold text-text mb-4">Ready to Get Started?</h2>
          <p className="text-text-light mb-6">Browse licensed careers and find the right course for you.</p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-colors text-lg"
          >
            Explore Careers
          </Link>
        </section>
      </div>
    </>
  );
}
