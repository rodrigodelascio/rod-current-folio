import React from "react";
import rodProfile from "../../../assets/images/rodProfile.png";
import styles from "./AboutHeroSection.module.css";

const AboutHeroSection = () => {
  return (
    <div className={styles["about-page-container"]}>
      <div className={styles["about-hero-text-container"]}>
        <div className={styles["profile-pic-container"]}>
          <img src={rodProfile} alt="rodrigo de lascio ai" />
        </div>
        <div className={styles["about-hero-text-wrapper"]}>
          <h1>About Me.</h1>
          <h2>
            I'm a web developer based in
            <br />
            Walton-on-Thames, UK
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <hr />
        </div>
      </div>
      <div className={styles["second-section-template"]}>
        <div></div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
