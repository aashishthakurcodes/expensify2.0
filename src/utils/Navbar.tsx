import Link from 'next/link';
// import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - Logo and Links */}
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              {/* <Image
                src="/images/logo.png" // Replace with your logo path
                alt="Expensify Logo"
                width={40}
                height={40}
                className="h-8 w-auto"
              /> */}
              <span className="ml-2 text-xl font-semibold text-gray-900 hidden sm:block">
                Expensify
              </span>
            </Link>

            {/* Navigation Links - Hidden on mobile */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/features" className="text-gray-900 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-900 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-900 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
                About
              </Link>
            </div>
          </div>

          {/* Right side - Auth Buttons */}
          <div className="flex items-center">
            <div className="flex space-x-4">
              <Link href="/login" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none">
                Login
              </Link>
              <Link href="/register" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                Register
              </Link>
            </div>

            {/* Mobile menu button */}
            <button className="sm:hidden ml-4 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Hidden by default */}
      <div className="sm:hidden hidden" id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <Link href="/features" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Features
          </Link>
          <Link href="/pricing" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Pricing
          </Link>
          <Link href="/about" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            About
          </Link>
          <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="space-y-1">
              <Link href="/login" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Login
              </Link>
              <Link href="/register" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}