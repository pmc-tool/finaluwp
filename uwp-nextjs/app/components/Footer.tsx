import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '#manifesto', label: 'Manifesto' },
    { href: '#vision', label: 'Our Vision' },
    { href: '#strategy', label: 'Strategy' },
    { href: '#results', label: 'Track Record' },
    { href: '#leadership', label: 'Leadership' },
  ]

  const policyAreas = [
    { href: '#security', label: 'Security & Justice' },
    { href: '#economy', label: 'Economic Growth' },
    { href: '#healthcare', label: 'Healthcare' },
    { href: '#education', label: 'Education' },
    { href: '#infrastructure', label: 'Infrastructure' },
    { href: '#environment', label: 'Environment' },
  ]

  return (
    <footer className="bg-dark-grey text-white py-12 px-5">
      <div className="max-w-content mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-uwp-red transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wider">
              Follow Us
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://facebook.com/uwpsaintlucia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-uwp-red transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/uwpsaintlucia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-uwp-red transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/uwpsaintlucia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-uwp-red transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 mt-6">
          <div className="text-center text-sm text-white/60">
            <p>
              © {currentYear} United Workers Party. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
