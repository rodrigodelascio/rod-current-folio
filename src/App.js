import React from "react";
import Navbar from "./components/common/Navbar";
import HeroSection from "./components/landing/HeroSection";
import Skills from "./components/skills/Skills";
import LatestProjects from "./components/latestProjects/LatestProjects";
import SayHello from "./components/sayHello/SayHello";
import Footer from "./components/common/Footer";

const App = () => {
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

export default App;
