'use client'

import { useEffect } from 'react'
import Button from './components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-light-grey px-5">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-uwp-red/10 text-uwp-red mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">
            Something Went Wrong
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            We apologize for the inconvenience. An unexpected error has occurred while loading the UWP Manifesto.
          </p>
          {error.message && (
            <p className="text-sm text-gray-500 mb-6 font-mono bg-gray-100 p-4 rounded">
              {error.message}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-uwp-red text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-[#c01820] transition-colors shadow-md"
          >
            Try Again
          </button>
          <a
            href="/"
            className="border-2 border-uwp-red text-uwp-red px-8 py-4 rounded-lg font-bold text-base hover:bg-uwp-red hover:text-white transition-colors"
          >
            Go to Homepage
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          If the problem persists, please contact us at{' '}
          <a href="mailto:info@uwpsaintlucia.org" className="text-uwp-red hover:underline">
            info@uwpsaintlucia.org
          </a>
        </p>
      </div>
    </div>
  )
}
