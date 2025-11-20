import { ReactNode } from 'react'

// jQuery and PDF.js window declaration
declare global {
  interface Window {
    jQuery: any
    $: any
    pdfjsLib: any
  }
}

// Header component
export interface HeaderProps {
  links: Array<{
    label: string
    href: string
  }>
}

// Hero component
export interface HeroProps {
  title: string
  subtitle: string
  description: string
  ctaPrimary: { text: string; href: string }
  ctaSecondary: { text: string; href: string }
  manifestoCard: {
    year: string
    title: string
    subtitle: string
    badge: string
  }
}

// Flipbook component
export interface FlipbookProps {
  pdfPath: string
  pdfSize: string
  instructions?: string
  downloadLabel?: string
}

// Vision component
export interface VisionPillar {
  icon: ReactNode
  title: string
  description: string
}

export interface VisionProps {
  heading: string
  intro: string
  pillars: VisionPillar[]
  quote: string
}

// Strategy component
export interface StrategyColumn {
  title: string
  subtitle: string
  items: string[]
  accent: 'red' | 'amber' | 'blue'
}

export interface StrategyProps {
  heading: string
  intro: string
  columns: [StrategyColumn, StrategyColumn, StrategyColumn]
}

// Priorities component
export interface PriorityTile {
  icon: ReactNode
  title: string
  description: string
  accent: 'red' | 'amber' | 'green' | 'teal' | 'purple' | 'pink' | 'blue' | 'dark-green'
}

export interface PrioritiesProps {
  heading: string
  tiles: PriorityTile[]
}

// Team component
export interface TeamMember {
  name: string
  role: string
  bio: string
  imagePath: string
}

export interface TeamProps {
  heading: string
  intro: string
  leader: TeamMember & { message: string }
  members: TeamMember[]
}

// CTA component
export interface CTAProps {
  heading: string
  subtext: string
  ctaManifesto: { text: string; href: string }
  shareLabel: string
}

// Commitment card (Manifesto Summary)
export interface Commitment {
  icon: ReactNode
  title: string
  description: string
}
