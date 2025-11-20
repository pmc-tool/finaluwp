'use client'

import { useRef, useEffect } from 'react'

export default function Vision() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth
      const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      })
    }
  }

  const autoScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const maxScroll = container.scrollWidth - container.offsetWidth

      // If we're at the end, scroll back to the beginning
      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({
          left: 0,
          behavior: 'smooth'
        })
      } else {
        // Otherwise, scroll to the next slide
        scroll('right')
      }
    }
  }

  useEffect(() => {
    // Start auto-scrolling every 5 seconds
    autoScrollIntervalRef.current = setInterval(autoScroll, 5000)

    // Cleanup interval on unmount
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
      }
    }
  }, [])

  const handleManualScroll = (direction: 'left' | 'right') => {
    // Clear auto-scroll interval
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current)
    }

    // Perform manual scroll
    scroll(direction)

    // Restart auto-scroll after 10 seconds of inactivity
    setTimeout(() => {
      autoScrollIntervalRef.current = setInterval(autoScroll, 5000)
    }, 10000)
  }
  return (
    <div className="max-w-content mx-auto">
      {/* Section Label */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-6 relative inline-block pb-4">
          A Clear Vision for Saint Lucia
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-uwp-red rounded"></span>
        </h2>
      </div>

      {/* Vision Introduction */}
      <div className="mb-12 text-center max-w-[900px] mx-auto">
        <p className="hidden sm:block text-base md:text-lg text-gray-700 leading-relaxed">
          The United Workers Party is committed to building a Saint Lucia where every citizen can thrive. Our vision is rooted in trust, transparency, and putting people first—creating opportunities for growth, security, and prosperity for all.
        </p>
      </div>

      {/* Contrast Section - Slider for Mobile, Grid for Desktop */}
      <div className="relative">
        {/* Slider for Mobile */}
        <div className="md:hidden relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => handleManualScroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Previous"
          >
            <svg className="w-5 h-5 text-uwp-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => handleManualScroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Next"
          >
            <svg className="w-5 h-5 text-uwp-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            ref={scrollContainerRef}
            className="overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-0">
              {/* Left: Current Reality */}
              <div className="flex-shrink-0 w-full snap-center px-4">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 flex-shrink-0"></div>
                    <h3 className="text-lg font-bold text-dark-grey">
                      The Current Reality
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    While others offered slogans and style, the UWP delivered substance and results. Under previous leadership, Saint Lucia saw record investments, infrastructure development, and economic growth.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-uwp-red font-bold mt-0.5 flex-shrink-0">×</span>
                      <span>Broken promises and failed policies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-uwp-red font-bold mt-0.5 flex-shrink-0">×</span>
                      <span>Rising costs with no relief in sight</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-uwp-red font-bold mt-0.5 flex-shrink-0">×</span>
                      <span>Deteriorating public services and infrastructure</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right: UWP Promise */}
              <div className="flex-shrink-0 w-full snap-center px-4">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 flex-shrink-0"></div>
                    <h3 className="text-lg font-bold text-dark-grey">
                      The UWP Promise
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    We&apos;re committed to reclaiming that legacy—restoring trust, delivering relief, and building a modern economy that works for everyone, especially our youth and most vulnerable.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span>Trust and integrity in every action</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span>Real relief through the SOS Plan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span>Modern infrastructure and sustainable growth</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid for Desktop */}
        <div className="hidden md:block bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
            {/* Left: Current Reality */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <h3 className="text-xl md:text-2xl font-bold text-dark-grey">
                  The Current Reality
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                While others offered slogans and style, the UWP delivered substance and results. Under previous leadership, Saint Lucia saw record investments, infrastructure development, and economic growth.
              </p>
              <ul className="space-y-2 text-sm md:text-base text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-uwp-red font-bold mt-1">×</span>
                  <span>Broken promises and failed policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-uwp-red font-bold mt-1">×</span>
                  <span>Rising costs with no relief in sight</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-uwp-red font-bold mt-1">×</span>
                  <span>Deteriorating public services and infrastructure</span>
                </li>
              </ul>
            </div>

            {/* Right: UWP Promise */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <h3 className="text-xl md:text-2xl font-bold text-dark-grey">
                  The UWP Promise
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                We&apos;re committed to reclaiming that legacy—restoring trust, delivering relief, and building a modern economy that works for everyone, especially our youth and most vulnerable.
              </p>
              <ul className="space-y-2 text-sm md:text-base text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>Trust and integrity in every action</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>Real relief through the SOS Plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>Modern infrastructure and sustainable growth</span>
                </li>
              </ul>
            </div>
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
