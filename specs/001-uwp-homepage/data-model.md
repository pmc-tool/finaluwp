# Data Model: UWP 2025 Manifesto Interactive Homepage

**Feature**: `001-uwp-homepage`
**Date**: 2025-11-19
**Purpose**: Define content structure, data entities, and their relationships for the single-page manifesto homepage

## Overview

This is a **static content model** - no database, no API. All data is embedded directly in the HTML as text content, attributes, and asset references. This document defines the structure to ensure consistency, completeness, and maintainability.

---

## Entity: Page Structure

The homepage consists of 9 major sections in fixed order:

```
Homepage
├── Header (sticky navigation)
├── Hero Section
├── Flipbook Section
├── Context & Contrast Section
├── Vision Section
├── Strategy Section (Relief, Recovery, Reform)
├── Priority Areas Section
├── Team & Leadership Section
└── Call-to-Action Section
```

---

## Entity 1: Header Navigation

**Purpose**: Sticky navigation bar with logo and menu links

**Fields**:

| Field Name | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| logo_image | Image | Yes | UWP logo or wordmark | `images/uwp-logo.png` |
| logo_alt_text | String | Yes | Alt text for screen readers | "United Workers Party Logo" |
| menu_items | Array<MenuItem> | Yes | Navigation links (5 items) | See MenuItem below |

**MenuItem Structure**:

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| label | String | Yes | Link text | "Home" |
| anchor | String | Yes | Section ID to scroll to | "#home" |

**Menu Items** (fixed order):
1. Home → #home (hero section)
2. Manifesto → #manifesto (flipbook section)
3. Our Plan → #strategy (strategy section)
4. Priorities → #priorities (priority areas section)
5. Leadership → #leadership (team section)

**Styling Rules**:
- Background: White (#FFFFFF)
- Text: Dark grey (#333333)
- Hover underline: UWP Red (#ED1C26)
- Position: Sticky (remains visible on scroll)
- Height: ~80px
- Z-index: 100 (above all content)

---

## Entity 2: Hero Section

**Purpose**: Above-the-fold section with headline, paragraph, CTAs, and manifesto cover visual

**Fields**:

| Field Name | Type | Required | Max Length | Description |
|------------|------|----------|------------|-------------|
| headline | String | Yes | 30 chars | Main headline |
| subtitle | String | Yes | 150 chars | Supporting subtitle |
| intro_paragraph | String | Yes | 300 chars | 2-3 line intro paragraph |
| primary_cta_text | String | Yes | 25 chars | Button text |
| primary_cta_target | String | Yes | - | Scroll target |
| secondary_cta_text | String | Yes | 30 chars | Text link label |
| secondary_cta_target | String | Yes | - | Scroll target |
| cover_image | Image | Yes | - | Manifesto cover mockup |
| cover_alt_text | String | Yes | 100 chars | Alt text |
| badge_text | String | No | 40 chars | Optional badge |

**Content Values** (from spec FR-006 through FR-010):

```yaml
headline: "Reclaiming Our Future"
subtitle: "A Transformative Agenda for Rebuilding Trust, Restoring Confidence & Renewing Hope"
intro_paragraph: "Years of broken promises, divisiveness, and corruption have left our nation at a crossroads. The United Workers Party offers a clear, detailed agenda to rebuild trust, restore confidence, and renew hope—giving every citizen the chance to dream again."
primary_cta_text: "Read Manifesto 2025"
primary_cta_target: "#manifesto"
secondary_cta_text: "See our plan at a glance"
secondary_cta_target: "#strategy"
cover_image: "images/manifesto-cover.jpg"
cover_alt_text: "United Workers Party 2025 Manifesto: Reclaiming Our Future - Cover"
badge_text: "Interactive 3D Flipbook Below"
```

**Layout**: Two-column (text left, image right), stacks vertically on mobile

---

## Entity 3: Flipbook Section

**Purpose**: Interactive 3D PDF viewer for the full manifesto

**Fields**:

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| section_heading | String | Yes | Section title |
| intro_paragraph | String | Yes | 3-4 line intro |
| pdf_file | File | Yes | Manifesto PDF path |
| pdf_file_size | String | No | Display file size |
| download_link_text | String | Yes | Download button label |
| instructions_text | String | Yes | Usage instructions |
| summary_bullets | Array<String> | Yes | 6-line summary |

**Content Values** (from spec FR-011 through FR-018):

```yaml
section_heading: "Manifesto 2025 – Reclaiming Our Future"
intro_paragraph: "This comprehensive document outlines our transformative agenda to rebuild trust, restore confidence, and renew hope. It addresses critical areas including security, economic growth, agriculture, tourism, digital economy, caring economy, housing, infrastructure, energy, healthcare, and governance—placing people at the center of development."
pdf_file: "pdf/manifesto.pdf"
pdf_file_size: "43 MB"
download_link_text: "Download PDF"
instructions_text: "Use the arrows to turn pages. For mobile users, you can also download the PDF."
summary_bullets:
  - "Rebuild trust and integrity in government"
  - "Deliver real relief to families through SOS initiatives"
  - "Secure communities and restore public safety"
  - "Grow a diverse, modern economy (agriculture, tourism, digital, creative, caring)"
  - "Invest in infrastructure, healthcare, and education"
  - "Put people—especially youth and vulnerable groups—at the centre of development"
```

**Flipbook Configuration** (see research.md Decision 1):
- Plugin: Real3D Flipbook jQuery Plugin
- Page mode: Double (desktop), Single (mobile)
- Background: #2C3E50
- Features enabled: search, download, print, table of contents, zoom

---

## Entity 4: Context & Contrast Section

**Purpose**: Two-column comparison of current situation vs. UWP record

**Fields**:

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| section_heading | String | Yes | Section title |
| context_column_heading | String | Yes | Left column title |
| context_paragraph | String | Yes | Current situation summary |
| contrast_column_heading | String | Yes | Right column title |
| stat_cards | Array<StatCard> | Yes | 3-4 comparison data points |
| closing_line | String | Yes | Memorable closing statement |

**StatCard Structure**:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| stat_text | String | Yes | Key achievement statistic |
| description | String | Yes | Brief context |

**Content Values** (from spec FR-019 through FR-023):

```yaml
section_heading: "Why Change Is Urgent"
context_column_heading: "The Context"
context_paragraph: "Broken promises. Divisiveness. Stagnation. Corruption. Lawlessness. Hopelessness. Under the current administration, our nation has drifted far from the values and progress that once defined us."
contrast_column_heading: "The Contrast: Our Record"
stat_cards:
  - stat_text: "$45M+ invested in 74 school facilities"
    description: "Educational infrastructure transformation (2016–2021)"
  - stat_text: "Major road and bridge upgrades across the island"
    description: "Infrastructure development prioritized"
  - stat_text: "Expanded tourism arrivals and airlift capacity"
    description: "Economic growth before handover"
  - stat_text: "Comprehensive COVID-19 response and recovery"
    description: "Swift action during global crisis"
closing_line: "We don't speak in slogans. We speak in results."
```

**Layout**: Two columns (50/50 split), stacks vertically on mobile ≤768px

---

## Entity 5: Vision Section

**Purpose**: Four core vision pillars defining UWP's aspirational goals

**Fields**:

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| section_heading | String | Yes | Section title |
| intro_paragraph | String | Yes | 2-3 sentence intro |
| vision_pillars | Array<VisionPillar> | Yes | 4 vision statements |
| closing_quote | String | Yes | One-line summary quote |

**VisionPillar Structure**:

| Field | Type | Required | Max Length | Description |
|-------|------|----------|------------|-------------|
| title | String | Yes | 50 chars | Bolded pillar name |
| description | String | Yes | 150 chars | 1-2 sentence explanation |

**Content Values** (from spec FR-024 through FR-028):

```yaml
section_heading: "Our Vision for a New Era"
intro_paragraph: "We envision a globally competitive country where excellence is the standard in public institutions, private enterprise, education, healthcare, and infrastructure. A nation where opportunity is accessible to all, freedoms are protected, and governance is participatory and accountable."
vision_pillars:
  - title: "Excellence in Every Sector"
    description: "Innovation, integrity, and high performance in classrooms, boardrooms, communities, and government."
  - title: "Equal Access to Opportunity"
    description: "Doors to education, jobs, entrepreneurship, and leadership open to all, regardless of background or status."
  - title: "Freedom, Rule of Law, Human Rights"
    description: "Unwavering commitment to freedoms, the rule of law, and fundamental human rights."
  - title: "Participatory, People-Powered Governance"
    description: "A government that listens, learns, and works with its citizens, embedding transparency and accountability."
closing_quote: "We will build a country that stands tall on the world stage because it stands firm on excellence, equality, freedom, and participatory governance."
```

**Layout**: Intro paragraph above, 4 pillars in 2×2 grid (desktop), stacked vertically (mobile)

---

## Entity 6: Strategy Section (Relief, Recovery, Reform)

**Purpose**: Three-pillar strategic framework with Seven SOS Initiatives

**Fields**:

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| section_heading | String | Yes | Section title |
| pillars | Array<StrategyPillar> | Yes | 3 pillars (Relief, Recovery, Reform) |
| closing_line | String | Yes | Connecting statement |

**StrategyPillar Structure**:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| pillar_name | String | Yes | Relief / Recovery / Reform |
| pillar_subtitle | String | Yes | Brief descriptor |
| content_items | Array<String> | Yes | Bullet points or numbered list |

**Content Values** (from spec FR-029 through FR-034):

```yaml
section_heading: "How We Will Deliver: Relief, Recovery, Reform"
pillars:
  - pillar_name: "Relief"
    pillar_subtitle: "Immediate Help"
    content_items: # Seven SOS Initiatives (numbered)
      - "Remove 2.5% Health & Security Levy"
      - "Reduce fuel prices"
      - "Abolish dam dredging fee"
      - "Free tertiary education at Sir Arthur Lewis Community College"
      - "Reintroduce border control & expand K9 unit"
      - "Pensions & one-off payments for banana farmers"
      - "National Health Insurance coverage $75,000 per person per year"
  - pillar_name: "Recovery"
    pillar_subtitle: "Building for Growth"
    content_items:
      - "Infrastructure upgrades (roads, water, connectivity)"
      - "Health & education access expansion"
      - "Unleashing creativity and innovation"
      - "Strengthening agriculture, tourism, construction, creative, digital, and caring economies"
  - pillar_name: "Reform"
    pillar_subtitle: "Fixing the System"
    content_items:
      - "Strengthen democratic institutions"
      - "Modernise public service with technology & performance standards"
      - "Update laws to match global best practices"
      - "Institutionalise citizen engagement"
      - "Fight corruption through stronger oversight and ethics"
closing_line: "Relief empowers people to participate in recovery. Recovery powers reform. Reform locks in progress."
```

**Layout**: Three equal columns (desktop), stacked vertically (mobile ≤1024px)

**CRITICAL NOTE**: The Seven SOS Initiatives (pillar 1) must be numbered 1-7 exactly as listed for political accuracy

---

## Entity 7: Priority Areas Section

**Purpose**: 6-8 policy domain tiles with concise summaries

**Fields**:

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| section_heading | String | Yes | Section title |
| priority_tiles | Array<PriorityTile> | Yes | 6-8 policy areas |

**PriorityTile Structure**:

| Field | Type | Required | Max Length | Description |
|-------|------|----------|------------|-------------|
| tile_title | String | Yes | 40 chars | Policy area name |
| summary_text | String | Yes | 250 chars | 2-3 sentence summary |
| read_more_label | String | Yes | 50 chars | Link label |

**Content Values** (from spec FR-035 through FR-038):

```yaml
section_heading: "Our Transformative Agenda"
priority_tiles:
  - tile_title: "Security & Citizen Safety"
    summary_text: "Tackle crime through institutional reform, technology (CCTV, body cams, digital evidence), community engagement, at-risk youth programmes, and support for protective services."
    read_more_label: "Read details in the manifesto →"
  - tile_title: "Economy & Jobs"
    summary_text: "Economic growth as the driver of transformation. Youth empowerment, opportunities for vulnerable groups, and inclusive growth for all citizens."
    read_more_label: "Read details in the manifesto →"
  - tile_title: "Agriculture & Fisheries"
    summary_text: "Modern, climate-smart agriculture. Support for farmers and fishers, land bank initiatives, value addition, and food security."
    read_more_label: "Read details in the manifesto →"
  - tile_title: "Tourism"
    summary_text: "Product diversification, village tourism, wellness & sports tourism, festival hub vision, and greater local ownership."
    read_more_label: "Read details in the manifesto →"
  - tile_title: "Digital & Creative Economy"
    summary_text: "Digital infrastructure, digital academy, startup support, IP laws, creative hubs, funding for creatives, festival and cultural promotion."
    read_more_label: "Read details in the manifesto →"
  - tile_title: "Caring Economy"
    summary_text: "Elevate nurses, caregivers, early childhood educators. Training, standards, overseas opportunities, and care entrepreneurship."
    read_more_label: "Read details in the manifesto →"
  - tile_title: "Housing & Infrastructure"
    summary_text: "Affordable homes (First Home Saint Lucia, youth mortgages, 5,000 homes target), modern building tech, national road network, new highways, ports, airport, water & waste management."
    read_more_label: "Read details in the manifesto →"
  - tile_title: "Energy, Health & Governance"
    summary_text: "Renewable energy transition, health sector overhaul (NHI, digital health, infrastructure), good governance, trade, CIP reform, diaspora engagement."
    read_more_label: "Read details in the manifesto →"
```

**Layout**: Responsive grid (`auto-fit, minmax(280px, 1fr)`), 2-3 columns desktop, 1 column mobile

---

## Entity 8: Team & Leadership Section

**Purpose**: Featured political leader profile + team member grid

**Fields**:

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| section_heading | String | Yes | Section title |
| intro_statement | String | Yes | Brief team description |
| featured_leader | LeaderProfile | Yes | Political Leader profile |
| team_members | Array<TeamMember> | Yes | 4-6 team members |

**LeaderProfile Structure**:

| Field | Type | Required | Max Length | Description |
|-------|------|----------|------------|-------------|
| photo | Image | Yes | - | Leader headshot |
| photo_alt_text | String | Yes | 100 chars | Alt text |
| name | String | Yes | 50 chars | Full name |
| title | String | Yes | 50 chars | Position |
| message_summary | String | Yes | 300 chars | 2-3 sentence message |

**TeamMember Structure**:

| Field | Type | Required | Max Length | Description |
|-------|------|----------|------------|-------------|
| photo | Image | Yes | - | Headshot |
| photo_alt_text | String | Yes | 100 chars | Alt text |
| name | String | Yes | 50 chars | Full name |
| role | String | Yes | 50 chars | Position/portfolio |
| bio_one_liner | String | Yes | 150 chars | Brief bio |

**Content Values** (from spec FR-039 through FR-043):

```yaml
section_heading: "A New Kind of Leadership"
intro_statement: "This is a team of educators, entrepreneurs, professionals, community leaders, and advocates—united by integrity and service, not old-style politics."
featured_leader:
  photo: "images/leader-photo.jpg"
  photo_alt_text: "Allen M. Chastanet, Political Leader of the United Workers Party"
  name: "Allen M. Chastanet"
  title: "Political Leader, United Workers Party"
  message_summary: "Our nation has endured betrayal, corruption, and hardship for too long. We stand at a crossroads: choose decency over deception, progress over stagnation, excellence over excuses—and choose each other."
team_members:
  - photo: "images/team-member-1.jpg"
    photo_alt_text: "[Team Member Name]"
    name: "[To be provided by UWP]"
    role: "[Portfolio]"
    bio_one_liner: "[Brief bio to be provided]"
  # ... repeat for 5 more members
```

**Layout**: Featured leader as highlight block (photo + text side-by-side), team grid below (2-4 columns responsive)

**Image Specifications**:
- Leader photo: 600×600px square, WebP + JPG fallback, <150KB
- Team photos: 400×400px square, WebP + JPG fallback, <100KB each
- All photos: Professional, high-contrast, appropriate backgrounds

---

## Entity 9: Call-to-Action Section

**Purpose**: Final conversion section with CTA buttons and social sharing

**Fields**:

| Field Name | Type | Required | Max Length | Description |
|------------|------|----------|------------|-------------|
| headline | String | Yes | 60 chars | Main CTA headline |
| subtext | String | Yes | 200 chars | Supporting message |
| primary_cta_text | String | Yes | 25 chars | Button label |
| primary_cta_target | String | Yes | - | Scroll target |
| share_cta_text | String | Yes | 30 chars | Share button label |
| social_platforms | Array<String> | Yes | - | Enabled platforms |

**Content Values** (from spec FR-044 through FR-048):

```yaml
headline: "Our Future Is at Stake. Let's Reclaim It Together."
subtext: "This manifesto is our contract with you—to restore trust, rebuild our institutions, and create a country where every citizen can dream again."
primary_cta_text: "Read Manifesto 2025"
primary_cta_target: "#manifesto"
share_cta_text: "Share with a friend"
social_platforms:
  - "Facebook"
  - "WhatsApp"
```

**Styling**:
- Background: UWP Red (#ED1C26)
- Text: White (#FFFFFF)
- Buttons: White background, red text (inverted colors)
- Height: ~400px desktop, ~300px mobile
- Centered content

---

## Asset Inventory

| Asset Type | File Path | Dimensions | Format | Max Size | Alt Text Required |
|------------|-----------|------------|--------|----------|-------------------|
| UWP Logo | `images/uwp-logo.png` | SVG or 200h px | SVG/PNG | 50KB | Yes |
| Manifesto Cover | `images/manifesto-cover.jpg` | 800×1100px | WebP+JPG | 200KB | Yes |
| Leader Photo | `images/leader-photo.jpg` | 600×600px | WebP+JPG | 150KB | Yes |
| Team Photos (6×) | `images/team-member-*.jpg` | 400×400px | WebP+JPG | 100KB ea | Yes |
| Manifesto PDF | `pdf/manifesto.pdf` | - | PDF | 43MB | N/A |

**Image Optimization Requirements**:
- All photos: JPG 80% quality + WebP fallback
- Strip EXIF metadata
- Specify `width` and `height` attributes to prevent CLS
- Use `loading="lazy"` for below-fold images
- Provide `<picture>` element with WebP source + JPG fallback

---

## Content Validation Rules

1. **Character Limits**: Enforced to prevent layout breaking on mobile
2. **Required Fields**: All marked "Yes" must be provided (no placeholders in production)
3. **Seven SOS Initiatives**: Must be numbered 1-7 exactly as specified (political accuracy)
4. **Brand Colors**: UWP Red (#ED1C26), Dark Grey (#333333), Light Grey (#F5F5F5), Flipbook BG (#2C3E50)
5. **Accessibility**: All images require meaningful alt text (no "image" or "photo")
6. **Link Targets**: All anchor links must match section IDs exactly

---

## Change Management

**Content Updates**:
- HTML file: `examples/uwp-homepage.html` (edit text directly)
- Images: Replace files in `examples/images/` (keep same filenames)
- PDF: Replace `examples/pdf/manifesto.pdf` (keep same filename for plugin config)

**Version Control**:
- Commit content changes with descriptive messages
- Tag major content releases (e.g., `v1.0.0-launch`, `v1.1.0-team-update`)
- Store original assets in separate `assets-source/` directory (pre-optimization)

**Quality Assurance**:
- Spell-check all text content
- Verify all Seven SOS Initiatives match official party platform
- Confirm leader and team photos approved by UWP communications
- Test all anchor links scroll to correct sections
- Validate HTML (W3C Validator)
