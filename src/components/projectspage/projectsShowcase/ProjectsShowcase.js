import React from "react";
import sunnysideMac from "../../../assets/images/sunnysideMac.png";
import rodweatherMac from "../../../assets/images/rodWeather.png";
import rodKryptoMac from "../../../assets/images/rodKryptoMac.png";
import { GoArrowUpRight } from "react-icons/go";
import { DiGithubAlt } from "react-icons/di";
import styles from "./ProjectsShowcase.module.css";

const ProjectsShowcase = () => {
  return (
    <div>
      <div className={styles["projects-showcase-container-odd"]}>
        <div className={styles["project-wrapper"]}>
          <div className={styles["project-image-wrapper"]}>
            <img src={sunnysideMac} alt="imac screen with sunnyside website" />
          </div>
          <div className={styles["project-description-wrapper"]}>
            <h3>Sunnyside Website</h3>
            <p>
              The website for Sunnyside Creative Agency, built with HTML, CSS
              and JavaScript, using Flexbox and optimized for the most common
              screen sizes.
            </p>
            <a
              href="https://rodrigodelascio.github.io/Sunnyside-Agency-Website/"
              target="__blank"
            >
              <button>
                Live Project&nbsp;&nbsp;
                <GoArrowUpRight />
              </button>
            </a>
            <h5>Tech Stack:</h5>
            <div className={styles["tech-stack-wrapper"]}>
              <h6>HTML</h6>
              <h6>CSS</h6>
              <h6>JavaScript</h6>
              <h6>GIT</h6>
              <h6>GitHub</h6>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["projects-showcase-container-even"]}>
        <div className={styles["project-wrapper"]}>
          <div className={styles["project-image-wrapper"]}>
            <img src={rodweatherMac} alt="imac screen with rodweather app" />
          </div>
          <div className={styles["project-description-wrapper"]}>
            <h3>RodWeather App</h3>
            <p>
              A weather app built pulling data different APIs, featuring
              geolocation and autocomplete functionalities, displaying
              background images related to the weather location.
            </p>
            <a
              href="https://rodrigodelascio.github.io/RodWeather/"
              target="__blank"
            >
              <button>
                Live Project&nbsp;&nbsp;
                <GoArrowUpRight />
              </button>
            </a>
            <h5>Tech Stack:</h5>
            <div className={styles["tech-stack-wrapper"]}>
              <h6>HTML</h6>
              <h6>CSS</h6>
              <h6>JavaScript</h6>
              <h6>OpenWeather API</h6>
              <h6>Geo DB Cities API</h6>
              <h6>Unsplash API</h6>
              <h6>GIT</h6>
              <h6>GitHub</h6>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["projects-showcase-container-odd"]}>
        <div className={styles["project-wrapper"]}>
          <div className={styles["project-image-wrapper"]}>
            <img src={rodKryptoMac} alt="imac screen with rodkrypto app" />
          </div>
          <div className={styles["project-description-wrapper"]}>
            <h3>RodKrypto App</h3>
            <p>
              A cryptocurrency app built pulling data from different APIs,
              featuring the top 10 cryptocurrencies price list, in real time,
              displayed in GBP.
            </p>
            <a
              href="https://rodrigodelascio.github.io/RodKrypto/"
              target="__blank"
            >
              <button>
                Live Project&nbsp;&nbsp;
                <GoArrowUpRight />
              </button>
            </a>
            <h5>Tech Stack:</h5>
            <div className={styles["tech-stack-wrapper"]}>
              <h6>HTML</h6>
              <h6>CSS</h6>
              <h6>JavaScript</h6>
              <h6>CoinPaprika API</h6>
              <h6>CoinGecko API</h6>
              <h6>ExchangeRate API</h6>
              <h6>GIT</h6>
              <h6>GitHub</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
