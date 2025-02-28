import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import gsap from 'gsap';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // Toggle menu state
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

  // Animate fullscreen menu
  useEffect(() => {
    if (isMenuOpen) {
      // Animate menu open
      gsap.to('.fullscreen-menu', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
        pointerEvents: 'all',
      });
      // Animate menu items staggered
      gsap.from('.menu-item', {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        delay: 0.2,
        duration: 0.4,
        ease: 'power2.out',
      });
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Animate menu closed
      gsap.to('.fullscreen-menu', {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: 'power3.out',
        pointerEvents: 'none',
      });
      // Re-enable body scroll
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <header className="fixed w-full bg-black text-white z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Core Nav Items (hidden on mobile) */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/services" className={`nav-link ${router.pathname === '/services' ? 'text-yellow-400 font-medium' : 'text-white'} hover:text-yellow-400 transition-colors`}>
              Services
            </Link>
            <Link href="/work" className={`nav-link ${router.pathname === '/work' ? 'text-yellow-400 font-medium' : 'text-white'} hover:text-yellow-400 transition-colors`}>
              Work
            </Link>
            <Link href="/approach" className={`nav-link ${router.pathname === '/approach' ? 'text-yellow-400 font-medium' : 'text-white'} hover:text-yellow-400 transition-colors`}>
              Approach
            </Link>
          </nav>

          {/* Center - Logo */}
          <div className="flex items-center justify-center">
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

          {/* Right side - "Agency" + CTA Button + Burger */}
          <div className="flex items-center space-x-6">
            <Link href="/agency" className="hidden md:block text-white hover:text-yellow-400 transition-colors">
              Agency
            </Link>
            <Link href="/contact">
              <button className="hidden md:block bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-md transition-colors">
                Work with us
              </button>
            </Link>
            <button 
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Menu */}
      <div className="fullscreen-menu fixed inset-0 bg-black text-white opacity-0 pointer-events-none z-40 transform -translate-y-4">
        <div className="container mx-auto px-4 py-20 h-full flex flex-col">
          <div className="absolute top-8 right-8">
            <button 
              onClick={toggleMenu}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400 focus:outline-none"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center text-center">
            <nav className="space-y-6">
              <Link href="/services" className="menu-item block text-4xl font-bold hover:text-yellow-400 transition-colors">
                Services
              </Link>
              <Link href="/work" className="menu-item block text-4xl font-bold hover:text-yellow-400 transition-colors">
                Work
              </Link>
              <Link href="/approach" className="menu-item block text-4xl font-bold hover:text-yellow-400 transition-colors">
                Approach
              </Link>
              <Link href="/agency" className="menu-item block text-4xl font-bold hover:text-yellow-400 transition-colors">
                Agency
              </Link>
              <Link href="/blog" className="menu-item block text-4xl font-bold hover:text-yellow-400 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="menu-item block text-4xl font-bold hover:text-yellow-400 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          
          <div className="pt-10 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <p className="text-lg">hello@youragency.com</p>
                <p className="text-lg">(123) 456-7890</p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Instagram
                </a>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}