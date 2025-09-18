// app/components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, ArrowRight, Plus } from 'lucide-react';

// You'll need to install lucide-react: npm install lucide-react

const HeroSection = () => {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-6 lg:px-8 overflow-hidden">
      {/* --- Main Content Grid --- */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* --- Left Column (Testimonial & Reviews) --- */}
        <div className="md:col-span-3 space-y-8">
          <div className="text-left">
            <span className="text-accent text-5xl font-serif">“</span>
            <p className="text-lg font-medium text-gray-200">
              Oliver's Remarkable Design Transformed Our Website – Highly Recommended!
            </p>
          </div>
          <div className="text-left">
            <div className="flex -space-x-2 mb-2">
              {['/avatars/avatar1.png', '/avatars/avatar2.png', '/avatars/avatar3.png', '/avatars/avatar4.png'].map((src, i) => (
                <Image key={i} src={src} alt={`Reviewer ${i+1}`} width={40} height={40} className="rounded-full border-2 border-gray-800"/>
              ))}
            </div>
            <p className="font-bold text-accent">150+ Reviews (4.9 of 5)</p>
            <p className="text-xs text-gray-400">Reviews from Valued Clients</p>
          </div>
        </div>

        {/* --- Center Column (Main Text & Image) --- */}
        <div className="md:col-span-6 flex flex-col items-center text-center">
          {/* Intro Text */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-10 h-px bg-accent"></span>
            <p className="font-semibold text-gray-200">Hello There!</p>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
            I'm <span className="text-accent">Oliver Scott</span>
          </h1>
          <p className="text-lg text-gray-400 mt-2">Product Designer based in USA</p>

          {/* Profile Image & Background Blob */}
          <div className="relative mt-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="450" height="450" viewBox="0 0 500 500" className="w-full h-full">
                <path fill="#FF4F00" d="M393.5,324Q342,408,251,420.5Q160,433,111,341.5Q62,250,112.5,163Q163,76,256.5,77.5Q350,79,400.5,164.5Q451,250,393.5,324Z" />
              </svg>
            </div>
            <Image 
              src="/" 
              alt="Oliver Scott" 
              width={400} 
              height={500} 
              className="relative z-10 rounded-[100%]"
              priority
            />
            {/* CTA Buttons */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex items-center bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-full p-1.5">
              <button className="bg-black text-white py-2 px-6 rounded-full flex items-center gap-2">
                Portfolio <ArrowRight size={16} />
              </button>
              <button className="text-white py-2 px-6">Hire Me</button>
            </div>
          </div>
        </div>

        {/* --- Right Column (Skills & Socials) --- */}
        <div className="md:col-span-3 flex flex-col items-end space-y-16">
          {/* Skills Tags */}
          <div className="flex flex-wrap justify-end gap-3">
            <span className="bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-full">Prototype</span>
            <span className="bg-accent text-white text-sm font-semibold px-4 py-2 rounded-full">Dashboard</span>
            <div className="w-full flex justify-end">
              <span className="bg-accent text-white p-2 rounded-full"><Plus size={16}/></span>
              <span className="bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-full">Mobile App Design</span>
            </div>
            <span className="bg-accent text-white text-sm font-semibold px-4 py-2 rounded-full">Design System</span>
            <span className="bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-full">Website Design</span>
          </div>
          
          {/* Social Links */}
          <div className="text-right">
            <p className="font-semibold text-gray-400 mb-3">Follow Us On</p>
            <div className="flex gap-4 justify-end">
              <Facebook className="text-gray-400 hover:text-white cursor-pointer"/>
              <Twitter className="text-gray-400 hover:text-white cursor-pointer"/>
              <Instagram className="text-gray-400 hover:text-white cursor-pointer"/>
            </div>
          </div>
        </div>
      </div>

      {/* --- Rotating Hire Me Badge --- */}
      <div className="absolute top-32 right-16 w-32 h-32 hidden lg:block">
        <svg viewBox="0 0 100 100" className="animate-rotate-slow">
          <defs>
            <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
          </defs>
          <text fill="#E6EDF3">
            <textPath xlinkHref="#circle">
              HIRE ME • HIRE ME • HIRE ME •
            </textPath>
          </text>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center">
            <ArrowRight size={16} className="-rotate-45"/>
          </span>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;


