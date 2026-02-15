# CertLaunch Font Recommendations

## Research: What the Competitors Use

### Coursera
- **Logo:** Custom wordmark (lowercase sans-serif, clean geometric style)
- **Website/Brand:** **Source Sans Pro** (primary typeface across marketing, web, product)
- **Body text:** Open Sans for paragraph/description text
- Style: Clean, approachable, professional

### Udemy
- **Logo:** Custom bold geometric sans-serif (similar to Eau Sans Bold / FF Cocon / Omnes family)
- **Website:** System font stack + bold geometric headings
- Style: Bold, energetic, modern

### NerdWallet
- **Logo:** Custom geometric sans-serif wordmark (Gotham-like characteristics)
- **Website:** Geometric sans-serif (likely proprietary or Gotham/Proxima Nova family)
- Style: Trustworthy, authoritative, clean

---

## CertLaunch Recommendations

### Logo Font (Logo A — Clean & Professional)
- **Primary:** Source Sans Pro SemiBold (600)
- **Google Fonts:** https://fonts.google.com/specimen/Source+Sans+3
- **Rationale:** Same family Coursera uses. Professional, highly readable, modern without being trendy. Free and open-source.
- **Fallback stack:** `'Source Sans 3', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif`

### Logo Font (Logo B — Bold & Modern)
- **Primary:** Montserrat ExtraBold (800)
- **Google Fonts:** https://fonts.google.com/specimen/Montserrat
- **Rationale:** Free geometric sans-serif that captures the bold Udemy/NerdWallet energy. Similar to Gotham/Proxima Nova but freely available.
- **Fallback stack:** `'Montserrat', 'Segoe UI', 'Arial Black', sans-serif`

### Website Body Font
- **Recommendation:** Inter (400/500/600)
- **Google Fonts:** https://fonts.google.com/specimen/Inter
- **Rationale:** The current go-to for modern web apps. Excellent readability, huge language support, variable font. Pairs well with both logo options.

### Website Heading Font
- **Option 1 (with Logo A):** Source Sans 3 SemiBold/Bold
- **Option 2 (with Logo B):** Montserrat SemiBold/Bold
- Keep headings and logo font consistent.

---

## Quick Implementation

```html
<!-- Logo A approach -->
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<!-- Logo B approach -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

## My Pick
**Logo A (Source Sans Pro)** for CertLaunch. It directly mirrors Coursera's brand feel — professional education platform that's approachable and trustworthy. Montserrat (Logo B) is great if you want to feel bolder/more startup-y.
