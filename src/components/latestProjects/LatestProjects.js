import React from "react";
import styles from "./LatestProjects.module.css";

const LatestProjects = () => {
  return (
    <div className={styles["section-container"]}>
      <div className={styles["hero-text-container"]}>
        <p>Some of my</p>
        <h2>Latest</h2>
        <h3>Projects</h3>
      </div>
    </div>
  );
};

export default LatestProjects;
