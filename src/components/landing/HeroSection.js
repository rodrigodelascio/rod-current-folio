import React from "react";
import styles from "./HeroSection.module.css";
import profilePicture from "../../assets/images/rodHexagon.png";
import { GoPaperAirplane, GoArrowUpRight } from "react-icons/go";
import { DiGithubAlt } from "react-icons/di";
import { BiLogoLinkedin } from "react-icons/bi";

const HeroSection = () => {
  return (
    <div className={styles["section-container"]}>
      <div className={styles["hero-text-container"]}>
        <p>Hi there, my name is</p>
        <h2>Rodrigo De Lascio</h2>
        <h3>Web Developer</h3>
        <button className={styles["button-contact"]}>
          Let's Talk <GoPaperAirplane className={styles.airplane} />
        </button>
        <button className={styles["button-work"]}>
          My Work <GoArrowUpRight className={styles.arrow} />
        </button>
        <div className={styles["landing-socials-container"]}>
          <p>Check Out My</p>
          <div className={styles["socials-logo-wrapper"]}>
            <BiLogoLinkedin className={styles.linkedIn} />
          </div>
          <div className={styles["socials-logo-wrapper"]}>
            <DiGithubAlt className={styles.gitHub} />
          </div>
        </div>
      </div>
      <div className={styles["profile-pic-container"]}>
        <img
          src={profilePicture}
          className={styles["profile-pic"]}
          alt="rodrigo de lascio"
        />
      </div>
    </div>
  );
};

export default HeroSection;
