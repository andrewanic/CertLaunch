import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import verticals from '@/data/verticals.json';
import states from '@/data/states.json';
import schoolsData from '@/data/schools.json';
import SchoolCard from '@/components/SchoolCard';

type SchoolsData = Record<string, Array<{
  name: string; slug: string; priceRange: string; format: string;
  rating: number; reviews: number; features: string[]; description: string;
  affiliateUrl: string; states: string[];
}>>;

interface Props {
  params: Promise<{ vertical: string }>;
}

export async function generateStaticParams() {
  return verticals.map((v) => ({ vertical: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { vertical: slug } = await params;
  const vertical = verticals.find((v) => v.slug === slug);
  if (!vertical) return {};
  return {
    title: `${vertical.name} Licensing Courses — CertLaunch`,
    description: `Compare ${vertical.name.toLowerCase()} licensing courses and schools. ${vertical.shortDescription}. Find the best courses in your state.`,
  };
}

export default async function VerticalPage({ params }: Props) {
  const { vertical: slug } = await params;
  const vertical = verticals.find((v) => v.slug === slug);
  if (!vertical) notFound();

  const schools = ((schoolsData as SchoolsData)[slug] || []).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-5xl mb-4">{vertical.icon}</div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">{vertical.name}</h1>
            <p className="mt-4 text-lg text-blue-100 leading-relaxed max-w-2xl">{vertical.description}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2">
                <span className="text-blue-200 text-xs uppercase tracking-wider">Avg Salary</span>
                <p className="text-white font-semibold">{vertical.avgSalary}</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2">
                <span className="text-blue-200 text-xs uppercase tracking-wider">Time to License</span>
                <p className="text-white font-semibold">{vertical.timeToLicense}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text mb-6">Licensing Requirements</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <ol className="space-y-3">
              {vertical.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 text-accent font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-text-light">{req}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Browse by State */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text mb-2">Browse {vertical.name} Schools by State</h2>
          <p className="text-text-light mb-8">Select your state to see approved schools and compare pricing.</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {states.map((state) => (
              <Link
                key={state.slug}
                href={`/careers/${vertical.slug}/${state.slug}`}
                className="bg-white rounded-lg border border-gray-200 hover:border-accent hover:shadow-md transition-all p-3 text-center group"
              >
                <span className="text-lg font-bold text-primary group-hover:text-accent transition-colors">{state.abbr}</span>
                <span className="block text-xs text-text-lighter mt-0.5 truncate">{state.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Schools */}
      {schools.length > 0 && (
        <section className="py-16 bg-bg-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-text mb-2">Top {vertical.name} Schools</h2>
            <p className="text-text-light mb-8">Nationwide leaders in {vertical.name.toLowerCase()} education.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {schools.map((school, i) => (
                <SchoolCard key={school.slug} school={school} rank={i + 1} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {vertical.faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-text text-lg">{faq.question}</h3>
                <p className="mt-2 text-text-light leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
