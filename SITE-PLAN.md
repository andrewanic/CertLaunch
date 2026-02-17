# CertLaunch — Complete Site Plan

## Business Model
- Affiliate marketplace for licensing schools
- Revenue: affiliate commissions + discount code tracking
- Fully autonomous AI-operated business
- All content AI-generated, SEO + AI GEO optimized
- Bilingual: English + Spanish

## User Flow
```
Homepage → Select License + State
  → State Results Page (schools sorted by price, comparison table, affiliate CTAs)
    → School Profile Page (comprehensive school info, discount code, affiliate CTA)
      → School's website via affiliate link

Alternative paths:
Homepage → Vertical Landing Page → Select State → State Results Page
Homepage → Blog/Guide → State Results Page or School Profile Page
```

## Primary Conversion Goal
Get visitors to click affiliate link + use discount code

## Secondary Goal
Email capture on every page

---

## PAGE TYPES

### 1. Homepage ✅ (BUILT)
- URL: `/`
- Hero with license/state selector → "See Discounts"
- Nav email capture on all pages
- Bottom email capture

### 2. Vertical Landing Pages (6 pages)
- URL: `/careers/{vertical}`
- Verticals: real-estate, mortgage-loan-originator, appraisal, insurance, home-inspection, notary
- **Purpose: Sell visitors on the career path → get them to select a state**

#### Structure:
1. **Hero**
   - H1: "Become a Licensed [Professional]"
   - Strong benefit-driven subheadline (per vertical)
   - Key stats bar: Salary range | Time to license | Cost range | No degree required
   - Prominent state selector: directive text + dropdown + CTA
2. **Why This Career**
   - Money angle (salary/commission)
   - Lifestyle angle (flexibility, independence)
   - Accessibility angle (no degree, fast start)
   - 3 clean blocks, not cluttered
3. **How to Get Licensed (General)**
   - National overview of steps
   - Typical cost range across states
   - Typical timeline
   - Brief exam info
   - Push to state selection for specifics
4. **Earning Potential**
   - Salary range for ALL 50 states
   - Commission structure with real example
   - Entry-level vs experienced range
5. **State Browser**
   - Interactive clickable US map + dropdown selector
   - Clear directive: "Select your state to compare schools and see exclusive discounts"
6. **Mid-Page Email Capture**
   - "Get the complete [Vertical] licensing guide + best discount codes"
7. **FAQs (10-15)**
   - SEO/AI GEO optimized
   - Schema markup for rich snippets
   - Covers: cost, time, requirements, difficulty, career outlook, income, part-time, exam, etc.

### 3. State Landing Pages (~300 pages)
- URL: `/careers/{vertical}/{state}`
- 6 verticals × 50 states
- **Purpose: Show all schools → drive affiliate clicks**

#### Structure:
1. **Hero**
   - H1: "Get Your [License] License in [State]"
   - Key stats bar: Cost range | Time to license | Avg salary
2. **Top School Comparison Table (max 5)**
   - Desktop: table layout | Mobile: card layout
   - Per school (text only, no logos):
     - School name
     - Regular price ~~crossed out~~ → Discount price (X% off)
     - Discount code displayed prominently
     - Star rating
     - Course format
     - 2-3 bullet points (positives only — what makes this school great)
     - "Enroll with Discount" affiliate CTA button
   - Sorted by price, lowest first
   - "CertLaunch Pick" / "Best Value" badges where appropriate
   - All schools included regardless of affiliate status
3. **All Other Schools**
   - Remaining schools below the table
   - Same info format as comparison table
4. **How to Get Licensed in [State]**
   - Step-by-step process
5. **[State] Licensing Requirements**
   - Required hours, exams, fees, application
6. **Total Cost Breakdown**
   - Course + exam + application + background check, etc.
7. **How Long Does It Take?**
   - Realistic timeline
8. **Earning Potential in [State]**
   - Avg salary, commission info, top-earning cities
9. **FAQs (state-specific, SEO/AI GEO optimized)**
10. **Mid-Page Email Capture**
    - "Get the complete [State] [License] guide + best discount code"

### 4. School Profile Pages (hundreds of pages)
- URL: `/schools/{school-slug}/{state}`
- One page per school PER STATE (not one page per school)
- **Purpose: Comprehensive school info → affiliate conversion**

#### Structure:
1. **Hero Card**
   - School name
   - Bullet points of positives
   - Regular price ~~crossed out~~ → Discount price (X% off)
   - Discount code prominently highlighted
   - Big "Enroll with Discount →" affiliate CTA
2. **Course Details**
   - Format (online, self-paced, live)
   - Hours included
   - What's included (exam prep, materials, etc.)
   - Completion timeline
3. **Pricing Breakdown**
   - Regular vs discount price
   - Discount code + savings amount
   - Additional fees
   - Money-back guarantee info
4. **Reviews (Aggregated)**
   - Pulled from Google, BBB, Trustpilot, Reddit, etc.
   - Each review shows source clearly
   - Overall sentiment summary
5. **Mid-Page Email Capture**
6. **Compare with Similar Schools**
   - 2-3 alternatives for same license + state
   - Mini comparison cards with price, rating, CTA
7. **FAQs (school-specific, SEO optimized)**

### 5. Blog / Guides (~1,000+ articles)
- URL: `/blog/{slug}` and `/guides/{slug}`
- All long-form, SEO/AI GEO optimized (length based on keyword competition)
- Internal links to state pages and school pages throughout
- Spanish versions for Spanish keyword rankings

#### Content Categories:
- **Licensing Guides**: "How to Get Your [License] in [State]" (~300)
- **School Rankings**: "Best [License] Schools in [State]" (~300)
- **Salary Guides**: By state and vertical
- **Career Advice**: "Is [Career] Worth It?" articles
- **School Comparisons**: "School A vs School B"
- **Spanish Versions**: All of the above in Spanish

### 6. Static Pages
- `/about` — Company info, mission
- `/how-we-earn` — Affiliate transparency (NerdWallet style)
- `/editorial-policy` — How we review/rank schools
- `/contact` — Contact form
- `/faq` — General site FAQ
- `/privacy-policy`
- `/terms-of-service`
- `/disclosure`
- Built with standard best practices

---

## SCHOOLS DATABASE

### Real Estate (10-20 per state)
**National:** RealEstateU, CE Shop, Colibri, Aceable Agent, Kaplan, 360 Training
**Local examples:** Champion School (TX), Superior School (NC), NYREI (NYC)

### MLO (5-10 per state)
RealEstateU, Mortgage Educators, OnCourse Learning, Aceable, Kaplan + more

### Insurance (5-10 per state)
RealEstateU (NY, CA, FL), XCel Training, Exam FX + more

### Appraisal (3-8 per state)
RealEstateU (soon), McKissock, Kaplan + local schools

### Home Inspection (2-5 per state)
2 main national schools + local schools (need research)

### Notary
Full research needed

---

## GLOBAL ELEMENTS (Every Page)

### Nav Bar
- Logo (left)
- Centered email capture: "Get a personalized career plan and exclusive discount code" + email field + Submit
- Mobile: "Get Plan" button

### Footer
- Site links, legal links, vertical links

### Email Capture Strategy
- Nav bar capture on EVERY page
- Mid/bottom page capture on EVERY page (tailored to page context)

---

## SEO / AI GEO STRATEGY
- Deep keyword research per page
- Long-tail keyword targeting (300+ state pages, 300+ guides)
- FAQ schema markup on all pages with FAQs
- Internal linking: blog → state pages → school pages
- Bilingual content (English + Spanish)
- Optimized titles, meta descriptions, H1s per page
- AI GEO: structured data, clear entity definitions, authoritative tone

---

## AFFILIATE STRATEGY
- Placeholder discount code: "CERTLAUNCH" until real codes obtained
- Andrew getting RealEstateU affiliate link (Feb 17)
- Luka to research and reach out to all other schools for affiliate links
- Every school listed regardless of affiliate status
- Discount code + savings prominently displayed
- Schools sorted by price (lowest first)
- "CertLaunch Pick" / "Best Value" badges

---

## ESTIMATED TOTAL PAGES AT LAUNCH
- Homepage: 1
- Vertical pages: 6
- State pages: ~300
- School profile pages: ~500-1,000+ (varies by vertical × state × schools)
- Blog/guide articles: 1,000+ (phased rollout)
- Static pages: 8
- **Total: ~2,000-2,500+ pages**

---

## RESEARCH NEEDED (Before Building)
1. Deep school research per vertical per state (pricing, courses, reviews)
2. Keyword research per page type
3. Affiliate program research per school
4. State licensing requirement research (50 states × 6 verticals)
5. Salary/commission data per state per vertical
6. Competitor analysis (NerdWallet, Coursera, school comparison sites)
