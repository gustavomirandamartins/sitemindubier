import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { BusinessAtRisk } from "@/components/BusinessAtRisk";
import { LogoCarousel } from "@/components/LogoCarousel";
import { SolutionsSection } from "@/components/SolutionsSection";
import { BenchmarkSection } from "@/components/BenchmarkSection";
import { PlatformSection } from "@/components/PlatformSection";
import { ScienceSection } from "@/components/ScienceSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BusinessAtRisk />
      <LogoCarousel />
      <SolutionsSection />
      <BenchmarkSection />
      <PlatformSection />
      <ScienceSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
