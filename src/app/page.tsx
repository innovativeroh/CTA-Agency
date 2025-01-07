import Hero from "@/components/Landing-Section/Hero";
import Header from "../components/core/Header";
import ExperienceSection from "@/components/Landing-Section/ExperienceSection";
import { OurClientsSection } from "@/components/Landing-Section/OurClientsSection";
import { TestimonialsSection } from "@/components/Landing-Section/TestimonialsSection";
import OurServicesSection from "@/components/Landing-Section/OurServicesSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ExperienceSection />
      <OurClientsSection />
      <TestimonialsSection />
      <OurServicesSection />
    </>
  );
}
