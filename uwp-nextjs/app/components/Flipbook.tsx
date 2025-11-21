'use client'

import { useEffect, useRef, useState } from 'react'

interface FlipbookProps {
  pdfPath?: string
  pdfSize?: string
}

export default function Flipbook({
  pdfPath = '/pdf/manifesto.pdf',
  pdfSize = '43 MB',
}: FlipbookProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState('100vh')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Set container height to full viewport height
    const updateHeight = () => {
      setContainerHeight('100vh')
    }

    updateHeight()
    window.addEventListener('resize', updateHeight)

    // Wait for DOM and scripts to be ready
    const timer = setTimeout(() => {
      if (!containerRef.current || typeof window === 'undefined') {
        return
      }

      // Check if jQuery and flipbook plugin are loaded
      if (!window.jQuery || !window.jQuery.fn || !window.jQuery.fn.flipBook) {
        console.error('jQuery or flipBook plugin not loaded')
        setError('Flipbook plugin failed to load')
        setIsLoading(false)
        return
      }

      const $ = window.jQuery
      const container = $('#flipbook-container')

      if (container.length === 0) {
        console.error('Container not found')
        setError('Container not found')
        setIsLoading(false)
        return
      }

      // Configure PDF.js worker path
      if (window.pdfjsLib) {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = '/flipbook/js/libs/pdf.worker.min.js'
        console.log('PDF.js worker configured:', window.pdfjsLib.GlobalWorkerOptions.workerSrc)
      } else {
        console.error('PDF.js library not loaded')
        setError('PDF.js library not loaded')
        setIsLoading(false)
        return
      }

      // Initialize flipbook with configuration
      try {
        console.log('Initializing flipbook with PDF:', pdfPath)

        container.flipBook({
          // PDF source - CRITICAL SETTINGS
          pdfUrl: pdfPath,
          pdfjsLib: window.pdfjsLib,

          // Layout and display
          pageMode: 'double',
          singlePageMode: false,

          // Container mode - FORCE EMBEDDED
          lightBox: false,
          lightboxFullscreen: false,
          lightboxStartOpen: false,

          // Performance
          textureSize: 2048,
          preloadPages: 3,

          // Responsive behavior
          responsiveView: true,
          autoHeight: false,
          height: window.innerHeight,

          // Colors
          backgroundColor: '#2C3E50',
          backgroundTransparent: false,

          // UI Controls
          controlsPosition: 'bottom',
          menuSelector: true,
          menuTransparent: false,
          menuOverBook: true,

          // Navigation buttons
          btnNext: { enabled: true, title: 'Next page' },
          btnPrev: { enabled: true, title: 'Previous page' },
          btnZoomIn: { enabled: true, title: 'Zoom in' },
          btnZoomOut: { enabled: true, title: 'Zoom out' },
          btnThumbs: { enabled: true, title: 'Pages' },
          btnSearch: { enabled: true, title: 'Search' },
          btnDownloadPdf: { enabled: true, title: 'Download PDF', url: pdfPath },
          btnPrint: { enabled: true, title: 'Print' },
          btnShare: { enabled: false },
          btnAutoplay: { enabled: false },
          btnExpand: { enabled: false },
          btnSound: { enabled: false },

          // Callbacks for debugging
          onLoad: function() {
            console.log('✓ Flipbook loaded successfully')
            setIsLoading(false)
            setError(null)
          },
          onError: function(error: any) {
            console.error('✗ Flipbook error:', error)
            setError('Failed to load PDF: ' + (error?.message || 'Unknown error'))
            setIsLoading(false)
          },
        })

        console.log('Flipbook initialization called')

        // Remove any overlay elements that may have been created
        setTimeout(() => {
          $('.flipbook-overlay').remove()
          $('.flipbook-browser-fullscreen').removeClass('flipbook-browser-fullscreen')
          $('body').removeClass('flipbook-overflow-hidden')
        }, 300)
      } catch (err) {
        console.error('Flipbook initialization error:', err)
        setError('Initialization failed: ' + (err as Error).message)
        setIsLoading(false)
      }
    }, 2000)

    // Cleanup
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', updateHeight)
    }
  }, [pdfPath])

  return (
    <div className="w-full flex flex-col">
      {/* Hide any overlay elements globally and style arrows */}
      <style jsx global>{`
        .flipbook-overlay {
          display: none !important;
        }
        body.flipbook-overflow-hidden {
          overflow: auto !important;
          position: static !important;
        }

        /* Make flipbook arrows smaller on mobile */
        @media (max-width: 768px) {
          .flipbook-left-arrow,
          .flipbook-right-arrow {
            height: 24px !important;
            font-size: 24px !important;
            width: 24px !important;
            margin-top: -12px !important;
            padding: 6px !important;
          }
        }
      `}</style>

      {/* Flipbook Container - Full Screen */}
      <div
        ref={containerRef}
        id="flipbook-container"
        className="w-full bg-[#2C3E50] overflow-hidden"
        style={{
          height: containerHeight,
          position: 'relative',
        }}
      >
        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#2C3E50]">
            <div className="text-white text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-lg">Loading PDF...</p>
            </div>
          </div>
        )}

        {/* Error message */}
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#2C3E50] p-8">
            <div className="bg-red-600 text-white p-6 rounded-lg max-w-md">
              <h3 className="text-xl font-bold mb-2">Error Loading Flipbook</h3>
              <p className="mb-4">{error}</p>
              <a
                href={pdfPath}
                download
                className="inline-block bg-white text-red-600 px-6 py-2 rounded font-bold hover:bg-gray-100"
              >
                Download PDF Instead
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Instructions and Download - Below flipbook */}
      <div className="w-full bg-[#F5F5F5] py-6 px-4 text-center">
        <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-4">
          Use the arrows to turn pages. For mobile users, you can also download the PDF.
        </p>
        <a
          href={pdfPath}
          download
          className="inline-block bg-uwp-green text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-uwp-green-dark transition-colors shadow-md"
        >
          Download PDF ({pdfSize})
        </a>
      </div>
    </div>
  )
}
