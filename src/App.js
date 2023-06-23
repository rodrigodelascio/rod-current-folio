import React from "react";
import Navbar from "./components/common/Navbar";
import HeroSection from "./components/landing/HeroSection";
import Skills from "./components/skills/Skills";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
