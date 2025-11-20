# UWP 2025 Manifesto Homepage

A modern, responsive website for the United Workers Party 2025 Manifesto, built with Next.js 14 and Tailwind CSS.

## Overview

This project is the official digital manifesto for the United Workers Party's 2025 campaign. It features an interactive 3D PDF flipbook, comprehensive policy information, leadership profiles, and a clear vision for Saint Lucia's future.

## Tech Stack

- **Framework**: Next.js 14.2.18 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.4.1
- **PDF Viewer**: Real3D Flipbook jQuery Plugin
- **Deployment**: Static Export

## Features

### Core Functionality
- ✅ Interactive 3D PDF flipbook with page flip animations
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Fixed header navigation with smooth scroll
- ✅ Mobile-friendly hamburger menu
- ✅ Scroll-to-top button
- ✅ SEO optimized with Open Graph and Twitter cards
- ✅ Loading states and error boundaries
- ✅ Custom 404 page

### Content Sections
1. **Hero Section** - Background image with glassmorphism card
2. **Interactive Flipbook** - Full PDF manifesto viewer
3. **Manifesto Summary** - 6 key commitments
4. **Vision** - Party vision and contrast with current reality
5. **Strategy** - 3 strategic objectives
6. **Track Record** - Proven achievements and statistics
7. **Priority Areas** - 6 policy focus areas
8. **Leadership** - Team profiles and bios
9. **Call to Action** - Get involved section with social links

## Project Structure

```
uwp-nextjs/
├── app/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   ├── icons/           # SVG icon components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Site footer
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Flipbook.tsx     # PDF flipbook viewer
│   │   ├── ManifestoSummary.tsx
│   │   ├── Vision.tsx
│   │   ├── Strategy.tsx
│   │   ├── Results.tsx
│   │   ├── PriorityAreas.tsx
│   │   ├── Leadership.tsx
│   │   ├── CTA.tsx
│   │   └── ScrollToTop.tsx
│   ├── layout.tsx           # Root layout
│   ├── page.tsx            # Homepage
│   ├── loading.tsx         # Loading state
│   ├── error.tsx           # Error boundary
│   ├── not-found.tsx       # 404 page
│   └── globals.css         # Global styles
├── lib/
│   ├── types.ts            # TypeScript interfaces
│   ├── utils.ts            # Utility functions
│   └── flipbook-loader.ts  # jQuery plugin wrapper
├── public/
│   ├── images/             # Images and logos
│   ├── flipbook/           # Flipbook plugin files
│   └── pdf/                # Manifesto PDF
├── next.config.js
├── tailwind.config.ts
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 18.17.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd uwp-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

1. Create an optimized production build:
```bash
npm run build
```

2. The static files will be generated in the `out/` directory

3. Test the production build locally:
```bash
npm run start
```

## Configuration

### Tailwind CSS Theme

Brand colors are configured in `tailwind.config.ts`:

```typescript
colors: {
  'uwp-red': '#ED1C26',
  'dark-grey': '#333333',
  'light-grey': '#F5F5F5',
  'medium-grey': '#E8E8E8',
  'flipbook-bg': '#2C3E50',
}
```

### Metadata and SEO

Update site metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://uwpsaintlucia.org'),
  title: 'UWP 2025 Manifesto: Reclaiming Our Future',
  // ... other metadata
}
```

## Deployment

### Static Export

This project is configured for static export, making it easy to deploy to any static hosting service:

1. Build the project:
```bash
npm run build
```

2. The `out/` directory contains the complete static site

3. Deploy to your hosting service:
   - Netlify: Drag and drop the `out/` folder
   - Vercel: Connect your Git repository
   - GitHub Pages: Upload to gh-pages branch
   - Any static host: Upload contents of `out/` directory

### Environment Variables

For production deployment, update:
- `metadataBase` in `app/layout.tsx` to your production URL
- Social media links in Footer and CTA components
- Contact information in Footer component

## Customization

### Adding New Sections

1. Create a new component in `app/components/`
2. Import and add to `app/page.tsx`
3. Optionally wrap in a `<Section>` component for consistent styling

### Updating Content

- **Leadership profiles**: Edit `app/components/Leadership.tsx`
- **Policy areas**: Edit `app/components/PriorityAreas.tsx`
- **Strategy objectives**: Edit `app/components/Strategy.tsx`
- **Statistics**: Edit `app/components/Results.tsx`

### Styling

- Global styles: `app/globals.css`
- Tailwind utilities: Use in component className props
- Component-specific: Use Tailwind classes or CSS modules

## jQuery Integration

The Real3D Flipbook plugin requires jQuery. Integration is handled via:

1. **Script Loading**: jQuery and flipbook loaded in `app/layout.tsx`
2. **Client Component**: Flipbook component uses `'use client'` directive
3. **Wrapper Function**: `lib/flipbook-loader.ts` wraps jQuery calls
4. **Type Declarations**: Window jQuery types in `lib/types.ts`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance

- **Lighthouse Score**: 90+ across all metrics
- **First Load JS**: ~94 KB
- **Static Generation**: All pages pre-rendered
- **Image Optimization**: Next.js Image component (unoptimized for static export)

## License

Copyright © 2025 United Workers Party. All rights reserved.

## Contact

- **Website**: https://uwpsaintlucia.org
- **Email**: info@uwpsaintlucia.org
- **Facebook**: /uwpsaintlucia
- **Twitter**: @uwpsaintlucia
- **Instagram**: @uwpsaintlucia

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- PDF viewer powered by [Real3D Flipbook](https://codecanyon.net/item/real3d-flipbook-jquery-plugin/6942587)
