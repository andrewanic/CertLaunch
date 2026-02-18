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
    url: 'https://realestateu.com/florida-real-estate-license-course/',
    rating: 4.6,
    ratingSource: 'BBB',
    format: 'Self-paced online',
    access: '1-year access',
    features: ['30-day money-back guarantee', 'Audio course included', '225,000+ students'],
    badge: 'Best Value',
    badgeColor: 'bg-accent-500',
    discountCode: 'CERTLAUNCH',
    discountPct: 20,
    packages: [
      {
        name: 'Course Only',
        price: 69,
        discountPrice: 55,
        includes: ['63-hour pre-license course', 'On-demand video lessons', 'Audio course for learning on-the-go'],
      },
      {
        name: 'Course + Study Guide + eTextbook',
        price: 177,
        discountPrice: 142,
        includes: ['Everything in Course Only', 'Exam study guide with 16 practice exams', 'E-textbook with offline access'],
      },
      {
        name: 'Course + Study Guide + eTextbook + Agent Success',
        price: 790,
        discountPrice: 632,
        includes: ['Everything in previous package', 'Career coaching courses', 'Negotiation strategies training', 'Lead conversion techniques'],
      },
    ],
  },
  {
    name: 'Azure Tide / All Florida School',
    url: 'https://azuretide.school/product/florida-real-estate-63-hour-pre-license-sales-associate-course',
    rating: 4.0,
    ratingSource: 'Student Reviews',
    format: 'Online + weekly live webinars',
    access: '90-day access',
    features: ['Weekly live webinars with instructor', 'FREC-approved'],
    badge: null,
    badgeColor: '',
    discountCode: null,
    discountPct: null,
    packages: [
      { name: 'Standard 63-Hr Course', price: 79, discountPrice: null, includes: ['63-hour pre-license course', 'Weekly live webinars with instructor', '90-day access'] },
      { name: 'Premier Narrated Course', price: 349, discountPrice: null, includes: ['Everything in Standard', 'Full audio narration throughout course'] },
    ],
  },
  {
    name: 'AYPO Real Estate',
    url: 'https://www.ayporealestate.com/florida-real-estate-pre-license',
    rating: 5.0,
    ratingSource: 'Google Reviews',
    format: 'Self-paced online',
    access: '6-month access',
    features: ['Pass or don\'t pay guarantee', 'Unlimited practice exams'],
    badge: null,
    badgeColor: '',
    discountCode: null,
    discountPct: null,
    packages: [
      { name: 'Standard 63-Hr Course', price: 80, discountPrice: null, includes: ['63-hour pre-license course', 'Review questions', 'Unlimited practice exam attempts', 'Certificate'] },
      { name: 'Deluxe Package', price: 110, discountPrice: null, includes: ['Everything in Standard', 'Exam prep tool (national & state)', 'Downloadable PDF content', 'Glossary PDF'] },
    ],
  },
  {
    name: 'MLS Campus',
    url: 'https://www.mlscampus.com/florida/sales-associate-pre-license/',
    rating: 4.2,
    ratingSource: 'Student Reviews',
    format: 'Self-paced online',
    access: '6-month access',
    features: ['AI virtual instructor', 'Audio learning', 'Mobile & desktop'],
    badge: null,
    badgeColor: '',
    discountCode: null,
    discountPct: null,
    packages: [
      { name: 'Basic', price: 99, discountPrice: null, includes: ['63-hour pre-license course', 'Practice exams (unlimited)', 'Instructor support', '6-month access'] },
      { name: 'Enhanced', price: 149, discountPrice: null, includes: ['Everything in Basic', 'Audio learning', 'AI virtual instructor', 'Exam prep eBook'] },
      { name: 'Deluxe', price: 199, discountPrice: null, includes: ['Everything in Enhanced', 'Exam Prep Master', 'Real Estate Math Cram', '12-month access'] },
      { name: 'Premium', price: 249, discountPrice: null, includes: ['Everything in Deluxe', '45-hr post-license course', '1-hr personal coaching', 'Live webinars'] },
    ],
  },
  {
    name: 'DBPR Courses Online',
    url: 'https://www.dbprcoursesonline.com/63-hour-enroll-now',
    rating: 4.0,
    ratingSource: 'Student Reviews',
    format: 'Self-paced online',
    access: 'Not specified',
    features: ['Best price guarantee', 'DBPR-approved'],
    badge: null,
    badgeColor: '',
    discountCode: null,
    discountPct: null,
    packages: [
      { name: '63-Hr Course (Individual)', price: 99, discountPrice: null, includes: ['63-hour DBPR-approved pre-license course'] },
      { name: 'Family & Friend Deal (2 people)', price: 149, discountPrice: null, includes: ['Two enrollments in the 63-hr course ($74.50/person)'] },
    ],
  },
  {
    name: 'Prolicense Florida',
    url: 'https://www.flcaa.com/florida-real-estate-license-course',
    rating: 4.8,
    ratingSource: 'AgentAdvice',
    format: 'Self-paced online',
    access: '6-month access',
    features: ['87% pass rate', '24/7 instructor support', '30-day money-back guarantee'],
    badge: null,
    badgeColor: '',
    discountCode: null,
    discountPct: null,
    packages: [
      { name: 'Basic', price: 116, discountPrice: null, includes: ['63-hour fully narrated course', '24/7 instructor support', '30-day money-back guarantee', '2 exam attempts'] },
      { name: 'Premium', price: 175, discountPrice: null, includes: ['Everything in Basic', 'State exam simulator', 'Digital flashcards', 'Unlimited exam re-activations'] },
      { name: 'Ultimate', price: 203, discountPrice: null, includes: ['Everything in Premium', '9-month access (extended)'] },
    ],
  },
  {
    name: '360training',
    url: 'https://www.360training.com/agent-campus/real-estate-license/florida',
    rating: 4.0,
    ratingSource: 'Student Reviews',
    format: 'Self-paced online',
    access: '6-12 month access',
    features: ['FREC-approved', 'Real estate math bonus course'],
    badge: null,
    badgeColor: '',
    discountCode: null,
    discountPct: null,
    packages: [
      { name: 'Basic', price: 99, discountPrice: null, includes: ['63-hour FREC-approved course', 'Real Estate Math bonus course', 'Certificate of completion'] },
      { name: 'Premium', price: 145, discountPrice: null, includes: ['Everything in Basic', 'License exam prep course', 'Client-Focused Communications course', 'Money-back guarantee'] },
    ],
  },
  {
    name: 'The CE Shop',
    url: 'https://www.theceshop.com/florida/pre-licensing/fl-sales-associate-pre-licensing-cost',
    rating: 4.6,
    ratingSource: 'Student Reviews',
    format: 'Self-paced online',
    access: '6-month access',
    features: ['5-day free trial', 'Interactive LEAP platform'],
    badge: 'Top Rated',
    badgeColor: 'bg-brand-500',
    discountCode: null,
    discountPct: null,
    packages: [
      {
        name: 'Courses Only',
        price: 139,
        discountPrice: null,
        includes: ['63-hour pre-license course', 'E-books & digital flashcards', 'Glossary & study schedule'],
      },
      {
        name: 'Standard Package',
        price: 239,
        discountPrice: null,
        includes: ['Everything in Courses Only', 'Exam Prep Edge (unlimited practice questions)', 'Quizzes & flashcards'],
      },
      {
        name: 'Value Package',
        price: 315,
        discountPrice: null,
        includes: ['Everything in Standard', 'Kickstarter Professional Development Program'],
      },
      {
        name: 'Premium Package',
        price: 459,
        discountPrice: null,
        includes: ['Everything in Value', '45-hour post-licensing course', 'Career Companion e-textbook'],
      },
    ],
  },
  {
    name: 'VanEd',
    url: 'https://www.vaned.com/real-estate/florida/pre-license',
    rating: 4.0,
    ratingSource: 'Student Reviews',
    format: 'Self-paced online',
    access: '12-month access',
    features: ['5-day free trial', 'Pass guarantee', 'FREC-approved'],
    badge: null,
    badgeColor: '',
    discountCode: null,
    discountPct: null,
    packages: [
      {
        name: 'Standard Package',
        price: 97,
        discountPrice: null,
        includes: ['63-hour pre-license course', 'Real estate math course', 'Live customer service support'],
      },
      {
        name: 'Plus Package',
        price: 125,
        discountPrice: null,
        includes: ['Everything in Standard', 'Florida exam prep materials'],
      },
      {
        name: 'Premium Package',
        price: 217,
        discountPrice: null,
        includes: ['Everything in Plus', 'Modern RE Practice e-book', '45-hour post-licensing course'],
      },
    ],
  },
  {
    name: 'Colibri Real Estate',
    url: 'https://www.colibrirealestate.com/real-estate/florida/license/',
    rating: 4.6,
    ratingSource: '2,870 reviews',
    format: 'Self-paced online + livestream',
    access: '6-month access',
    features: ['Pass guarantee on exam prep packages', 'Audio narration included'],
    badge: null,
    badgeColor: '',
    discountCode: null,
    discountPct: null,
    packages: [
      {
        name: 'The Basics',
        price: 169,
        discountPrice: null,
        includes: ['63-hour pre-license course', 'Instructor email support', '3 downloadable study guides', 'Audio course'],
      },
      {
        name: 'Exam Preparation',
        price: 269,
        discountPrice: null,
        includes: ['Everything in The Basics', 'Simulated practice exams', 'Digital flashcards', 'Readiness assessment', 'Audio review materials'],
      },
      {
        name: 'Exam Preparation Plus',
        price: 339,
        discountPrice: null,
        includes: ['Everything in Exam Preparation', 'Exam Cram webinar series', 'Instructor Q&A sessions'],
      },
      {
        name: 'Ultimate Learning',
        price: 449,
        discountPrice: null,
        includes: ['Everything in Exam Preparation Plus', 'Printed textbook', 'Career Booster Pack with 20+ video tutorials'],
      },
    ],
  },
  {
    name: 'Aceable Agent',
    url: 'https://www.aceableagent.com/real-estate-license/florida/',
    rating: 4.3,
    ratingSource: 'Student Reviews',
    format: 'Self-paced online + mobile app',
    access: 'Unlimited access',
    features: ['Pass guarantee', 'Native iOS & Android app', 'Newsweek Top Provider 2025'],
    badge: null,
    badgeColor: '',
    discountCode: null,
    discountPct: null,
    packages: [
      {
        name: 'Basic',
        price: 107,
        discountPrice: null,
        includes: ['63-hour pre-license course', 'Mastery tracking dashboard', 'Full mobile app access', 'Instructor support'],
      },
      {
        name: 'Deluxe',
        price: 191,
        discountPrice: null,
        includes: ['Everything in Basic', 'AI-powered study tools', '3 months PrepAgent access', 'Practice exam builder', '1 hour private tutoring', 'Live webinars'],
      },
      {
        name: 'Premium',
        price: 293,
        discountPrice: null,
        includes: ['Everything in Deluxe', '45-hour post-licensing course'],
      },
    ],
  },
  {
    name: 'Kaplan Real Estate',
    url: 'https://www.kapre.com/real-estate/florida/licensing-courses',
    rating: 4.2,
    ratingSource: 'Student Reviews',
    format: 'Online + live online + in-person',
    access: '6-month access',
    features: ['Multiple learning formats', 'Formerly Bob Hogue School', '300,000+ students'],
    badge: null,
    badgeColor: '',
    discountCode: null,
    discountPct: null,
    packages: [
      {
        name: 'Exam Prep Package',
        price: 269,
        discountPrice: null,
        includes: ['63-hour pre-license course', 'Live Online Learning Hub', 'Video courses', 'Interactive quizzes', 'Practice exercises'],
      },
      {
        name: 'Career Launcher',
        price: 599,
        discountPrice: null,
        includes: ['Everything in Exam Prep Package', 'Real Estate Accelerator Program'],
      },
    ],
  },
  {
    name: 'Gold Coast Schools',
    url: 'https://goldcoastschools.com/courses/real-estate/sales-associate-pre-license-course/',
    rating: 4.5,
    ratingSource: 'Student Reviews',
    format: 'Online + livestream + in-person',
    access: '1-year access',
    features: ['English + Spanish courses', 'Florida institution since 1970', 'Career fairs access'],
    badge: null,
    badgeColor: '',
    discountCode: null,
    discountPct: null,
    packages: [
      {
        name: 'Core',
        price: 329,
        discountPrice: null,
        includes: ['63-hour pre-license course', 'PDF textbook', 'Language of Real Estate Guidebook', 'Access to career fairs'],
      },
      {
        name: 'Standard',
        price: 429,
        discountPrice: null,
        includes: ['Everything in Core', 'Digital flashcards', 'Exam Cram review course', 'Simulated exams'],
      },
      {
        name: 'Accelerate',
        price: 529,
        discountPrice: null,
        includes: ['Everything in Standard', 'Live-streamed course option', 'Career workshops', '14-hour renewal course'],
      },
    ],
  },
  {
    name: 'Florida Real Estate School',
    url: 'https://floridarealestateschool.com/courses-63-hour-sales-associate',
    rating: 4.7,
    ratingSource: 'TheClose',
    format: 'Self-paced online, fully narrated',
    access: '6-month access',
    features: ['24/7 instructor support', '90%+ course exam pass rate', 'Fully narrated'],
    badge: null,
    badgeColor: '',
    discountCode: null,
    discountPct: null,
    packages: [
      { name: 'Standard', price: 200, discountPrice: null, includes: ['Fully narrated interactive course', '24/7 instructor support', '2 exam attempts', '6-month access'] },
      { name: 'Premium', price: 290, discountPrice: null, includes: ['Everything in Standard', '12-month access', '7 practice exams', 'Math Made Simple eBook', 'Digital flashcards'] },
      { name: 'Ultimate', price: 390, discountPrice: null, includes: ['Everything in Premium', 'Unlimited end-of-course exam attempts'] },
    ],
  },
  {
    name: 'Dolphin School of Real Estate',
    url: 'https://dolphinschoolofrealestate.com/en/pre-license/',
    rating: 4.5,
    ratingSource: 'Student Reviews',
    format: 'Self-paced online',
    access: '12-month access',
    features: ['Bilingual (English & Spanish)', 'Downloadable audio files'],
    badge: null,
    badgeColor: '',
    discountCode: null,
    discountPct: null,
    packages: [
      { name: '63-Hour Pre-License', price: 200, discountPrice: null, includes: ['19 online lessons', '19 downloadable audio files', '2 unlimited-attempt practice exams', 'Instant certificate', '12-month access'] },
    ],
  },
  {
    name: 'Larson Educational Services',
    url: 'https://www.larsoned.com/realestate/licensing/63-hour-sales-associate-pre-license-course-self-study/',
    rating: 4.3,
    ratingSource: 'Student Reviews',
    format: 'Online + classroom (SW Florida)',
    access: '1-year access',
    features: ['In-person classes in Naples & Fort Myers', '540+ page eBook manual'],
    badge: null,
    badgeColor: '',
    discountCode: null,
    discountPct: null,
    packages: [
      { name: 'Online Self-Study', price: 249, discountPrice: null, includes: ['63-hour course', '540+ page eBook manual', '1-year access'] },
      { name: 'Classroom (8-day)', price: 499, discountPrice: null, includes: ['In-person instruction', '400+ page manual', '200 sample questions', '1-year access to video reviews'] },
    ],
  },
  {
    name: 'Ed Klopfer Schools',
    url: 'https://www.edklopfer.com/courses/classroom-courses/sales-associate-pre-license-real-estate-course',
    rating: 4.3,
    ratingSource: 'Student Reviews',
    format: 'Classroom (Sarasota area)',
    access: 'N/A (classroom)',
    features: ['Established FL school', 'In-person instruction'],
    badge: null,
    badgeColor: '',
    discountCode: null,
    discountPct: null,
    packages: [
      { name: 'Classroom 63-Hr Course', price: 489, discountPrice: null, includes: ['7-day or 14-evening sessions', 'Course manual', 'MP3 audio of 50 key terms'] },
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

  return (
    <div className={`p-4 rounded-lg ${isPrimary ? 'bg-accent-50 border-2 border-accent-200' : 'bg-neutral-50 border border-neutral-200'}`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
        <h4 className={`font-semibold ${isPrimary ? 'text-accent-700' : 'text-neutral-700'}`}>
          {pkg.name}
        </h4>
        <div className="flex items-center gap-3">
          {hasDiscount ? (
            <>
              <span className="text-neutral-400 line-through text-sm">${pkg.price}</span>
              <span className={`text-xl font-extrabold ${isPrimary ? 'text-accent-600' : 'text-accent-500'}`}>
                ${pkg.discountPrice}
              </span>
              <span className="savings-badge text-xs font-bold text-white px-2 py-0.5 rounded-full">
                {Math.round(((pkg.price - (pkg.discountPrice as number)) / pkg.price) * 100)}% off with code
              </span>
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
    : primaryPackage.price;

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
            {school.discountCode && primaryPackage.discountPrice ? (
              <>
                <p className="text-lg font-bold text-neutral-400 line-through">${primaryPackage.price}</p>
                <p className="text-2xl font-extrabold text-accent-500">${primaryPackage.discountPrice}</p>
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
  if (school.discountCode && school.packages[0].discountPrice) {
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
              Best Real Estate Schools in Florida
            </h2>
            <p className="text-neutral-500 text-sm">
              All {schools.length} schools are Florida DBPR-approved. {sortLabels[sortBy]}.
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
              const discountedPrice = school.discountCode && school.packages[0].discountPrice
                ? school.packages[0].discountPrice
                : null;
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
                      <span className="font-bold text-accent-600">${discountedPrice}</span>
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
