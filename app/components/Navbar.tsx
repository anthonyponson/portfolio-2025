// app/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const navLinks = ['Home', 'Services', 'About', 'Projects', 'Blogs', 'Testimonials'];

  return (
    <header className="w-full absolute top-0 left-0 z-50 py-8">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <span className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-lg">O</span>
          <span className="text-xl font-bold text-primary">Oliver.</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link} href={`#${link.toLowerCase()}`} className={`text-sm font-medium transition-colors duration-300 ${link === 'Home' ? 'text-accent border-b-2 border-accent' : 'text-secondary hover:text-primary'}`}>
              {link}
            </Link>
          ))}
        </div>
        <button className="hidden md:block bg-primary text-background font-semibold py-2 px-5 rounded-full hover:bg-gray-300 transition-colors duration-300">
          Contact Me
        </button>
      </nav>
    </header>
  );
};
export default Navbar;