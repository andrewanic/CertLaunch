# SEO & GEO Review: North Carolina Real Estate
> Reviewed: 2026-02-21
> Page: CertLaunch/src/app/careers/real-estate/north-carolina/

## Score: 8/10

## Critical Issues (Must Fix)
1.  **Missing Schema Markup:** The `page.tsx` file has `metadata` but completely lacks the JSON-LD schema blocks required for rich results (FAQPage, BreadcrumbList, Course/Product). This is a critical missed opportunity for Perplexity and Google.
2.  **School Comparison is Client-Side Only:** The `SchoolComparison` component is a client component (`'use client'`). While good for interactivity, the content *inside* it (the school data) might not be fully indexed by all crawlers if it's not pre-rendered or if the crawlers don't execute JS perfectly. More importantly, it doesn't offer a static HTML table alternative for snippets.

## Recommended Improvements
1.  **Add "What is a NC Real Estate Broker?" Definition Block:**
    *   *Why:* Capture the "what is" snippet and clarify the unique "Broker" vs "Provisional Broker" terminology in NC (NC doesn't use "Salesperson").
    *   *Where:* Before the "How to Get..." section.
2.  **Enhance "How to" Section for List Snippets:**
    *   *Why:* The current section is good, but explicit bolding of the *action* at the start of each step helps Google extract the list.
    *   *Change:* Ensure the step titles are concise actions (e.g., "Complete 75 Hours" is good). Add a "Time to complete" estimate at the top of the block.
3.  **Add a Static HTML Comparison Table:**
    *   *Why:* AI and search engines love simple HTML tables for "best school" queries. The complex React component is great for users, but a hidden or simplified static table helps SEO.
    *   *Action:* Add a simple HTML table of the schools in the `page.tsx` (server side) or ensure the `SchoolComparison` renders meaningful HTML on the server.
4.  **Add "Worth It?" / Pros & Cons Section:**
    *   *Why:* Captures "is being a real estate agent in NC worth it" queries.
    *   *Where:* After the Salary/Earning potential section.

## Schema Markup Status
- [ ] FAQPage: **Missing** (Needs to be added to `page.tsx`)
- [ ] BreadcrumbList: **Missing** (Needs to be added to `page.tsx`)
- [ ] Course/Product: **Missing** (Should be added for the schools, ideally)
- [ ] Organization: **Missing**

## Content Pattern Gaps
- **Definition Block:** Missing a clear definition of the specific NC license types ("Provisional Broker" vs "Broker").
- **Evidence Sandwich:** The salary section has data, but could use the "According to [Source], [Stat]" pattern more explicitly for GEO.
- **Pros/Cons:** Missing a distinct "Pros and Cons of a Real Estate Career in NC" section.

## AI Platform Readiness
- **Google AI Overviews:** **Needs Work**. Missing schema is the biggest blocker. The content is good, but the lack of structured data hurts.
- **ChatGPT:** **Ready**. Content is structured well with clear headings and steps.
- **Perplexity:** **Needs Work**. Missing FAQPage schema means Perplexity might miss the Q&A pairs.
- **Claude:** **Good**. High factual density in the cost and requirements sections.

## Target Keywords
- **Primary:** "how to get real estate license north carolina", "nc real estate license requirements"
- **Secondary:** "north carolina real estate schools", "cost of real estate license nc"
- **Long-tail:** "what is a provisional broker nc", "nc real estate exam difficulty", "how long to get nc real estate license"

## Specific Content Additions

### 1. JSON-LD Schema (Add to `page.tsx`)
Insert this inside the `return` statement, before the closing fragment `</>`:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      {
        "@context": "https://schema.org",
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
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://certlaunch.com" },
          { "@type": "ListItem", "position": 2, "name": "Real Estate", "item": "https://certlaunch.com/careers/real-estate" },
          { "@type": "ListItem", "position": 3, "name": "North Carolina", "item": "https://certlaunch.com/careers/real-estate/north-carolina" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Get a Real Estate License in North Carolina (2026)",
        "datePublished": "2025-11-15",
        "dateModified": "2026-02-21",
        "author": [{ "@type": "Organization", "name": "CertLaunch Team" }]
      }
    ])
  }}
/>
```

### 2. Definition Block (Add after Hero, before School Comparison)
```tsx
<section className="py-12 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6">
    <h2 className="font-display font-bold text-2xl text-neutral-900 mb-4">What is a North Carolina Provisional Broker?</h2>
    <p className="text-lg text-neutral-700 leading-relaxed">
      In North Carolina, the entry-level real estate license is officially called a <strong>Provisional Broker</strong> license. Unlike other states that use the term "Salesperson," North Carolina considers all licensees to be Brokers.
    </p>
    <p className="mt-4 text-neutral-600">
      <strong>Key Difference:</strong> A Provisional Broker must be supervised by a Broker-in-Charge (BIC) and cannot practice independently until they complete 90 hours of post-licensing education to remove the "Provisional" status.
    </p>
  </div>
</section>
```

### 3. Pros & Cons Block (Add after Earning Potential)
```tsx
<section className="py-12 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6">
    <h2 className="font-display font-bold text-2xl text-neutral-900 mb-6">Is a North Carolina Real Estate License Worth It?</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="font-bold text-lg text-green-700 mb-3 flex items-center gap-2">
          <span className="bg-green-100 p-1 rounded">👍</span> Pros
        </h3>
        <ul className="space-y-3 text-sm text-neutral-600">
          <li className="flex gap-2"><span className="text-green-500 font-bold">+</span> <strong>High Earning Potential:</strong> Top NC agents earn $100k+, well above the state average.</li>
          <li className="flex gap-2"><span className="text-green-500 font-bold">+</span> <strong>Low Barrier to Entry:</strong> Total startup cost is under $700, significantly less than a college degree.</li>
          <li className="flex gap-2"><span className="text-green-500 font-bold">+</span> <strong>Growing Market:</strong> Areas like Raleigh and Charlotte are among the fastest-growing housing markets in the US.</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg text-red-700 mb-3 flex items-center gap-2">
          <span className="bg-red-100 p-1 rounded">👎</span> Cons
        </h3>
        <ul className="space-y-3 text-sm text-neutral-600">
          <li className="flex gap-2"><span className="text-red-500 font-bold">-</span> <strong>Income Uncertainty:</strong> It is commission-only; you don't get paid until you sell a home.</li>
          <li className="flex gap-2"><span className="text-red-500 font-bold">-</span> <strong>Challenging Exam:</strong> The NC state-specific exam section is notoriously difficult compared to other states.</li>
          <li className="flex gap-2"><span className="text-red-500 font-bold">-</span> <strong>Post-Licensing Requirement:</strong> You must complete 90 additional hours of education within 18 months.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
```
