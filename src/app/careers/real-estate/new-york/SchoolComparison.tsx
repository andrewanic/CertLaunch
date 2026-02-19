'use client';

import { useMemo, useState } from 'react';

interface Package {
  name: string;
  /** Current price shown on the school website (actual, not MSRP). */
  price: number;
  /** Optional CertLaunch-discounted price (when applicable). */
  discountPrice: number | null;
  includes: string[];
}

interface School {
  name: string;
  url: string;
  rating: number;
  ratingSource: string;
  format: string;
  access: string;
  features: string[];
  badge: string | null;
  badgeColor: string;
  discountCode: string | null;
  discountPct: number | null;
  packages: Package[];
}

const schools: School[] = [
  {
    name: 'RealEstateU',
    url: 'https://realestateu.com/real-estate-license-ny-online/',
    rating: 4.4,
    ratingSource: 'AgentAdvice',
    format: '100% online, self-paced',
    access: '6-month access',
    features: ['30-day money-back guarantee', 'Audio course included', 'On-demand video lessons'],
    badge: 'Best Value',
    badgeColor: 'bg-accent-500',
    discountCode: 'CERTLAUNCH',
    discountPct: 20,
    packages: [
      {
        name: 'License Essentials',
        price: 99,
        discountPrice: 79,
        includes: ['77-hour NY pre-license course', 'On-demand video lessons', 'Audio course'],
      },
      {
        name: 'Get Exam Ready',
        price: 277,
        discountPrice: 222,
        includes: ['Everything in Essentials', 'State exam study guide', '4 practice exams', 'Career start mini-course'],
      },
      {
        name: 'The Career Launcher',
        price: 655,
        discountPrice: 524,
        includes: ['Everything in Exam Ready', 'Career jumpstart course', 'Advanced career resources'],
      },
    ],
  },
  {
    name: 'Corofy',
    url: 'https://corofy.com/77-hours-pre-licensing-course/',
    rating: 4.9,
    ratingSource: 'Google Reviews',
    format: '100% online, self-paced',
    access: 'Access period not specified',
    features: ['NY-focused school', 'Exam prep materials included', 'Job placement assistance'],
    badge: null,
    badgeColor: '',
    discountCode: null,
    discountPct: null,
    packages: [
      {
        name: '77-Hour Pre-Licensing Course',
        price: 179,
        discountPrice: null,
        includes: ['77-hour DOS-approved course', 'State exam prep materials', 'Job placement assistance'],
      },
    ],
  },
  {
    name: 'Aceable Agent',
    url: 'https://www.aceableagent.com/real-estate-license/new-york/',
    rating: 4.8,
    ratingSource: 'AgentAdvice',
    format: 'Online self-paced + mobile app',
    access: 'Unlimited access (NY)',
    features: ['Interactive learning + mastery tracking', 'Audio narration', 'Instructor support'],
    badge: 'Mobile Learning',
    badgeColor: 'bg-brand-600',
    discountCode: null,
    discountPct: null,
    packages: [
      {
        name: 'Basic',
        price: 239,
        discountPrice: null,
        includes: ['77-hour pre-license course', 'Mobile app access', 'Audio narration', 'Instructor support'],
      },
      {
        name: 'Deluxe',
        price: 369,
        discountPrice: null,
        includes: ['Everything in Basic', 'AI-accelerated learning tools', '3 months exam prep tools', 'E-book'],
      },
      {
        name: 'Premium',
        price: 469,
        discountPrice: null,
        includes: ['Everything in Deluxe', '1 hour private tutoring', 'Live tutoring webinars with Q&A'],
      },
    ],
  },
  {
    name: 'The CE Shop',
    url: 'https://www.theceshop.com/new-york/pre-licensing/ny-salesperson-pre-licensing-cost',
    rating: 4.6,
    ratingSource: 'AgentAdvice',
    format: 'Online self-paced (LEAP platform)',
    access: '6-month access',
    features: ['Interactive LEAP platform', '5-day free trial', 'Pass guarantee on select packages'],
    badge: 'Interactive',
    badgeColor: 'bg-brand-500',
    discountCode: null,
    discountPct: null,
    packages: [
      {
        name: 'Courses Only',
        price: 254.25,
        discountPrice: null,
        includes: ['77-hour pre-license course', 'Business eBooks', 'Digital flashcards', 'Real estate glossary'],
      },
      {
        name: 'Standard',
        price: 336.75,
        discountPrice: null,
        includes: ['Everything in Courses Only', 'Exam Prep Edge', 'Pass guarantee'],
      },
      {
        name: 'Value',
        price: 386.25,
        discountPrice: null,
        includes: ['Everything in Standard', 'Kickstarter professional development program'],
      },
      {
        name: 'Premium',
        price: 516.75,
        discountPrice: null,
        includes: ['Everything in Value', '22.5-hr NY continuing education package'],
      },
    ],
  },
  {
    name: 'Colibri Real Estate',
    url: 'https://www.colibrirealestate.com/real-estate/new-york/license/',
    rating: 4.4,
    ratingSource: '9,271 reviews',
    format: 'Online self-paced (+ livestream options)',
    access: 'Access period not specified',
    features: ['Audio narration included', 'Pass guarantee on exam-prep packages', 'Multiple package levels'],
    badge: null,
    badgeColor: '',
    discountCode: null,
    discountPct: null,
    packages: [
      {
        name: 'The Basics',
        price: 329,
        discountPrice: null,
        includes: ['77-hour pre-license course', 'Instructor support', '3 study guides', 'Audio narration'],
      },
      {
        name: 'Exam Preparation',
        price: 459,
        discountPrice: null,
        includes: ['Everything in The Basics', 'Simulated exams', 'Flashcards', 'Readiness tracker', 'Pass guarantee'],
      },
      {
        name: 'Exam Preparation Plus',
        price: 536,
        discountPrice: null,
        includes: ['Everything in Exam Preparation', 'Instructor Q&A', 'Exam Cram webinar series'],
      },
      {
        name: 'Ultimate Learning',
        price: 613,
        discountPrice: null,
        includes: ['Everything in Plus', 'Printed textbook', 'Career booster pack'],
      },
    ],
  },
  {
    name: 'Kaplan Real Estate Education',
    url: 'https://www.kapre.com/real-estate/new-york/licensing-courses/p/ny-salesperson-packages',
    rating: 4.5,
    ratingSource: 'HousingWire',
    format: 'Online self-paced (+ live hub)',
    access: 'Access period not specified',
    features: ['Well-known national provider', 'Live Online Learning Hub', 'Student community access'],
    badge: null,
    badgeColor: '',
    discountCode: null,
    discountPct: null,
    packages: [
      {
        name: 'Qualifying Course',
        price: 379,
        discountPrice: null,
        includes: ['77-hour pre-license course', 'Live Online Learning Hub access', 'Student community'],
      },
    ],
  },
];

function Stars({ rating, source }: { rating: number; source: string }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.3;
  return (
    <span className="flex items-center gap-1.5">
      <span className="text-yellow-400 text-sm">{'★'.repeat(full)}{half ? '½' : ''}</span>
      <span className="text-sm font-medium text-neutral-600">{rating}/5</span>
      <span className="text-xs text-neutral-400">({source})</span>
    </span>
  );
}

function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 text-accent-500 flex-shrink-0 ${className}`} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function formatPrice(n: number) {
  const hasCents = Math.round(n * 100) % 100 !== 0;
  return hasCents ? n.toFixed(2) : n.toFixed(0);
}

function PackageRow({
  pkg,
  isPrimary,
  discountCode,
  discountPct,
}: {
  pkg: Package;
  isPrimary: boolean;
  discountCode: string | null;
  discountPct: number | null;
}) {
  const hasDiscount = discountCode !== null && pkg.discountPrice !== null;

  return (
    <div className={`p-4 rounded-lg ${isPrimary ? 'bg-accent-50 border-2 border-accent-200' : 'bg-neutral-50 border border-neutral-200'}`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
        <h4 className={`font-semibold ${isPrimary ? 'text-accent-700' : 'text-neutral-700'}`}>
          {pkg.name}
        </h4>

        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-sm text-neutral-500">Current:</span>
          <span className={`text-xl font-extrabold ${isPrimary ? 'text-neutral-900' : 'text-neutral-800'}`}>${formatPrice(pkg.price)}</span>

          {hasDiscount && (
            <span className="inline-flex items-center gap-2">
              <span className="text-sm text-neutral-500">With code</span>
              <span className="bg-accent-600 text-white font-mono font-bold text-xs px-2.5 py-1 rounded-lg tracking-wider">
                {discountCode}
              </span>
              <span className={`text-xl font-extrabold ${isPrimary ? 'text-accent-600' : 'text-accent-500'}`}>
                ${formatPrice(pkg.discountPrice as number)}
              </span>
              {discountPct !== null && (
                <span className="text-xs font-semibold text-accent-700 bg-accent-100 border border-accent-200 px-2 py-1 rounded-full">
                  {discountPct}% off
                </span>
              )}
            </span>
          )}
        </div>
      </div>

      <ul className="grid sm:grid-cols-2 gap-1.5">
        {pkg.includes.map((item) => (
          <li key={item} className="flex items-start gap-1.5 text-sm text-neutral-600">
            <CheckIcon className="mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SchoolCard({ school, index }: { school: School; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const primaryPackage = school.packages[0];
  const additionalPackages = school.packages.slice(1);

  return (
    <div id={`school-${school.name.toLowerCase().replace(/\s+/g, '-')}`} className="bg-white rounded-xl border border-neutral-200 overflow-hidden card-hover scroll-mt-24">
      <div className="p-5 sm:p-6 border-b border-neutral-100">
        <div className="flex items-start justify-between mb-3 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-neutral-400 text-sm font-medium">#{index + 1}</span>
              <h3 className="font-display font-bold text-lg text-neutral-900">{school.name}</h3>
              {school.badge && (
                <span className={`${school.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full`}>
                  {school.badge}
                </span>
              )}
            </div>
            <Stars rating={school.rating} source={school.ratingSource} />
          </div>

          <div className="text-right">
            <p className="text-xs text-neutral-500">Starting at</p>
            <p className="text-2xl font-extrabold text-neutral-800">${formatPrice(primaryPackage.price)}</p>
            {school.discountCode && primaryPackage.discountPrice && (
              <p className="text-xs text-accent-700 mt-1">
                With code <span className="font-mono font-bold">{school.discountCode}</span>: ${formatPrice(primaryPackage.discountPrice)}
              </p>
            )}
          </div>
        </div>

        {school.discountCode && (
          <div className="mb-3 bg-accent-500/10 border border-accent-500/25 rounded-lg px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <span className="text-accent-800 font-semibold text-sm">Exclusive CertLaunch discount available.</span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-accent-700 font-medium">Use code:</span>
              <span className="bg-accent-700 text-white font-mono font-bold text-sm px-3 py-1.5 rounded-lg tracking-wider">
                {school.discountCode}
              </span>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 text-xs mb-3">
          <span className="bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full">{school.format}</span>
          <span className="bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-full">{school.access}</span>
        </div>

        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          {school.features.map((feature) => (
            <li key={feature} className="flex items-center gap-1 text-xs text-neutral-500">
              <CheckIcon />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-5 sm:p-6 space-y-3">
        <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
          Available Packages ({school.packages.length})
        </h4>

        <PackageRow
          pkg={primaryPackage}
          isPrimary={true}
          discountCode={school.discountCode}
          discountPct={school.discountPct}
        />

        {additionalPackages.length > 0 && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center justify-between w-full py-3 px-4 text-sm font-semibold text-brand-600 bg-brand-50 hover:bg-brand-100 border border-brand-200 rounded-lg transition-colors"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8 8-8-8" /></svg>
                {expanded ? 'Hide additional packages' : `${additionalPackages.length} more package${additionalPackages.length > 1 ? 's' : ''}`}
              </span>
              <ChevronIcon open={expanded} />
            </button>

            {expanded && (
              <div className="space-y-3 pt-2">
                {additionalPackages.map((pkg) => (
                  <PackageRow
                    key={pkg.name}
                    pkg={pkg}
                    isPrimary={false}
                    discountCode={school.discountCode}
                    discountPct={school.discountPct}
                  />
                ))}
              </div>
            )}
          </>
        )}

        <div className="pt-3 flex flex-col sm:flex-row gap-3">
          {school.discountCode && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-500">Discount code:</span>
              <span className="bg-accent-500/10 border border-accent-500/30 text-accent-700 font-mono font-bold text-sm px-3 py-1.5 rounded-lg">
                {school.discountCode}
              </span>
            </div>
          )}
          <a
            href={school.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 text-center font-semibold text-sm py-3 px-6 rounded-lg transition-colors ${
              school.discountCode
                ? 'bg-brand-600 hover:bg-brand-700 text-white'
                : 'bg-neutral-800 hover:bg-neutral-900 text-white'
            }`}
          >
            Visit {school.name} ->
          </a>
        </div>
      </div>
    </div>
  );
}

type SortOption = 'price-low' | 'price-high' | 'rating' | 'online' | 'live';

function getStartingPrice(school: School): number {
  // Sort and headline prices are based on the current price shown on the school website.
  return school.packages[0].price;
}

function isOnline(school: School): boolean {
  const f = school.format.toLowerCase();
  return f.includes('online') || f.includes('self-paced');
}

function isLiveOrInPerson(school: School): boolean {
  const f = school.format.toLowerCase();
  return f.includes('classroom') || f.includes('in-person') || f.includes('livestream') || f.includes('live');
}

function sortSchools(list: School[], sortBy: SortOption): School[] {
  const sorted = [...list];
  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => getStartingPrice(a) - getStartingPrice(b));
    case 'price-high':
      return sorted.sort((a, b) => getStartingPrice(b) - getStartingPrice(a));
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'online':
      return sorted.sort((a, b) => {
        if (isOnline(a) && !isOnline(b)) return -1;
        if (!isOnline(a) && isOnline(b)) return 1;
        return getStartingPrice(a) - getStartingPrice(b);
      });
    case 'live':
      return sorted.sort((a, b) => {
        if (isLiveOrInPerson(a) && !isLiveOrInPerson(b)) return -1;
        if (!isLiveOrInPerson(a) && isLiveOrInPerson(b)) return 1;
        return getStartingPrice(a) - getStartingPrice(b);
      });
    default:
      return sorted;
  }
}

const sortLabels: Record<SortOption, string> = {
  'price-low': 'Price: Low to High',
  'price-high': 'Price: High to Low',
  rating: 'Highest Rated',
  online: 'Online First',
  live: 'Live / In-Person First',
};

export default function SchoolComparison() {
  const [sortBy, setSortBy] = useState<SortOption>('price-low');

  const sortedSchools = useMemo(() => sortSchools(schools, sortBy), [sortBy]);

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="font-display font-bold text-2xl text-neutral-900 mb-2">
              Best Real Estate Schools in New York
            </h2>
            <p className="text-neutral-500 text-sm">
              Prices shown are the current prices displayed on each school&apos;s website (verified February 2026). {sortLabels[sortBy]}.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="sort-select" className="text-sm font-medium text-neutral-600 whitespace-nowrap">Sort by:</label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="border border-neutral-300 rounded-lg px-3 py-2 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            >
              {Object.entries(sortLabels).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-8 p-4 bg-brand-50 rounded-xl border border-brand-100">
          <h3 className="font-semibold text-brand-800 text-sm mb-3">Quick price comparison (lowest package)</h3>
          <div className="flex flex-wrap gap-3">
            {sortedSchools.map((school) => {
              const current = school.packages[0].price;
              const withCode = school.discountCode && school.packages[0].discountPrice
                ? school.packages[0].discountPrice
                : null;

              return (
                <a
                  key={school.name}
                  href={`#school-${school.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-brand-200 hover:border-brand-400 hover:shadow-sm transition-all cursor-pointer"
                >
                  <span className="text-xs text-neutral-600">{school.name}:</span>
                  <span className="font-bold text-neutral-800">${formatPrice(current)}</span>
                  {withCode !== null && (
                    <span className="text-xs text-accent-700">
                      (with {school.discountCode}: <span className="font-bold">${formatPrice(withCode)}</span>)
                    </span>
                  )}
                  {school.badge && (
                    <span className={`${school.badgeColor} text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full`}>
                      {school.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          {sortedSchools.map((school, index) => (
            <SchoolCard key={school.name} school={school} index={index} />
          ))}
        </div>

        <p className="text-xs text-neutral-400 mt-6 text-center">
          Prices verified February 2026. Prices may change; always confirm current pricing on the school&apos;s website before enrolling.
        </p>
      </div>
    </section>
  );
}
