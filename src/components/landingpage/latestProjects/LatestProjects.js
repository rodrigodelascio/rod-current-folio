import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import rodWeather from "../../../assets/images/rodWeatherShowcase.png";
import rodKrypto from "../../../assets/images/rodKryptoShowcase.png";
import sunnyside from "../../../assets/images/sunnyside-website-mockup.png";
import styles from "./LatestProjects.module.css";
import { Fade, Zoom } from "react-awesome-reveal";
import { GoArrowUpRight } from "react-icons/go";

const LatestProjects = () => {
  const firstCard = styles["first-card"];
  const secondCard = styles["second-card"];
  const thirdCard = styles["third-card"];

  return (
    <div className={styles["section-container"]}>
      <div className={styles["hero-text-container"]}>
        <Fade cascade triggerOnce>
          <p>Some of my</p>
          <h2>Latest</h2>
          <h3>Projects</h3>
        </Fade>
        <div className={styles["cards-container"]}>
          <Zoom cascade triggerOnce>
            <a
              href="https://rodrigodelascio.github.io/Sunnyside-Agency-Website/"
              target="__blank"
            >
              <ProjectCard
                className={firstCard}
                projectName={"Sunnyside"}
                projectDescription={"Creative Agency Website"}
                projectTags={"HTML | CSS | JavaScript"}
                cardImage={
                  <img src={sunnyside} alt="sunnyside website mockup" />
                }
              />
            </a>
            <a
              href="https://rodrigodelascio.github.io/RodWeather/"
              target="__blank"
            >
              <ProjectCard
                className={secondCard}
                projectName={"RodWeather"}
                projectDescription={"Weather App"}
                projectTags={
                  "HTML | CSS | JavaScript | OpenWeather API | Geo DB Cities API | Unsplash API"
                }
                cardImage={<img src={rodWeather} alt="rodWeather app mockup" />}
              />
            </a>
            <a
              href="https://rodrigodelascio.github.io/RodKrypto/"
              target="__blank"
            >
              <ProjectCard
                className={thirdCard}
                projectName={"RodKrypto"}
                projectDescription={"Cryptocurrency App"}
                projectTags={
                  "HTML | CSS | JavaScript | CoinPaprika API | CoinGecko API | ExchangeRate API"
                }
                cardImage={<img src={rodKrypto} alt="rodWeather app mockup" />}
              />
            </a>
          </Zoom>
        </div>
        <Fade triggerOnce>
          <Link to="/projects">
            <div className={styles["button-container"]}>
              <div className={styles["button-wrapper"]}>
                <div>
                  All projects <GoArrowUpRight className={styles.arrow} />
                </div>
              </div>
            </div>
          </Link>
        </Fade>
      </div>
    </div>
  );
};

export default LatestProjects;
