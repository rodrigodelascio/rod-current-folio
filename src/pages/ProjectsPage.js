import React from "react";
import Navbar from "../components/common/Navbar";
import ProjectsHero from "../components/projectspage/projectsHero/ProjectsHero";
import Footer from "../components/common/Footer";

const ProjectsPage = () => {
  return (
    <div>
      <Navbar />
      <ProjectsHero />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
