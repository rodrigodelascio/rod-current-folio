import React from "react";
import ProjectCard from "./ProjectCard";
import rodWeather from "./../../assets/images/rodWeather.png";
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
            projectName={"RodWeather"}
            projectDescription={"Weather App"}
            projectTags={
              "HTML | CSS | JavaScript | OpenWeather API | Geo DB Cities API | Unsplash API "
            }
            cardImage={<img src={rodWeather} alt="rodWeather app mockup" />}
          />
          <ProjectCard
            className={secondCard}
            projectName={"RodKrypto"}
            projectDescription={"Cryptocurrency App"}
            projectTags={
              "HTML | CSS | JavaScript | CoinPaprika API | CoinGecko API | ExchangeRate API "
            }
            cardImage={<img src={rodWeather} alt="rodWeather app mockup" />}
          />
          <ProjectCard
            className={thirdCard}
            projectName={"RodFlix"}
            projectDescription={"Database with CRUD"}
            projectTags={"HTML | CSS | Python | SQLite "}
            cardImage={<img src={rodWeather} alt="rodWeather app mockup" />}
          />
        </div>
        <div className={styles["cv-button-container"]}>
          <div className={styles["cv-button-wrapper"]}>
            <div>
              All projects <GoArrowUpRight className={styles.arrow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;
