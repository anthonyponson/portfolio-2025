// app/page.tsx
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      {/* Other sections of your portfolio will go here */}
    </main>
  );
}