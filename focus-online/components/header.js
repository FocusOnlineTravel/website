import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <header className="fixed w-full bg-storm-dark text-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="h-14 w-14 relative cursor-pointer">
                <img 
                  src="/static/images/logo.png" 
                  alt="Agency Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Right side - Navigation */}
          <div className="flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <Link href="/services" className={`nav-link ${router.pathname === '/services' ? 'text-yellow-400 font-medium border-b-2 border-yellow-400 py-10' : 'text-white py-10'} hover:text-yellow-400 transition-colors`}>
                Solutions
              </Link>
              <Link href="/work" className={`nav-link ${router.pathname === '/work' ? 'text-yellow-400 font-medium border-b-2 border-yellow-400 pb-1' : 'text-white'} hover:text-yellow-400 transition-colors`}>
                Our Portfolio
              </Link>
              <Link href="/approach" className={`nav-link ${router.pathname === '/approach' ? 'text-yellow-400 font-medium border-b-2 border-yellow-400 pb-1' : 'text-white'} hover:text-yellow-400 transition-colors`}>
                Our Process
              </Link>
              <Link href="/agency" className={`nav-link ${router.pathname === '/agency' ? 'text-yellow-400 font-medium border-b-2 border-yellow-400 pb-1' : 'text-white'} hover:text-yellow-400 transition-colors`}>
                The Agency
              </Link>
              <Link href="/contact">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-md transition-colors">
                  Start your journey
                </button>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}