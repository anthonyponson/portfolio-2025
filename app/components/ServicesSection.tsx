// app/components/ServicesSection.tsx
'use client'; // This is a client component because it uses state

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Plus, ArrowRight } from 'lucide-react';

// --- Data for the services (Updated with your skills) ---
const servicesData = [
  {
    id: 1,
    title: 'Web Design',
    tags: ['Figma', 'Sketch', 'User Research', 'Prototyping'],
    description: 'Crafting intuitive and visually stunning website interfaces. My focus is on creating designs that are not only beautiful but also highly functional and conversion-optimized.',
    image: '/images/service-image-web.png', // Placeholder image
  },
  {
    id: 2,
    title: 'Full Stack Development',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Serverless'],
    description: 'Building robust, scalable, and high-performance web applications from the ground up. Specializing in the latest Next.js features for both frontend and backend logic.',
    image: '/images/service-image-fullstack.png', // Placeholder image
  },
  {
    id: 3,
    title: 'Graphic Design',
    tags: ['Branding', 'Logo Design', 'Print Media', 'Illustration'],
    description: 'Developing compelling visual identities and marketing materials that communicate your brand story effectively and leave a lasting impression.',
    image: '/images/service-image-graphic.png', // Placeholder image
  },
  {
    id: 4,
    title: 'UI Design',
    tags: ['Visual Hierarchy', 'Color Theory', 'Typography', 'Component Libraries'],
    description: 'Focusing on the aesthetic and interactive elements of a product. I ensure every button, icon, and layout contributes to a seamless and delightful user experience.',
    image: '/images/service-image-ui.png', // Placeholder image
  },
];

// --- The Main Component ---
const ServicesSection = () => {
  // State to track the currently open accordion item. Default to the 2nd item (Full Stack Developer).
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const handleToggle = (index: number) => {
    // If the clicked item is already open, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* --- Section Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-px bg-accent"></span>
              <p className="text-sm font-semibold text-secondary">My Specialization</p>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Services <span className="text-accent">I Provide</span>
            </h2>
          </div>
          <p className="text-secondary max-w-xs mt-4 md:mt-0 md:text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>

        {/* --- Accordion List --- */}
        <div className="space-y-4">
          {servicesData.map((service, index) => (
            <ServiceItem
              key={service.id}
              service={service}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* --- View All Button --- */}
        <div className="flex justify-center mt-12">
          <button className="bg-accent text-primary font-semibold py-3 px-6 rounded-full flex items-center gap-2 group">
            View All Services
            <span className="bg-dark text-primary w-8 h-8 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRight size={16} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

// --- Accordion Item Sub-component ---
interface ServiceItemProps {
  service: typeof servicesData[0];
  isOpen: boolean;
  onToggle: () => void;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service, isOpen, onToggle }) => {
  return (
    <div
      className={`rounded-2xl p-6 cursor-pointer transition-all duration-500 ease-in-out ${
        isOpen ? 'bg-dark' : 'bg-dark/50 hover:bg-dark/70'
      }`}
      onClick={onToggle}
    >
      {/* --- Header (Always Visible) --- */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span className={`text-2xl font-semibold ${isOpen ? 'text-secondary' : 'text-primary'}`}>
            {`0${service.id}.`}
          </span>
          <h3 className={`text-2xl font-semibold ${isOpen ? 'text-primary' : 'text-primary'}`}>
            {service.title}
          </h3>
        </div>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
            isOpen ? 'bg-accent text-primary' : 'bg-dark text-primary'
          }`}
        >
          {isOpen ? <X size={16} /> : <Plus size={16} />}
        </div>
      </div>

      {/* --- Expandable Content --- */}
      <div
        className="overflow-hidden transition-[max-height] duration-700 ease-in-out"
        style={{ maxHeight: isOpen ? '500px' : '0px' }} // Animate max-height
      >
        <div className="pt-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {service.tags.map((tag) => (
              <span key={tag} className="bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-secondary mb-6">{service.description}</p>
          <div className="rounded-lg overflow-hidden">
            {/* The image is only visible when expanded */}
            <Image src={service.image} alt={service.title} width={600} height={300} className="w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;