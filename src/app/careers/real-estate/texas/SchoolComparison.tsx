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
    url: 'https://realestateu.com/texas-real-estate-license-online/',
    rating: 4.6,
    ratingSource: 'BBB',
    format: 'Self-paced online',
    access: '6-month access',
    features: ['30-day money-back guarantee', 'Audio course included', '225,000+ students'],
    badge: 'Best Value',
    badgeColor: 'bg-accent-500',
    discountCode: 'CERTLAUNCH',
    discountPct: 20,
    packages: [
      {
        name: 'Course Only',
        price: 249,
        discountPrice: 199.20,
        includes: ['180-hour TREC-approved course', 'On-demand video lessons', 'Audio course for learning on-the-go'],
      },
      {
        name: 'Course + Exam Prep',
        price: 395,
        discountPrice: 316,
        includes: ['Everything in Course Only', 'State exam prep', 'Practice tests'],
      },
    ],
  },
  {
    name: 'AYPO Real Estate',
    url: 'https://www.ayporealestate.com/school/texas-real-estate-pre-license/',
    rating: 4.5,
    ratingSource: 'Student Reviews',
    format: 'Self-paced online',
    access: '6-month access',
    features: ['Pass or don\'t pay guarantee', 'Price match guarantee', '100% online'],
    badge: 'Best Price',
    badgeColor: 'bg-green-600',
    discountCode: null,
    discountPct: null,
    packages: [
      { 
        name: '180-Hour Sales Agent Package', 
        price: 149, 
        discountPrice: null, 
        includes: ['6 required courses', 'Exam prep', 'Pass or don\'t pay guarantee'] 
      },
      { 
        name: '180-Hour Proctored Sales Agent Package', 
        price: 499, 
        discountPrice: null, 
        includes: ['Everything above', 'Online proctored final exams'] 
      },
    ],
  },
  {
    name: 'Colibri Real Estate',
    url: 'https://www.colibrirealestate.com/real-estate/texas/license/',
    rating: 4.6,
    ratingSource: 'TheClose',
    format: 'Self-paced online',
    access: '6-month access',
    features: ['Pass guarantee', 'Livestream options available', 'Career resources'],
    badge: null,
    badgeColor: '',
    discountCode: null,
    discountPct: null,
    packages: [
      {
        name: 'The Basics',
        price: 509,
        discountPrice: null,
        includes: ['180-hour course package', 'Instructor support', 'Real estate study guides'],
      },
      {
        name: 'Exam Preparation',
        price: 627,
        discountPrice: null,
        includes: ['Everything in The Basics', 'Simulated exams', 'Flashcards', 'Pass or Don\'t Pay guarantee'],
      },
      {
        name: 'Ultimate Learning',
        price: 789,
        discountPrice: null,
        includes: ['Everything in Exam Preparation', 'Career Booster Pack', 'Buffini coaching videos'],
      },
    ],
  },
  {
    name: 'VanEd (360training)',
    url: 'https://www.vaned.com/real-estate/texas/pre-license',
    rating: 4.5,
    ratingSource: 'Student Reviews',
    format: 'Self-paced online',
    access: '6-12 month access',
    features: ['Instructor Q&A', 'Payment plans available', 'Real estate math support'],
    badge: null,
    badgeColor: '',
    discountCode: null,
    discountPct: null,
    packages: [
      { 
        name: '180-Hour Standard Package', 
        price: 310, 
        discountPrice: null, 
        includes: ['6 required courses', '12-month access', 'Live customer service'] 
      },
      { 
        name: '180-Hour Plus Package', 
        price: 349, 
        discountPrice: null, 
        includes: ['Standard package features', 'Texas Exam Prep', 'Pre-License Study Guide'] 
      },
      { 
        name: '180-Hour + SAE Premium Package', 
        price: 645, 
        discountPrice: null, 
        includes: ['Plus package features', '98-hr SAE courses', 'Modern Real Estate Practice ebook'] 
      },
    ],
  },
  {
    name: 'Kaplan Real Estate Education',
    url: 'https://www.kapre.com/real-estate/texas/licensing-courses',
    rating: 4.8,
    ratingSource: 'TheClose',
    format: 'Online + Live Online',
    access: '6-month access',
    features: ['Interactive study groups', 'High pass rates', 'Includes AceableAgent tech'],
    badge: null,
    badgeColor: '',
    discountCode: null,
    discountPct: null,
    packages: [
      {
        name: 'Texas Licensing with Exam Prep',
        price: 499,
        discountPrice: null,
        includes: ['180-hour course', 'State & National exam prep', 'Interactive study group'],
      },
      {
        name: 'Career Launcher Online Package',
        price: 899,
        discountPrice: null,
        includes: ['Everything in Licensing package', 'Real Estate Accelerator', 'Career Mentor Connect'],
      },
    ],
  },
  {
    name: 'Pioneer School of Real Estate',
    url: 'https://pioneerschoolofrealestate.com/?course=pre-licensing-courses',
    rating: 4.3,
    ratingSource: 'HousingWire',
    format: 'Self-paced online',
    access: '12-month access',
    features: ['Longest access period (12 months)', 'Mobile friendly', 'No hidden fees'],
    badge: null,
    badgeColor: '',
    discountCode: null,
    discountPct: null,
    packages: [
      { 
        name: '180-Hour Pre-License Package', 
        price: 499, 
        discountPrice: null, 
        includes: ['180-hour TREC-approved course', '12-month access', 'Certificate of completion'] 
      },
    ],
  },
  {
    name: 'The CE Shop',
    url: 'https://www.theceshop.com/texas/pre-licensing/tx-salesperson-pre-licensing-cost',
    rating: 4.6,
    ratingSource: 'Student Reviews',
    format: 'Self-paced online',
    access: '6-month access',
    features: ['LEAP interactive platform', '96% satisfaction rate', 'Pass guarantee'],
    badge: 'Top Rated',
    badgeColor: 'bg-brand-500',
    discountCode: null,
    discountPct: null,
    packages: [
      {
        name: 'Career Starter',
        price: 515,
        discountPrice: null,
        includes: ['180-hour course', 'Pass guarantee', 'Instructor-led webinars'],
      },
      {
        name: 'Career Essentials',
        price: 579,
        discountPrice: null,
        includes: ['Everything in Career Starter', 'Exam prep edge', 'Digital flashcards'],
      },
      {
        name: 'Career Builder',
        price: 645,
        discountPrice: null,
        includes: ['Everything in Career Essentials', 'Kickstarter professional development', 'eTextbook'],
      },
      {
        name: 'Career Accelerator',
        price: 1169,
        discountPrice: null,
        includes: ['Everything in Career Builder', '98-hr SAE education', 'Printed textbook'],
      },
    ],
  },
  {
    name: 'Champions School of Real Estate',
    url: 'https://www.championsschool.com/real-estate/tx/',
    rating: 4.9,
    ratingSource: 'HousingWire',
    format: 'In-person + Live Online',
    access: 'Varies by method',
    features: ['In-person classes (5 campuses)', 'Dominant Texas school', 'Career fairs'],
    badge: 'Best In-Person',
    badgeColor: 'bg-purple-500',
    discountCode: null,
    discountPct: null,
    packages: [
      {
        name: '6 Course Licensing Program',
        price: 980,
        discountPrice: null,
        includes: ['180-hour course', 'Textbooks', 'Exam prep course', '6-month exam prep retakes'],
      },
      {
        name: '6 Course + Business Etiquette',
        price: 1134,
        discountPrice: null,
        includes: ['Everything in Licensing Program', 'Business etiquette course'],
      },
      {
        name: 'Champions Advantage',
        price: 1240,
        discountPrice: null,
        includes: ['Mix-and-match delivery methods', 'All course materials', 'Exam prep retakes'],
      },
      {
        name: 'Champions Advantage + Business Etiquette',
        price: 1394,
        discountPrice: null,
        includes: ['Champions Advantage features', 'Business etiquette course', 'Full customization'],
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

function PackageRow({
  pkg,
  isPrimary,
  discountCode,
}: {
  pkg: Package;
  isPrimary: boolean;
  discountCode: string | null;
}) {
  const hasDiscount = discountCode !== null && pkg.discountPrice !== null;
  // Also check if there's a hardcoded discountPrice without a code (e.g. CE Shop promo)
  const showDiscountPrice = pkg.discountPrice !== null;

  return (
    <div className={`p-4 rounded-lg ${isPrimary ? 'bg-accent-50 border-2 border-accent-200' : 'bg-neutral-50 border border-neutral-200'}`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
        <h4 className={`font-semibold ${isPrimary ? 'text-accent-700' : 'text-neutral-700'}`}>
          {pkg.name}
        </h4>
        <div className="flex items-center gap-3">
          {showDiscountPrice ? (
            <>
              <span className="text-neutral-400 line-through text-sm">${pkg.price}</span>
              <span className={`text-xl font-extrabold ${isPrimary ? 'text-accent-600' : 'text-accent-500'}`}>
                ${pkg.discountPrice?.toFixed(2)}
              </span>
              {hasDiscount && (
                <span className="savings-badge text-xs font-bold text-white px-2 py-0.5 rounded-full">
                  {Math.round(((pkg.price - (pkg.discountPrice as number)) / pkg.price) * 100)}% off with code
                </span>
              )}
            </>
          ) : (
            <>
              <span className="text-xl font-extrabold text-neutral-800">${pkg.price}</span>
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
  const displayPrice = school.discountCode && primaryPackage.discountPrice
    ? primaryPackage.discountPrice
    : primaryPackage.discountPrice || primaryPackage.price;

  return (
    <div id={`school-${school.name.toLowerCase().replace(/\s+/g, '-')}`} className="bg-white rounded-xl border border-neutral-200 overflow-hidden card-hover scroll-mt-24">
      {/* School Header */}
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
            {primaryPackage.discountPrice ? (
              <>
                <p className="text-lg font-bold text-neutral-400 line-through">${primaryPackage.price}</p>
                <p className="text-2xl font-extrabold text-accent-500">${primaryPackage.discountPrice.toFixed(2)}</p>
              </>
            ) : (
              <p className="text-2xl font-extrabold text-neutral-800">${primaryPackage.price}</p>
            )}
          </div>
        </div>

        {/* Discount Code Banner — outline style */}
        {school.discountCode && (
          <div className="mb-3 bg-accent-500/10 border-2 border-accent-500/30 rounded-lg px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <span className="text-accent-700 font-semibold text-sm">🎉 Exclusive {school.discountPct}% off all packages!</span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-accent-600 font-medium">Use code:</span>
              <span className="bg-accent-600 text-white font-mono font-bold text-base px-4 py-1.5 rounded-lg tracking-wider">
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

      {/* Packages Section */}
      <div className="p-5 sm:p-6 space-y-3">
        <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
          Available Packages ({school.packages.length})
        </h4>

        <PackageRow pkg={primaryPackage} isPrimary={true} discountCode={school.discountCode} />

        {additionalPackages.length > 0 && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center justify-between w-full py-3 px-4 text-sm font-semibold text-brand-600 bg-brand-50 hover:bg-brand-100 border border-brand-200 rounded-lg transition-colors"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8 8-8-8" /></svg>
                {expanded ? 'Hide Additional Packages' : `${additionalPackages.length} More Package${additionalPackages.length > 1 ? 's' : ''} Available`}
              </span>
              <ChevronIcon open={expanded} />
            </button>

            {expanded && (
              <div className="space-y-3 pt-2">
                {additionalPackages.map((pkg) => (
                  <PackageRow key={pkg.name} pkg={pkg} isPrimary={false} discountCode={school.discountCode} />
                ))}
              </div>
            )}
          </>
        )}

        {/* CTA */}
        <div className="pt-3 flex flex-col sm:flex-row gap-3">
          {school.discountCode && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-500">Use code:</span>
              <span className="bg-accent-500/10 border border-accent-500/30 text-accent-600 font-mono font-bold text-sm px-3 py-1.5 rounded-lg">
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
            {school.discountCode ? `Enroll at ${school.name} →` : `Visit ${school.name} →`}
          </a>
        </div>
      </div>
    </div>
  );
}

type SortOption = 'price-low' | 'price-high' | 'rating' | 'online' | 'in-person';

function getLowestPrice(school: School): number {
  if (school.packages[0].discountPrice) {
    return school.packages[0].discountPrice;
  }
  return school.packages[0].price;
}

function isOnline(school: School): boolean {
  const f = school.format.toLowerCase();
  return f.includes('online') || f.includes('self-paced');
}

function isInPerson(school: School): boolean {
  const f = school.format.toLowerCase();
  return f.includes('classroom') || f.includes('in-person') || f.includes('livestream');
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
    <section className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="font-display font-bold text-2xl text-neutral-900 mb-2">
              Best Real Estate Schools in Texas
            </h2>
            <p className="text-neutral-500 text-sm">
              All {schools.length} schools are TREC-approved. {sortLabels[sortBy]}.
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

        {/* Quick Price Summary */}
        <div className="mb-8 p-4 bg-brand-50 rounded-xl border border-brand-100">
          <h3 className="font-semibold text-brand-800 text-sm mb-3">Quick Price Comparison (Course Only)</h3>
          <div className="flex flex-wrap gap-3">
            {sortedSchools.map((school) => {
              const price = school.packages[0].price;
              const discountedPrice = school.packages[0].discountPrice;
              
              return (
                <a
                  key={school.name}
                  href={`#school-${school.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-brand-200 hover:border-brand-400 hover:shadow-sm transition-all cursor-pointer"
                >
                  <span className="text-xs text-neutral-600">{school.name}:</span>
                  {discountedPrice ? (
                    <>
                      <span className="font-bold text-neutral-400 line-through text-sm">${price}</span>
                      <span className="font-bold text-accent-600">${discountedPrice.toFixed(2)}</span>
                    </>
                  ) : (
                    <span className="font-bold text-neutral-800">${price}</span>
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
