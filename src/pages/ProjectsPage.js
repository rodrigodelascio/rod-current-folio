import React from "react";
import Navbar from "../components/common/Navbar";
import ProjectsHero from "../components/projectspage/projectsHero/ProjectsHero";
import ProjectsShowcase from "../components/projectspage/projectsShowcase/ProjectsShowcase";
import Footer from "../components/common/Footer";

const ProjectsPage = () => {
  return (
    <div>
      <Navbar />
      <ProjectsHero />
      <ProjectsShowcase />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
