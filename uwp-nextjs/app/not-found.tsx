import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-grey px-5">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-uwp-green mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or no longer exists.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-uwp-green text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-uwp-green-dark transition-colors shadow-md inline-block"
          >
            Go to Homepage
          </Link>
          <Link
            href="#manifesto"
            className="border-2 border-uwp-green text-uwp-green px-8 py-4 rounded-lg font-bold text-base hover:bg-uwp-green hover:text-white transition-colors inline-block"
          >
            Read Manifesto
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div>
            <h3 className="font-bold text-dark-grey mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><Link href="/#vision" className="hover:text-uwp-green">Our Vision</Link></li>
              <li><Link href="/#strategy" className="hover:text-uwp-green">Strategy</Link></li>
              <li><Link href="/#leadership" className="hover:text-uwp-green">Leadership</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-dark-grey mb-2">Policy Areas</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><Link href="/#security" className="hover:text-uwp-green">Security</Link></li>
              <li><Link href="/#economy" className="hover:text-uwp-green">Economy</Link></li>
              <li><Link href="/#healthcare" className="hover:text-uwp-green">Healthcare</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-dark-grey mb-2">Get Involved</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><Link href="/#contact" className="hover:text-uwp-green">Contact Us</Link></li>
              <li><a href="https://facebook.com/uwpsaintlucia" className="hover:text-uwp-green">Facebook</a></li>
              <li><a href="https://twitter.com/uwpsaintlucia" className="hover:text-uwp-green">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
