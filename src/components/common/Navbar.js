import React, { useState } from "react";
import logo from "../../assets/images/rodLogoBlack.png";
import { GoArrowUpRight } from "react-icons/go";
import { CgMenu, CgClose } from "react-icons/cg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const clickToHide = () => {
    if (isMobile) {
      setIsMobile(!isMobile);
    }
  };

  return (
    <div className={styles["main-navbar-container"]}>
      <div className={styles["logo-container"]}>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <p className={styles["logo-text"]}>
          <a href="/">
            Rodrigo <br />
            De Lascio
          </a>
        </p>
      </div>
      <div className={styles["navbar-links-container"]}>
        <div
          className={
            !isMobile
              ? styles["inner-links-container"]
              : `${styles["inner-links-container"]} ${styles["responsive-navbar"]}`
          }
        >
          <a href="/about" onClick={clickToHide}>
            About
          </a>
          <a href="/projects" onClick={clickToHide}>
            Projects
          </a>
          <a href="/contact" onClick={clickToHide}>
            Contact
          </a>
          <CgClose
            size={30}
            className={styles["hamburger-close-icon"]}
            onClick={() => setIsMobile(!isMobile)}
          />
        </div>
      </div>
      <div>
        <button className={styles["cv-button"]}>
          My CV <GoArrowUpRight className={styles.arrow} />
        </button>
        <div className={styles["hamburger-menu-container"]}>
          <CgMenu
            size={30}
            className={styles["hamburger-menu-icon"]}
            onClick={() => setIsMobile(!isMobile)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
