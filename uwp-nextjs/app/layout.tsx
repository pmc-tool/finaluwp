import type { Metadata } from 'next'
import Script from 'next/script'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://uwpsaintlucia.org'),
  title: 'UWP 2025 Manifesto: Reclaiming Our Future',
  description: 'United Workers Party 2025 Manifesto - A transformative agenda for rebuilding trust, restoring confidence, and renewing hope for Saint Lucia.',
  keywords: 'United Workers Party, UWP, Manifesto 2025, Saint Lucia, Politics, Allen Chastanet, Election, Government, Policy',
  authors: [{ name: 'United Workers Party' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://uwpsaintlucia.org',
    siteName: 'United Workers Party',
    title: 'UWP 2025 Manifesto: Reclaiming Our Future',
    description: 'A transformative agenda for rebuilding trust, restoring confidence, and renewing hope for Saint Lucia.',
    images: [
      {
        url: '/images/hero-background.jpg',
        width: 1200,
        height: 630,
        alt: 'UWP 2025 Manifesto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@uwpsaintlucia',
    creator: '@uwpsaintlucia',
    title: 'UWP 2025 Manifesto: Reclaiming Our Future',
    description: 'A transformative agenda for rebuilding trust, restoring confidence, and renewing hope for Saint Lucia.',
    images: ['/images/hero-background.jpg'],
  },
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#ED1C26',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* jQuery - Required for flipbook plugin */}
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        {/* PDF.js - Required for PDF rendering */}
        <Script
          src="/flipbook/js/libs/pdf.min.js"
          strategy="beforeInteractive"
        />
        {/* Flipbook PDF Service */}
        <Script
          src="/flipbook/js/flipbook.pdfservice.min.js"
          strategy="beforeInteractive"
        />
        {/* Flipbook JS */}
        <Script
          src="/flipbook/js/flipbook.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <Header />
        <div className="pt-[72px]">{children}</div>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
