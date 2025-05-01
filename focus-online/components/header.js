import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`w-full bg-neutral-100 text-storm-dark z-50 shadow-sm montserrat ${isMenuOpen ? 'hidden' : ''}`}>
        <div className="container mx-auto px-0 py-0">
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

            {/* Right side - Navigation (hidden on mobile) */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex items-center space-x-8 uppercase text-sm font-semibold">
                <Link href="/services" className={`nav-link ${router.pathname === '/services' ? 'text-yellow-400 font-medium border-b-2 border-yellow-400 py-10' : 'text-storm-dark py-10'} hover:text-yellow-400 transition-colors`}>
                  Services
                </Link>
                <Link href="/work" className={`nav-link ${router.pathname === '/work' ? 'text-yellow-400 font-medium border-b-2 border-yellow-400 pb-1' : 'text-storm-dark'} hover:text-yellow-400 transition-colors`}>
                  Portfolio
                </Link>
                <Link href="/approach" className={`nav-link ${router.pathname === '/approach' ? 'text-yellow-400 font-medium border-b-2 border-yellow-400 pb-1' : 'text-storm-dark'} hover:text-yellow-400 transition-colors`}>
                  Process
                </Link>
                <Link href="/agency" className={`nav-link ${router.pathname === '/agency' ? 'text-yellow-400 font-medium border-b-2 border-yellow-400 pb-1' : 'text-storm-dark'} hover:text-yellow-400 transition-colors`}>
                  Agency
                </Link>
                <Link href="/contact">
                  <button className="bg-storm-dark hover:bg-yellow-500 hover:text-white px-5 py-4 rounded-md text-golden transition-colors uppercase strong font-semibold uppercase">
                    Work with us
                  </button>
                </Link>
              </nav>
              
              {/* Burger Menu Button - Two thick lines */}
              <button 
                onClick={toggleMenu}
                className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none ml-4"
                aria-label="Toggle menu"
              >
                <span className={`block w-8 h-0.5 bg-golden transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-golden mt-3 transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
              </button>
            </div>
            
            {/* Mobile: Only show burger menu and CTA button */}
            <div className="flex md:hidden items-center space-x-4">
              <Link href="/contact">
                <button className="bg-golden-dark hover:bg-yellow-500 px-4 py-2 rounded-md text-storm-dark transition-colors uppercase strong font-bold text-sm">
                  Work with us
                </button>
              </Link>
              
              {/* Burger Menu Button - Two thick lines */}
              <button 
                onClick={toggleMenu}
                className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
                aria-label="Toggle menu"
              >
                <span className={`block w-8 h-1 bg-white transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-8 h-1 bg-white mt-3 transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-95 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Close button in top right */}
        <div className="absolute top-6 right-6">
          <button 
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
            aria-label="Close menu"
          >
            <span className="block w-8 h-1 bg-white transform rotate-45"></span>
            <span className="block w-8 h-1 bg-white transform -rotate-45 -translate-y-1"></span>
          </button>
        </div>

        {/* Logo in top left */}
        <div className="absolute top-6 left-6">
          <Link href="/">
            <div className="h-10 w-10 relative cursor-pointer">
              <img 
                src="/static/images/logo.png" 
                alt="Agency Logo" 
                className="h-full w-full object-contain"
              />
            </div>
          </Link>
        </div>
        
        <div className="container mx-auto px-4 h-full flex flex-col py-24">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="flex flex-col">
              <div className="mb-12">
                <Link 
                  href="/services" 
                  className="block text-2xl md:text-3xl uppercase font-bold text-white hover:text-golden-dark transition-colors"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
                <div className="mt-3 space-y-2">
                  <Link 
                    href="/services/marketing-packages" 
                    className="block text-lg text-gray-300 hover:text-golden-dark transition-colors"
                    onClick={toggleMenu}
                  >
                    Marketing Packages
                  </Link>
                  <Link 
                    href="/services/website-development" 
                    className="block text-lg text-gray-300 hover:text-golden-dark transition-colors"
                    onClick={toggleMenu}
                  >
                    Website Development
                  </Link>
                </div>
              </div>
              
              <div className="mb-12">
                <Link 
                  href="/work" 
                  className="block text-2xl md:text-3xl uppercase font-bold text-white hover:text-golden-dark transition-colors"
                  onClick={toggleMenu}
                >
                  Portfolio
                </Link>
              </div>
              
              <div className="mb-12">
                <Link 
                  href="/approach" 
                  className="block text-2xl md:text-3xl uppercase font-bold text-white hover:text-golden-dark transition-colors"
                  onClick={toggleMenu}
                >
                  Process
                </Link>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="flex flex-col">
              <div className="mb-12">
                <Link 
                  href="/resources" 
                  className="block text-2xl md:text-3xl uppercase font-bold text-white hover:text-golden-dark transition-colors"
                  onClick={toggleMenu}
                >
                  Resources
                </Link>
                <div className="mt-3 space-y-2">
                  <Link 
                    href="/resources/good-fit-calculator" 
                    className="block text-lg text-gray-300 hover:text-golden-dark transition-colors"
                    onClick={toggleMenu}
                  >
                    Are We a Good Fit?
                  </Link>
                  <Link 
                    href="/resources/roi-calculator" 
                    className="block text-lg text-gray-300 hover:text-golden-dark transition-colors"
                    onClick={toggleMenu}
                  >
                    ROI Calculator
                  </Link>
                  <Link 
                    href="/resources/blog" 
                    className="block text-lg text-gray-300 hover:text-golden-dark transition-colors"
                    onClick={toggleMenu}
                  >
                    Insights and Musings
                  </Link>
                </div>
              </div>
              
              <div className="mb-12">
                <Link 
                  href="/agency" 
                  className="block text-2xl md:text-3xl uppercase font-bold text-white hover:text-golden-dark transition-colors"
                  onClick={toggleMenu}
                >
                  Agency
                </Link>
                <div className="mt-3 space-y-2">
                  <Link 
                    href="/agency/remote" 
                    className="block text-lg text-gray-300 hover:text-golden-dark transition-colors"
                    onClick={toggleMenu}
                  >
                    Remote
                  </Link>
                  <Link 
                    href="/agency/culture" 
                    className="block text-lg text-gray-300 hover:text-golden-dark transition-colors"
                    onClick={toggleMenu}
                  >
                    Culture
                  </Link>
                  <Link 
                    href="/agency/careers" 
                    className="block text-lg text-gray-300 hover:text-golden-dark transition-colors"
                    onClick={toggleMenu}
                  >
                    Careers
                  </Link>
                </div>
              </div>
              
              <div className="mb-12">
                <Link 
                  href="/contact" 
                  className="block text-2xl md:text-3xl uppercase font-bold text-white hover:text-golden-dark transition-colors"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          
          {/* Footer info in overlay */}
          <div className="border-t border-gray-800 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-white">hello@youragency.com</p>
                <p className="text-white">(123) 456-7890</p>
              </div>
              <div>
                <p className="text-white">123 Agency Street</p>
                <p className="text-white">City, State 12345</p>
              </div>
              <div className="flex flex-col md:items-end">
                <div className="flex space-x-6">
                  <a href="#" className="text-white hover:text-golden-dark transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-white hover:text-golden-dark transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="text-white hover:text-golden-dark transition-colors">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}