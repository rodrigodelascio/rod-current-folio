import React from "react";
import sunnysideMac from "../../../assets/images/sunnysideMac.png";
import rodweatherMac from "../../../assets/images/rodWeather.png";
import rodKryptoMac from "../../../assets/images/rodKryptoMac.png";
import letItShineMac from "../../../assets/images/letItShineMac.png";
import { GoArrowUpRight } from "react-icons/go";
import { Slide } from "react-awesome-reveal";
import styles from "./ProjectsShowcase.module.css";

const ProjectsShowcase = () => {
  return (
    <div>
      <div className={styles["projects-showcase-container-odd"]}>
        <div className={styles["project-wrapper"]}>
          <Slide triggerOnce>
            <div className={styles["project-image-wrapper"]}>
              <img
                src={letItShineMac}
                alt="imac screen with sunnyside website"
                className={styles["project-image"]}
              />
            </div>
          </Slide>
          <div className={styles["project-description-wrapper"]}>
            <Slide direction="right" triggerOnce>
              <h3>Let It Shine Website</h3>
              <p>
                From conception to the final product, the website for Let It
                Shine Services, built according to customer's requirements, with
                React, CSS Variables and optimized for the most common screen
                sizes.
              </p>
              <a href="https://theletitshine.co.uk/" target="__blank">
                <button>
                  Live Project&nbsp;&nbsp;
                  <GoArrowUpRight />
                </button>
              </a>
              <h5>Tech Stack:</h5>
              <div className={styles["tech-stack-wrapper"]}>
                <h6>React</h6>
                <h6>React Router</h6>
                <h6>CSS</h6>
              </div>
            </Slide>
          </div>
        </div>
      </div>
      <div className={styles["projects-showcase-container-even"]}>
        <div className={styles["project-wrapper"]}>
          <Slide triggerOnce>
            <div className={styles["project-image-wrapper"]}>
              <img
                src={sunnysideMac}
                alt="imac screen with sunnyside website"
                className={styles["project-image"]}
              />
            </div>
          </Slide>
          <div className={styles["project-description-wrapper"]}>
            <Slide direction="right" triggerOnce>
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
              </div>
            </Slide>
          </div>
        </div>
      </div>
      <div className={styles["projects-showcase-container-odd"]}>
        <div className={styles["project-wrapper"]}>
          <div className={styles["project-image-wrapper"]}>
            <Slide triggerOnce>
              <img
                src={rodweatherMac}
                alt="imac screen with rodweather app"
                className={styles["project-image"]}
              />
            </Slide>
          </div>
          <div className={styles["project-description-wrapper"]}>
            <Slide direction="right" triggerOnce>
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
              </div>
            </Slide>
          </div>
        </div>
      </div>
      <div className={styles["projects-showcase-container-even"]}>
        <div className={styles["project-wrapper"]}>
          <div className={styles["project-image-wrapper"]}>
            <Slide triggerOnce>
              <img
                src={rodKryptoMac}
                alt="imac screen with rodkrypto app"
                className={styles["project-image"]}
              />
            </Slide>
          </div>
          <div className={styles["project-description-wrapper"]}>
            <Slide direction="right" triggerOnce>
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
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
