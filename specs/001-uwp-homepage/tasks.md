# Implementation Tasks: Convert UWP Homepage to Next.js with Tailwind CSS

**Feature**: UWP 2025 Manifesto Interactive Homepage (Next.js Migration)
**Branch**: `001-uwp-homepage`
**Plan**: [plan.md](./plan.md) | **Spec**: [spec.md](./spec.md)

## Task Summary

- **Total Tasks**: 67
- **Parallelizable Tasks**: 42
- **User Stories**: 5 (P1-P5)
- **Estimated Duration**: 24-31 hours

### Tasks per User Story

- **Setup & Foundation**: 15 tasks
- **User Story 1** (P1 - Interactive Flipbook): 12 tasks
- **User Story 2** (P2 - Vision & Strategy): 10 tasks
- **User Story 3** (P3 - Priority Areas): 6 tasks
- **User Story 4** (P4 - Team & Leadership): 8 tasks
- **User Story 5** (P5 - Navigation & Sharing): 8 tasks
- **Polish & Optimization**: 8 tasks

---

## Implementation Strategy

### MVP Scope (Immediate Value)
**User Story 1 only**: Interactive flipbook with hero section and basic navigation. This delivers core value - accessible manifesto distribution.

### Incremental Delivery
1. **Phase 1**: Setup + US1 (Flipbook) → MVP deployed
2. **Phase 2**: US2 (Vision/Strategy) → Enhanced platform understanding
3. **Phase 3**: US3 (Priorities) → Issue-focused content
4. **Phase 4**: US4 (Team) → Leadership credibility
5. **Phase 5**: US5 (Navigation) + Polish → Full feature parity

### Independent Story Testing
Each user story can be tested independently:
- **US1**: Test flipbook interaction without other sections
- **US2**: Test vision/strategy sections without flipbook
- **US3**: Test priority tiles independently
- **US4**: Test leadership section independently
- **US5**: Test navigation with any completed sections

---

## Dependencies

### Story Completion Order

```
Setup Phase (Phase 1)
    ↓
Foundational Phase (Phase 2)
    ↓
User Story 1 (P1) ← BLOCKS → User Story 5 (P5)
    ↓                             ↓
User Story 2 (P2)             Header navigation
    ↓                         needs sections
User Story 3 (P3)             to link to
    ↓
User Story 4 (P4)
    ↓
Polish & Optimization
```

**Hard Dependencies**:
- US5 (Navigation) requires at least US1 complete (needs sections to navigate to)
- All stories require Setup + Foundational phases complete

**Soft Dependencies** (recommended order):
- US2 benefits from US1 (provides context for strategy)
- US3 benefits from US1 (tiles link back to manifesto)

**Independent Stories**:
- US2, US3, US4 can be developed in parallel after US1

---

## Phase 1: Setup & Project Initialization

**Goal**: Create Next.js project with Tailwind CSS and migrate existing assets

**Duration**: 2-3 hours

### Tasks

- [ ] T001 Initialize Next.js 14 project with TypeScript using `npx create-next-app@latest uwp-nextjs --typescript --tailwind --app --no-src-dir`
- [ ] T002 [P] Install additional dependencies: `npm install --save-dev @types/react @types/node eslint-config-next prettier`
- [ ] T003 [P] Configure next.config.js for static export: add `output: 'export'` and `images: { unoptimized: true }`
- [ ] T004 [P] Set up Tailwind configuration in tailwind.config.ts with UWP brand colors (#ED1C26, #333333, #F5F5F5, #E8E8E8, #2C3E50)
- [ ] T005 [P] Create ESLint configuration file .eslintrc.json with Next.js and TypeScript rules
- [ ] T006 [P] Create Prettier configuration file .prettierrc with formatting rules (semi: false, singleQuote: true, tabWidth: 2)
- [ ] T007 Copy existing assets from examples/ to public/ directory: images/, pdf/manifesto.pdf
- [ ] T008 [P] Copy Real3D Flipbook plugin files to public/flipbook/: js/flipbook.min.js, css/flipbook.min.css
- [ ] T009 [P] Create lib/types.ts with TypeScript interfaces for all component props
- [ ] T010 [P] Create lib/utils.ts with utility functions for smooth scrolling and class names
- [ ] T011 [P] Update app/globals.css with Tailwind imports and custom CSS for flipbook integration
- [ ] T012 [P] Create app/layout.tsx with root layout, metadata, fonts, and script tags for jQuery and flipbook plugin
- [ ] T013 [P] Create empty component files in app/components/ directory for all sections
- [ ] T014 Verify project structure matches plan.md and all dependencies install correctly
- [ ] T015 Test development server with `npm run dev` and verify Tailwind is working

---

## Phase 2: Foundational Components

**Goal**: Build foundational components needed by all user stories

**Duration**: 2-3 hours

### Tasks

- [ ] T016 [P] Create reusable Button component in app/components/ui/Button.tsx with variants (primary, secondary) using Tailwind
- [ ] T017 [P] Create reusable Card component in app/components/ui/Card.tsx with shadow and border styles
- [ ] T018 [P] Create reusable Section component in app/components/ui/Section.tsx with container max-width and padding
- [ ] T019 [P] Create SVG icon components in app/components/icons/ for all sections (Shield, Heart, Users, etc.)
- [ ] T020 [P] Implement lib/flipbook-loader.ts with jQuery plugin initialization logic and error handling
- [ ] T021 [P] Add scroll behavior utilities to lib/utils.ts for smooth scrolling to anchored sections
- [ ] T022 Create app/page.tsx as main homepage container importing all section components
- [ ] T023 Test that foundational components render correctly without errors

---

## Phase 3: User Story 1 - Interactive Flipbook (P1)

**Story Goal**: Enable visitors to view and interact with the manifesto PDF via 3D flipbook with navigation controls, search, zoom, and download capabilities.

**Independent Test Criteria**:
- ✅ Flipbook displays on page load showing manifesto cover
- ✅ Click/keyboard/touch navigation flips pages smoothly
- ✅ Search function finds and highlights terms (e.g., "agriculture")
- ✅ Download button downloads 43MB PDF file
- ✅ Zoom/pinch gestures work on mobile
- ✅ Flipbook displays error state if PDF fails to load

**Duration**: 6-8 hours

### Tasks

- [ ] T024 [US1] Create app/components/Hero.tsx with heading, subtitle, description, CTAs, and manifesto card using Tailwind grid layout
- [ ] T025 [US1] Style Hero component with background image overlay using next/image for hero-background.jpg
- [ ] T026 [US1] Implement glassmorphism effect on manifesto card in Hero.tsx using Tailwind backdrop-blur and rgba backgrounds
- [ ] T027 [US1] Create app/components/Flipbook.tsx as client component ('use client' directive) with useEffect for plugin initialization
- [ ] T028 [US1] Integrate jQuery flipbook plugin in Flipbook.tsx using lib/flipbook-loader.ts initialization function
- [ ] T029 [US1] Configure flipbook options in Flipbook.tsx: pdfPath, backgroundColor, controls (arrows, zoom, search, download, print, TOC)
- [ ] T030 [US1] Implement responsive flipbook sizing in Flipbook.tsx: 500px height mobile, 600px desktop
- [ ] T031 [US1] Add error handling and loading states to Flipbook.tsx with fallback Download PDF button
- [ ] T032 [US1] Implement cleanup function in Flipbook.tsx useEffect to destroy plugin instance on unmount
- [ ] T033 [US1] Create app/components/ManifestoSummary.tsx with 6 commitment cards in 2x3 grid using existing content
- [ ] T034 [US1] Style ManifestoSummary cards with icons, headings, descriptions, and hover effects using Tailwind
- [ ] T035 [US1] Add sections to app/page.tsx: Hero, Flipbook with heading/intro, ManifestoSummary with background color

**Parallel Opportunities**:
- T024-T026 (Hero) can run parallel to T027-T032 (Flipbook)
- T033-T034 (ManifestoSummary) can run after any of above complete

---

## Phase 4: User Story 2 - Vision & Strategy (P2)

**Story Goal**: Provide quick-scan sections showing party vision pillars and three-pillar strategy (Relief, Recovery, Reform) with Seven SOS Initiatives.

**Independent Test Criteria**:
- ✅ Context section displays two-column layout with image and stats
- ✅ Vision section shows 4 pillars in 2x2 grid with icons and descriptions
- ✅ Strategy section displays 3 equal columns (Relief, Recovery, Reform)
- ✅ Relief column clearly lists all 7 SOS Initiatives with numbered bullets
- ✅ Quote sections display with proper styling
- ✅ All sections stack vertically on mobile (< 768px)

**Duration**: 5-6 hours

### Tasks

- [ ] T036 [P] [US2] Create app/components/Context.tsx with two-column grid layout for image and content
- [ ] T037 [P] [US2] Add stat blocks to Context.tsx with Education, Infrastructure, Tourism data using Card components
- [ ] T038 [P] [US2] Style Context.tsx with next/image for record-collage.jpg and "Our Record in Action" label overlay
- [ ] T039 [P] [US2] Create app/components/Vision.tsx with heading, intro, 4-pillar grid (2x2), and quote blockquote
- [ ] T040 [P] [US2] Implement pillar cards in Vision.tsx with SVG icons, titles, descriptions, and red accent underlines
- [ ] T041 [P] [US2] Create app/components/Strategy.tsx with three-column grid layout for Relief, Recovery, Reform
- [ ] T042 [US2] Implement Relief column in Strategy.tsx with custom numbered list (1-7) for SOS Initiatives using CSS counters
- [ ] T043 [US2] Implement Recovery column in Strategy.tsx with bulleted list and amber accent color
- [ ] T044 [US2] Implement Reform column in Strategy.tsx with bulleted list and blue accent color
- [ ] T045 [US2] Add sections to app/page.tsx: Context, Vision, Strategy with proper backgrounds and spacing

**Parallel Opportunities**:
- T036-T038 (Context), T039-T040 (Vision), T041-T044 (Strategy) can all run in parallel

---

## Phase 5: User Story 3 - Priority Areas (P3)

**Story Goal**: Display 8 priority area tiles with concise summaries and color-coded accents linking back to manifesto.

**Independent Test Criteria**:
- ✅ Priority section displays 8 tiles in 4-column grid (desktop)
- ✅ Each tile shows icon, title, 2-3 sentence description
- ✅ Tiles have color-coded bottom borders (red, amber, green, teal, purple, pink, blue, dark-green)
- ✅ "Read details in the manifesto →" link present on all tiles
- ✅ Grid becomes 2 columns on tablet, 1 column on mobile
- ✅ Hover effects work (translateY, shadow increase)

**Duration**: 3-4 hours

### Tasks

- [ ] T046 [P] [US3] Create app/components/Priorities.tsx with heading and 4-column grid container
- [ ] T047 [US3] Create PriorityTile sub-component in Priorities.tsx with icon, title, description, accent border props
- [ ] T048 [US3] Implement 8 priority tiles with content: Security, Economy, Agriculture, Tourism, Digital/Creative, Caring Economy, Housing, Energy/Health/Governance
- [ ] T049 [US3] Add color-coded accent borders using Tailwind border-b-4 with data attributes (data-accent="red", etc.)
- [ ] T050 [US3] Implement hover effects with Tailwind (hover:-translate-y-1, hover:shadow-xl transitions)
- [ ] T051 [US3] Add Priorities section to app/page.tsx with gradient background

**Parallel Opportunities**:
- All tasks (T046-T051) can run in sequence or have T047-T050 parallelized if structured as separate tile files

---

## Phase 6: User Story 4 - Team & Leadership (P4)

**Story Goal**: Showcase Political Leader with featured profile and team member grid to build trust and credibility.

**Independent Test Criteria**:
- ✅ Team section displays featured leader profile with photo, name, title, 2-3 sentence message
- ✅ Leader message contains themes: decency over deception, progress over stagnation, excellence over excuses
- ✅ Team grid shows 4-6 team members with photos, names, roles, brief bios
- ✅ Layout is 2-column (leader profile) on desktop, single column on mobile
- ✅ Team grid responsive: 4 columns desktop, 2 tablet, 1 mobile
- ✅ Placeholder images display correctly for members without photos

**Duration**: 3-4 hours

### Tasks

- [ ] T052 [P] [US4] Create app/components/Team.tsx with heading, intro paragraph, and leader profile section
- [ ] T053 [P] [US4] Implement leader profile layout in Team.tsx: 2-column grid with image left, text right
- [ ] T054 [US4] Add leader content to Team.tsx: Allen M. Chastanet profile with message about choosing decency/progress/excellence
- [ ] T055 [US4] Use next/image for leader photo with proper width/height and alt text in Team.tsx
- [ ] T056 [P] [US4] Create team member grid in Team.tsx with Card components (4-6 members)
- [ ] T057 [US4] Add team member content with placeholder data: photos, names, roles, one-line bios
- [ ] T058 [US4] Style team member cards with circular images, centered text, hover shadows using Tailwind
- [ ] T059 [US4] Add Team section to app/page.tsx with medium-grey background

**Parallel Opportunities**:
- T052-T055 (Leader profile) parallel to T056-T058 (Team grid)

---

## Phase 7: User Story 5 - Navigation & Sharing (P5)

**Story Goal**: Provide sticky header navigation for quick section access and social sharing functionality.

**Independent Test Criteria**:
- ✅ Header visible and sticky on scroll with logo left, menu right
- ✅ Menu items (Home, Manifesto, Our Plan, Priorities, Leadership) present
- ✅ Clicking menu item smoothly scrolls to corresponding section
- ✅ Hover on menu item shows red underline (#ED1C26)
- ✅ Mobile menu toggle button appears on < 768px screens
- ✅ Mobile menu slides in from right with backdrop overlay
- ✅ Share button in CTA section opens social share options (Facebook, WhatsApp)
- ✅ Share functionality uses navigator.share API where available

**Duration**: 4-5 hours

### Tasks

- [ ] T060 [US5] Create app/components/Header.tsx as client component with sticky positioning and logo/nav layout
- [ ] T061 [US5] Add navigation links to Header.tsx with smooth scroll behavior using anchor links (#home, #manifesto, etc.)
- [ ] T062 [US5] Implement hover effects on nav links in Header.tsx: red underline on hover using Tailwind after: pseudo-element
- [ ] T063 [US5] Create mobile menu toggle state in Header.tsx with useState (isOpen) and hamburger button
- [ ] T064 [US5] Implement mobile menu drawer in Header.tsx: slide-in from right with backdrop overlay using Tailwind transitions
- [ ] T065 [US5] Create app/components/CTA.tsx with red background gradient, heading, subtext, buttons
- [ ] T066 [US5] Implement share functionality in CTA.tsx using navigator.share API with Facebook/WhatsApp fallback links
- [ ] T067 [US5] Add Header to app/layout.tsx and CTA to app/page.tsx as final section

**Parallel Opportunities**:
- T060-T064 (Header) parallel to T065-T066 (CTA)

---

## Phase 8: Polish & Optimization

**Goal**: Performance optimization, accessibility improvements, and final testing

**Duration**: 4-5 hours

### Tasks

- [ ] T068 [P] Optimize all images in public/images/ using next/image with priority prop for hero-background.jpg
- [ ] T069 [P] Add loading="lazy" to all below-fold images using next/image
- [ ] T070 [P] Implement scroll-margin-top on all section IDs to account for sticky header offset (80px)
- [ ] T071 [P] Add ARIA labels to all interactive elements (buttons, links, nav items) for screen reader accessibility
- [ ] T072 [P] Test keyboard navigation flow: Tab through all interactive elements, Enter to activate
- [ ] T073 Run Lighthouse audit and optimize for Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95
- [ ] T074 Test static export build: `npm run build` and verify exported site in out/ directory works
- [ ] T075 Cross-browser testing: Chrome, Firefox, Safari, Edge on desktop; iOS Safari, Chrome Android on mobile

---

## Testing Strategy

### Manual Testing Checklist

**User Story 1 (Flipbook)**:
- [ ] Flipbook loads and displays manifesto cover
- [ ] Click navigation (arrows) flips pages
- [ ] Keyboard navigation (arrow keys) flips pages
- [ ] Touch swipe flips pages on mobile
- [ ] Search for "agriculture" highlights results
- [ ] Download PDF button downloads 43MB file
- [ ] Zoom controls work (pinch on mobile)
- [ ] Flipbook error state displays if PDF missing

**User Story 2 (Vision/Strategy)**:
- [ ] Context section displays in 2 columns (desktop), stacks on mobile
- [ ] Vision section shows 4 pillars in 2x2 grid
- [ ] Strategy section shows 3 columns with Relief, Recovery, Reform
- [ ] All 7 SOS Initiatives listed under Relief
- [ ] Quote sections render with proper styling

**User Story 3 (Priorities)**:
- [ ] 8 priority tiles display in 4-column grid (desktop)
- [ ] Tiles have correct color-coded borders
- [ ] Hover effects work (lift, shadow)
- [ ] Grid responsive (2 columns tablet, 1 mobile)

**User Story 4 (Team)**:
- [ ] Leader profile displays in 2 columns
- [ ] Leader message contains correct themes
- [ ] Team grid shows 4-6 members
- [ ] Grid responsive (4→2→1 columns)

**User Story 5 (Navigation)**:
- [ ] Header sticky on scroll
- [ ] Nav links scroll smoothly to sections
- [ ] Hover shows red underline
- [ ] Mobile menu opens/closes
- [ ] Share button opens share options

### Performance Testing

Run after all tasks complete:

```bash
# Build and test static export
npm run build
npx serve out

# Run Lighthouse audit
npx lighthouse http://localhost:3000 --view

# Check bundle size
npx next build
```

**Target Metrics**:
- Performance Score: ≥ 90
- First Contentful Paint: < 1.2s
- Time to Interactive: < 2.5s
- Largest Contentful Paint: < 2.0s
- Cumulative Layout Shift: < 0.1
- Bundle Size (initial load): < 500KB

### Browser Compatibility Testing

| Browser | Desktop | Mobile | Status |
|---------|---------|--------|--------|
| Chrome | Latest | Android | [ ] |
| Firefox | Latest | N/A | [ ] |
| Safari | Latest | iOS 12+ | [ ] |
| Edge | Latest | N/A | [ ] |

---

## Deployment Checklist

- [ ] Verify static export builds without errors: `npm run build`
- [ ] Test exported site locally: `npx serve out`
- [ ] Verify all assets load correctly in production build
- [ ] Test on multiple devices and browsers
- [ ] Confirm flipbook PDF (43MB) loads correctly
- [ ] Verify all images optimized and loading properly
- [ ] Check console for any errors or warnings
- [ ] Validate HTML using W3C validator
- [ ] Test share functionality on production domain
- [ ] Verify analytics tracking (if applicable)

---

## Notes

### Migration from Existing Implementation

**Asset Migration**:
- Copy `examples/uwp-homepage.html` content to Next.js components
- Copy `examples/css/uwp-homepage.css` → Convert to Tailwind utilities
- Copy `examples/js/uwp-homepage.js` → Convert to React hooks
- Copy `examples/images/*` → Move to `public/images/`
- Copy `examples/pdf/manifesto.pdf` → Move to `public/pdf/`

**CSS to Tailwind Conversion Patterns**:
```css
/* Old CSS */
.hero-section {
  padding: 100px 20px;
  background: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('../images/hero-background.jpg');
}

/* New Tailwind */
<section className="py-[100px] px-5 bg-black/65 bg-[url('/images/hero-background.jpg')] bg-cover bg-center">
```

**JavaScript to React Conversion Patterns**:
```javascript
// Old JavaScript
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
  document.querySelector('nav').classList.toggle('active');
});

// New React
const [isMenuOpen, setIsMenuOpen] = useState(false);
<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
  <nav className={isMenuOpen ? 'active' : ''}>
```

### jQuery Plugin Integration

**Critical Implementation Details**:
1. Load jQuery globally via Script tag in `app/layout.tsx`
2. Load flipbook CSS/JS via Script tags with `strategy="beforeInteractive"`
3. Initialize plugin in `useEffect` with window check:
   ```typescript
   useEffect(() => {
     if (typeof window !== 'undefined' && window.jQuery) {
       // Initialize flipbook
     }
     return () => {
       // Cleanup on unmount
     };
   }, []);
   ```
4. Add proper TypeScript declarations for jQuery in `lib/types.ts`:
   ```typescript
   declare global {
     interface Window {
       jQuery: any;
     }
   }
   ```

### Responsive Breakpoints (Tailwind)

- `sm`: 640px (mobile landscape)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)
- `xl`: 1280px (large desktop)

**Usage**: Mobile-first approach (default styles for mobile, then add `md:`, `lg:` prefixes for larger screens)

---

**Tasks Generated**: 2025-11-20
**Ready for Implementation**: ✅ Yes
**Estimated Completion**: 4-5 days (1 developer, 6-8 hours/day)
