import React from "react";
import projectsShowcaseImg from "../../../assets/images/projectsShowcase.png";
import { Fade, Slide } from "react-awesome-reveal";
import styles from "./ProjectsHero.module.css";

const ProjectsHero = () => {
  return (
    <div className={styles["projects-page-container"]}>
      <div className={styles["projects-hero-container"]}>
        <div className={styles["projects-hero-text-wrapper"]}>
          <Fade cascade triggerOnce>
            <h1>Projects.</h1>
            <h2>
              Check out some of my <br />
              projects and case studies
            </h2>
            <p>
              I've worked on a range of personal projects and case studies,
              including websites and apps.
            </p>
          </Fade>
        </div>
        <Slide direction="right" triggerOnce>
          <div className={styles["projects-hero-image-wrapper"]}>
            <img
              src={projectsShowcaseImg}
              alt="showcase of projects in different media screens"
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default ProjectsHero;
