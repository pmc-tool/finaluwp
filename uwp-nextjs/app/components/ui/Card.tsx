import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-6 md:p-7',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
        className
      )}
    >
      {children}
    </div>
  )
}
