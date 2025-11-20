'use client'

import { useRef } from 'react'
import Card from './ui/Card'
import ShieldIcon from './icons/Shield'
import HeartIcon from './icons/Heart'
import UsersIcon from './icons/Users'

export default function ManifestoSummary() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = container.querySelector('.commitment-card')?.clientWidth || 0
      const gap = 24 // gap-6 = 24px
      const scrollAmount = cardWidth + gap
      const newScrollPosition = container.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount)
      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      })
    }
  }
  const commitments = [
    {
      icon: <ShieldIcon className="w-6 h-6" />,
      title: 'Trust & Integrity',
      description: 'Rebuild trust and integrity in government.',
    },
    {
      icon: <HeartIcon className="w-6 h-6" />,
      title: 'Relief for Families',
      description: 'Deliver real relief to families through SOS initiatives.',
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: 'Safer Communities',
      description: 'Secure communities and restore public safety.',
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: 'A Modern Economy',
      description: 'Grow a diverse, modern economy — agriculture, tourism, digital, creative.',
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: 'National Investment',
      description: 'Invest in infrastructure, healthcare, and education.',
    },
    {
      icon: <UsersIcon className="w-6 h-6" />,
      title: 'People at the Centre',
      description: 'Put people—especially youth and vulnerable groups—at the centre of development.',
    },
  ]

  return (
    <div className="bg-[#FAFAFA] pt-16 pb-16 md:pt-20 md:pb-0 lg:pt-24 lg:pb-0 px-6 md:px-8 lg:px-10">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-10 pb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-dark-grey mb-3 relative inline-block pb-4">
            6 Key Commitments for Saint Lucia
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-uwp-red rounded"></span>
          </h3>
          <p className="hidden sm:block text-base md:text-lg text-gray-600 max-w-[700px] mx-auto mt-6 leading-relaxed">
            A clear, focused agenda built on trust, relief, safety, growth, investment, and people-first development.
          </p>
        </div>

        {/* Slider for Mobile, Grid for Desktop */}
        <div className="relative">
          {/* Navigation Buttons - Only visible on mobile */}
          <button
            onClick={() => scroll('left')}
            className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-uwp-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-uwp-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Container for Mobile */}
          <div
            ref={scrollContainerRef}
            className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 px-8">
              {commitments.map((commitment, index) => (
                <div key={index} className="commitment-card flex-shrink-0 w-[85vw] snap-center">
                  <Card hover>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-uwp-red/10 flex items-center justify-center text-uwp-red">
                        {commitment.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-dark-grey mb-2 leading-snug">
                          {commitment.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {commitment.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Grid for Desktop */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 md:pb-16">
            {commitments.map((commitment, index) => (
              <Card key={index} hover className="h-full">
                <div className="flex items-start gap-4 h-full">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-uwp-red/10 flex items-center justify-center text-uwp-red">
                    {commitment.icon}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-lg font-bold text-dark-grey mb-2 leading-snug">
                      {commitment.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {commitment.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Hide scrollbar globally */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  )
}
