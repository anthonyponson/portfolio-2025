// app/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const navLinks = ['Home', 'Services', 'About', 'Projects', 'Blogs', 'Testimonials'];

  return (
    <header className="w-full absolute top-0 left-0 z-50 py-8">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="w-8 h-8 border-2 border-gray-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
            O
          </span>
          <span className="text-xl font-bold text-white">Oliver.</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className={`text-sm font-medium transition-colors duration-300 ${
                link === 'Home' 
                ? 'text-white border-b-2 border-white' 
                : 'text-gray-400 hover:text-white'
              }`}
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <button className="hidden md:block bg-white text-black font-semibold py-2 px-5 rounded-full hover:bg-gray-300 transition-colors duration-300">
          Contact Me
        </button>
      </nav>
    </header>
  );
};

export default Navbar;