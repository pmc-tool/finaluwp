# Quickstart Guide: UWP 2025 Manifesto Homepage

**Feature**: `001-uwp-homepage`
**Date**: 2025-11-19
**Target Audience**: Developers, designers, UWP communications team

## Overview

This guide walks you through setting up, developing, testing, and deploying the United Workers Party 2025 Manifesto interactive homepage. The entire process takes approximately 2-4 hours for initial setup and development.

**What you'll build**: A single-page responsive website featuring an interactive 3D flipbook PDF viewer, content sections (hero, vision, strategy, priorities, team), and social sharing functionality.

**Tech stack**: HTML5, CSS3, JavaScript (ES6+), jQuery, Real3D Flipbook plugin

---

## Prerequisites

### Required Software
- **Web browser**: Chrome, Firefox, Safari, or Edge (latest version)
- **Text editor**: VS Code, Sublime Text, Atom, or similar
- **Python 3** (for local development server) – already installed on macOS
- **Git** (for version control) – already installed

### Required Assets

Gather these assets before starting:

| Asset | Specification | Provider |
|-------|---------------|----------|
| Manifesto PDF | 43MB PDF file | Already at `examples/pdf/manifesto.pdf` ✅ |
| UWP Logo | PNG/SVG, ≤50KB | UWP Communications |
| Manifesto Cover Mockup | 800×1100px JPG, ≤200KB | Design team |
| Leader Photo | 600×600px JPG, ≤150KB | UWP Communications |
| Team Photos (4-6) | 400×400px JPG, ≤100KB each | UWP Communications |

### Content Preparation

Review and approve all text content (see `data-model.md`):
- [ ] Hero section text (headline, paragraph, CTAs)
- [ ] Seven SOS Initiatives (exact wording)
- [ ] Vision pillars (4 items)
- [ ] Priority area summaries (6-8 tiles)
- [ ] Leader message (2-3 sentences)
- [ ] Team member bios (4-6 people)

---

## Step 1: Project Setup (10 minutes)

### 1.1 Verify Repository State

```bash
# Navigate to project root
cd /Users/nowshidalamsayem/Downloads/codecanyon-6meStT3R-real3d-flipbook-jquery-plugin

# Confirm you're on the feature branch
git branch
# Should show: * 001-uwp-homepage

# Check existing files
ls -la examples/
ls -la build/
```

### 1.2 Create Directory Structure

```bash
# Create directories for new files
mkdir -p examples/css
mkdir -p examples/js
mkdir -p examples/images

# Verify plugin files exist
ls build/js/flipbook.min.js
ls build/css/flipbook.min.css
# Both should be present ✅
```

### 1.3 Verify PDF Exists

```bash
# Check manifesto PDF
ls -lh examples/pdf/manifesto.pdf
# Should show file size ~43MB
```

---

## Step 2: Asset Preparation (30 minutes)

### 2.1 Optimize Images

**For macOS** (using built-in tools + optional ImageMagick):

```bash
# Install ImageMagick (optional, for WebP conversion)
brew install imagemagick webp

# Optimize JPG images (80% quality)
# Example for leader photo:
convert examples/images/leader-photo-original.jpg \
  -quality 80 \
  -strip \
  -resize 600x600^ \
  -gravity center \
  -extent 600x600 \
  examples/images/leader-photo.jpg

# Create WebP version (better compression)
cwebp -q 80 examples/images/leader-photo.jpg \
  -o examples/images/leader-photo.webp

# Repeat for all team photos (400×400px)
# Repeat for manifesto cover (800×1100px)
```

**Without ImageMagick** (use online tools):
- JPG compression: https://squoosh.app/ (select "MozJPEG", quality 80)
- WebP conversion: https://squoosh.app/ (select "WebP", quality 80)
- Resize: Preview app (Tools → Adjust Size)

### 2.2 Asset Checklist

Place all optimized assets in `examples/images/`:

```
examples/images/
├── uwp-logo.png (or .svg)
├── manifesto-cover.jpg
├── manifesto-cover.webp
├── leader-photo.jpg
├── leader-photo.webp
├── team-member-1.jpg
├── team-member-1.webp
├── team-member-2.jpg
├── team-member-2.webp
... (repeat for 4-6 team members)
```

---

## Step 3: Create HTML File (60 minutes)

### 3.1 Create Base HTML

Create `examples/uwp-homepage.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="United Workers Party 2025 Manifesto: Reclaiming Our Future - A transformative agenda for rebuilding trust, restoring confidence, and renewing hope.">
  <title>UWP 2025 Manifesto: Reclaiming Our Future</title>

  <!-- Preconnect for performance -->
  <link rel="preconnect" href="https://cdn.jsdelivr.net">

  <!-- Real3D Flipbook CSS -->
  <link rel="stylesheet" href="../build/css/flipbook.min.css">

  <!-- Custom CSS (will create next) -->
  <link rel="stylesheet" href="css/uwp-homepage.css">
</head>
<body>
  <!-- Skip link for accessibility -->
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <!-- Header Navigation (Sticky) -->
  <header id="header" role="banner">
    <!-- Add header content -->
  </header>

  <!-- Main Content -->
  <main id="main-content" role="main">
    <!-- Hero Section -->
    <section id="home" class="hero-section">
      <!-- Add hero content -->
    </section>

    <!-- Flipbook Section -->
    <section id="manifesto" class="flipbook-section">
      <!-- Add flipbook content -->
    </section>

    <!-- Context & Contrast Section -->
    <section id="context" class="context-section">
      <!-- Add context content -->
    </section>

    <!-- Vision Section -->
    <section id="vision" class="vision-section">
      <!-- Add vision content -->
    </section>

    <!-- Strategy Section -->
    <section id="strategy" class="strategy-section">
      <!-- Add strategy content (Relief, Recovery, Reform) -->
    </section>

    <!-- Priority Areas Section -->
    <section id="priorities" class="priorities-section">
      <!-- Add priority tiles -->
    </section>

    <!-- Team & Leadership Section -->
    <section id="leadership" class="team-section">
      <!-- Add team content -->
    </section>

    <!-- Call-to-Action Section -->
    <section id="cta" class="cta-section">
      <!-- Add CTA content -->
    </section>
  </main>

  <!-- Scripts -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="../build/js/flipbook.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"></script>
  <script src="js/uwp-homepage.js"></script>
</body>
</html>
```

### 3.2 Populate Content

For each section, add content from `data-model.md`. See the full HTML example in the `/speckit.implement` phase or reference the data model for exact text.

**Key sections to fill**:
1. Header: Logo + 5 menu items
2. Hero: Headline, subtitle, paragraph, 2 CTAs, cover image
3. Flipbook: Heading, intro, flipbook container, summary bullets
4. Context: Two-column layout with stat cards
5. Vision: 4 pillars in grid
6. Strategy: 3 columns (Relief with 7 SOS items, Recovery, Reform)
7. Priorities: 6-8 tiles in responsive grid
8. Team: Leader profile + team grid
9. CTA: Headline, subtext, buttons with red background

---

## Step 4: Create CSS File (45 minutes)

Create `examples/css/uwp-homepage.css`:

```css
/* ===== CSS RESET & BASE STYLES ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  background: #fff;
}

/* ===== SKIP LINK (Accessibility) ===== */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #ED1C26;
  color: white;
  padding: 8px 12px;
  text-decoration: none;
  z-index: 1000;
}

.skip-link:focus {
  top: 0;
}

/* ===== HEADER (Sticky Navigation) ===== */
header {
  position: sticky;
  top: 0;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 100;
  padding: 20px 0;
}

header .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header nav ul {
  display: flex;
  list-style: none;
  gap: 30px;
}

header nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  min-height: 44px;
  display: flex;
  align-items: center;
  padding: 10px 0;
  position: relative;
}

header nav a:hover::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #ED1C26;
}

header nav a:focus {
  outline: 2px solid #ED1C26;
  outline-offset: 2px;
}

/* ===== SECTION CONTAINERS ===== */
section {
  padding: 60px 20px;
  scroll-margin-top: 80px; /* Account for sticky header */
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Alternating backgrounds */
section:nth-child(even) {
  background: #F5F5F5;
}

/* ===== HERO SECTION ===== */
.hero-section {
  padding: 100px 20px;
  background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
}

.hero-section .container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-section h1 {
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #ED1C26;
  margin-bottom: 20px;
}

.hero-section h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
}

.hero-section .cta-primary {
  display: inline-block;
  background: #ED1C26;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 4px;
  min-height: 48px;
  margin-right: 20px;
}

.hero-section .cta-primary:hover {
  background: #c01820;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
  header nav ul {
    flex-direction: column;
    gap: 10px;
  }

  .hero-section .container,
  .two-column,
  .three-column {
    grid-template-columns: 1fr;
  }

  .hero-section h1 {
    font-size: 2rem;
  }
}

/* ... Add more section-specific styles (see research.md Decision 2 for full layout patterns) ... */
```

**Complete CSS includes**:
- Flipbook section styling
- Two-column Context layout
- Vision pillar grid
- Three-column Strategy layout
- Priority tiles grid
- Team member grid
- CTA section with red background
- Responsive breakpoints (320px, 768px, 1024px)

---

## Step 5: Create JavaScript File (30 minutes)

Create `examples/js/uwp-homepage.js`:

```javascript
// ===== SMOOTH SCROLL POLYFILL =====
smoothscroll.polyfill();

// ===== FLIPBOOK INITIALIZATION =====
$(document).ready(function() {
  // Initialize Real3D Flipbook
  $('.flipbook-container').flipBook({
    pdfUrl: 'pdf/manifesto.pdf',
    pageMode: 'double',
    singlePageMode: 'zoom',
    pageTextureSizeMin: 1024,
    pageTextureSizeMax: 2048,
    preloadPages: 3,
    backgroundColor: '#2C3E50',
    btnDownloadURL: 'pdf/manifesto.pdf',
    btnPrint: {enabled: true},
    btnDownload: {enabled: true},
    btnShare: {enabled: true},
    btnSearch: {enabled: true},
    btnToc: {enabled: true},
    responsive: true,
    height: 600,
    mobileHeight: 400
  });
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
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

// ===== SOCIAL SHARING =====
function shareManifesto() {
  const shareData = {
    title: 'UWP Manifesto 2025: Reclaiming Our Future',
    text: 'Read the United Workers Party 2025 Manifesto - A transformative agenda for rebuilding trust, restoring confidence, and renewing hope.',
    url: window.location.href
  };

  // Try native Web Share API
  if (navigator.share) {
    navigator.share(shareData)
      .then(() => console.log('Shared successfully'))
      .catch((error) => console.log('Share canceled', error));
  } else {
    // Fallback: show share dialog
    showShareDialog();
  }
}

function showShareDialog() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent('Read the UWP 2025 Manifesto: Reclaiming Our Future');

  // Open share options (implementation depends on your dialog design)
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  const whatsappUrl = /Android|iPhone|iPad/i.test(navigator.userAgent)
    ? `whatsapp://send?text=${text}%20${url}`
    : `https://wa.me/?text=${text}%20${url}`;

  // Show custom dialog with these URLs
  alert(`Share on Facebook: ${facebookUrl}\nShare on WhatsApp: ${whatsappUrl}`);
  // Replace with proper dialog UI
}
```

---

## Step 6: Local Testing (20 minutes)

### 6.1 Start Development Server

```bash
# Navigate to project root
cd /Users/nowshidalamsayem/Downloads/codecanyon-6meStT3R-real3d-flipbook-jquery-plugin

# Start Python HTTP server
python3 -m http.server 8080

# Server should output:
# Serving HTTP on :: port 8080 (http://[::]:8080/) ...
```

### 6.2 Open in Browser

```
http://localhost:8080/examples/uwp-homepage.html
```

### 6.3 Manual Testing Checklist

**Visual Test**:
- [ ] Header sticky on scroll
- [ ] Hero section displays correctly (text + image)
- [ ] Flipbook loads and displays manifesto PDF
- [ ] All 9 sections visible and styled
- [ ] CTA section has red background

**Interaction Test**:
- [ ] Header menu items scroll to correct sections
- [ ] Hero CTAs scroll to manifesto and strategy
- [ ] Flipbook page flip works (click edges, arrow keys, swipe on mobile)
- [ ] Flipbook search function works (test "agriculture")
- [ ] Flipbook download button downloads PDF
- [ ] Share button opens native share or dialog

**Responsive Test**:
- [ ] Open DevTools (F12 → Toggle device toolbar)
- [ ] Test 320px (iPhone SE): No horizontal scroll, readable text
- [ ] Test 768px (iPad): Columns stack properly
- [ ] Test 1024px+ (Desktop): Full layout displays

---

## Step 7: Accessibility & Performance Testing (30 minutes)

### 7.1 Lighthouse Audit

```
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select: Performance, Accessibility, Best Practices, SEO
4. Click "Analyze page load"
5. Wait for report (~30 seconds)
```

**Target Scores**:
- Performance: ≥ 85 ✅
- Accessibility: ≥ 95 ✅
- Best Practices: ≥ 90
- SEO: ≥ 90

**Common Issues & Fixes**:

| Issue | Fix |
|-------|-----|
| Low Performance score | Optimize images (WebP), defer JS, inline critical CSS |
| Low Accessibility score | Add alt text, check contrast, test keyboard nav |
| Cumulative Layout Shift | Add width/height to images |
| Large Contentful Paint | Optimize hero image, preconnect CDN |

### 7.2 Keyboard Navigation Test

```
1. Click in address bar (reset focus)
2. Press Tab repeatedly
3. Verify:
   - Skip link appears on first Tab
   - Can navigate to all menu items
   - Can activate CTAs with Enter
   - Can navigate flipbook with arrows
   - Focus indicators visible (outline)
```

### 7.3 Screen Reader Test

**macOS (VoiceOver)**:
```
1. Press Cmd + F5 to enable VoiceOver
2. Navigate page with Cmd + Right Arrow
3. Verify:
   - Heading hierarchy announced (H1, H2, H3)
   - Image alt text read aloud
   - Landmarks announced (header, nav, main)
   - Seven SOS numbered list read in order
4. Press Cmd + F5 to disable
```

---

## Step 8: Cross-Browser Testing (30 minutes)

### 8.1 Desktop Browsers

Test on:
- [ ] **Chrome** (latest): All features work
- [ ] **Firefox** (latest): All features work
- [ ] **Safari** (latest): All features work
- [ ] **Edge** (latest): All features work

**Focus areas**:
- Flipbook rendering (PDF.js compatibility)
- Smooth scroll (Safari < 15.4 needs polyfill)
- Social sharing (Web Share API limited on desktop)

### 8.2 Mobile Devices

**iOS Testing** (iPhone/iPad):
```
1. Find your computer's local IP: ifconfig | grep "inet "
   Example: 192.168.1.100
2. On iPhone, open Safari: http://192.168.1.100:8080/examples/uwp-homepage.html
3. Test:
   - Touch navigation (swipe to flip pages)
   - Pinch-to-zoom on flipbook
   - No horizontal scrolling
   - Touch targets ≥44px (easy to tap)
```

**Android Testing**:
```
1. Use same local IP address as above
2. Open Chrome on Android
3. Test same features as iOS
```

---

## Step 9: Content Validation (20 minutes)

### 9.1 Political Accuracy Check

Verify against `contracts/content-schema.md`:

**Seven SOS Initiatives** (CRITICAL):
- [ ] All 7 initiatives present
- [ ] Numbered 1-7 (not bullets)
- [ ] Exact wording matches official platform:
  1. Remove 2.5% Health & Security Levy
  2. Reduce fuel prices
  3. Abolish dam dredging fee
  4. Free tertiary education at SALCC
  5. Reintroduce border control & expand K9
  6. Pensions & payments for banana farmers
  7. NHI coverage $75,000/person/year

**Leader Information**:
- [ ] Name spelled correctly: "Allen M. Chastanet"
- [ ] Title: "Political Leader, United Workers Party"
- [ ] Message themes: decency, progress, excellence

**Stat Cards** (Context & Contrast):
- [ ] Numbers verifiable ($45M, 74 schools, etc.)
- [ ] Dates accurate (2016-2021)

### 9.2 Spell Check

Run spell check on all text:
- Open HTML in text editor with spell check
- Or use online tool: https://www.grammarly.com/

---

## Step 10: Deployment Preparation (15 minutes)

### 10.1 Production Checklist

Before deploying to production:

**Files to include**:
```
examples/
├── uwp-homepage.html      ✅
├── css/
│   └── uwp-homepage.css   ✅
├── js/
│   └── uwp-homepage.js    ✅
├── images/
│   ├── uwp-logo.png       ✅
│   ├── manifesto-cover.*  ✅
│   ├── leader-photo.*     ✅
│   └── team-member-*.*    ✅
├── pdf/
│   └── manifesto.pdf      ✅
build/
├── css/
│   └── flipbook.min.css   ✅
└── js/
    └── flipbook.min.js    ✅
```

**Remove/exclude**:
- Source images (pre-optimization) in `assets-source/`
- Development notes or TODO files
- Git files (.git, .gitignore) if deploying separately

### 10.2 Minification (Optional but Recommended)

Minify CSS and JS for production:

```bash
# Install minifier (if not already installed)
npm install -g csso-cli uglify-js

# Minify CSS
csso examples/css/uwp-homepage.css -o examples/css/uwp-homepage.min.css

# Minify JS
uglifyjs examples/js/uwp-homepage.js -o examples/js/uwp-homepage.min.js -c -m

# Update HTML to use minified versions:
# <link rel="stylesheet" href="css/uwp-homepage.min.css">
# <script src="js/uwp-homepage.min.js"></script>
```

### 10.3 Final Lighthouse Audit

Run one more Lighthouse audit to confirm:
- Performance: ≥ 85
- Accessibility: ≥ 95
- Best Practices: ≥ 90
- SEO: ≥ 90

---

## Deployment Options

### Option 1: Static File Hosting (Recommended)

**Netlify** (Free tier, easy setup):
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=.

# Follow prompts to create new site
# URL will be: https://[random-name].netlify.app
```

**Custom Domain** (optional):
- Purchase domain (e.g., uwpmanifesto2025.com)
- Add DNS records in Netlify dashboard
- Enable HTTPS (automatic with Netlify)

### Option 2: GitHub Pages

```bash
# Create gh-pages branch
git checkout -b gh-pages

# Push to GitHub
git push origin gh-pages

# Enable GitHub Pages in repository settings
# URL: https://[username].github.io/[repo-name]/examples/uwp-homepage.html
```

### Option 3: Traditional Web Hosting

Upload files via FTP/SFTP to web host:
1. Connect to server (use FileZilla or similar)
2. Upload all files maintaining directory structure
3. Set homepage as index file or navigate to `/examples/uwp-homepage.html`

---

## Troubleshooting

### Issue: Flipbook Not Loading

**Symptoms**: Blank container where flipbook should be

**Solutions**:
1. Check browser console for errors (F12 → Console)
2. Verify jQuery loaded before flipbook.min.js
3. Confirm PDF path is correct (`pdf/manifesto.pdf`)
4. Test PDF directly: http://localhost:8080/examples/pdf/manifesto.pdf
5. Check flipbook container has class `.flipbook-container`

### Issue: Smooth Scroll Not Working on Safari

**Symptoms**: Clicking menu items jumps instead of smoothly scrolling

**Solutions**:
1. Verify smoothscroll-polyfill script loaded
2. Check `smoothscroll.polyfill()` called before DOM ready
3. Test Safari version (should work on 14+, polyfill needed for 12-14)

### Issue: Images Not Displaying

**Symptoms**: Broken image icons

**Solutions**:
1. Check file paths (relative to HTML file)
2. Verify images uploaded to `examples/images/`
3. Check file extensions match (`<img src="leader-photo.jpg">` needs `leader-photo.jpg`, not `.png`)
4. Test image URLs directly in browser

### Issue: Poor Lighthouse Performance Score

**Symptoms**: Score < 85

**Solutions**:
1. Optimize images (WebP format, 80% quality)
2. Defer JavaScript (add `defer` attribute to script tags)
3. Inline critical CSS (above-the-fold styles in `<style>` block)
4. Reduce PDF initial load (flipbook plugin handles this automatically)
5. Add resource hints (`<link rel="preconnect">`)

### Issue: Horizontal Scroll on Mobile

**Symptoms**: Can swipe left/right, content doesn't fit screen

**Solutions**:
1. Add `overflow-x: hidden` to body
2. Check for fixed-width elements (use `max-width: 100%` instead)
3. Test all images have `max-width: 100%; height: auto;`
4. Verify no negative margins pushing content outside viewport

---

## Maintenance & Updates

### Updating Content

**Text changes**:
1. Edit `examples/uwp-homepage.html` directly
2. Find relevant section
3. Update text content
4. Save and test locally
5. Re-deploy

**Image changes**:
1. Replace file in `examples/images/` (keep same filename)
2. Or update `src` attribute in HTML if new filename
3. Optimize new image (WebP + JPG, correct dimensions)
4. Clear browser cache to see changes
5. Re-deploy

**PDF update**:
1. Replace `examples/pdf/manifesto.pdf`
2. Keep filename same (flipbook config references it)
3. Test flipbook loads new version
4. Re-deploy

### Version Control

**Commit changes**:
```bash
git add examples/uwp-homepage.html examples/css/ examples/js/ examples/images/
git commit -m "Update homepage: [describe changes]"
git push origin 001-uwp-homepage
```

**Tag releases**:
```bash
# Tag major milestones
git tag -a v1.0.0 -m "Initial homepage launch"
git push origin v1.0.0

# Later updates
git tag -a v1.1.0 -m "Update team member bios"
git push origin v1.1.0
```

---

## Support & Resources

**Documentation**:
- Feature Specification: `specs/001-uwp-homepage/spec.md`
- Data Model: `specs/001-uwp-homepage/data-model.md`
- Content Schema: `specs/001-uwp-homepage/contracts/content-schema.md`
- Research: `specs/001-uwp-homepage/research.md`
- Constitution: `.specify/memory/constitution.md`

**External Resources**:
- Real3D Flipbook Docs: `/documentation/` (in project)
- jQuery Docs: https://api.jquery.com/
- WCAG Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- Lighthouse: https://developers.google.com/web/tools/lighthouse

**Getting Help**:
- Review error messages in browser console (F12)
- Check this quickstart guide for troubleshooting section
- Refer to data-model.md for content structure questions
- Test against contracts/content-schema.md validation checklist

---

## Next Steps

After completing this guide:

1. **Review with stakeholders**: Show local version to UWP communications team for approval
2. **Address feedback**: Make content/design adjustments as needed
3. **Final testing**: Complete full validation checklist from `contracts/content-schema.md`
4. **Deploy to production**: Use deployment option that fits your infrastructure
5. **Monitor performance**: Run Lighthouse audits weekly, optimize as needed
6. **Update as needed**: Campaign content changes, new team members, policy updates

**Ready to build?** Start with Step 1 and work through sequentially. Each step builds on the previous one. Budget 2-4 hours for initial development, plus time for content gathering and stakeholder review.
