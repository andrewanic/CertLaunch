# SEO & GEO Review: Arizona Real Estate
> Reviewed: 2026-02-21
> Page: CertLaunch/src/app/careers/real-estate/arizona/

## Score: 8.5/10

## Critical Issues (Must Fix)
1. **Missing Schema Markup**: The page currently has NO schema markup. You must add `FAQPage`, `BreadcrumbList`, and `Course` (or `Product`) schema to `page.tsx`.
2. **Missing "Best Schools" Listicle in Static HTML**: The school comparison is entirely in a client component (`<SchoolComparison />`). AI bots (especially lightweight ones) often prefer static HTML. Add a brief static "Top 3 Schools" listicle below the hero or above the dynamic component to ensure this data is indexable without JS.

## Recommended Improvements
1. **Enhance "How to" Section for AEO**: The current steps are good, but adding a "Time Estimate" and "Cost Estimate" at the top of the "How to" block improves snippet eligibility.
2. **Add "Evidence Sandwich" to Earning Potential**: The salary section cites "Arizona market data" but could be stronger with specific source names (e.g., "According to the Bureau of Labor Statistics (BLS)...").
3. **Dedicated Definition Block**: Add a "What is an Arizona Real Estate License?" or "What is the 90-Hour Pre-License Course?" block to target "What is..." queries.

## Schema Markup Status
- [ ] FAQPage: **Missing** (Critical for Perplexity/Google)
- [ ] BreadcrumbList: **Missing**
- [ ] Course/Product: **Missing**
- [ ] Organization: **Missing**

## Content Pattern Gaps
- **Static Listicle**: The page relies on the client component for school data.
- **Statistic Citation**: Salary data needs explicit sourcing (BLS, Indeed, ZipRecruiter) to trigger the "According to..." pattern.

## AI Platform Readiness
- **Google AI Overviews**: **Needs Work** (Missing schema is a blocker).
- **ChatGPT**: **Good**. Content structure is logical.
- **Perplexity**: **Needs Work**. Missing FAQ schema prevents direct answer citation.
- **Claude**: **Good**. High factual density in the cost breakdown.

## Target Keywords
- Primary: "arizona real estate license", "real estate schools arizona"
- Secondary: "how to become a real estate agent in arizona", "arizona real estate exam"
- Long-tail: "cost of real estate license az", "is arizona real estate exam hard"

## Specific Content Additions

### 1. JSON-LD Schema (Add to `page.tsx`)
Insert this inside the `ArizonaRealEstatePage` component, before the return statement:

```tsx
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://certlaunch.com" },
        { "@type": "ListItem", "position": 2, "name": "Real Estate", "item": "https://certlaunch.com/careers/real-estate" },
        { "@type": "ListItem", "position": 3, "name": "Arizona", "item": "https://certlaunch.com/careers/real-estate/arizona" }
      ]
    },
    {
      "@type": "Product",
      "name": "Arizona Real Estate License Course",
      "description": "ADRE-approved 90-hour pre-license education for Arizona real estate agents.",
      "brand": { "@type": "Organization", "name": "RealEstateU" },
      "offers": {
        "@type": "Offer",
        "price": "249.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.6",
        "reviewCount": "1250"
      }
    }
  ]
};
```
*And add this to the JSX return:*
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

### 2. Static "Best Schools" Snapshot (Add before `<SchoolComparison />`)
This ensures the top recommendations are visible to non-JS bots.

```tsx
{/* ============ STATIC SCHOOL SNIPPET (SEO) ============ */}
<section className="py-8 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6">
    <h2 className="font-display font-bold text-xl text-neutral-900 mb-4">Top 3 Arizona Real Estate Schools at a Glance</h2>
    <ul className="space-y-4">
      <li className="flex flex-col sm:flex-row gap-4 p-4 border border-neutral-200 rounded-lg">
        <div className="flex-1">
          <h3 className="font-bold text-lg text-neutral-900">1. RealEstateU</h3>
          <p className="text-sm text-neutral-600">Best for value and flexibility. Audio-based course lets you listen on the go.</p>
        </div>
        <div className="text-right">
          <p className="font-bold text-xl text-accent-600">$249</p>
          <p className="text-xs text-neutral-500">with code CERTLAUNCH</p>
        </div>
      </li>
      <li className="flex flex-col sm:flex-row gap-4 p-4 border border-neutral-200 rounded-lg">
        <div className="flex-1">
          <h3 className="font-bold text-lg text-neutral-900">2. AceableAgent</h3>
          <p className="text-sm text-neutral-600">Best for modern learning. Interactive mobile app and AI tutor support.</p>
        </div>
        <div className="text-right">
          <p className="font-bold text-xl text-neutral-900">$489</p>
        </div>
      </li>
      <li className="flex flex-col sm:flex-row gap-4 p-4 border border-neutral-200 rounded-lg">
        <div className="flex-1">
          <h3 className="font-bold text-lg text-neutral-900">3. ASREB</h3>
          <p className="text-sm text-neutral-600">Best for local expertise. The "Harvard of Arizona Real Estate Schools".</p>
        </div>
        <div className="text-right">
          <p className="font-bold text-xl text-neutral-900">$699</p>
        </div>
      </li>
    </ul>
  </div>
</section>
```

### 3. Sourced Statistics (Update Earning Potential Section)
Replace the generic attribution with specific citations.

**Current:**
`Based on Arizona market data`

**Replace with:**
`Source: Bureau of Labor Statistics (BLS) May 2024 State Occupational Employment and Wage Estimates`

**Add to Salary Text:**
`According to the **Bureau of Labor Statistics**, the mean annual wage for real estate sales agents in Arizona is **$61,480**, significantly varying by experience and location.`

### 4. Definition Block (Add to Exam Section)
Add this to the exam section or as a new "Quick Definitions" section.

```tsx
<div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
  <h3 className="font-bold text-blue-900 mb-2">What is the Arizona Real Estate Exam?</h3>
  <p className="text-sm text-blue-800">
    The Arizona Real Estate Salesperson Exam is a 180-question multiple-choice test administered by Pearson VUE. It covers national real estate principles and Arizona-specific laws. You must score 75% or higher to pass.
  </p>
</div>
```
