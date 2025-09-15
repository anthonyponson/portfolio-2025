// // app/components/Navbar.tsx
// import React from 'react';
// import Link from 'next/link';

// const Navbar = () => {
//   const navLinks = ['Home', 'Services', 'About', 'Projects', 'Blogs', 'Testimonials'];

//   return (
//     <header className="w-full absolute top-0 left-0 z-50 py-8">
//       <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2">
//           <span className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
//             O
//           </span>
//           <span className="text-xl font-bold text-white">Oliver.</span>
//         </Link>

//         {/* Desktop Navigation Links */}
//         <div className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <Link 
//               key={link} 
//               href={`#${link.toLowerCase()}`}
//               className={`text-sm font-medium transition-colors duration-300 ${
//                 link === 'Home' 
//                 ? 'text-accent border-b-2 border-accent' 
//                 : 'text-gray-300 hover:text-white'
//               }`}
//             >
//               {link}
//             </Link>
//           ))}
//         </div>

//         {/* Contact Button */}
//         <button className="hidden md:block bg-white text-black font-semibold py-2 px-5 rounded-full hover:bg-gray-200 transition-colors duration-300">
//           Contact Me
//         </button>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  const navLinks = ["Home", "Services", "About", "Projects", "Blogs", "Testimonials"];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-lg">
            O
          </div>
          <span className="text-xl font-bold text-gray-900">Oliver.</span>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex gap-8 text-gray-800 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`hover:text-brand-orange transition-colors ${
                link === "Home" ? "nav-active" : ""
              }`}
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <button className="hidden lg:block bg-black hover:bg-brand-orange text-white font-semibold py-3 px-6 rounded-full transition-colors">
          Contact Me
        </button>
      </div>
    </header>
  );
};

export default Navbar;
