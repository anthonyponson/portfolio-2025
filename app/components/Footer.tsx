// app/components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, Instagram, Linkedin, Download, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="relative py-24 px-6 lg:px-8 overflow-hidden">
      
      {/* Background Grid - for visual consistency */}
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

      <div className="max-w-4xl mx-auto text-center">
        
        {/* --- Main Call to Action for Job Hunting --- */}
        <h2 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
          Interested in Hiring me?
        </h2>


        {/* --- PRIMARY ACTION: Download Resume Button --- */}
        <div className="mt-12">
          <a 
            href="/resume.pdf" // IMPORTANT: Place your resume in the /public folder
            download="OliverScott-Resume.pdf" // This prompts the user to download the file
            className="group inline-flex items-center justify-center gap-3 bg-accent text-primary font-bold py-4 px-8 rounded-full transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <Download size={20} />
            <span>Download My Resume</span>
          </a>
        </div>

        {/* --- Secondary Contact Information --- */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12">
          <a 
            href="mailto:your-email@example.com" 
            className="group flex items-center gap-3 text-lg text-secondary hover:text-primary transition-colors duration-300"
          >
            <Mail size={24} className="text-accent" />
            <span>antonyponson@gmail.com</span>
          </a>
          <a 
            href="tel:+1234567890" 
            className="group flex items-center gap-3 text-lg text-secondary hover:text-primary transition-colors duration-300"
          >
            <Phone size={24} className="text-accent" />
            <span>7639369679</span>
          </a>
        </div>

        {/* --- Bottom Bar: Socials & Copyright --- */}
        <div className="mt-20 pt-8 border-t border-accent/20 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-secondary order-2 sm:order-1 mt-4 sm:mt-0">
            &copy; {new Date().getFullYear()} Oliver Scott. All rights reserved.
          </p>
          <div className="flex gap-6 order-1 sm:order-2">
            {/* LinkedIn is crucial for job hunting */}
            <a href="https://www.linkedin.com/in/anthonyponson/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/antonyponson/?next=%2F" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors duration-300">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;