import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logoRodWhite.png";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className={styles["main-footer-container"]}>
        <div className={styles["logo-copyright-wrapper"]}>
          <Link to="/">
            <img src={logo} alt="black logo" />
          </Link>
          <p>
            |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#169; {currentYear} Rodrigo De
            Lascio
          </p>
        </div>
        <div className={styles["footer-links"]}>
          <Link to="/about" className={styles.footerNav}>
            About
          </Link>
          <Link to="/projects" className={styles.footerNav}>
            Projects
          </Link>
          <Link to="/contact" className={styles.footerNav}>
            Contact
          </Link>
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
