import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import rodWeather from "../../../assets/images/rodWeatherShowcase.png";
import rodKrypto from "../../../assets/images/rodKryptoShowcase.png";
import sunnyside from "../../../assets/images/sunnyside-website-mockup.png";
import styles from "./LatestProjects.module.css";
import { GoArrowUpRight } from "react-icons/go";

const LatestProjects = () => {
  const firstCard = styles["first-card"];
  const secondCard = styles["second-card"];
  const thirdCard = styles["third-card"];

  return (
    <div className={styles["section-container"]}>
      <div className={styles["hero-text-container"]}>
        <p>Some of my</p>
        <h2>Latest</h2>
        <h3>Projects</h3>
        <div className={styles["cards-container"]}>
          <ProjectCard
            className={firstCard}
            projectName={"Sunnyside"}
            projectDescription={"Creative Agency Website"}
            projectTags={"HTML | CSS | JavaScript "}
            cardImage={<img src={sunnyside} alt="sunnyside website mockup" />}
          />
          <ProjectCard
            className={secondCard}
            projectName={"RodWeather"}
            projectDescription={"Weather App"}
            projectTags={
              "HTML | CSS | JavaScript | OpenWeather API | Geo DB Cities API | Unsplash API "
            }
            cardImage={<img src={rodWeather} alt="rodWeather app mockup" />}
          />
          <ProjectCard
            className={thirdCard}
            projectName={"RodKrypto"}
            projectDescription={"Cryptocurrency App"}
            projectTags={
              "HTML | CSS | JavaScript | CoinPaprika API | CoinGecko API | ExchangeRate API "
            }
            cardImage={<img src={rodKrypto} alt="rodWeather app mockup" />}
          />
        </div>
        <Link to="/projects">
          <div className={styles["button-container"]}>
            <div className={styles["button-wrapper"]}>
              <div>
                All projects <GoArrowUpRight className={styles.arrow} />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LatestProjects;
