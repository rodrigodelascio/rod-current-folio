import React from "react";
import rodCircle from "../../../assets/images/rodCircle.png";
import decorativeFrame from "../../../assets/images/decorativeFrameWithArrows.png";
import styles from "./AboutHeroSection.module.css";

const AboutHeroSection = () => {
  return (
    <div className={styles["about-hero-container"]}>
      <div className={styles["about-hero-text-container"]}>
        <img
          src={decorativeFrame}
          alt="gray tall rectangle with purple whirly arrows"
        />
        <h1>About Me.</h1>
        <div className={styles["about-socials-container"]}>
          <a>1</a>
          <a>1</a>
          <a>1</a>
        </div>
      </div>
      <div>
        <div>
          <h2>Hi there</h2>
        </div>
      </div>
      <div className={styles["profile-pic-container"]}>
        <img src={rodCircle} alt="rodrigo de lascio ai" />
      </div>
    </div>
  );
};

export default AboutHeroSection;
