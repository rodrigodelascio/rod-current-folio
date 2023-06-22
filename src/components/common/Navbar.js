import React from "react";
import logo from "../../assets/images/rodLogoBlack.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-8">
      <div
        className={`flex flex-row items-center cursor-pointer ${styles.logo}`}
      >
        <a href="#Home">
          <img src={logo} alt="logo" />
        </a>
        <p className={`ml-5 leading-6 font-black ${styles["logo-text"]}`}>
          <a href="#Home">
            Rodrigo <br />
            De Lascio
          </a>
        </p>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <div className={`flex flex-row ${styles["navbar-links-container"]}`}>
          <p>
            <a href="#About">About</a>
          </p>
          <p>
            <a href="#Skills">Skills</a>
          </p>
          <p>
            <a href="#Project">Project</a>
          </p>
          <p>
            <a href="#Contact">Contact</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
