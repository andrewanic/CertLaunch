import { notFound } from 'next/navigation';
import Link from 'next/link';
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
  params: Promise<{ vertical: string; state: string }>;
}

export async function generateStaticParams() {
  const params: { vertical: string; state: string }[] = [];
  for (const v of verticals) {
    for (const s of states) {
      params.push({ vertical: v.slug, state: s.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { vertical: vSlug, state: sSlug } = await params;
  const vertical = verticals.find((v) => v.slug === vSlug);
  const state = states.find((s) => s.slug === sSlug);
  if (!vertical || !state) return {};
  return {
    title: `Best ${vertical.name} Schools in ${state.name} (2025) — CertLaunch`,
    description: `Compare the best ${vertical.name.toLowerCase()} licensing courses in ${state.name}. See prices, ratings, and features side by side.`,
  };
}

export default async function StatePage({ params }: Props) {
  const { vertical: vSlug, state: sSlug } = await params;
  const vertical = verticals.find((v) => v.slug === vSlug);
  const state = states.find((s) => s.slug === sSlug);
  if (!vertical || !state) notFound();

  const allSchools = (schoolsData as SchoolsData)[vSlug] || [];
  const stateSchools = allSchools.filter((s) => s.states.includes(sSlug));
  // If no schools specifically listed for this state, show all as "available nationwide"
  const schools = stateSchools.length > 0 ? stateSchools : allSchools;

  return (
    <>
      {/* Breadcrumb + Header */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/careers/${vertical.slug}`} className="hover:text-white transition-colors">{vertical.name}</Link>
            <span>/</span>
            <span className="text-white">{state.name}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            Best {vertical.name} Schools in {state.name}
          </h1>
          <p className="mt-3 text-blue-100 text-lg max-w-2xl">
            Compare {schools.length} approved {vertical.name.toLowerCase()} courses in {state.name}. 
            Find the right school for your budget and learning style.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* School List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-text">
                {schools.length} Schools Available
              </h2>
              <span className="text-sm text-text-lighter">Sorted by rating</span>
            </div>
            {schools
              .sort((a, b) => b.rating - a.rating)
              .map((school, i) => (
                <SchoolCard key={school.slug} school={school} rank={i + 1} />
              ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* State Requirements */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
              <h3 className="font-bold text-text text-lg mb-4">
                {state.name} {vertical.name} Requirements
              </h3>
              <div className="space-y-4 text-sm text-text-light">
                <div>
                  <span className="font-semibold text-text block mb-1">Pre-Licensing Education</span>
                  <p>{vertical.requirements[0]}</p>
                </div>
                <div>
                  <span className="font-semibold text-text block mb-1">Exam</span>
                  <p>{vertical.requirements[1]}</p>
                </div>
                <div>
                  <span className="font-semibold text-text block mb-1">Additional Steps</span>
                  <ul className="list-disc list-inside space-y-1">
                    {vertical.requirements.slice(2).map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <span className="font-semibold text-text block mb-1">Average Salary</span>
                  <p className="text-accent font-semibold text-lg">{vertical.avgSalary}</p>
                </div>
                <div>
                  <span className="font-semibold text-text block mb-1">Time to License</span>
                  <p>{vertical.timeToLicense}</p>
                </div>
              </div>
            </div>

            {/* Other States */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-text mb-4">Other States</h3>
              <div className="flex flex-wrap gap-2">
                {states
                  .filter((s) => s.slug !== state.slug)
                  .slice(0, 12)
                  .map((s) => (
                    <Link
                      key={s.slug}
                      href={`/careers/${vertical.slug}/${s.slug}`}
                      className="text-xs bg-bg-alt hover:bg-accent/10 text-text-light hover:text-accent px-2.5 py-1.5 rounded-md transition-colors"
                    >
                      {s.abbr}
                    </Link>
                  ))}
                <Link
                  href={`/careers/${vertical.slug}`}
                  className="text-xs text-accent font-medium px-2.5 py-1.5"
                >
                  View all →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
