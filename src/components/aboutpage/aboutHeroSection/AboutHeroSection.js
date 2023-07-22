import React from "react";
import rodProfile from "../../../assets/images/rodProfile.png";
import { FaClockRotateLeft, FaRegClock } from "react-icons/fa6";
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
            experiences, I decided to make a career change after over a decade
            working in marketing and as a linguist. Passionate about technology,
            I love adding to my tech stack, improving myself, and been working
            on front-end projects since 2022.
          </p>
          <hr />
          <div className={styles["past-present-future-container"]}>
            <div className={styles["past-present-future-wrapper"]}>
              <h3>
                The Past &nbsp;&nbsp;
                <FaClockRotateLeft />
              </h3>
              <p>
                I have studied the foundations of Computer Science at a young
                age and moved away from the area due to personal circumstances.
                I have achieved a BA in Journalism and a Beng in Civil
                Engineering afterwards.
              </p>
            </div>
            <div className={styles["past-present-future-wrapper"]}>
              <h3>
                The Present &nbsp;&nbsp;
                <FaRegClock />
              </h3>
              <p>
                I found my way back to computing and as a lifelong learner,
                after recently attending a Software Development Bootcamp, I
                decided to go back to university to enhance my knowledge and
                become a better professional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
