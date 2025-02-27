import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { gsap } from 'gsap';

const GET_MENU_ITEMS = gql`
  query GetFooterMenus {
    primaryFooterMenu: menu(id: "footer-menu", idType: NAME) {
      menuItems {
        nodes {
          id
          path
          label
          url
        }
      }
    }
    secondaryFooterMenu: menu(id: "secondary-footer-menu", idType: NAME) {
      menuItems {
        nodes {
          id
          path
          label
          url
        }
      }
    }
    tertiaryFooterMenu: menu(id: "tertiary-footer-menu", idType: NAME) {
      menuItems {
        nodes {
          id
          path
          label
          url
        }
      }
    }
  }
`;

export default function Footer() {
  const { loading, error, data } = useQuery(GET_MENU_ITEMS);
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();
  
  // GSAP animation setup
  useEffect(() => {
    if (footerRef.current) {
      // Fade in the entire footer
      gsap.from(footerRef.current, {
        opacity: 0, 
        y: 50, 
        duration: 1,
        ease: 'power3.out'
      });
      
      // Stagger the menu items
      gsap.from('.footer-menu-item', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        delay: 0.5,
        ease: 'back.out(1.7)'
      });
      
      // Subtle hover effect for menu items
      const menuItems = document.querySelectorAll('.footer-menu-item a');
      menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            color: '#90cdf4', // light blue color
            duration: 0.3,
            ease: 'power1.out'
          });
        });
        
        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            color: 'white',
            duration: 0.3,
            ease: 'power1.out'
          });
        });
      });
    }
  }, [loading]); // Run after loading is complete
  
  return (
    <footer ref={footerRef} className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Your Agency Name</h3>
            <p className="mb-2">123 Agency Street</p>
            <p className="mb-2">City, State 12345</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: hello@youragency.com</p>
          </div>
          
          {/* Primary Menu Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav>
              <ul>
                {loading ? (
                  <li>Loading menu...</li>
                ) : error ? (
                  <li>Error loading menu</li>
                ) : (
                  data?.primaryFooterMenu?.menuItems?.nodes?.map((item) => (
                    <li key={item.id} className="mb-2 footer-menu-item">
                      <Link href={item.path || item.url} className="hover:text-gray-400 transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </nav>
          </div>
          
          {/* Secondary Menu Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <nav>
              <ul>
                {loading ? (
                  <li>Loading menu...</li>
                ) : error ? (
                  <li>Error loading menu</li>
                ) : (
                  data?.secondaryFooterMenu?.menuItems?.nodes?.map((item) => (
                    <li key={item.id} className="mb-2 footer-menu-item">
                      <Link href={item.path || item.url} className="hover:text-gray-400 transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </nav>
          </div>
          
          {/* Third Menu Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Work</h3>
            <nav>
              <ul>
                {loading ? (
                  <li>Loading menu...</li>
                ) : error ? (
                  <li>Error loading menu</li>
                ) : (
                  data?.tertiaryFooterMenu?.menuItems?.nodes?.map((item) => (
                    <li key={item.id} className="mb-2 footer-menu-item">
                      <Link href={item.path || item.url} className="hover:text-gray-400 transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </nav>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Your Agency Name. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-gray-400 transition-colors mr-4">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}