import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  id?: string
  className?: string
  background?: 'white' | 'light' | 'medium' | 'gradient'
}

export default function Section({
  children,
  id,
  className,
  background = 'white',
}: SectionProps) {
  const backgroundStyles = {
    white: 'bg-white',
    light: 'bg-light-grey',
    medium: 'bg-medium-grey',
    gradient: 'bg-gradient-to-b from-white to-gray-50',
  }

  return (
    <section
      id={id}
      className={cn(
        'py-12 sm:py-14 md:py-16 px-4 sm:px-5 scroll-mt-20',
        backgroundStyles[background],
        className
      )}
    >
      <div className="max-w-content mx-auto">{children}</div>
    </section>
  )
}
