// app/components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Part with Avatar */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mb-20 md:mb-32">
          {/* Avatar with glow */}
          <div className="relative">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur-xl opacity-60"></div>
            <div className="relative w-48 h-48">
              <Image
                src="/avatar.png" // Make sure you have this image in your public folder
                alt="Ibrahim Memon Avatar"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            {/* "Hello" text with arrow */}
            <div className="absolute top-0 -left-16 transform -translate-y-4">
               <p className="text-sm text-gray-300 whitespace-nowrap">Hello! I Am <span className="text-white font-semibold">Ibrahim Memon</span></p>
               {/* Simple SVG curve, more complex curves can be made */}
               <svg width="60" height="40" viewBox="0 0 60 40" className="transform -scale-x-100 -translate-x-4 -translate-y-2">
                 <path d="M5 35 Q 25 5, 55 15" stroke="#8b5cf6" fill="none" strokeWidth="1"/>
                 <path d="M50 12 L55 15 L52 20" stroke="#8b5cf6" fill="none" strokeWidth="1"/>
               </svg>
            </div>
          </div>

          {/* Text content */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 mb-2">A Designer who</p>
            <h1 className="text-5xl font-bold text-white leading-tight">
              Judges a book
            </h1>
            <h1 className="text-5xl font-bold text-white leading-tight mb-2">
              by its <span className="text-purple-400 relative">
                cover
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-purple-400 opacity-50 rounded-full"></span>
                </span>...
            </h1>
            <p className="text-gray-500 text-sm">
              Because if the cover does not impress you what else can?
            </p>
          </div>
        </div>

        {/* Bottom Part */}
        <div className="text-left max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            I'm a Software Engineer.
            <span className="text-purple-500">|</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Currently, I'm a Software Engineer at <span className="text-blue-500 font-semibold">Facebook</span>.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            A self-taught UI/UX designer, functioning in the industry for 3+ years now.
            I make meaningful and delightful digital products that create an equilibrium
            between user needs and business goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;