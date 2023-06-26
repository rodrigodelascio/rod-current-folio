import React from "react";
import styles from "./Skills.module.css";
import { GoArrowUpRight } from "react-icons/go";

const Skills = () => {
  return (
    <div className={styles["section-container"]}>
      <div className={styles["hero-text-container"]}>
        <p>Some of my</p>
        <h2>Skills &</h2>
        <h3>Experience</h3>
        <div>
          <div className={styles["skills-section-container"]}>
            <h4>Skills</h4>
            <div className={styles["skills-cards-container"]}>
              <div className={styles["skills-card"]}>JavaScript</div>
              <div className={styles["skills-card"]}>React</div>
              <div className={styles["skills-card"]}>Node.js</div>
              <div className={styles["skills-card"]}>Express.js</div>
              <div className={styles["skills-card"]}>jQuery</div>
              <div className={styles["skills-card"]}>CSS</div>
              <div className={styles["skills-card"]}>Bootstrap</div>
              <div className={styles["skills-card"]}>Tailwind CSS</div>
              <div className={styles["skills-card"]}>Bulma</div>
              <div className={styles["skills-card"]}>HTML</div>
              <div className={styles["skills-card"]}>Git</div>
              <div className={styles["skills-card"]}>Github</div>
              <div className={styles["skills-card"]}>Python</div>
              <div className={styles["skills-card"]}>MySQL</div>
              <div className={styles["skills-card"]}>MongoDB</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["experience-section-container"]}>
        <h4>Experience</h4>
        <div className={styles["experience-inner-wrapper"]}>
          <h5>
            <span>2019-2022</span> Senior Content Executive (GIMO)
          </h5>
          <p>Transferrable skills:</p>
          <div className={styles["transferrable-skills-wrapper"]}>
            <div className={styles["transferrable-skills-card"]}>HTML</div>
            <div className={styles["transferrable-skills-card"]}>
              Management
            </div>
            <div className={styles["transferrable-skills-card"]}>Teamwork</div>
            <div className={styles["transferrable-skills-card"]}>
              Reliability
            </div>
            <div className={styles["transferrable-skills-card"]}>
              Versatility
            </div>
          </div>
        </div>
        <div className={styles["experience-inner-wrapper"]}>
          <h5>
            <span>2015-2018</span> Freelance Graphic Designer
          </h5>
          <p>Transferrable skills:</p>
          <div className={styles["transferrable-skills-wrapper"]}>
            <div className={styles["transferrable-skills-card"]}>Adobe CS</div>
            <div className={styles["transferrable-skills-card"]}>
              Creativity
            </div>
            <div className={styles["transferrable-skills-card"]}>
              Time Management
            </div>
            <div className={styles["transferrable-skills-card"]}>
              Communication
            </div>
          </div>
        </div>
        <div className={styles["experience-inner-wrapper"]}>
          <h5>
            <span>2011-2015</span> Civil Engineering Student (UEL)
          </h5>
          <p>Transferrable skills:</p>
          <div className={styles["transferrable-skills-wrapper"]}>
            <div className={styles["transferrable-skills-card"]}>Maths</div>
            <div className={styles["transferrable-skills-card"]}>
              Problem Solving
            </div>
            <div className={styles["transferrable-skills-card"]}>Analysis</div>
            <div className={styles["transferrable-skills-card"]}>
              Detail Oriented
            </div>
          </div>
        </div>
        <div className={styles["cv-button-container"]}>
          <div className={styles["cv-button-wrapper"]}>
            <div>
              My CV <GoArrowUpRight className={styles.arrow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
