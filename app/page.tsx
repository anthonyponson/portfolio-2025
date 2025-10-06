// app/page.tsx
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ToolsSection from './components/ToolsSection'; // 1. Import the new component
import ProjectsSection from './components/ProjectsSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ToolsSection /> {/* 2. Add it to the page */}
      <ProjectsSection />
    </>
  );
}