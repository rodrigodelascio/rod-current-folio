import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/landingpage/heroSection/HeroSection";
import Skills from "../components/landingpage/skills/Skills";
import LatestProjects from "../components/landingpage/latestProjects/LatestProjects";
import SayHello from "../components/landingpage/sayHello/SayHello";
import Footer from "../components/common/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Skills />
      <LatestProjects />
      <SayHello />
      <Footer />
    </div>
  );
};

export default HomePage;
