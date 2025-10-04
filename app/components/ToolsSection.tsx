// app/components/ToolsSection.tsx
import React from 'react';
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiMongodb, SiNodedotjs,
  SiAdobephotoshop, SiAdobeillustrator, SiFigma
} from 'react-icons/si';

// --- Data for the tools and technologies ---
const toolCategories = [
  {
    title: 'Full Stack Tech',
    tools: [
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <SiCss3 /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'React', icon: <SiReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
    ]
  },
  {
    title: 'Graphic Design',
    tools: [
      { name: 'Photoshop', icon: <SiAdobephotoshop /> },
      { name: 'Illustrator', icon: <SiAdobeillustrator /> },
    ]
  },
  {
    title: 'UI Design',
    tools: [
      { name: 'Figma', icon: <SiFigma /> },
    ]
  }
];

// --- The Main Component ---
const ToolsSection = () => {
  return (
    <section id="tools" className="py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-px bg-accent"></span>
            <p className="text-sm font-semibold text-secondary">My Tech Stack</p>
            <span className="w-8 h-px bg-accent"></span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Tools & Technologies
          </h2>
        </div>

        {/* --- Categories List --- */}
        <div className="space-y-12">
          {toolCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-semibold text-primary border-b border-accent pb-4 mb-8">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                {category.tools.map((tool) => (
                  <ToolItem key={tool.name} name={tool.name} icon={tool.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Tool Item Sub-component ---
interface ToolItemProps {
  name: string;
  icon: React.ReactNode;
}

const ToolItem: React.FC<ToolItemProps> = ({ name, icon }) => {
  return (
    <div className="group flex flex-col items-center justify-center gap-2 p-4 bg-dark/50 rounded-lg transition-all duration-300 hover:bg-dark hover:scale-105">
      <div className="text-4xl text-secondary group-hover:text-accent transition-colors duration-300">
        {icon}
      </div>
      <span className="text-sm text-primary">{name}</span>
    </div>
  );
};

export default ToolsSection;