'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#manifesto', label: 'Manifesto' },
    { href: '#vision', label: 'Vision' },
    { href: '#strategy', label: 'Strategy' },
    { href: '#results', label: 'Track Record' },
    { href: '#leadership', label: 'Leadership' },
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-content mx-auto px-5 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/uwp-logo.png"
              alt="United Workers Party Logo"
              width={120}
              height={120}
              className="h-12 w-auto md:h-14"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-dark-grey hover:text-uwp-red font-semibold transition-colors text-sm lg:text-base"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-uwp-red text-white px-5 py-2 rounded-lg font-bold text-sm lg:text-base hover:bg-[#c01820] transition-colors"
            >
              Get Involved
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-dark-grey transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-dark-grey transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-dark-grey transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-gray-200 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-dark-grey hover:text-uwp-red font-semibold transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-uwp-red text-white px-5 py-3 rounded-lg font-bold text-center hover:bg-[#c01820] transition-colors"
            >
              Get Involved
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
