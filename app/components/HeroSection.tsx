// app/components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden">
      
      {/* Background Grid (This is correct and remains unchanged) */}
      <div 
        className="absolute inset-0 z-[-1]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(249, 250, 251, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(249, 250, 251, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* --- Main Content Grid (Two-Column Layout) --- */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* --- LEFT COLUMN: Text Content --- */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <span className="w-10 h-px bg-accent"></span>
            <p className="font-semibold text-secondary">Hello There!</p>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary leading-tight">
            I'm <span className="text-accent">Anthony Ponson</span>
          </h1>
        </div>

        {/* --- RIGHT COLUMN: Image and Blob --- */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-[400px] h-[400px] lg:w-[450px] lg:h-[450px]">
            
            {/* The Blob with Pattern */}
            <div className="absolute inset-0 z-0">
              <svg viewBox="0 0 500 500" className="w-full h-full">
                <defs>
                  <pattern id="blobPattern" patternUnits="userSpaceOnUse" width="20" height="20">
                    <rect width="20" height="20" fill="#FF4F00" />
                    <path d="M 0 10 C 5 0, 15 20, 20 10" stroke="#FFFFFF4D" strokeWidth="1.5" fill="none" />
                  </pattern>
                </defs>
                <circle cx="250" cy="250" r="250" fill="url(#blobPattern)" />
              </svg>
            </div>
            
            {/* The Image */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <Image 
                src="/images/profile.png" // Using your specified image path
                alt="Anthony Ponson" 
                width={400} 
                height={400} 
                className="object-contain"
                priority
              />
            </div>

            {/* CTA Buttons */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center bg-dark/50 backdrop-blur-sm border border-accent rounded-full p-1.5">
              <button className="bg-dark text-primary py-2 px-6 rounded-full flex items-center gap-2 text-sm font-semibold">
                Portfolio 
                <span className="bg-accent text-primary w-5 h-5 rounded-full flex items-center justify-center">
                  <ArrowRight size={12} />
                </span>
              </button>
              <button className="text-primary py-2 px-6 text-sm font-semibold">Hire Me</button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating "N" Icon */}
      <div className="absolute bottom-16 left-8 w-8 h-8 bg-dark rounded-full flex items-center justify-center text-primary font-bold text-sm hidden lg:flex">
        N
      </div>
    </main>
  );
};
export default HeroSection;