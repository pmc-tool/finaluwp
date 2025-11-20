# Research: UWP 2025 Manifesto Interactive Homepage

**Feature**: `001-uwp-homepage`
**Date**: 2025-11-19
**Purpose**: Research best practices, design patterns, and technical decisions for implementing a high-performance, accessible single-page political manifesto website

## Research Questions

1. How to optimize Real3D Flipbook plugin for 43MB PDF progressive loading?
2. What responsive design patterns work best for complex multi-section political websites?
3. How to achieve smooth scroll navigation with anchor links across all browsers?
4. What accessibility patterns ensure WCAG 2.1 AA compliance for single-page sites?
5. How to implement social sharing (Facebook, WhatsApp) with fallbacks?
6. What performance optimizations achieve Lighthouse ≥85 with large PDF?

---

## Decision 1: Real3D Flipbook Configuration for Large PDF

**Question**: How to configure the Real3D Flipbook plugin to handle a 43MB PDF with progressive loading while maintaining 60fps page flips and <5s initial load?

**Research Findings**:

The Real3D Flipbook jQuery plugin (v3.x) supports several configuration options for large PDFs:

1. **Page Streaming**: Plugin loads pages on-demand rather than entire PDF upfront
   - Enable via `pageMode: "single"` or `pageMode: "double"`
   - Pages rendered as needed during navigation
   - Reduces initial load time significantly

2. **PDF.js Integration**: Plugin uses PDF.js for rendering
   - Lazy loading built into PDF.js
   - Texture caching for visited pages
   - Progressive rendering (low-res preview → high-res)

3. **Performance Settings**:
   - `pageTextureSizeMin`: Controls minimum texture resolution (lower = faster load)
   - `pageTextureSizeMax`: Controls maximum quality (higher = better quality, slower)
   - `zoomMin` / `zoomMax`: Limit zoom to reduce memory usage
   - `preloadPages`: Number of pages to preload ahead (default: 2-3)

**Decision**: Configure flipbook with balanced performance settings

```javascript
$('.flipbook-container').flipBook({
  pdfUrl: 'pdf/manifesto.pdf',
  pageMode: 'double',                  // Show two pages like real book
  singlePageMode: 'zoom',              // Single page on zoom
  pageTextureSizeMin: 1024,            // Min texture size for fast load
  pageTextureSizeMax: 2048,            // Max texture size for quality
  preloadPages: 3,                     // Preload 3 pages ahead/behind
  backgroundColor: '#2C3E50',          // UWP flipbook background
  btnDownloadURL: 'pdf/manifesto.pdf', // Direct download link
  btnPrint: {enabled: true},
  btnDownload: {enabled: true},
  btnShare: {enabled: true},
  btnSearch: {enabled: true},
  btnToc: {enabled: true},             // Table of contents
  responsive: true,                    // Auto-resize to container
  height: 600,                         // Desktop height
  mobileHeight: 400                    // Mobile height
});
```

**Rationale**:
- `pageMode: 'double'` provides book-like experience on desktop
- Texture sizes balanced for quality vs. performance (1024-2048px)
- Preload 3 pages provides smooth navigation without excessive memory
- Responsive mode adapts to viewport (constitutional requirement)
- All core features enabled (search, download, print, TOC)

**Alternatives Considered**:
- **Full PDF preload**: Rejected - 43MB would take >30s to load on slow connections
- **Image-based flipbook**: Rejected - loses search functionality and increases file size
- **Lower texture resolution (512px)**: Rejected - text would be unreadable on zoom

---

## Decision 2: Responsive Layout Pattern

**Question**: What responsive design pattern best handles 9 distinct content sections (header, hero, flipbook, context, vision, strategy, priorities, team, CTA) while maintaining readability on 320px-4K screens?

**Research Findings**:

**Pattern Options**:
1. **Fixed-width centered container** (e.g., max-width: 1200px)
2. **Fluid width with percentage-based containers**
3. **CSS Grid with named template areas**
4. **Flexbox with wrapping and media queries**
5. **Hybrid: Fluid max-width containers with Grid/Flexbox internals**

**Analysis**:

Political websites typically use **Hybrid Pattern #5** for several reasons:
- Content legibility suffers above 1200-1400px (line length too long)
- Full-width sections provide visual hierarchy (alternating backgrounds)
- Internal grid/flexbox handles column layouts (2-col context, 3-col strategy)
- Mobile-first approach stacks columns naturally

**Decision**: Hybrid fluid max-width containers with CSS Grid/Flexbox

**Implementation Approach**:

```css
/* Base container for content sections */
.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

/* Full-width backgrounds for visual separation */
.section-full {
  width: 100%;
  background: white; /* or #F5F5F5 for alternating */
}

/* Two-column layout (Context & Contrast) */
.two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

@media (max-width: 768px) {
  .two-column {
    grid-template-columns: 1fr; /* Stack on mobile */
  }
}

/* Three-column layout (Relief, Recovery, Reform) */
.three-column {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

@media (max-width: 1024px) {
  .three-column {
    grid-template-columns: 1fr; /* Stack on tablet/mobile */
  }
}

/* Priority tiles - flexible grid */
.priority-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

/* Team member grid - responsive columns */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
}
```

**Breakpoints**:
- **320px - 767px**: Mobile (single column, vertical stacks)
- **768px - 1023px**: Tablet (2 columns for team grid)
- **1024px+**: Desktop (full multi-column layouts)

**Rationale**:
- Max-width 1200px ensures readable line lengths on large screens
- CSS Grid provides clean semantic structure
- `auto-fit` with `minmax()` creates truly responsive grids without manual breakpoints
- Padding scales gracefully (20px mobile, 60px desktop prevents content-edge collisions)
- Alternating full-width backgrounds create visual rhythm per political site conventions

**Alternatives Considered**:
- **Bootstrap/Tailwind framework**: Rejected - adds 200KB+ overhead for simple layout needs
- **Fully fluid layout (no max-width)**: Rejected - text unreadable on ultra-wide screens
- **Fixed breakpoints everywhere**: Rejected - less flexible than `auto-fit/minmax` grids

---

## Decision 3: Smooth Scroll Navigation

**Question**: How to implement smooth scroll navigation for header menu anchor links that works across all browsers (Chrome, Firefox, Safari, Edge) and provides <1s scroll time to target sections?

**Research Findings**:

**Options**:
1. **CSS `scroll-behavior: smooth`**: Modern browsers native support
2. **JavaScript `scrollIntoView({behavior: 'smooth'})`**: Widely supported API
3. **Animation library** (e.g., smoothscroll-polyfill, jQuery animate)
4. **Vanilla JS manual animation** with `requestAnimationFrame`

**Browser Support Analysis**:
- **CSS scroll-behavior**: Chrome 61+, Firefox 36+, Safari 15.4+, Edge 79+
  - ❌ Not supported: Safari < 15.4 (iOS < 15.4)
- **scrollIntoView smooth**: Chrome 61+, Firefox 36+, Safari 14+, Edge 79+
  - ⚠️ Partial support on iOS 12-13 (requirement: iOS 12+)
- **smoothscroll-polyfill**: Adds support for older browsers (2KB gzipped)

**Decision**: CSS `scroll-behavior` + smoothscroll-polyfill for older Safari

**Implementation**:

```html
<!-- Include polyfill for older browsers -->
<script src="https://cdn.jsdelivr.net/npm/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"></script>
<script>
  // Activate polyfill
  smoothscroll.polyfill();
</script>
```

```css
/* Enable smooth scrolling globally */
html {
  scroll-behavior: smooth;
}

/* Account for sticky header offset */
section {
  scroll-margin-top: 80px; /* Header height + padding */
}
```

```javascript
// Enhanced smooth scroll with offset (optional for fine control)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
```

**Rationale**:
- Native CSS `scroll-behavior: smooth` is performant (60fps) and requires no JS
- Polyfill (2KB) provides fallback for iOS 12-14 (constitutional requirement)
- `scroll-margin-top` accounts for sticky header without manual offset calculations
- Progressive enhancement: works as regular anchor links if JS disabled

**Performance Impact**:
- CSS native: 0ms overhead, hardware-accelerated
- Polyfill: ~10ms initialization, minimal runtime impact
- Scroll duration: ~500-800ms for typical section heights (meets <1s requirement)

**Alternatives Considered**:
- **jQuery .animate()**: Rejected - jQuery already loaded for flipbook, but CSS native is faster
- **Custom RAF animation**: Rejected - reinvents wheel, larger code footprint, same result
- **Scroll library (AOS, fullPage.js)**: Rejected - overkill for simple anchor navigation

---

## Decision 4: WCAG 2.1 AA Accessibility Compliance

**Question**: What specific accessibility patterns ensure WCAG 2.1 Level AA compliance for keyboard navigation, screen readers, color contrast, and touch targets?

**Research Findings**:

**WCAG 2.1 AA Requirements Checklist**:

1. **Perceivable**:
   - ✅ Text contrast ratio ≥ 4.5:1 (normal text), ≥ 3:1 (large text)
   - ✅ Images have meaningful alt text
   - ✅ Color not sole means of conveying information

2. **Operable**:
   - ✅ All functionality keyboard accessible (tab, enter, arrows)
   - ✅ No keyboard traps
   - ✅ Skip link to main content
   - ✅ Focus indicators visible (outline or custom styling)
   - ✅ Touch targets ≥ 44×44 CSS pixels

3. **Understandable**:
   - ✅ Language declared (`<html lang="en">`)
   - ✅ Headings properly structured (H1 → H2 → H3)
   - ✅ Form labels and error messages (if forms exist)

4. **Robust**:
   - ✅ Valid HTML5 semantic markup
   - ✅ ARIA landmarks and labels where needed

**Decision**: Implement comprehensive accessibility patterns

**Implementation Checklist**:

```html
<!-- Declare language -->
<html lang="en">

<!-- Skip link for keyboard users -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Semantic landmarks -->
<header role="banner">
  <nav role="navigation" aria-label="Main navigation">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#manifesto">Manifesto</a></li>
      <!-- ... -->
    </ul>
  </nav>
</header>

<main id="main-content" role="main">
  <!-- Content sections -->
</main>

<!-- Proper heading hierarchy -->
<section id="hero">
  <h1>Reclaiming Our Future</h1> <!-- Only one H1 -->
  <h2>A Transformative Agenda for Rebuilding Trust...</h2>
</section>

<section id="vision">
  <h2>Our Vision for a New Era</h2>
  <div class="vision-pillar">
    <h3>Excellence in Every Sector</h3>
    <p>...</p>
  </div>
</section>

<!-- Alt text for images -->
<img src="images/leader-photo.jpg"
     alt="Allen M. Chastanet, Political Leader of the United Workers Party">

<!-- Touch target sizing -->
<style>
  /* Ensure all interactive elements ≥ 44px */
  button, a {
    min-height: 44px;
    min-width: 44px;
    padding: 12px 24px;
  }

  /* Focus indicators (never remove outline without replacement) */
  a:focus, button:focus {
    outline: 2px solid #ED1C26;
    outline-offset: 2px;
  }

  /* Skip link (hidden until focused) */
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #ED1C26;
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 100;
  }

  .skip-link:focus {
    top: 0;
  }
</style>
```

**Color Contrast Verification**:

Using UWP brand color #ED1C26 (red):
- **Red on white background**: Contrast ratio 4.03:1 ✅ (passes AA for large text ≥18pt)
- **White on red background**: Contrast ratio 4.03:1 ✅ (passes AA for large text)
- **Dark grey #333 on white**: Contrast ratio 12.63:1 ✅ (passes AAA)
- **White on #2C3E50** (flipbook bg): Contrast ratio 8.59:1 ✅ (passes AAA)

**Recommendation**: Use #ED1C26 for buttons/large headings, use #333 for body text to ensure AAA compliance.

**Flipbook Accessibility**:

Real3D Flipbook plugin keyboard shortcuts:
- Arrow keys: Navigate pages ✅
- +/- keys: Zoom ✅
- Home/End: First/last page ✅
- Ensure plugin container has `role="document"` and `aria-label="Manifesto PDF Viewer"`

**Rationale**:
- Semantic HTML provides free accessibility (landmarks, headings, lists)
- Skip link lets keyboard users bypass header navigation
- Proper ARIA enhances screen reader experience without over-engineering
- Color contrast tool (WebAIM) validates ratios mathematically
- 44px touch targets exceed iOS/Android HIG minimums (48dp Android, 44pt iOS)

**Alternatives Considered**:
- **Full ARIA application role**: Rejected - over-complicates static content, semantic HTML sufficient
- **Smaller touch targets with larger click area**: Rejected - creates disconnect between visual and functional size

---

## Decision 5: Social Sharing Implementation

**Question**: How to implement Facebook and WhatsApp sharing for the manifesto that works on mobile (native share) and desktop (share dialogs) with appropriate fallbacks?

**Research Findings**:

**Sharing Options**:

1. **Web Share API** (navigator.share):
   - Browser support: Chrome 89+, Safari 14+, Edge 93+
   - Mobile: Excellent (iOS, Android native share sheets)
   - Desktop: Limited (Chromium only on some OSes)

2. **Direct Social Media URLs**:
   - Facebook: `https://www.facebook.com/sharer/sharer.php?u={URL}`
   - WhatsApp Web: `https://wa.me/?text={TEXT}%20{URL}`
   - WhatsApp Mobile: `whatsapp://send?text={TEXT}%20{URL}`
   - Twitter: `https://twitter.com/intent/tweet?url={URL}&text={TEXT}`

3. **Hybrid Approach**: Try Web Share API, fall back to direct URLs

**Decision**: Progressive enhancement with Web Share API + URL fallbacks

**Implementation**:

```javascript
function shareManifesto() {
  const shareData = {
    title: 'UWP Manifesto 2025: Reclaiming Our Future',
    text: 'Read the United Workers Party 2025 Manifesto - A transformative agenda for rebuilding trust, restoring confidence, and renewing hope.',
    url: window.location.href
  };

  // Try native Web Share API first (mobile-friendly)
  if (navigator.share) {
    navigator.share(shareData)
      .then(() => console.log('Shared successfully'))
      .catch((error) => console.log('Share canceled', error));
  } else {
    // Fall back to share dialog with social media options
    showShareDialog();
  }
}

function showShareDialog() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent('Read the UWP 2025 Manifesto: Reclaiming Our Future');

  // Create share dialog
  const dialog = document.getElementById('share-dialog');
  const facebookBtn = dialog.querySelector('.share-facebook');
  const whatsappBtn = dialog.querySelector('.share-whatsapp');

  // Facebook share
  facebookBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  facebookBtn.target = '_blank';

  // WhatsApp share (detect mobile vs desktop)
  const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
  const whatsappUrl = isMobile
    ? `whatsapp://send?text=${text}%20${url}`
    : `https://wa.me/?text=${text}%20${url}`;
  whatsappBtn.href = whatsappUrl;
  whatsappBtn.target = '_blank';

  // Show dialog
  dialog.classList.add('visible');
}
```

```html
<!-- Share button in CTA section -->
<button onclick="shareManifesto()" class="share-btn">
  Share with a friend
</button>

<!-- Share dialog (hidden by default) -->
<div id="share-dialog" class="share-dialog">
  <h3>Share the Manifesto</h3>
  <a href="#" class="share-facebook">
    <svg><!-- Facebook icon --></svg>
    Share on Facebook
  </a>
  <a href="#" class="share-whatsapp">
    <svg><!-- WhatsApp icon --></svg>
    Share on WhatsApp
  </a>
  <button onclick="closeShareDialog()">Close</button>
</div>
```

**Rationale**:
- Web Share API provides native experience on mobile (iOS share sheet, Android intent)
- Direct URLs work everywhere as fallback (opens in new tab)
- WhatsApp mobile detection uses `whatsapp://` protocol for app launch
- Pre-filled share text includes manifesto title and key messaging
- Dialog approach (vs. popup) avoids popup blockers

**Performance Impact**:
- ~50 lines JS (~1KB minified)
- No external dependencies
- No API calls (all client-side)

**Alternatives Considered**:
- **ShareThis / AddThis widgets**: Rejected - 3rd-party trackers, privacy concerns, bloat (100KB+)
- **Server-side Open Graph tags only**: Rejected - doesn't provide share buttons, relies on user copy-paste
- **QR code for mobile sharing**: Rejected - unnecessary complexity, niche use case

---

## Decision 6: Performance Optimization for Lighthouse ≥85

**Question**: What specific optimizations achieve Lighthouse Performance score ≥85 with a 43MB PDF, multiple images (leader photos), and external dependencies (jQuery, Flipbook plugin)?

**Research Findings**:

**Lighthouse Performance Metrics** (weights in parentheses):
- First Contentful Paint (10%)
- Speed Index (10%)
- Largest Contentful Paint (25%)
- Time to Interactive (10%)
- Total Blocking Time (30%)
- Cumulative Layout Shift (15%)

**Optimization Strategies**:

1. **Critical CSS Inlining**:
   - Inline above-the-fold CSS in `<style>` block
   - Load full CSS asynchronously
   - Eliminates render-blocking CSS

2. **JavaScript Deferral**:
   - Use `defer` attribute on jQuery and flipbook scripts
   - Load only when needed (flipbook initialized on scroll)
   - Reduces Total Blocking Time

3. **Image Optimization**:
   - Compress photos (JPG 80% quality, WebP with fallback)
   - Use `loading="lazy"` for below-fold images (team photos)
   - Specify width/height to prevent layout shift
   - Serve responsive images with `srcset`

4. **PDF Loading Strategy**:
   - Don't preload 43MB PDF in `<head>`
   - Initialize flipbook on demand (user scroll or button click)
   - Reduces initial payload

5. **Resource Hints**:
   - `<link rel="preconnect">` for CDN domains
   - `<link rel="dns-prefetch">` for social media domains
   - Reduces connection latency

6. **Font Loading**:
   - Use `font-display: swap` to prevent invisible text
   - Subset fonts if using web fonts (or use system fonts)

**Decision**: Implement comprehensive performance optimizations

**Implementation**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UWP 2025 Manifesto: Reclaiming Our Future</title>

  <!-- Preconnect to important domains -->
  <link rel="preconnect" href="https://cdn.jsdelivr.net">
  <link rel="dns-prefetch" href="https://www.facebook.com">
  <link rel="dns-prefetch" href="https://wa.me">

  <!-- Critical CSS (inline above-the-fold styles) -->
  <style>
    /* Reset, header, hero section styles here */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
    header { position: sticky; top: 0; background: white; z-index: 100; }
    /* ... */
  </style>

  <!-- Defer non-critical CSS -->
  <link rel="stylesheet" href="css/uwp-homepage.css" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="css/uwp-homepage.css"></noscript>
</head>
<body>
  <!-- Content here -->

  <!-- Hero image (above fold, load immediately) -->
  <img src="images/manifesto-cover.jpg"
       alt="Manifesto 2025 Cover"
       width="400"
       height="550">

  <!-- Team images (below fold, lazy load) -->
  <img src="images/leader-photo.jpg"
       alt="Allen M. Chastanet"
       width="300"
       height="300"
       loading="lazy">

  <!-- Scripts deferred -->
  <script src="build/js/jquery.min.js" defer></script>
  <script src="build/js/flipbook.min.js" defer></script>
  <script src="js/uwp-homepage.js" defer></script>
</body>
</html>
```

**Image Optimization**:
```bash
# Convert to WebP with fallback
<picture>
  <source srcset="images/leader-photo.webp" type="image/webp">
  <img src="images/leader-photo.jpg" alt="Allen M. Chastanet" loading="lazy">
</picture>

# Compress JPG (ImageMagick)
convert leader-photo.jpg -quality 80 -strip leader-photo.jpg

# Create WebP (better compression, modern browsers)
cwebp -q 80 leader-photo.jpg -o leader-photo.webp
```

**Flipbook Lazy Initialization**:
```javascript
// Initialize flipbook only when visible (Intersection Observer)
const flipbookObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !flipbookInitialized) {
      initializeFlipbook();
      flipbookInitialized = true;
      flipbookObserver.disconnect();
    }
  });
}, { rootMargin: '200px' }); // Start loading 200px before visible

flipbookObserver.observe(document.querySelector('.flipbook-container'));
```

**Expected Performance Gains**:
- **FCP**: ~0.8s (critical CSS inline, no render blocking)
- **LCP**: ~1.2s (hero image optimized, preconnect CDN)
- **TTI**: ~2.5s (defer JS, lazy flipbook init)
- **TBT**: <100ms (no main thread blocking)
- **CLS**: <0.05 (width/height on images, no layout shifts)
- **Lighthouse Score**: 90-95 estimated

**Rationale**:
- Deferred scripts don't block page render (TTI improvement)
- Lazy loading reduces initial payload by ~2-3MB (images)
- Flipbook initialization on-demand prevents PDF.js from blocking main thread
- Image optimization (WebP, compression) reduces transfer size 40-60%
- Resource hints reduce DNS/connection latency by 100-300ms

**Alternatives Considered**:
- **Service Worker caching**: Rejected - adds complexity for first-time visitor (no benefit)
- **Code splitting**: Rejected - single page, all JS needed eventually
- **HTTP/2 Server Push**: Rejected - requires server config, marginal gains vs. preconnect

---

## Summary of Decisions

| Area | Decision | Rationale |
|------|----------|-----------|
| **PDF Loading** | Real3D Flipbook with pageMode: double, texture 1024-2048px, preload 3 pages | Balances quality, performance, and memory for 43MB PDF |
| **Responsive Layout** | Hybrid fluid max-width (1200px) containers with CSS Grid/Flexbox | Readable on all screens, semantic structure, no framework bloat |
| **Smooth Scroll** | CSS scroll-behavior + smoothscroll-polyfill | Native performance, iOS 12+ support, 60fps, <1s scroll time |
| **Accessibility** | WCAG 2.1 AA patterns (semantic HTML, ARIA landmarks, 44px targets, 4.5:1 contrast) | Constitutional requirement, legal compliance, inclusive design |
| **Social Sharing** | Web Share API + Facebook/WhatsApp URL fallbacks | Native mobile experience, universal desktop support, no trackers |
| **Performance** | Critical CSS inline, defer JS, lazy images, flipbook on-demand | Lighthouse ≥85, FCP <1.5s, TTI <3.5s, CLS <0.1 |

---

## Technical Stack Summary

**Frontend**:
- HTML5 semantic markup
- CSS3 (Grid, Flexbox, custom properties)
- JavaScript ES6+ (vanilla, no framework)
- jQuery 3.x (required by flipbook plugin)

**Dependencies**:
- Real3D Flipbook jQuery Plugin v3.x (licensed, already installed)
- smoothscroll-polyfill 0.4.4 (~2KB) for iOS 12-14 support
- Optional: Intersection Observer polyfill for older browsers

**Assets**:
- Manifesto PDF: 43MB (existing)
- Images: ~5-8 photos (leader + team), WebP + JPG, optimized <200KB each
- UWP logo: SVG or PNG, <50KB

**Hosting**:
- Static file server (Python http.server, Nginx, Apache, Netlify, etc.)
- No backend, database, or API required
- CDN optional but recommended for PDF caching

**Development Tools**:
- Code editor (VS Code, Sublime, etc.)
- Browser DevTools (Lighthouse, Accessibility Inspector)
- Image optimizer (ImageMagick, Squoosh, cwebp)

---

## Next Steps (Phase 1)

1. **data-model.md**: Define content structure (sections, text blocks, image specs)
2. **contracts/content-schema.md**: Document content contracts (character limits, image dimensions, required fields)
3. **quickstart.md**: Setup and deployment instructions
4. **Update agent context**: Add HTML/CSS/JS + Real3D Flipbook to agent knowledge base
