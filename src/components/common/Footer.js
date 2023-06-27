import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/rodLogoBlack.png";

const Footer = () => {
  return (
    <div>
      <div className={styles.border}></div>
      <div className={styles["main-footer-container"]}>
        <div className={styles["logo-copyright-wrapper"]}>
          <img src={logo} alt="black logo" />
          <p>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#169; 2023 All Rights Reserved</p>
        </div>
        <p>Designed and built by Rodrigo De Lascio</p>
        <p className={styles.email}>rodrigodelascio@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
