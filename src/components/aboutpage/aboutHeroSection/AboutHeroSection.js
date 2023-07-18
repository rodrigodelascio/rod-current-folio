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
            Having come from a diverse background of studies and work
            experiences, I have recently enrolled to study Computer Science at
            Arden University. Passionate about technology, I love adding to my
            tech stack, improving myself, and have been working on front-end
            projects since 2022.
          </p>
          <hr />
          <div></div>
        </div>
      </div>
      <div className={styles["second-section-template"]}>
        <div></div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
