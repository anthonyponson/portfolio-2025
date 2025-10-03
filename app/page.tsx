// app/page.tsx
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection'; // 1. Import the new component

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection /> {/* 2. Add it to the page */}
    </>
  );
}