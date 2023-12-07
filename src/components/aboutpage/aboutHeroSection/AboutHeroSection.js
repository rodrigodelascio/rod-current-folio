import React from "react";
import rodProfile from "../../../assets/images/rodProfile.png";
import { FaClockRotateLeft, FaRegClock } from "react-icons/fa6";
import styles from "./AboutHeroSection.module.css";
import { Slide } from "react-awesome-reveal";

const AboutHeroSection = () => {
  return (
    <div className={styles["about-page-container"]}>
      <Slide triggerOnce>
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
              Versatile professional with a rich background, currently pursuing
              a computer science degree. A diverse work experience, showcasing
              adaptability and a strong foundation in problem solving. Committed
              to a career transition, with a unique blend of skills, including
              creativity, analytical thinking, and an unwavering dedication to
              learning. I've been working on front-end projects since 2022.
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
                  age and moved away from the area due to personal
                  circumstances. I have achieved a BA in Journalism and a Beng
                  in Civil Engineering along the way.
                </p>
              </div>
              <div className={styles["past-present-future-wrapper"]}>
                <h3>
                  The Present &nbsp;&nbsp;
                  <FaRegClock />
                </h3>
                <p>
                  I found my way back to computing and as a lifelong learner,
                  after attending a Software Development Bootcamp, I decided to
                  go back to university to enhance my knowledge and become a
                  professional developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default AboutHeroSection;
