import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "../../assets/images/rodLogoBlack.png";

const Footer = () => {
  return (
    <div>
      <div className={styles.border}></div>
      <div className={styles["main-footer-container"]}>
        <div className={styles["logo-copyright-wrapper"]}>
          <Link to="/">
            <img src={logo} alt="black logo" />
          </Link>
          <p>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#169; 2023 All Rights Reserved</p>
        </div>
        <p>Designed and built by Rodrigo De Lascio</p>
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
