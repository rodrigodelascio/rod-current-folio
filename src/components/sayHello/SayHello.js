import React from "react";
import styles from "./SayHello.module.css";
import { MdEmail, MdLocationCity } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";

const SayHello = () => {
  return (
    <div className={styles["section-container"]}>
      <div className={styles["hero-text-container"]}>
        <p>These are my</p>
        <h2>Contact</h2>
        <h3>Details</h3>
        <div className={styles["contact-details"]}>
          <div className={styles["icon-wrapper"]}>
            <div className={styles.icon}>
              <MdEmail />
            </div>
          </div>
          <div>
            <p>Email</p>
            <h4>rodrigodelascio@gmail.com</h4>
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
      </div>
      <div className={styles["round-container"]}>
        <div className={styles["round-wrapper"]}>
          <p>Say Hello!</p>
          <div className={styles["button-wrapper"]}>
            <GoArrowUpRight className={styles.arrow} />
          </div>
          {/* <div className={styles.shape}></div> */}
          <div className={styles.quote}>
            <p>
              <em>
                "I am the master of my fate, <br />I am the captain of my soul",
              </em>
              <br />
              William Ernest Henley
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SayHello;
