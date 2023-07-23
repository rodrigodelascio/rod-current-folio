import React from "react";
import sunnysideMac from "../../../assets/images/sunnysideMac.png";
import styles from "./ProjectsShowcase.module.css";

const ProjectsShowcase = () => {
  return (
    <div className={styles["projects-showcase-container"]}>
      <div className={styles["project-wrapper"]}>
        <div className={styles["project-image-wrapper"]}>
          <img src={sunnysideMac} alt="imac screen with sunnyside website" />
        </div>
        <div className={styles["project-description-wrapper"]}>
          <h3>Sunnyside Website</h3>
          <p>
            The website for Sunnyside Creative Agency, built with HTML, CSS and
            JavaScript, using Flexbox and optimized for the most common screen
            sizes.
          </p>
          <button>Live Project</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
