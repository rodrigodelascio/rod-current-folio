import React from "react";
import rodProfile from "../../../assets/images/rodProfile.png";
import { FaClockRotateLeft, FaRegClock } from "react-icons/fa6";
import styles from "./AboutHeroSection.module.css";

const AboutHeroSection = () => {
  return (
    <div className={styles["about-page-container"]}>
      <div className={styles["about-hero-text-container"]}>
        <div className={styles["profile-pic-container"]}>
          <img src={rodProfile} alt="rodrigo de lascio ai" />
        </div>
        <div className={styles["about-hero-text-wrapper"]}>
          <h1>About Me.</h1>
          <h2>
            I'm a web developer based in
            <br />
            Walton-on-Thames, UK
          </h2>
          <p>
            Having come from a diverse background of studies and work
            experiences, I decided to make a career change after over a decade
            working in marketing and as a linguist. Passionate about technology,
            I love adding to my tech stack, improving myself, and been working
            on front-end projects since 2022.
          </p>
          <hr />
          <div className={styles["past-present-future-container"]}>
            <div className={styles["past-present-future-wrapper"]}>
              <h3>
                The Past &nbsp;&nbsp;
                <FaClockRotateLeft />
              </h3>
              <p>
                I have studied the foundations of Computer Science at a young
                age and moved away from the area due to personal circumstances.
                I have achieved a BA in Journalism and a Beng in Civil
                Engineering afterwards.
              </p>
            </div>
            <div className={styles["past-present-future-wrapper"]}>
              <h3>
                The Present &nbsp;&nbsp;
                <FaRegClock />
              </h3>
              <p>
                I found my way back to computing and as a lifelong learner,
                after recently attending a Software Development Bootcamp, I
                decided to go back to university and enhance my knowledge, to
                become a better professional.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["quick-facts-container"]}>
        <div className={styles["quick-facts-column-one"]}>
          <h2>Quick facts</h2>
          <h3>Home</h3>
          <p>Walton-on-Thames, Surrey, UK. 🇬🇧</p>

          <h3>When I started as a developer</h3>
          <p>
            In 2000, when I did a Level III Certificate Computer Science course
            where I learned Visual Basic and Delphi. Unfortunately, I had to put
            the brakes on it when going to university due to personal
            circumstances, but that is a long story for another time... 📖
          </p>

          <h3>Education</h3>
          <p>
            I have a BA in Journalism, a Beng in Civil Engineering, a Level IV
            Certificate in Graphic Design, and a Level III Certificate in
            Computer Science. I am working towards a BSc in Computing now.
          </p>
        </div>

        <div className={styles["quick-facts-column-two"]}>
          <h2>&nbsp;</h2>
          <h3>Hobbies</h3>
          <p>
            Cooking (and eating, obviously 😋), watching and playing football,
            reading, listening to rock music, playing video games and running to
            keep fit.
          </p>

          <h3>Favourite pastimes</h3>
          <p>
            Spending time with my family, watching films and tv series (I sign
            Netflix, Amazon Prime, Apple TV+, Disney Plus, and a few other
            services 😅).
          </p>

          <h3>Favourite quote</h3>
          <p>
            "I know I was born and I know that I'll die, the in-between is mine,
            I am mine", by Eddie Vedder. 🤘🎸
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
