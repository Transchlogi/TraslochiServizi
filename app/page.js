import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import BeforeAfterSection from "@/components/BeforeAfterSection"; // New Before and After Section
import Map from "@/components/map";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <Services />

      {/* Before and After Section */}
      <BeforeAfterSection />

      {/* Map Section */}
      <Map />

      {/* Footer */}
      <Footer />
    </>
  );
}
