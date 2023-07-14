import React from "react";
import styles from "./AboutHeroSection.module.css";

const AboutHeroSection = () => {
  return (
    <div className={styles["about-page-container"]}>
      <div className={styles["about-hero-text-container"]}>
        <div className={styles["about-hero-text-wrapper"]}>
          <h1>About Me.</h1>
        </div>
        <div>
          <div>
            <h2>Hi there</h2>
          </div>
        </div>
      </div>
      <div className={styles["profile-pic-container"]}>
        {/* <img src={} alt="rodrigo de lascio ai" /> */}
      </div>
    </div>
  );
};

export default AboutHeroSection;
