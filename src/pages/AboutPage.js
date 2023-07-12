import React from "react";
import Navbar from "../components/common/Navbar";
import AboutHeroSection from "../components/aboutpage/aboutHeroSection/AboutHeroSection";
import Footer from "../components/common/Footer";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <AboutHeroSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
