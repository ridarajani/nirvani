import StickyNav from "@/components/layout/StickyNav";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BrandEssenceStrip from "@/components/sections/BrandEssenceStrip";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import MethodsSection from "@/components/sections/MethodsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="bg-light overflow-x-hidden">
      <StickyNav />
      <HeroSection />
      <BrandEssenceStrip />
      <AboutSection />
      <ServicesSection />
      <MethodsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
