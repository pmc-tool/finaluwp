# Feature Specification: UWP 2025 Manifesto Interactive Homepage

**Feature Branch**: `001-uwp-homepage`
**Created**: 2025-11-19
**Status**: Draft
**Input**: User description: "Single-page responsive homepage for UWP 2025 Manifesto with interactive 3D flipbook featuring comprehensive content sections including hero, flipbook viewer, context/contrast, vision, strategy (Relief/Recovery/Reform), priority areas, team leadership, and call-to-action"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View and Navigate Manifesto via Interactive Flipbook (Priority: P1)

A citizen visits the homepage to read the United Workers Party 2025 Manifesto "Reclaiming Our Future". They can immediately see and interact with the 3D flipbook, navigate pages using intuitive controls (mouse, keyboard, or touch), search for specific topics, and download/print the full PDF.

**Why this priority**: This is the core value proposition - providing accessible, engaging access to the manifesto. Without the flipbook, the site has no primary purpose.

**Independent Test**: Can be fully tested by loading the homepage, interacting with the flipbook (flip pages, zoom, search), and downloading the PDF. Delivers immediate value as a manifesto distribution platform.

**Acceptance Scenarios**:

1. **Given** a visitor lands on the homepage, **When** they scroll to the manifesto section, **Then** they see a fully loaded interactive 3D flipbook displaying the manifesto cover
2. **Given** the flipbook is displayed, **When** they click the right edge or press right arrow key or swipe left on mobile, **Then** the page flips to the next page with smooth animation
3. **Given** the flipbook is open, **When** they use the search feature to find "agriculture", **Then** they see highlighted results across all pages with page numbers
4. **Given** the flipbook is displayed, **When** they click the download button, **Then** a 43MB PDF file downloads with identical content to the original manifesto
5. **Given** the flipbook is open on mobile, **When** they pinch to zoom, **Then** the content scales smoothly and remains readable

---

### User Story 2 - Understand Party Vision and Strategy at a Glance (Priority: P2)

A visitor wants to quickly understand what the United Workers Party stands for without reading the full manifesto. They can scroll through the single-page site to see summarized sections covering the context (what went wrong), the vision (what UWP stands for), and the three-pillar strategy (Relief, Recovery, Reform).

**Why this priority**: Not all visitors will read the full manifesto. Quick-scan sections convert casual visitors into informed supporters and drive them to read more.

**Independent Test**: Can be tested by scrolling through the homepage without interacting with the flipbook. Visitor can understand party platform, contrast with current administration, and key initiatives (e.g., Seven SOS programs).

**Acceptance Scenarios**:

1. **Given** a visitor scrolls past the hero section, **When** they reach the "Why Change Is Urgent" section, **Then** they see a two-column layout comparing the current context with UWP's historical record
2. **Given** a visitor continues scrolling, **When** they reach the Vision section, **Then** they see four key vision pillars (Excellence, Equal Access, Freedom/Rule of Law, Participatory Governance) with concise descriptions
3. **Given** a visitor scrolls to the Strategy section, **When** they view the Relief/Recovery/Reform framework, **Then** they see three equal columns with bullet points including the Seven SOS Initiatives clearly listed under Relief
4. **Given** a visitor reviews the Strategy section, **When** they read the Seven SOS Initiatives, **Then** they see all seven items (remove health levy, reduce fuel prices, abolish dam fee, free SALCC education, border control/K9, banana farmer support, $75K NHI coverage)

---

### User Story 3 - Explore Priority Areas and Transformative Agenda (Priority: P3)

A visitor interested in specific policy areas (security, economy, agriculture, tourism, digital/creative economy, caring economy, housing, energy, healthcare) can scroll to the Priority Areas section and see 6-8 summarized tiles with concise descriptions that link back to the full manifesto.

**Why this priority**: This targets issue-focused voters who care deeply about specific areas. Provides depth without overwhelming the main flow.

**Independent Test**: Can be tested by scrolling to the Priority Areas section and reviewing tile summaries. Visitor gains understanding of specific policies without reading the full manifesto.

**Acceptance Scenarios**:

1. **Given** a visitor scrolls to the Transformative Agenda section, **When** they view the priority tiles, **Then** they see 6-8 distinct topic areas (Security, Economy, Agriculture, Tourism, Digital/Creative, Caring Economy, Housing, Infrastructure/Energy/Health/Governance)
2. **Given** a visitor reads a priority tile (e.g., Security & Citizen Safety), **When** they view the content, **Then** they see a 2-3 sentence summary covering key initiatives (e.g., CCTV, body cams, at-risk youth programs)
3. **Given** a visitor is interested in more detail, **When** they see "Read details in the manifesto →" on a tile, **Then** they understand this links conceptually back to the flipbook above

---

### User Story 4 - Learn About Leadership and Team (Priority: P4)

A visitor wants to know who is leading the United Workers Party. They scroll to the Team & Leadership section to see a featured profile of Political Leader Allen M. Chastanet with his message, plus a grid of 4-6 key team members with photos, names, roles, and brief bios.

**Why this priority**: Trust in leadership drives voting decisions. This section humanizes the party and establishes credibility, but is secondary to understanding the platform itself.

**Independent Test**: Can be tested by scrolling to the Team section and viewing leadership profiles. Visitor gains confidence in party leadership.

**Acceptance Scenarios**:

1. **Given** a visitor scrolls to the Team & Leadership section, **When** they view the content, **Then** they see a featured highlight block for Political Leader Allen M. Chastanet with photo, name, title, and 2-3 sentence message
2. **Given** a visitor reads the leader's message, **When** they view the text, **Then** they see themes of choosing decency over deception, progress over stagnation, excellence over excuses
3. **Given** a visitor continues reviewing the section, **When** they scroll below the leader profile, **Then** they see a grid of 4-6 team members with photos, names, roles, and one-line bios

---

### User Story 5 - Navigate and Share from Sticky Header (Priority: P5)

A visitor can use a sticky header menu to quickly jump to any major section on the single-page site (Home, Manifesto, Our Plan, Priorities, Leadership). They can also access share functionality to spread the manifesto via social media.

**Why this priority**: Navigation convenience is important but the content itself (P1-P4) must exist first. Sharing amplifies reach but is secondary to having compelling content to share.

**Independent Test**: Can be tested by clicking header menu items and observing smooth scrolling to anchored sections, and by clicking share buttons to open social share options.

**Acceptance Scenarios**:

1. **Given** a visitor is anywhere on the homepage, **When** they look at the top of the page, **Then** they see a sticky header with UWP logo/wordmark on the left and menu items (Home, Manifesto, Our Plan, Priorities, Leadership) on the right
2. **Given** a visitor clicks a header menu item (e.g., "Priorities"), **When** the click registers, **Then** the page smoothly scrolls to the corresponding section
3. **Given** a visitor hovers over a menu item, **When** the cursor moves over the text, **Then** they see a red underline (matching UWP brand color #ED1C26)
4. **Given** a visitor scrolls to the final Call-to-Action section, **When** they click "Share with a friend", **Then** they see social share icons/options for Facebook and WhatsApp

---

### Edge Cases

- What happens when the 43MB PDF fails to load or takes too long on slow connections?
  - Display a loading progress indicator
  - Provide a fallback "Download PDF" link if flipbook cannot initialize within 10 seconds
  - Show a graceful error message with contact information if PDF cannot be loaded

- How does the system handle very small mobile screens (e.g., 320px width)?
  - Ensure all text remains readable without horizontal scrolling
  - Stack columns vertically (e.g., Context & Contrast two-column layout becomes single column)
  - Adjust flipbook dimensions to fit within viewport while maintaining aspect ratio
  - Ensure touch targets remain at least 44px for accessibility

- What happens when a user searches for a term that doesn't exist in the manifesto?
  - Display "No results found for '[search term]'" message
  - Suggest checking spelling or trying different keywords
  - Do not break or crash the flipbook interface

- How does the page handle browsers with JavaScript disabled?
  - Display a message indicating that JavaScript is required for the interactive flipbook
  - Provide a prominent "Download PDF" button as an alternative
  - Ensure header navigation still works using standard anchor links

- What happens when a user tries to print from the flipbook on a browser that doesn't support the print API well?
  - Fall back to standard browser print dialog
  - Recommend downloading the PDF and printing from a PDF reader for best quality

## Requirements *(mandatory)*

### Functional Requirements

#### Page Structure and Navigation

- **FR-001**: Homepage MUST be a single-page, scrollable design with all content sections accessible by scrolling
- **FR-002**: Homepage MUST include a sticky header that remains visible during scrolling with logo/wordmark on left and menu items on right
- **FR-003**: Header menu MUST include links to: Home, Manifesto, Our Plan, Priorities, Leadership
- **FR-004**: Header menu items MUST use anchor links that smoothly scroll to corresponding sections when clicked
- **FR-005**: Header menu items MUST display a red hover underline using UWP brand color (#ED1C26)

#### Hero Section

- **FR-006**: Hero section MUST display the main headline "Reclaiming Our Future" with subtitle "A Transformative Agenda for Rebuilding Trust, Restoring Confidence & Renewing Hope"
- **FR-007**: Hero section MUST include a 2-3 line paragraph referencing betrayal, decline, broken promises and emphasizing UWP's clear agenda
- **FR-008**: Hero section MUST include a primary red button labeled "Read Manifesto 2025" that scrolls to the flipbook section
- **FR-009**: Hero section MUST include a secondary text link "See our plan at a glance" that scrolls to the Strategy section
- **FR-010**: Hero section MUST display a visual mockup of the manifesto cover on the right side with title, subtitle, and optional "Interactive 3D Flipbook Below" badge

#### Interactive Flipbook Section

- **FR-011**: Flipbook section MUST display the heading "Manifesto 2025 – Reclaiming Our Future"
- **FR-012**: Flipbook section MUST include a 3-4 line intro paragraph explaining the manifesto as a transformative agenda
- **FR-013**: Flipbook section MUST integrate the Real 3D FlipBook jQuery plugin to display the manifesto PDF (43MB)
- **FR-014**: Flipbook MUST support navigation via mouse click/drag, keyboard arrow keys, and touch swipe gestures
- **FR-015**: Flipbook MUST include core features: page flip, zoom, search, download PDF, print, and table of contents
- **FR-016**: Flipbook MUST display a "Download PDF" link below the viewer
- **FR-017**: Flipbook section MUST include usage instructions: "Use the arrows to turn pages. For mobile users, you can also download the PDF."
- **FR-018**: Flipbook section MUST display a "Manifesto Summary in 6 Lines" with bullet points covering: rebuild trust, deliver relief (SOS), secure communities, grow diverse economy, invest in infrastructure/healthcare/education, center people (youth and vulnerable groups)

#### Context & Contrast Section

- **FR-019**: Page MUST include a "Why Change Is Urgent" section with heading
- **FR-020**: Section MUST display a two-column layout: "The Context" on left and "The Contrast" on right
- **FR-021**: "The Context" column MUST summarize broken promises, divisiveness, stagnation, corruption, lawlessness, hopelessness under current administration
- **FR-022**: "The Contrast" column MUST display 3-4 key "Our Record vs Theirs" comparison data points as mini stat cards (e.g., $45M in 74 school facilities, major road/bridge upgrades, expanded tourism arrivals)
- **FR-023**: Section MUST close with the line "We don't speak in slogans. We speak in results."

#### Vision Section

- **FR-024**: Page MUST include "Our Vision for a New Era" section with heading
- **FR-025**: Section MUST include a 2-3 sentence introduction about a globally competitive country with excellence as standard
- **FR-026**: Section MUST display four vision bullets: Excellence in every sector, Equal access to opportunity, Freedom/rule of law/human rights, Participatory people-powered governance
- **FR-027**: Each vision bullet MUST include a bolded title and 1-2 sentence description
- **FR-028**: Section MUST end with a one-line quote block paraphrasing the manifesto's vision statement

#### Strategy Section (Relief, Recovery, Reform)

- **FR-029**: Page MUST include "How We Will Deliver: Relief, Recovery, Reform" section with heading
- **FR-030**: Section MUST display three equal columns for Relief, Recovery, Reform
- **FR-031**: Relief column MUST list the Seven SOS Initiatives as numbered items: (1) Remove 2.5% Health & Security Levy, (2) Reduce fuel prices, (3) Abolish dam dredging fee, (4) Free tertiary education at Sir Arthur Lewis Community College, (5) Reintroduce border control & expand K9 unit, (6) Pensions & one-off payments for banana farmers, (7) National Health Insurance coverage $75,000 per person per year
- **FR-032**: Recovery column MUST emphasize infrastructure upgrades, health & education access, creativity/innovation, strengthening agriculture/tourism/construction/creative/digital/caring economies
- **FR-033**: Reform column MUST cover strengthening democratic institutions, modernizing public service with technology, updating laws, institutionalizing citizen engagement, fighting corruption
- **FR-034**: Section MUST end with a one-liner: "Relief empowers people to participate in recovery. Recovery powers reform. Reform locks in progress."

#### Priority Areas Section

- **FR-035**: Page MUST include "Our Transformative Agenda" section with heading
- **FR-036**: Section MUST display 6-8 priority area tiles: Security & Citizen Safety, Economy & Jobs, Agriculture & Fisheries, Tourism, Digital & Creative Economy, Caring Economy, Housing & Infrastructure, Energy/Health/Governance
- **FR-037**: Each tile MUST include a title and 2-3 sentence summary of key initiatives
- **FR-038**: Each tile MUST include a "Read details in the manifesto →" label

#### Team & Leadership Section

- **FR-039**: Page MUST include "A New Kind of Leadership" section with heading
- **FR-040**: Section MUST include a short statement about the team being educators, entrepreneurs, professionals, community leaders, advocates united by integrity and service
- **FR-041**: Section MUST feature Political Leader Allen M. Chastanet with photo, name, title, and 2-3 sentence message summary
- **FR-042**: Leader message MUST acknowledge betrayal, corruption, hardship and call to choose decency over deception, progress over stagnation, excellence over excuses
- **FR-043**: Section MUST include a grid for 4-6 key team members with photos, names, roles, and one-line bios

#### Call-to-Action Section

- **FR-044**: Page MUST include a final Call-to-Action section with solid red background (#ED1C26) and white text
- **FR-045**: Section MUST display the headline "Our Future Is at Stake. Let's Reclaim It Together."
- **FR-046**: Section MUST include subtext: "This manifesto is our contract with you – to restore trust, rebuild our institutions, and create a country where every citizen can dream again."
- **FR-047**: Section MUST include a "Read Manifesto 2025" button that scrolls to the flipbook
- **FR-048**: Section MUST include a "Share with a friend" link with social share icons for Facebook and WhatsApp

#### Visual Design and Branding

- **FR-049**: All primary buttons and section highlights MUST use UWP brand color #ED1C26 (red)
- **FR-050**: Page background MUST be white with dark grey text for readability
- **FR-051**: Alternating sections MUST use very light grey (#F5F5F5) background for visual separation
- **FR-052**: Headings MUST be bold, uppercase or semi-uppercase for serious, disciplined political tone
- **FR-053**: Body text MUST use clean sans-serif font
- **FR-054**: Flipbook background color MUST be #2C3E50 (dark blue-gray) as configured

#### Responsive Design

- **FR-055**: Homepage MUST be fully responsive across desktop, tablet, and mobile devices (320px to 4K screens)
- **FR-056**: Two-column layouts (Context & Contrast) MUST stack vertically on mobile screens
- **FR-057**: Three-column layouts (Relief/Recovery/Reform) MUST stack vertically on mobile screens
- **FR-058**: Priority area tiles MUST reflow to single column on mobile screens
- **FR-059**: Team member grid MUST adjust column count based on screen width (4+ on desktop, 2 on tablet, 1 on mobile)
- **FR-060**: Touch targets (buttons, links, menu items) MUST be at least 44px for mobile accessibility
- **FR-061**: Flipbook MUST adapt dimensions to fit viewport on mobile while maintaining aspect ratio
- **FR-062**: Mobile users MUST be able to use touch gestures (swipe, pinch-zoom, tap) naturally with the flipbook

#### Performance and Accessibility

- **FR-063**: Page MUST load and display above-the-fold content within 3 seconds on standard broadband
- **FR-064**: Flipbook PDF (43MB) MUST use progressive loading or display a clear loading indicator
- **FR-065**: Page MUST maintain smooth scrolling and animations at 60fps or gracefully degrade
- **FR-066**: Page MUST support keyboard navigation for accessibility (tab focus, enter to activate, arrows in flipbook)
- **FR-067**: All interactive elements MUST be keyboard accessible
- **FR-068**: All images MUST include appropriate alt text for screen readers

### Key Entities

- **Manifesto Document**: The UWP 2025 Manifesto "Reclaiming Our Future" PDF file (43MB), containing the full political platform with sections on security, economy, agriculture, tourism, digital/creative economy, caring economy, housing, infrastructure, energy, healthcare, governance, and more
- **Seven SOS Initiatives**: Seven specific relief programs (remove health levy, reduce fuel prices, abolish dam fee, free SALCC education, border control/K9, banana farmer support, $75K NHI coverage) that provide immediate help to citizens
- **Priority Areas**: Eight policy domains (Security, Economy, Agriculture, Tourism, Digital/Creative, Caring Economy, Housing, Energy/Health/Governance) each with 2-3 sentence summaries and links back to manifesto
- **Leadership Team**: Political Leader Allen M. Chastanet plus 4-6 key team members, each with photo, name, role, and bio
- **Vision Pillars**: Four core vision statements (Excellence, Equal Access, Freedom/Rule of Law, Participatory Governance) that define UWP's aspirational goals
- **Strategic Framework**: Three-pillar approach (Relief, Recovery, Reform) that organizes how the party will deliver on its vision

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Visitors can navigate from homepage landing to viewing the manifesto flipbook in under 10 seconds
- **SC-002**: 90% of visitors can successfully flip through at least 5 pages of the manifesto using their preferred input method (mouse, keyboard, or touch)
- **SC-003**: Mobile users (on devices with screen width ≤ 768px) can read all text content without horizontal scrolling
- **SC-004**: Visitors can identify at least 4 out of 7 SOS initiatives after viewing the Strategy section for 30 seconds
- **SC-005**: The flipbook loads and displays the first page within 5 seconds on a 10 Mbps connection
- **SC-006**: 95% of visitors can successfully download the PDF file within 2 clicks from the flipbook section
- **SC-007**: Page scroll navigation via header menu reaches target sections within 1 second of click
- **SC-008**: All text remains readable (minimum 14px font size) on mobile screens down to 320px width
- **SC-009**: Touch targets in header menu and CTAs are successfully tappable on first attempt for 95% of mobile users (44px minimum)
- **SC-010**: Visitors can understand the party's three-pillar strategy (Relief, Recovery, Reform) within 20 seconds of viewing the Strategy section
- **SC-011**: The homepage maintains a Lighthouse Performance score of 85 or higher
- **SC-012**: Search functionality in the flipbook returns results within 2 seconds for common terms (e.g., "agriculture", "security", "economy")
- **SC-013**: 80% of visitors who view the Leadership section can identify the Political Leader's name and 2 key themes from their message
- **SC-014**: Social sharing options (Facebook, WhatsApp) are accessible within 2 clicks from the final CTA section

### Assumptions

- The manifesto PDF file (43MB) is already finalized and available at `examples/pdf/manifesto.pdf`
- The Real3D Flipbook jQuery plugin is properly licensed and installed in `build/js/` and `build/css/`
- Photos and bios for the Political Leader and 4-6 team members will be provided by the UWP communications team
- The target audience has devices and browsers that support modern web standards (Chrome, Firefox, Safari, Edge latest versions, iOS 12+, Android 8+)
- Internet connection speeds range from slow mobile (2-3 Mbps) to standard broadband (10+ Mbps)
- The primary distribution channel is direct URL sharing via social media and WhatsApp
- Content is English-only as specified by stakeholder requirements
- UWP brand colors (#ED1C26 for red, #2C3E50 for flipbook background) are official and approved
- The homepage will be hosted on a standard web server (already running on port 8080 with Python http.server)
