import React from "react";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import HeroSection from "./components/landing/HeroSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default App;
