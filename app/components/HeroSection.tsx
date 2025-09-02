// app/components/HeroSection.tsx
import React from 'react';

const HeroSection = () => {
  return (
    // Main container: Increased horizontal padding (lg:px-32) for a much wider margin
    <section 
      id="home" 
      className="flex min-h-screen items-center justify-center md:justify-end px-8 sm:px-16 lg:px-32"
    >
      {/* 
        Content Wrapper: Reduced max-width to make the text block smaller.
      */}
      <div className="w-full max-w-lg flex flex-col items-start text-left">

        {/* Annotation Block: "Hello! I Am..." */}
        <div className="relative mb-3">
          {/* Text size reduced to text-xs */}
          <p className="text-gray-400 text-xs">
            Hello! I Am <span className="text-purple-400 font-semibold">Ibrahim Memon</span>
          </p>
          {/* 
            SVG Arrow: Made smaller and repositioned to match the smaller text
          */}
          <svg
            width="60" // Reduced from 80
            height="40" // Reduced from 50
            viewBox="0 0 80 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-15px] left-[-45px]" // Adjusted position
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

        {/* "A Designer who" Subtitle */}
        {/* Text size reduced to text-sm */}
        <p className="text-gray-400 mb-1 text-sm"> 
          A Designer who
        </p>

        {/* Main Heading: Reduced font size from 6xl to 5xl on large screens */}
        <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
          Judges a book
          <br />
          by its{' '}
          <span className="relative inline-block">
            <span className="text-purple-400">cover</span>
            {/* SVG Circle Effect - this will scale automatically with the text */}
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
        {/* Using a custom very small text size */}
        <p className="text-gray-500 text-[10px] mt-3"> 
          Because if the cover does not impress you what else can?
        </p>

      </div>
    </section>
  );
};

export default HeroSection;