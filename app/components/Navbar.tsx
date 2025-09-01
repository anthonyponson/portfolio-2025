// app/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-white text-3xl font-bold">
            {/* Using an SVG for the logo as in the design */}
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M4 2L12 12L4 22" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M20 2L12 12L20 22" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <Link href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">
              Home
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">
              About
            </Link>
            <Link href="#lab" className="text-gray-300 hover:text-white transition-colors duration-300">
              Lab
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;