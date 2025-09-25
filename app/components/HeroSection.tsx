// app/components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, ArrowRight, Plus } from 'lucide-react';

const HeroSection = () => {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-6 lg:px-8 overflow-hidden">
      
      {/* Background Grid & Fade Effect (This part is correct and remains) */}
      <div 
        className="absolute inset-0 z-[-1]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(249, 250, 251, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(249, 250, 251, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
      <div 
        className="absolute inset-0 z-[-1]"
        style={{
          backgroundImage: `
            radial-gradient(
              ellipse at 50% 50%,
              transparent 0%,
              transparent 30%,
              var(--color-background) 65%
            )
          `,
        }}
      />

      {/* --- Main Content Container --- */}
      <div className="relative max-w-7xl w-full mx-auto flex justify-center">
        
        {/* --- Left Column (Testimonial) --- */}
        {/* This is now absolutely positioned on large screens to match the design */}
        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-0 w-64 space-y-8">
          <div className="text-left">
            <span className="text-accent text-5xl font-serif">“</span>
            <p className="text-base font-medium text-primary">Oliver's Remarkable Design Transformed Our Website – Highly Recommended!</p>
          </div>
          <div className="text-left">
            <div className="flex -space-x-2 mb-3">
              {[1, 2, 3, 4].map((i) => (<div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-dark"/>))}
            </div>
            <p className="font-bold text-accent">150+ Reviews (4.9 of 5)</p>
            <p className="text-xs text-secondary">Reviews from Valued Clients</p>
          </div>
        </div>

        {/* --- Center Column (The main focus) --- */}
        <div className="flex flex-col items-center text-center max-w-lg">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-10 h-px bg-accent"></span>
            <p className="font-semibold text-secondary">Hello There!</p>
          </div>
          <h1 className="text-6xl lg:text-7xl font-bold text-primary leading-tight">I'm <span className="text-accent">Oliver Scott</span></h1>
          <p className="text-lg text-secondary mt-2">Product Designer based in USA</p>
          
          {/* --- IMAGE CONTAINER WITH BLOB --- */}
          <div className="relative mt-10">
            
            {/* THE BLOB: Positioned absolutely behind the image */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <svg width="350" height="350" viewBox="0 0 500 500" className="w-full h-full">
                <path 
                  fill="var(--color-accent)" 
                  d="M393.5,324Q342,408,251,420.5Q160,433,111,341.5Q62,250,112.5,163Q163,76,256.5,77.5Q350,79,400.5,164.5Q451,250,393.5,324Z" 
                />
              </svg>
            </div>
            
            {/* THE IMAGE: Circular and on top of the blob */}
            <Image 
              src="/images/profile.jpeg" 
              alt="Oliver Scott" 
              width={300} 
              height={300} 
              className="relative z-10 rounded-full object-cover" 
              priority
            />

            {/* CTA Buttons */}
            <div className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 z-20 flex items-center bg-dark/50 backdrop-blur-sm border border-accent rounded-full p-1.5">
              <button className="bg-dark text-primary py-2 px-6 rounded-full flex items-center gap-2 text-sm font-semibold">Portfolio <span className="bg-accent text-primary w-5 h-5 rounded-full flex items-center justify-center"><ArrowRight size={12} /></span></button>
              <button className="text-primary py-2 px-6 text-sm font-semibold">Hire Me</button>
            </div>
          </div>
        </div>

        {/* --- Right Column (Skills & Socials) --- */}
        {/* This is also absolutely positioned on large screens */}
        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 w-64 space-y-16">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3"><span className="bg-dark text-primary text-sm font-semibold px-4 py-2 rounded-full">Prototype</span><span className="bg-accent text-primary text-sm font-semibold px-4 py-2 rounded-full">Dashboard</span></div>
            <div className="flex items-center gap-3"><span className="bg-accent text-primary p-2 rounded-full"><Plus size={16}/></span><span className="bg-dark text-primary text-sm font-semibold px-4 py-2 rounded-full">Mobile App Design</span></div>
            <div className="flex items-center gap-3"><span className="bg-accent text-primary text-sm font-semibold px-4 py-2 rounded-full">Design System</span><span className="bg-dark text-primary text-sm font-semibold px-4 py-2 rounded-full">Website Design</span></div>
          </div>
          <div className="text-left">
            <p className="font-semibold text-secondary mb-3">Follow Us On</p>
            <div className="flex gap-4 justify-start">
              <Facebook size={20} className="text-secondary hover:text-primary cursor-pointer"/><Twitter size={20} className="text-secondary hover:text-primary cursor-pointer"/><Instagram size={20} className="text-secondary hover:text-primary cursor-pointer"/>
            </div>
          </div>
        </div>
      </div>

      {/* --- Rotating Hire Me Badge --- */}
      <div className="absolute top-32 right-16 w-32 h-32 hidden lg:block">
        <svg viewBox="0 0 100 100" className="animate-rotate-slow">
          <defs><path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/></defs>
          <text className="fill-secondary text-xs tracking-widest"><textPath xlinkHref="#circle">• HIRE ME • HIRE ME • HIRE ME</textPath></text>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center"><span className="bg-accent text-primary w-8 h-8 rounded-full flex items-center justify-center"><ArrowRight size={16} className="-rotate-45"/></span></div>
      </div>
    </main>
  );
};
export default HeroSection;