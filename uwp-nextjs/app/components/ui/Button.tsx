import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  href?: string
}

export default function Button({
  variant = 'primary',
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-block px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 font-bold rounded transition-all duration-300 min-h-[48px] text-center text-sm sm:text-base'

  const variantStyles = {
    primary: 'bg-uwp-red text-white hover:bg-[#c01820] shadow-md hover:shadow-lg',
    secondary: 'border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm',
  }

  const combinedClassName = cn(baseStyles, variantStyles[variant], className)

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    )
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  )
}
