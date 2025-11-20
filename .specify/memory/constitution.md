<!--
SYNC IMPACT REPORT
==================
Version Change: INITIAL → 1.0.0
Constitution Type: INITIAL RATIFICATION

This is the first constitution for the United Workers Party 2025 Manifesto Digital Flipbook project.

Principles Defined:
- User-Centric Experience
- Performance & Accessibility
- Content Integrity
- Mobile-First Responsive Design
- Browser Compatibility

Templates Status:
✅ plan-template.md - reviewed, aligned with constitution
✅ spec-template.md - reviewed, aligned with constitution
✅ tasks-template.md - reviewed, aligned with constitution

Follow-up TODOs: None
-->

# United Workers Party Manifesto Flipbook Constitution

## Core Principles

### I. User-Centric Experience

The interactive flipbook MUST provide an intuitive, engaging user experience that makes the manifesto accessible and enjoyable to read.

**Non-negotiable rules:**
- Navigation MUST be intuitive (mouse click/drag, keyboard arrows, touch swipe)
- Core features (flip, zoom, search, download, print) MUST be easily discoverable
- The interface MUST not obstruct content readability
- Loading states MUST provide clear feedback to users
- Error states MUST provide helpful guidance

**Rationale:** The manifesto's message is critical. The technology serves the content, not the other way around. Users of all technical skill levels must be able to access and navigate the document effortlessly.

### II. Performance & Accessibility

The flipbook MUST load quickly and remain responsive across all devices and network conditions.

**Non-negotiable rules:**
- Initial page load MUST complete within 3 seconds on standard broadband
- Page flip animations MUST maintain 60fps or gracefully degrade
- Large PDF (40MB+) MUST use progressive loading or chunking
- Critical rendering path MUST prioritize above-the-fold content
- WCAG 2.1 Level AA accessibility standards MUST be met where applicable
- Keyboard navigation MUST be fully functional

**Rationale:** Political content must reach all citizens, regardless of device quality or internet speed. Performance is a feature. Accessibility is a right.

### III. Content Integrity

The manifesto content MUST be presented accurately, completely, and without technical degradation.

**Non-negotiable rules:**
- PDF rendering MUST preserve original formatting, fonts, and images
- Text search MUST return accurate results across all pages
- Downloaded PDFs MUST be identical to source document
- No content modification or injection allowed during rendering
- Print output MUST maintain professional quality

**Rationale:** This is an official political document. Any distortion, loss of fidelity, or inaccuracy could undermine the message and credibility of the United Workers Party.

### IV. Mobile-First Responsive Design

The flipbook experience MUST work seamlessly on mobile devices, tablets, and desktops.

**Non-negotiable rules:**
- Touch gestures (swipe, pinch-zoom, tap) MUST work naturally on mobile
- Responsive breakpoints MUST accommodate screens from 320px to 4K
- Mobile UI MUST not require horizontal scrolling
- Controls MUST be touch-friendly (minimum 44px touch targets)
- Portrait and landscape orientations MUST both be supported

**Rationale:** Mobile devices are the primary internet access point for many citizens. The manifesto must reach people where they are, on the devices they have.

### V. Browser Compatibility

The flipbook MUST function correctly across all modern browsers and degrade gracefully on older ones.

**Non-negotiable rules:**
- Chrome, Firefox, Safari, Edge (latest versions) MUST be fully supported
- iOS 12+ and Android 8+ browsers MUST be supported
- Progressive enhancement MUST be used (core functionality works without JS)
- Browser feature detection MUST be used over user-agent sniffing
- Polyfills MUST be provided for critical missing features

**Rationale:** Citizens use diverse devices and browsers. Technical barriers must not prevent anyone from accessing the manifesto.

## Configuration Standards

### File Organization
- Source PDF files MUST be stored in `/examples/pdf/`
- Plugin CSS MUST be in `/build/css/`
- Plugin JS MUST be in `/build/js/`
- Example implementations MUST be in `/examples/`
- Documentation MUST be in `/documentation/`

### Naming Conventions
- HTML files: lowercase, hyphen-separated (e.g., `manifesto.html`)
- PDF files: lowercase, descriptive (e.g., `manifesto.pdf`)
- Asset files: semantic naming that indicates purpose

### Plugin Configuration
- Configuration options MUST be documented in code comments
- Default settings MUST be production-ready
- Feature flags MUST be clearly commented
- Color schemes MUST align with UWP brand (#ED1C26 primary red)

## Quality Standards

### Testing Requirements
- Cross-browser testing MUST be performed before deployment
- Mobile device testing MUST include both iOS and Android
- Accessibility testing MUST be performed with screen readers
- Performance testing MUST validate load times and animation framerates
- PDF rendering quality MUST be verified on sample pages

### Documentation Requirements
- Setup instructions MUST be clear and complete
- Configuration options MUST be documented
- Troubleshooting guidance MUST be provided
- Browser compatibility matrix MUST be maintained

### Performance Benchmarks
- Lighthouse Performance score MUST be ≥ 85
- First Contentful Paint MUST be < 1.5s
- Time to Interactive MUST be < 3.5s
- Cumulative Layout Shift MUST be < 0.1

## Governance

### Authority
This constitution represents the foundational principles for the United Workers Party 2025 Manifesto Digital Flipbook project. All implementation decisions, feature additions, and technical choices MUST align with these principles.

### Amendment Process
1. Amendments MUST be proposed with clear justification
2. Impact on existing features MUST be documented
3. Version number MUST be incremented according to semantic versioning:
   - **MAJOR**: Principle removal or redefinition that affects existing work
   - **MINOR**: New principle added or existing principle expanded
   - **PATCH**: Clarifications, wording improvements, non-semantic changes
4. Dependent templates (plan, spec, tasks) MUST be updated for consistency

### Compliance Review
- All feature specifications MUST include a "Constitution Check" section
- Implementation plans MUST verify alignment with principles
- Any violation of non-negotiable rules MUST be justified and approved before proceeding
- Complexity that contradicts principles (e.g., sacrificing accessibility for features) MUST provide justification or be rejected

### Conflict Resolution
When principles appear to conflict (e.g., rich features vs. performance), the following priority order applies:
1. **Content Integrity** - Never compromise the manifesto content
2. **Accessibility** - Never exclude users
3. **Performance** - Never create barriers to access
4. **User Experience** - Never confuse or frustrate users
5. **Features** - Add only when above principles are satisfied

### Project Context
This project uses the Real3D Flipbook jQuery plugin (licensed from CodeCanyon) to present the United Workers Party 2025 Manifesto "Reclaiming Our Future" as an interactive digital experience. The technology is a vehicle for the political message, not an end in itself.

**Version**: 1.0.0 | **Ratified**: 2025-11-19 | **Last Amended**: 2025-11-19
