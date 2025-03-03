import React, { useState } from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

// GraphQL query to fetch navigation menu items
const GET_NAVIGATION_MENU = gql`
  query GetNavigationMenu {
    menu(id: "header-menu", idType: NAME) {
      menuItems {
        nodes {
          id
          label
          path
        }
      }
    }
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Fetch navigation items from WordPress
  const { data, loading, error } = useQuery(GET_NAVIGATION_MENU);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Fallback navigation items in case the query fails
  const fallbackNavItems = [
    { id: '1', label: 'Home', path: '/' },
    { id: '2', label: 'About', path: '/about' },
    { id: '3', label: 'Services', path: '/services' },
    { id: '4', label: 'Blog', path: '/blog' },
    { id: '5', label: 'Contact', path: '/contact' },
  ];
  
  // Use data from query if available, otherwise use fallback
  const navItems = data?.menu?.menuItems?.nodes || fallbackNavItems;

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <img 
                src="/images/logo.svg" 
                alt="Company Logo" 
                className="h-10 w-auto" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className="text-gray-700 hover:text-blue-600 font-medium transition duration-150"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Burger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.path}
                  className="text-gray-700 hover:text-blue-600 font-medium transition duration-150 py-2 px-4 rounded hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;