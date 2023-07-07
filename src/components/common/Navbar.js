import React from "react";
import logo from "../../assets/images/rodLogoBlack.png";
import { GoArrowUpRight } from "react-icons/go";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles["main-navbar-container"]}>
      <div className={styles["logo-container"]}>
        <a href="#Home">
          <img src={logo} alt="logo" />
        </a>
        <p className={styles["logo-text"]}>
          <a href="#Home">
            Rodrigo <br />
            De Lascio
          </a>
        </p>
      </div>
      <div className={styles["navbar-links-container"]}>
        <div className={styles["inner-links-container"]}>
          <a href="#About">About</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact</a>
        </div>
      </div>
      <div>
        <button className={styles["cv-button"]}>
          My CV <GoArrowUpRight className={styles.arrow} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
