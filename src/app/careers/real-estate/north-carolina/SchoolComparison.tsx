'use client';

import { useState } from 'react';

interface Package {
  name: string;
  price: number;
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
    url: 'https://realestateu.com/north-carolina-pre-license-broker-course-online/',
    rating: 4.6,
    ratingSource: 'BBB',
    format: 'Online self-paced (audio)',
    access: '6-month access',
    features: ['Audio-based course', 'State exam study guide available', 'Flexible schedule'],
    badge: 'Best Value',
    badgeColor: 'bg-accent-500',
    discountCode: 'CERTLAUNCH',
    discountPct: 20,
    packages: [
      {
        name: 'Course Only',
        price: 249,
        discountPrice: 199.20,
        includes: ['75-hour pre-license course', 'Audio lessons', 'Infographics'],
      },
      {
        name: 'Course + Study Guide + e-Textbook',
        price: 357,
        discountPrice: 285.60,
        includes: ['Everything in Course Only', 'State exam study guide', 'e-Textbook'],
      },
      {
        name: 'Course + Study Guide + e-Textbook + Agent Success',
        price: 914,
        discountPrice: 731.20,
        includes: ['Everything in previous package', 'Agent success course', 'Career blueprint'],
      },
    ],
  },
  {
    name: 'AceableAgent',
    url: 'https://www.aceableagent.com/real-estate-license/north-carolina/',
    rating: 4.8,
    ratingSource: '10,786 Reviews',
    format: 'Online self-paced',
    access: '180 days access',
    features: ['Interactive online content', 'Video/audio lessons', 'PrepAgent exam prep (Premium)'],
    badge: 'Top Rated',
    badgeColor: 'bg-brand-500',
    discountCode: null,
    discountPct: null,
    packages: [
      {
        name: 'Basic',
        price: 479,
        discountPrice: null,
        includes: ['75-hour course', 'Lite exam prep', 'Instructor support'],
      },
      {
        name: 'Premium',
        price: 621,
        discountPrice: null,
        includes: ['Everything in Basic', 'Video/audio lessons', '1-on-1 tutoring', 'Live webinars', 'PrepAgent exam prep'],
      },
    ],
  },
  {
    name: 'NC Community Colleges',
    url: 'https://www.waketech.edu/programs-courses/credit/real-estate/licensing',
    rating: 4.9,
    ratingSource: 'Student Value',
    format: 'In-Person, some Livestream',
    access: 'Semester based',
    features: ['Lowest cost option', 'In-person instruction', 'Academic environment'],
    badge: 'Most Affordable',
    badgeColor: 'bg-green-600',
    discountCode: null,
    discountPct: null,
    packages: [
      {
        name: 'Pre-Licensing Course',
        price: 180,
        discountPrice: null,
        includes: ['75-hour course', 'In-person or livestream', 'Campus resources'],
      },
    ],
  },
  {
    name: 'The CE Shop',
    url: 'https://www.theceshop.com/north-carolina/pre-licensing/nc-broker-pre-licensing-cost',
    rating: 4.5,
    ratingSource: 'Industry Pass Rates',
    format: 'Online interactive',
    access: '6-month access',
    features: ['High pass rates', 'Interactive content', 'Career essentials'],
    badge: null,
    badgeColor: '',
    discountCode: null,
    discountPct: null,
    packages: [
      {
        name: '75-Hr. Online Interactive Course',
        price: 675,
        discountPrice: null,
        includes: ['75-hour course', 'Career essentials', 'Digital flashcards'],
      },
      {
        name: 'Standard',
        price: 795,
        discountPrice: null,
        includes: ['Everything in base course', 'Exam Prep Edge (National & NC)', 'Pass Guarantee'],
      },
      {
        name: 'Value',
        price: 1295,
        discountPrice: null,
        includes: ['Everything in Standard', 'Building Your Business courses'],
      },
    ],
  },
  {
    name: 'Kaplan Real Estate Education',
    url: 'https://www.kapre.com/real-estate/north-carolina/licensing-courses/p/nc-packages',
    rating: 4.2,
    ratingSource: 'National Brand',
    format: 'Online self-paced + Live Hub',
    access: '180 days access',
    features: ['Live Online Learning Hub', 'National brand', 'Exam prep included'],
    badge: null,
    badgeColor: '',
    discountCode: null,
    discountPct: null,
    packages: [
      {
        name: 'Exam Prep Package',
        price: 449,
        discountPrice: null,
        includes: ['75-hour course', 'Exam prep', 'Live Online Learning Hub access'],
      },
      {
        name: 'Career Launcher',
        price: 799,
        discountPrice: null,
        includes: ['Everything in Exam Prep Package', 'Real Estate Accelerator (8-week boot camp)'],
      },
    ],
  },
  {
    name: 'Superior School of Real Estate',
    url: 'https://www.superiorschoolnc.com/real-estate-license/',
    rating: 4.7,
    ratingSource: 'Largest NC School',
    format: 'Online, Livestream, In-Person',
    access: '6-month access',
    features: ['Largest NC school', 'Livestream & In-Person options', 'CompuCram exam prep'],
    badge: 'NC Expert',
    badgeColor: 'bg-blue-600',
    discountCode: null,
    discountPct: null,
    packages: [
      {
        name: 'Career Essentials',
        price: 529,
        discountPrice: null,
        includes: ['75-hour course', 'Printable adventure guide', 'Audio review'],
      },
      {
        name: 'Career Professional',
        price: 639,
        discountPrice: null,
        includes: ['Essentials + Exam Prep (CompuCram)', 'Crammer Course'],
      },
      {
        name: 'Career Ultimate',
        price: 949,
        discountPrice: null,
        includes: ['Professional + hard-copy textbook', '1-year professional development'],
      },
    ],
  },
  {
    name: 'Carolina School of Real Estate',
    url: 'https://www.carolinaschoolre.com/courses/prelicensing',
    rating: 4.5,
    ratingSource: 'Local Reviews',
    format: 'Classroom / Scheduled',
    access: 'Course duration',
    features: ['Local Triad focus', 'Textbook included', 'Weekend/Evening classes'],
    badge: 'Local Choice',
    badgeColor: 'bg-emerald-600',
    discountCode: null,
    discountPct: null,
    packages: [
      {
        name: 'Broker Prelicensing',
        price: 490,
        discountPrice: null,
        includes: ['75-hour course', 'Textbook included', 'Scheduled classes'],
      },
    ],
  },
];

function Stars({ rating, source }: { rating: number; source: string }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.3;
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-yellow-400 text-sm">{'★'.repeat(full)}{half ? '½' : ''}</span>
      <span className="text-sm font-medium text-neutral-600">{rating}/5</span>
      <span className="text-xs text-neutral-400">({source})</span>
    </div>
  );
}

function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 text-accent-500 flex-shrink-0 ${className}`} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function ChevronDownIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
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
  let finalPrice = pkg.price;
  let originalPrice = pkg.price;
  let hasDiscount = false;
  let savingsLabel = '';

  if (discountCode) {
    if (pkg.discountPrice) {
       finalPrice = pkg.discountPrice;
       hasDiscount = true;
       savingsLabel = `${Math.round(((originalPrice - finalPrice) / originalPrice) * 100)}% off with code`;
    } else if (discountPct) {
      finalPrice = Math.round(pkg.price * (1 - discountPct / 100));
      hasDiscount = true;
      savingsLabel = `${discountPct}% off with code`;
    }
  } else {
    if (pkg.discountPrice) {
      finalPrice = pkg.discountPrice;
      hasDiscount = true;
    }
  }

  return (
    <div className={`p-4 rounded-lg ${isPrimary ? 'bg-accent-50 border-2 border-accent-200' : 'bg-neutral-50 border border-neutral-200'}`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
        <h4 className={`font-semibold ${isPrimary ? 'text-accent-700' : 'text-neutral-700'}`}>
          {pkg.name}
        </h4>
        <div className="flex items-center gap-3">
          {hasDiscount ? (
            <>
              <span className="text-neutral-400 line-through text-sm">${originalPrice}</span>
              <span className={`text-xl font-extrabold ${isPrimary ? 'text-accent-600' : 'text-accent-500'}`}>
                ${finalPrice}
              </span>
              {savingsLabel && (
                <span className="savings-badge text-xs font-bold text-white px-2 py-0.5 rounded-full bg-red-500">
                  {savingsLabel}
                </span>
              )}
            </>
          ) : (
            <>
              <span className="text-xl font-extrabold text-neutral-800">${finalPrice}</span>
              {!discountCode && (
                <span className="text-xs text-amber-600 font-medium bg-amber-50 px-2 py-1 rounded">
                  Discount coming soon
                </span>
              )}
            </>
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

  let displayPrice = primaryPackage.price;
  let originalPrice = primaryPackage.price;
  let showSale = false;

  if (school.discountCode) {
    if (primaryPackage.discountPrice) {
      displayPrice = primaryPackage.discountPrice;
      showSale = true;
    } else if (school.discountPct) {
      displayPrice = Math.round(primaryPackage.price * (1 - school.discountPct / 100));
      showSale = true;
    }
  } else if (primaryPackage.discountPrice) {
    displayPrice = primaryPackage.discountPrice;
    showSale = true;
  }

  return (
    <div id={`school-${school.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="bg-white rounded-xl border border-neutral-200 overflow-hidden card-hover scroll-mt-24 transition-shadow hover:shadow-lg">
      <div className="p-5 sm:p-6 border-b border-neutral-100">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
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
            {showSale ? (
              <>
                <p className="text-sm font-bold text-neutral-400 line-through">${originalPrice}</p>
                <p className="text-2xl font-extrabold text-accent-500">${displayPrice}</p>
              </>
            ) : (
              <p className="text-2xl font-extrabold text-neutral-800">${displayPrice}</p>
            )}
          </div>
        </div>

        {school.discountCode && (
          <div className="mb-3 bg-accent-500/10 border-2 border-accent-500/30 rounded-lg px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <span className="text-accent-700 font-semibold text-sm">
              🎉 Exclusive {school.discountPct}% off with code!
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-accent-600 font-medium">Use code:</span>
              <span className="bg-accent-600 text-white font-mono font-bold text-base px-4 py-1.5 rounded-lg tracking-wider select-all">
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
              <CheckIcon className="w-3 h-3 text-accent-500" />
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
                {expanded ? 'Hide Additional Packages' : `${additionalPackages.length} More Package${additionalPackages.length > 1 ? 's' : ''} Available`}
              </span>
              <ChevronDownIcon className={`w-5 h-5 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
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
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="text-xs text-neutral-500">Use code:</span>
              <span className="bg-accent-500/10 border border-accent-500/30 text-accent-600 font-mono font-bold text-sm px-3 py-1.5 rounded-lg select-all">
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
                ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-md hover:shadow-lg'
                : 'bg-neutral-800 hover:bg-neutral-900 text-white'
            }`}
          >
            {school.discountCode ? `Enroll at ${school.name} →` : `Visit ${school.name} →`}
          </a>
        </div>
      </div>
    </div>
  );
}

type SortOption = 'price-low' | 'price-high' | 'rating' | 'online' | 'in-person';

function getLowestPrice(school: School): number {
  const p = school.packages[0];
  if (school.discountCode) {
     if (p.discountPrice) return p.discountPrice;
     if (school.discountPct) return Math.round(p.price * (1 - school.discountPct / 100));
  }
  return p.discountPrice || p.price;
}

function isOnline(school: School): boolean {
  const f = school.format.toLowerCase();
  return f.includes('online') || f.includes('self-paced');
}

function isInPerson(school: School): boolean {
  const f = school.format.toLowerCase();
  return f.includes('classroom') || f.includes('in-person') || f.includes('livestream') || f.includes('zoom') || f.includes('scheduled');
}

function sortSchools(list: School[], sortBy: SortOption): School[] {
  const sorted = [...list];
  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => getLowestPrice(a) - getLowestPrice(b));
    case 'price-high':
      return sorted.sort((a, b) => getLowestPrice(b) - getLowestPrice(a));
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'online':
      return sorted.sort((a, b) => {
        if (isOnline(a) && !isOnline(b)) return -1;
        if (!isOnline(a) && isOnline(b)) return 1;
        return getLowestPrice(a) - getLowestPrice(b);
      });
    case 'in-person':
      return sorted.sort((a, b) => {
        if (isInPerson(a) && !isInPerson(b)) return -1;
        if (!isInPerson(a) && isInPerson(b)) return 1;
        return getLowestPrice(a) - getLowestPrice(b);
      });
    default:
      return sorted;
  }
}

const sortLabels: Record<SortOption, string> = {
  'price-low': 'Price: Low to High',
  'price-high': 'Price: High to Low',
  'rating': 'Highest Rated',
  'online': 'Online First',
  'in-person': 'In-Person / Live First',
};

export default function SchoolComparison() {
  const [sortBy, setSortBy] = useState<SortOption>('price-low');
  const sortedSchools = sortSchools(schools, sortBy);

  return (
    <section className="py-12 sm:py-16" id="schools">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="font-display font-bold text-2xl text-neutral-900 mb-2">
              Best Real Estate Schools in North Carolina
            </h2>
            <p className="text-neutral-500 text-sm">
              All {schools.length} schools are NCREC-approved. {sortLabels[sortBy]}.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="sort-select" className="text-sm font-medium text-neutral-600 whitespace-nowrap">Sort by:</label>
            <div className="relative">
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none border border-neutral-300 rounded-lg pl-3 pr-8 py-2 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent cursor-pointer"
              >
                {Object.entries(sortLabels).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
              <ChevronDownIcon className="w-4 h-4 text-neutral-500 absolute right-2.5 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Quick Price Summary */}
        <div className="mb-8 p-4 bg-brand-50 rounded-xl border border-brand-100">
          <h3 className="font-semibold text-brand-800 text-sm mb-3">Quick Price Comparison (Course Only)</h3>
          <div className="flex flex-wrap gap-3">
            {sortedSchools.map((school) => {
              const price = getLowestPrice(school);
              return (
                <a
                  key={school.name}
                  href={`#school-${school.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-brand-200 hover:border-brand-400 hover:shadow-sm transition-all cursor-pointer group"
                >
                  <span className="text-xs text-neutral-600 group-hover:text-neutral-800">{school.name}:</span>
                  <span className="font-bold text-neutral-800 group-hover:text-brand-600">${price}</span>
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

        {/* School Cards */}
        <div className="space-y-6">
          {sortedSchools.map((school, index) => (
            <SchoolCard key={school.name} school={school} index={index} />
          ))}
        </div>

        <p className="text-xs text-neutral-400 mt-6 text-center">
          Prices verified February 2026. Prices may change. Always confirm current pricing on the school&apos;s website before enrolling.
        </p>
      </div>
    </section>
  );
}
