import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";
import profilePicture from "../../../assets/images/rodHexagon.png";
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

        <div className={styles["hero-buttons-container"]}>
          <a href="mailto:rodrigodelascio@gmail.com">
            <button className={styles["button-contact"]}>
              Let's Talk <GoPaperAirplane className={styles.airplane} />
            </button>
          </a>
          <Link to="/projects">
            <button className={styles["button-work"]}>
              My Work <GoArrowUpRight className={styles.arrow} />
            </button>
          </Link>
        </div>

        <div className={styles["landing-socials-container"]}>
          <p>Check Out My</p>
          <a
            className={styles["socials-logo-wrapper"]}
            href="https://www.linkedin.com/in/rodrigo-de-lascio/"
            target="__blank"
          >
            <BiLogoLinkedin className={styles.linkedIn} />
          </a>
          <a
            className={styles["socials-logo-wrapper"]}
            href="https://github.com/rodrigodelascio"
            target="__blank"
          >
            <DiGithubAlt className={styles.gitHub} />
          </a>
        </div>
      </div>

      <div className={styles["profile-pic-container"]}>
        <p>
          <em>
            "It ain't about how hard you hit.
            <br />
            It's about how hard you can get
            <br />
            hit and keep moving forward",
          </em>
          <br />
          Rocky Balboa
        </p>
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