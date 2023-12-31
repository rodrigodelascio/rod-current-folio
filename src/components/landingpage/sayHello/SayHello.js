import React from "react";
import styles from "./SayHello.module.css";
import { MdEmail, MdLocationCity } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

const SayHello = () => {
  return (
    <div className={styles["section-container"]}>
      <div className={styles["hero-text-container"]}>
        <Fade cascade triggerOnce>
          <p>These are my</p>
          <h2>Contact</h2>
          <h3>Details</h3>
        </Fade>
        <Slide triggerOnce>
          <div className={styles["contact-details"]}>
            <div className={styles["icon-wrapper"]}>
              <div className={styles.icon}>
                <MdEmail />
              </div>
            </div>
            <div>
              <p>Email</p>
              <h4 className={styles["email-h4"]}>
                <a href="mailto:rodrigodelascio@gmail.com">
                  rodrigodelascio@gmail.com
                </a>
              </h4>
            </div>
          </div>
          <div className={styles["contact-details"]}>
            <div className={styles["icon-wrapper"]}>
              <div className={styles.icon}>
                <MdLocationCity />
              </div>
            </div>
            <div>
              <p>Location</p>
              <h4>Walton-on-Thames</h4>
              <h4>35 mins from Central London</h4>
            </div>
          </div>
        </Slide>
      </div>
      <div className={styles["round-container"]}>
        <Slide direction="right" triggerOnce>
          <div className={styles["round-wrapper"]}>
            <p>Say Hello!</p>
            <Link className={styles["button-wrapper"]} to="/contact">
              <GoArrowUpRight className={styles.arrow} />
            </Link>
            <div className={styles.quote}>
              {/* <p>
                <em>
                  "I am the master of my fate, <br />I am the captain of my
                  soul",
                </em>
                <br />
                William Ernest Henley
              </p> */}
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default SayHello;
