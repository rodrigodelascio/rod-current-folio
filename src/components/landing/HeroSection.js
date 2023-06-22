import React from "react";
import ProfilePicture from "./ProfilePicture";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles["section-container"]}>
      <div className={styles["hero-text-container"]}>
        <h2>
          Rodrigo <br />
          de Lascio
        </h2>
        <h2>Web Developer</h2>
        <p>AAA</p>
      </div>
      <div className={styles["profile-pic-container"]}>
        <ProfilePicture />
      </div>
    </div>
  );
};

export default HeroSection;
