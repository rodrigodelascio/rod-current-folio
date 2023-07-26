import React from "react";
import styles from "./QuickFacts.module.css";

const QuickFacts = () => {
  return (
    <div>
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
            circumstances, but that is a story for another time... 📖
          </p>

          <h3>Education</h3>
          <p>
            I have a BA in Journalism, a Beng in Civil Engineering, a Level IV
            Certificate in Graphic Design, and a Level III Certificate in
            Computer Science. I am working towards a BSc in Computing now. Check
            out my&nbsp;
            <a
              href="https://www.linkedin.com/in/rodrigo-de-lascio/"
              target="__blank"
            >
              LinkedIn
            </a>
            &nbsp;for a full picture.
          </p>
        </div>

        <div className={styles["quick-facts-column-two"]}>
          <h2 className={styles["white-space"]}>&nbsp;</h2>
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
            <em>
              "I know I was born and I know that I'll die, the in-between is
              mine, I am mine"
            </em>
            , by Eddie Vedder. 🤘🎸
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickFacts;
