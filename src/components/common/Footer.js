import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logoRod.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.border}></div>
      <div className={styles["main-footer-container"]}>
        <div className={styles["logo-copyright-wrapper"]}>
          <Link to="/">
            <img src={logo} alt="black logo" />
          </Link>
          <p>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#169; 2023 Rodrigo De Lascio</p>
        </div>
        <div className={styles["footer-links"]}>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>
        <p className={styles.email}>
          <a href="mailto:rodrigodelascio@gmail.com">
            rodrigodelascio@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
