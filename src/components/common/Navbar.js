import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logoRod.png";
import pdf from "../../assets/files/rodrigoCV.pdf";
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

  const navActiveStyle = ({ isActive }) => {
    return {
      color: isActive ? "#8873ef" : "",
      textDecoration: isActive ? "underline #8873ef 0.25rem" : "",
      textUnderlineOffset: isActive ? "0.5rem" : "",
    };
  };

  return (
    <div className={styles["main-navbar-container"]}>
      <div className={styles["logo-container"]}>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className={styles["navbar-links-container"]}>
        <div
          className={
            !isMobile
              ? styles["inner-links-container"]
              : `${styles["inner-links-container"]} ${styles["responsive-navbar"]}`
          }
        >
          <NavLink
            to="/about"
            onClick={clickToHide}
            className={styles.navlinks}
            style={navActiveStyle}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            onClick={clickToHide}
            className={styles.navlinks}
            style={navActiveStyle}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            onClick={clickToHide}
            className={styles.navlinks}
            style={navActiveStyle}
          >
            Contact
          </NavLink>
          <CgClose
            size={30}
            className={styles["hamburger-close-icon"]}
            onClick={() => setIsMobile(!isMobile)}
          />
        </div>
      </div>
      <div>
        <a className={styles["cv-button"]} href={pdf} target="__blank">
          My CV <GoArrowUpRight className={styles.arrow} />
        </a>
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
