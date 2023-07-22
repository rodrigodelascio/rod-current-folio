import React from "react";
import Navbar from "../components/common/Navbar";
import AboutHeroSection from "../components/aboutpage/aboutHeroSection/AboutHeroSection";
import QuickFacts from "../components/aboutpage/quickFacts/QuickFacts";
import Footer from "../components/common/Footer";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <AboutHeroSection />
      <QuickFacts />
      <Footer />
    </div>
  );
};

export default AboutPage;
