// app/components/ProjectsSection.tsx
import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Github } from 'lucide-react';

// --- Data for your projects ---
const projectsData = [
  {
    id: 1,
    title: 'YouTube Clone',
    description: 'A feature-rich video sharing platform built with the latest web technologies, offering a seamless user experience.',
    image: '/images/project-youtube.png', // Replace with your image path
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
    liveUrl: '#', // Replace with your live URL
    githubUrl: '#', // Replace with your GitHub URL
  },
  {
    id: 2,
    title: 'Spotify Clone',
    description: 'A music streaming application with real-time playback, playlist management, and a dynamic user interface.',
    image: '/images/project-spotify.png', // Replace with your image path
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    description: 'A fully functional online store with product listings, a shopping cart, and a secure checkout process.',
    image: '/images/project-ecommerce.png', // Replace with your image path
    tags: ['Next.js', 'Stripe', 'GraphQL', 'Sanity.io'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

// --- The Main Component ---
const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-px bg-accent"></span>
            <p className="text-sm font-semibold text-secondary">My Portfolio</p>
            <span className="w-8 h-px bg-accent"></span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Featured Projects
          </h2>
        </div>

        {/* --- Projects Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Project Card Sub-component ---
interface ProjectCardProps {
  project: typeof projectsData[0];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative rounded-xl overflow-hidden bg-dark shadow-lg">
      {/* --- The Animation: Image zooms on hover --- */}
      <Image
        src={project.image}
        alt={project.title}
        width={1200}
        height={800}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      
      {/* --- The Animation: Dark overlay fades in on hover --- */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />

      {/* --- The Animation: Content slides up on hover --- */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 transform transition-transform duration-500 ease-in-out translate-y-8 group-hover:translate-y-0">
        <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
        <p className="text-secondary text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* --- The Animation: Links appear on hover --- */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-dark/50 rounded-full text-primary hover:bg-accent transition-colors">
          <Github size={20} />
        </a>
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-dark/50 rounded-full text-primary hover:bg-accent transition-colors">
          <ArrowUpRight size={20} />
        </a>
      </div>
    </div>
  );
};

export default ProjectsSection;