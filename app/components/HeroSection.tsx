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
        `gap-16` creates the space between them.
      */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-16">

        {/* --- LEFT COLUMN: AVATAR --- */}
        <div className="relative flex-shrink-0 w-[258px] h-[259px]">
          {/* The Avatar Image */}
          <Image
            src="/images/profile.jpeg" // IMPORTANT: Make sure you have this image in your /public folder
            alt=""
            width={278}
            height={299}
            priority
            className='rounded-full'
          />
        
          <div className="absolute top-[-1rem] right-[-3rem] w-max">
            <div className="relative">
              <p className="text-gray-300 text-sm">
                
              </p>
              <svg
                width="80"
                height="50"
                viewBox="0 0 80 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[-25px] left-[-60px] transform -scale-x-100"
              >
                <path
                  d="M75.5 45C65.5 30.5 33.5 6 5.5 5"
                  stroke="#9CA3AF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 1L2 6.5L5.5 5"
                  stroke="#9CA3AF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: TEXT CONTENT --- */}
        <div className="flex flex-col items-start text-left max-w-md">
          {/* Subtitle */}
          <p className="text-gray-400 mb-2 text-base ml-4">
            Hello! I Am <span className="text-purple-400 font-semibold">Ibrahim Memon</span> <br />
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
             A Designer who Never
            Judges a book by its{' '}
            <span className="relative inline-block">
              <span className="text-purple-400">cover</span>
              {/* SVG Circle Effect */}
              <svg
                className="absolute top-1/2 left-1/2 w-[140%] h-[180%] transform -translate-y-1/2 -translate-x-1/2"
                viewBox="0 0 100 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.23932 21.1442C15.4241 8.48783 45.428 -5.2533 78.6948 5.61993C111.962 16.4932 110.151 40.2319 86.3113 45.31C62.4715 50.3881 29.5896 46.1365 14.1623 35.3033C-1.26498 24.4701 -2.94541 33.7995 6.23932 21.1442Z"
                  stroke="white"
                  strokeOpacity="0.8"
                  strokeWidth="1.5"
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