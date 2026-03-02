import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PositioningSection from "@/components/PositioningSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";

import PublicContractsSection from "@/components/PublicContractsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PositioningSection />
      <AboutSection />
      <ServicesSection />
      <DifferentialsSection />
      
      <PublicContractsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
