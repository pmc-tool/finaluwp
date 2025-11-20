# Content Schema Contract: UWP 2025 Manifesto Homepage

**Feature**: `001-uwp-homepage`
**Date**: 2025-11-19
**Purpose**: Define content validation rules, constraints, and acceptance criteria for all homepage content

## Contract Overview

This contract ensures all content (text, images, links) meets quality, accessibility, and political accuracy standards before deployment. Content must pass all validation rules to maintain constitutional compliance (User Experience, Accessibility, Content Integrity).

---

## Section 1: Header Navigation

**Required Elements**: 5

| Element | Constraint | Validation Rule | Example |
|---------|------------|-----------------|---------|
| Logo Image | File exists, format PNG/SVG, max 50KB | `images/uwp-logo.{png,svg}` exists, size ≤ 50KB | `uwp-logo.png` |
| Logo Alt Text | Min 10 chars, max 100 chars | Length 10-100, descriptive | "United Workers Party Logo" |
| Menu Item 1 | Label "Home", anchor "#home" | Exact match | Home → #home |
| Menu Item 2 | Label "Manifesto", anchor "#manifesto" | Exact match | Manifesto → #manifesto |
| Menu Item 3 | Label "Our Plan", anchor "#strategy" | Exact match | Our Plan → #strategy |
| Menu Item 4 | Label "Priorities", anchor "#priorities" | Exact match | Priorities → #priorities |
| Menu Item 5 | Label "Leadership", anchor "#leadership" | Exact match | Leadership → #leadership |

**Acceptance Criteria**:
- ✅ All 5 menu items present
- ✅ All anchors resolve to valid section IDs in HTML
- ✅ Logo renders correctly at 200px height
- ✅ Alt text descriptive (not "logo" or "image")

---

## Section 2: Hero Section

**Required Elements**: 8

| Element | Constraint | Validation Rule | Pass/Fail |
|---------|------------|-----------------|-----------|
| Headline | Exactly "Reclaiming Our Future" | Exact string match | Required |
| Subtitle | Max 150 chars, contains "Transformative Agenda" | Length ≤150, keyword present | Required |
| Intro Paragraph | Min 100 chars, max 300 chars | Length 100-300 | Required |
| Primary CTA Text | Exactly "Read Manifesto 2025" | Exact match | Required |
| Primary CTA Target | Anchor "#manifesto" | Valid section ID | Required |
| Secondary CTA Text | Contains "plan" (case-insensitive) | Keyword match | Required |
| Secondary CTA Target | Anchor "#strategy" | Valid section ID | Required |
| Cover Image | 800×1100px, WebP+JPG, ≤200KB | Dimensions match, size OK, formats present | Required |
| Cover Alt Text | Min 20 chars, contains "Manifesto 2025" | Length ≥20, keyword present | Required |

**Political Accuracy Check**:
- Headline must not be modified (official campaign slogan)
- Subtitle must include all three themes: "Trust", "Confidence", "Hope"

**Accessibility Check**:
- Cover image `alt` text must describe content, not just say "cover"
- Contrast ratio: Text on background ≥ 4.5:1

---

## Section 3: Flipbook Section

**Required Elements**: 7 + Plugin Configuration

| Element | Constraint | Validation Rule |
|---------|------------|-----------------|
| Section Heading | Contains "Manifesto 2025" | Keyword match |
| Intro Paragraph | Min 150 chars, max 400 chars | Length 150-400 |
| PDF File | `pdf/manifesto.pdf` exists, size ~43MB | File exists, size 40-50MB |
| Download Link | Points to same PDF file | `href` matches PDF path |
| Instructions Text | Contains "arrows" and "mobile" | Keywords present |
| Summary Bullets | Exactly 6 items | Array length == 6 |
| Summary Item 1 | Contains "trust" (case-insensitive) | Keyword present |
| Summary Item 2 | Contains "relief" OR "SOS" | Keywords present |
| Summary Item 3 | Contains "secure" OR "safety" | Keywords present |
| Summary Item 4 | Contains "economy" OR "economic" | Keywords present |
| Summary Item 5 | Contains "infrastructure" OR "healthcare" OR "education" | Keywords present |
| Summary Item 6 | Contains "people" OR "youth" | Keywords present |

**Plugin Configuration Validation**:

```javascript
// Required flipbook settings (from research.md)
const requiredConfig = {
  pdfUrl: 'pdf/manifesto.pdf',           // MUST match PDF path
  pageMode: 'double',                    // Required for UX
  backgroundColor: '#2C3E50',            // Constitutional brand color
  btnDownload: { enabled: true },        // Required feature
  btnPrint: { enabled: true },           // Required feature
  btnSearch: { enabled: true },          // Required feature
  btnToc: { enabled: true },             // Required feature
  responsive: true                       // Constitutional requirement
};
```

**Acceptance Criteria**:
- ✅ PDF file loads and displays first page in <5 seconds (10 Mbps connection)
- ✅ Search function returns results for test terms ("agriculture", "security", "education")
- ✅ Download button downloads identical PDF file
- ✅ All 6 summary bullets present and thematically accurate

---

## Section 4: Context & Contrast

**Required Elements**: 6

| Element | Constraint | Validation Rule |
|---------|------------|-----------------|
| Section Heading | Contains "Why" and "Urgent" | Keywords present |
| Context Heading | Contains "Context" | Keyword match |
| Context Paragraph | Min 80 chars, contains ≥3 of: "broken", "promises", "corruption", "stagnation", "lawlessness", "divisiveness" | Length ≥80, keyword count ≥3 |
| Contrast Heading | Contains "Contrast" or "Record" | Keyword match |
| Stat Cards | Exactly 3-4 items | Array length 3-4 |
| Closing Line | Exactly "We don't speak in slogans. We speak in results." | Exact match |

**Stat Card Validation**:

Each stat card must include:
- Stat text with numeric value (e.g., "$45M", "74", "2016-2021")
- Description min 20 chars

**Required Stat Topics** (at least 3 of 4):
1. Education investment ($45M, 74 schools)
2. Infrastructure (roads, bridges)
3. Tourism growth (arrivals, airlift)
4. COVID response

**Acceptance Criteria**:
- ✅ Closing line exactly matches (official party tagline)
- ✅ At least 3 stat cards with verifiable numbers
- ✅ Context paragraph conveys urgency without inflammatory language

---

## Section 5: Vision

**Required Elements**: 6

| Element | Constraint | Validation Rule |
|---------|------------|-----------------|
| Section Heading | Contains "Vision" | Keyword match |
| Intro Paragraph | Min 80 chars, max 300 chars | Length 80-300 |
| Vision Pillars | Exactly 4 items | Array length == 4 |
| Pillar 1 Title | Contains "Excellence" | Keyword match |
| Pillar 2 Title | Contains "Equal" or "Opportunity" | Keywords match |
| Pillar 3 Title | Contains "Freedom" or "Rule of Law" | Keywords match |
| Pillar 4 Title | Contains "Participatory" or "Governance" | Keywords match |
| Closing Quote | Min 50 chars, max 200 chars | Length 50-200 |

**Political Accuracy Check**:
- Four pillars match official manifesto themes (order matters)
- Pillar descriptions accurately reflect party platform
- No contradictions with manifesto PDF content

**Acceptance Criteria**:
- ✅ All 4 pillars present in order (Excellence → Opportunity → Freedom → Governance)
- ✅ Each pillar description 1-2 sentences (max 150 chars each)
- ✅ Closing quote ties back to "excellence, equality, freedom, governance"

---

## Section 6: Strategy (Relief, Recovery, Reform)

**CRITICAL SECTION**: Contains Seven SOS Initiatives (political commitment)

**Required Elements**: 3 pillars + closing line

| Element | Constraint | Validation Rule |
|---------|------------|-----------------|
| Section Heading | Contains "Relief", "Recovery", "Reform" | All 3 keywords present |
| Relief Pillar | Exactly 7 numbered items (SOS Initiatives) | Array length == 7, numbered 1-7 |
| Recovery Pillar | Min 3 bullet points, max 6 | Array length 3-6 |
| Reform Pillar | Min 3 bullet points, max 6 | Array length 3-6 |
| Closing Line | Contains "Relief", "Recovery", "Reform", "progress" | All keywords present |

**Seven SOS Initiatives Validation** (EXACT ORDER REQUIRED):

| # | Required Text | Validation Rule |
|---|---------------|-----------------|
| 1 | "Remove 2.5% Health & Security Levy" | Contains "2.5%", "levy" |
| 2 | "Reduce fuel prices" | Contains "fuel" |
| 3 | "Abolish dam dredging fee" | Contains "dam" or "dredging" |
| 4 | "Free tertiary education at Sir Arthur Lewis Community College" | Contains "SALCC" or "Sir Arthur Lewis" |
| 5 | "Reintroduce border control & expand K9 unit" | Contains "border" and "K9" |
| 6 | "Pensions & one-off payments for banana farmers" | Contains "banana" and "farmer" |
| 7 | "National Health Insurance coverage $75,000 per person per year" | Contains "$75" or "75,000" |

**Acceptance Criteria**:
- ✅ **ALL 7 SOS INITIATIVES PRESENT IN EXACT ORDER** (non-negotiable)
- ✅ Each initiative wording matches official party document
- ✅ Numbered display (not bullets)
- ✅ Recovery and Reform pillars provide balanced context (not overshadowed by Relief)
- ✅ Closing line exactly as specified: "Relief empowers people to participate in recovery. Recovery powers reform. Reform locks in progress."

**FAILURE MODES**:
- ❌ Missing any SOS initiative → REJECT
- ❌ SOS initiatives out of order → REJECT
- ❌ SOS initiative text altered → REJECT
- ❌ Using bullets instead of numbers for SOS → REJECT

---

## Section 7: Priority Areas

**Required Elements**: 6-8 tiles

| Element | Constraint | Validation Rule |
|---------|------------|-----------------|
| Section Heading | Contains "Transformative Agenda" | Keyword match |
| Priority Tiles | Min 6, max 8 | Array length 6-8 |
| Required Topics | Must include: Security, Economy, Agriculture, Tourism, Digital/Creative, Caring Economy | All 6 topics present |

**Per-Tile Validation**:

| Field | Constraint | Validation Rule |
|-------|------------|-----------------|
| Title | Max 40 chars | Length ≤40 |
| Summary | Min 80 chars, max 250 chars | Length 80-250 |
| Read More Label | Contains "manifesto" or "details" | Keyword match |

**Topic Coverage Check**:

Must cover all 8 areas (can be combined in tiles):
1. Security & Citizen Safety ✅
2. Economy & Jobs ✅
3. Agriculture & Fisheries ✅
4. Tourism ✅
5. Digital & Creative Economy ✅
6. Caring Economy ✅
7. Housing & Infrastructure ✅
8. Energy, Health & Governance ✅

**Acceptance Criteria**:
- ✅ All 8 policy areas covered (can combine into 6-8 tiles)
- ✅ Each summary 2-3 sentences, specific initiatives mentioned
- ✅ No duplication between tiles
- ✅ Tiles link conceptually back to manifesto (even if not actual hyperlinks)

---

## Section 8: Team & Leadership

**Required Elements**: 1 leader + 4-6 team members

| Element | Constraint | Validation Rule |
|---------|------------|-----------------|
| Section Heading | Contains "Leadership" or "Team" | Keyword match |
| Intro Statement | Min 50 chars, max 200 chars | Length 50-200 |
| Leader Name | Exactly "Allen M. Chastanet" | Exact match (spelling critical) |
| Leader Title | Contains "Political Leader" | Keyword match |
| Leader Photo | 600×600px, WebP+JPG, ≤150KB | Dimensions OK, formats present, size OK |
| Leader Photo Alt | Contains full name | Name present in alt text |
| Leader Message | Min 100 chars, max 300 chars, contains ≥2 of: "decency", "deception", "progress", "stagnation", "excellence", "excuses" | Length OK, keyword count ≥2 |
| Team Members | Min 4, max 6 | Array length 4-6 |

**Per-Team-Member Validation**:

| Field | Constraint | Validation Rule |
|-------|------------|-----------------|
| Photo | 400×400px, WebP+JPG, ≤100KB | Dimensions OK, formats present, size OK |
| Photo Alt | Contains member's full name | Name in alt text |
| Name | Max 50 chars | Length ≤50 |
| Role | Max 50 chars | Length ≤50 |
| Bio | Min 30 chars, max 150 chars | Length 30-150 |

**Image Quality Standards**:
- Professional headshots (not casual photos)
- Neutral or branded backgrounds
- Proper lighting (faces clearly visible)
- No sunglasses, hats, or obstructions
- Consistent aspect ratio (square 1:1)

**Acceptance Criteria**:
- ✅ Leader name spelled correctly (official records check)
- ✅ Leader message reflects party themes (decency, progress, excellence)
- ✅ 4-6 team members with complete info (no placeholders like "[TBD]")
- ✅ All photos optimized (WebP + JPG fallback)
- ✅ All alt text descriptive (includes names)

---

## Section 9: Call-to-Action

**Required Elements**: 4

| Element | Constraint | Validation Rule |
|---------|------------|-----------------|
| Headline | Contains "Future" and "Reclaim" | Keywords present |
| Subtext | Min 100 chars, max 200 chars, contains "manifesto", "contract", "trust" | Length OK, keywords present |
| Primary CTA | Text "Read Manifesto 2025", anchor "#manifesto" | Exact text, valid anchor |
| Share CTA | Text contains "share" or "friend" | Keyword match |
| Social Platforms | Includes "Facebook" and "WhatsApp" | Both platforms enabled |

**Styling Validation**:
- Background color: #ED1C26 (UWP Red) – exact hex match
- Text color: #FFFFFF (White) – exact hex match
- Button styling: white background, red text (inverted)

**Acceptance Criteria**:
- ✅ Headline impactful (call to action clear)
- ✅ Subtext reinforces manifesto as "contract" (accountability framing)
- ✅ Primary CTA scrolls to flipbook section
- ✅ Share buttons open native share (mobile) or dialog (desktop)
- ✅ Facebook and WhatsApp sharing functional

---

## Global Validation Rules

### Accessibility Compliance (WCAG 2.1 AA)

**Color Contrast**:
- Body text (#333 on white): ≥ 12:1 ✅ (AAA)
- UWP Red buttons (#ED1C26 on white): ≥ 4:1 for large text (≥18pt) ✅
- White text on UWP Red: ≥ 4:1 for large text ✅
- White text on flipbook (#2C3E50): ≥ 8:1 ✅ (AAA)

**Keyboard Navigation**:
- All links and buttons: `tabindex` set correctly, focus visible
- Flipbook: arrow keys navigate pages
- Header menu: Enter key activates links
- Skip link: "Skip to main content" functional

**Touch Targets**:
- All buttons/links: min 44×44px CSS pixels
- Header menu items: ≥44px height with padding
- CTA buttons: ≥48px height

**Semantic HTML**:
- One `<h1>` per page (hero headline)
- Proper heading hierarchy (H1 → H2 → H3, no skipping)
- Landmarks: `<header role="banner">`, `<nav role="navigation">`, `<main role="main">`
- Lists: `<ul>` for navigation, `<ol>` for numbered SOS initiatives

**Images**:
- All `<img>` tags have `alt` attribute
- Decorative images: `alt=""` (empty)
- Meaningful images: descriptive alt text (min 10 chars)
- Width and height attributes specified (prevent CLS)

### Performance Benchmarks

**Lighthouse Thresholds**:
- Performance: ≥ 85 (required)
- Accessibility: ≥ 95 (required)
- Best Practices: ≥ 90 (recommended)
- SEO: ≥ 90 (recommended)

**Core Web Vitals**:
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total Blocking Time: < 200ms
- Cumulative Layout Shift: < 0.1

**Asset Sizes**:
- HTML file: < 100KB (uncompressed)
- CSS file: < 50KB (uncompressed, before minification)
- JS file: < 30KB (uncompressed, before minification)
- Total page weight (without PDF): < 1.5MB

### Brand Consistency

**Color Palette** (exact hex values required):
- UWP Red: `#ED1C26`
- Dark Grey: `#333333`
- Light Grey: `#F5F5F5`
- Flipbook Background: `#2C3E50`
- White: `#FFFFFF`

**Typography**:
- Headings: Bold, uppercase or semi-uppercase
- Body: Sans-serif (system font stack or web font)
- Minimum font size: 16px (desktop), 14px (mobile)

**Tone of Voice**:
- Serious, professional, forward-looking
- No inflammatory or divisive language
- Factual, evidence-based claims (stat cards must be verifiable)
- Hopeful but not unrealistic

---

## Validation Checklist

Use this checklist before deployment:

### Content Validation
- [ ] All text content spell-checked and proofread
- [ ] Seven SOS Initiatives present, numbered 1-7, exact wording
- [ ] Leader name spelled correctly (Allen M. Chastanet)
- [ ] All stat cards verifiable against official records
- [ ] No placeholder text (e.g., "[TBD]", "[To be provided]")
- [ ] Character limits respected for all fields

### Asset Validation
- [ ] PDF file exists at `pdf/manifesto.pdf`, size 40-50MB
- [ ] Logo file exists, size ≤50KB
- [ ] Manifesto cover exists, 800×1100px, ≤200KB
- [ ] Leader photo exists, 600×600px, ≤150KB
- [ ] 4-6 team photos exist, 400×400px, ≤100KB each
- [ ] All images have WebP + JPG fallback
- [ ] All images have descriptive alt text (not "image" or "photo")

### Technical Validation
- [ ] HTML validates (W3C Validator)
- [ ] All anchor links resolve to valid section IDs
- [ ] Flipbook configuration includes all required settings
- [ ] Smooth scroll polyfill loaded for iOS 12-14 support
- [ ] Social share buttons functional (test Facebook and WhatsApp)

### Accessibility Validation
- [ ] Color contrast ratios pass WCAG AA (4.5:1 normal, 3:1 large)
- [ ] Keyboard navigation functional (tab through all interactive elements)
- [ ] Focus indicators visible on all links/buttons
- [ ] Skip link functional ("Skip to main content")
- [ ] Heading hierarchy correct (H1 → H2 → H3)
- [ ] Semantic HTML landmarks present (header, nav, main)
- [ ] Screen reader test passed (NVDA or VoiceOver)

### Performance Validation
- [ ] Lighthouse Performance ≥ 85
- [ ] Lighthouse Accessibility ≥ 95
- [ ] First Contentful Paint < 1.5s
- [ ] Total Blocking Time < 200ms
- [ ] Cumulative Layout Shift < 0.1
- [ ] Flipbook loads first page within 5s (10 Mbps connection)

### Cross-Browser Validation
- [ ] Chrome (latest): All features functional
- [ ] Firefox (latest): All features functional
- [ ] Safari (latest): All features functional
- [ ] Edge (latest): All features functional
- [ ] iOS Safari (12+): Touch gestures work, no horizontal scroll
- [ ] Android Chrome (8+): Touch gestures work, no horizontal scroll

### Political Accuracy Validation
- [ ] Manifesto content matches official UWP 2025 Manifesto PDF
- [ ] Seven SOS Initiatives match official policy announcements
- [ ] Leader and team information approved by UWP communications
- [ ] Stat cards (Context & Contrast) verified against government records
- [ ] No contradictions with party platform

---

## Failure Handling

**Critical Failures** (block deployment):
- Missing or incorrect Seven SOS Initiatives
- Leader name misspelled
- PDF file missing or corrupted
- Lighthouse Performance < 85
- WCAG AA violations (contrast, keyboard nav, alt text)

**Non-Critical Failures** (fix before launch):
- Character limit violations (text overflow on mobile)
- Missing team member bios (use placeholders temporarily if approved)
- Suboptimal image compression (loading slower than ideal)

**Approval Required**:
- All content must be approved by UWP communications team
- Final deployment requires sign-off from project stakeholder
- Any deviation from Seven SOS Initiatives requires written approval
