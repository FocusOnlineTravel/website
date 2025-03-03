import React from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

const GET_MENU_ITEMS = gql`
  query GetFooterMenu {
    menu(id: "footer-menu", idType: NAME) {
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

// You'll need to replace this with your actual social media links
const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com/youragency', icon: 'fab fa-facebook-f' },
  { name: 'Twitter', url: 'https://twitter.com/youragency', icon: 'fab fa-twitter' },
  { name: 'Instagram', url: 'https://instagram.com/youragency', icon: 'fab fa-instagram' },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/youragency', icon: 'fab fa-linkedin-in' }
];

export default function Footer() {
  const { loading, error, data } = useQuery(GET_MENU_ITEMS);
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Your Agency Name</h3>
            <p className="mb-2">123 Agency Street</p>
            <p className="mb-2">City, State 12345</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: hello@youragency.com</p>
          </div>
          
          {/* Menu Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav>
              <ul>
                {loading ? (
                  <li>Loading menu...</li>
                ) : error ? (
                  <li>Error loading menu</li>
                ) : (
                  data?.menu?.menuItems?.nodes?.map((item) => (
                    <li key={item.id} className="mb-2">
                      <Link href={item.path || item.url} className="hover:text-gray-400 transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </nav>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label={link.name}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h4>
              <form className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 bg-gray-800 text-white rounded-md mb-2 sm:mb-0 sm:mr-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Subscribe
                </button>
              </form>
            </div>
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