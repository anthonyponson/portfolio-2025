// app/components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, ArrowRight, Plus } from 'lucide-react';

const HeroSection = () => {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-3 space-y-12">
          <div className="text-left">
            <span className="text-secondary text-5xl font-serif">“</span>
            <p className="text-lg font-medium text-primary">Oliver's Remarkable Design Transformed Our Website – Highly Recommended!</p>
          </div>
          <div className="text-left">
            <div className="flex -space-x-3 mb-3">
              {[1, 2, 3, 4].map((i) => (<div key={i} className="w-10 h-10 rounded-full border-2 border-accent bg-accent/50"/>))}
            </div>
            <p className="font-bold text-primary">150+ Reviews (4.9 of 5)</p>
            <p className="text-xs text-secondary">Reviews from Valued Clients</p>
          </div>
        </div>
        <div className="md:col-span-6 flex flex-col items-center text-center">
          <p className="font-semibold text-secondary mb-4">Hello There!</p>
          <h1 className="text-6xl lg:text-7xl font-bold text-primary leading-tight">I'm Oliver Scott</h1>
          <p className="text-lg text-secondary mt-2">Product Designer based in USA</p>
          <div className="relative mt-10">
            <Image src="/images/profile.jpeg" alt="Oliver Scott" width={250} height={250} className="relative z-10 rounded-full object-cover" priority/>
            <div className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 z-20 flex items-center bg-background/50 backdrop-blur-sm border border-accent rounded-full p-1.5">
              <button className="bg-primary text-background py-2 px-6 rounded-full flex items-center gap-2 text-sm font-semibold">Portfolio <ArrowRight size={16} /></button>
              <button className="text-primary py-2 px-6 text-sm font-semibold">Hire Me</button>
            </div>
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col items-start md:items-end space-y-16">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3"><span className="bg-accent/50 text-secondary text-sm font-semibold px-4 py-2 rounded-full">Prototype</span><span className="bg-accent/50 text-secondary text-sm font-semibold px-4 py-2 rounded-full">Dashboard</span></div>
            <div className="flex items-center gap-3"><Plus size={16} className="text-secondary"/><span className="bg-accent/50 text-secondary text-sm font-semibold px-4 py-2 rounded-full">Mobile App Design</span></div>
            <div className="flex items-center gap-3"><span className="bg-accent/50 text-secondary text-sm font-semibold px-4 py-2 rounded-full">Design System</span><span className="bg-accent/50 text-secondary text-sm font-semibold px-4 py-2 rounded-full">Website Design</span></div>
          </div>
          <div className="text-left md:text-right">
            <p className="font-semibold text-secondary mb-3">Follow Us On</p>
            <div className="flex gap-4 justify-start md:justify-end">
              <Facebook size={20} className="text-secondary hover:text-primary cursor-pointer"/><Twitter size={20} className="text-secondary hover:text-primary cursor-pointer"/><Instagram size={20} className="text-secondary hover:text-primary cursor-pointer"/>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-32 right-16 w-32 h-32 hidden lg:block">
        <svg viewBox="0 0 100 100" className="animate-rotate-slow">
          <defs><path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/></defs>
          <text className="fill-secondary text-xs tracking-widest"><textPath xlinkHref="#circle">• HIRE ME • HIRE ME • HIRE ME</textPath></text>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center"><span className="bg-accent/50 text-primary w-8 h-8 rounded-full flex items-center justify-center"><ArrowRight size={16} className="-rotate-45"/></span></div>
      </div>
    </main>
  );
};
export default HeroSection;