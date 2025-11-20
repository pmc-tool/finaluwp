import Hero from './components/Hero'
import Flipbook from './components/Flipbook'
import ManifestoSummary from './components/ManifestoSummary'
import Vision from './components/Vision'
import Strategy from './components/Strategy'
import Results from './components/Results'
import PriorityAreas from './components/PriorityAreas'
import Leadership from './components/Leadership'
import CTA from './components/CTA'
import Section from './components/ui/Section'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Background Image & Glassmorphism Card */}
      <Hero />

      {/* Manifesto Flipbook Section - Full Screen */}
      <Flipbook />

      {/* Manifesto Summary - 6 Key Commitments */}
      <ManifestoSummary />

      {/* Vision Section - Our Vision & Contrast */}
      <Section id="vision" background="light">
        <Vision />
      </Section>

      {/* Strategy Section - 3 Strategic Objectives */}
      <Strategy />

      {/* Results Section - Proven Track Record */}
      <Section id="results" background="light">
        <Results />
      </Section>

      {/* Priority Policy Areas - 6 Key Areas */}
      <PriorityAreas />

      {/* Leadership Team Section */}
      <Section id="leadership" background="light">
        <Leadership />
      </Section>

      {/* Call to Action - Get Involved */}
      <CTA />
    </main>
  )
}
