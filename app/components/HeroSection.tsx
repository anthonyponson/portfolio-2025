// app/components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    // Main container: Centers the content block perfectly in the viewport.
    <section 
      id="home" 
      className="flex min-h-screen items-center justify-center p-8"
    >
      {/*
        Two-Column Layout: A flex container for the avatar and the text block.
      */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-16">

        {/* --- LEFT COLUMN: AVATAR --- */}
        <div className="relative flex-shrink-0 w-[258px] h-[259px]">
          <Image
            src="/images/profile.jpeg" // Using your specified image path
            alt="Ibrahim Memon's avatar"
            width={258}
            height={259}
            priority
          />
        </div>

        {/* --- RIGHT COLUMN: TEXT CONTENT --- */}
        <div className="relative flex flex-col items-start text-left max-w-md">

          {/* Annotation Block */}
          <div className="absolute top-[-4rem] left-[-3rem] w-max">
            <div className="relative">
              <p className="text-gray-300 text-sm">
                Hello! I Am <span className="text-purple-400 font-semibold">Ibrahim Memon</span>
              </p>
              <svg
                width="80"
                height="50"
                viewBox="0 0 80 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[10px] left-[-70px]"
              >
                <path 
                  d="M75 5C56.9941 12.0156 22.3125 31.4375 5.5 45.5" 
                  stroke="#9CA3AF" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                />
                <path 
                  d="M11 48L2 45.5L5.5 39" 
                  stroke="#9CA3AF" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-gray-400 mb-2 text-base">
            A Designer who
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            Judges a book
            <br />
            by its{' '}
            <span className="relative inline-block">
              <span className="text-purple-400">cover</span>
              
              {/* --- THE FIX IS HERE --- */}
              {/* The width and height have been reduced to make the ellipse smaller and tighter. */}
              <svg
                className="absolute top-1/2 left-1/2 w-[115%] h-[140%] transform -translate-y-1/2 -translate-x-1/2"
                viewBox="0 0 100 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                    d="M96.7915 29.8182C96.7915 44.2045 76.513 55.6364 49.3957 55.6364C22.2784 55.6364 2 44.2045 2 29.8182C2 15.4318 22.2784 4 49.3957 4C76.513 4 96.7915 15.4318 96.7915 29.8182Z" 
                    stroke="white" 
                    strokeOpacity="0.7" 
                    strokeWidth="2"
                />
              </svg>

            </span>
            ...
          </h1>

          {/* Final Sub-line */}
          <p className="text-gray-500 text-xs mt-4">
            Because if the cover does not impress you what else can?
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;