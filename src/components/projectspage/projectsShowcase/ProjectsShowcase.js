import React from "react";
import styles from "./ProjectsShowcase.module.css";

const ProjectsShowcase = () => {
  return (
    <div className={styles["projects-showcase-container"]}>
      <div className={styles["project-wrapper"]}>
        <div className={styles["project-image-wrapper"]}>&nbsp;</div>
        <div className={styles["project-description-wrapper"]}>
          <h3>Sunnyside Website</h3>
          <p>A website</p>
          <button>CASE STUDY</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
