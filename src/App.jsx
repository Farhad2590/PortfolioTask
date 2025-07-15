import React from "react";
import PortfolioSection from "./components/PortfolioSection";
import ConstructionHero from "./components/ConstructionHero";
import WhatWeDoSection from "./components/WhatWeDoSection";
import DigitalSection from "./components/DigitalSection";
import MockupSection from "./components/MockupSection";
import BrandValuesSection from "./components/BrandValuesSection";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";

const App = () => {
  return (
    <div className="">

      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <BrandValuesSection />
      <ConstructionHero />
      <WhatWeDoSection />
      <MockupSection />
      <DigitalSection />
      <ContactSection/>
    </div>
  );
};

export default App;
