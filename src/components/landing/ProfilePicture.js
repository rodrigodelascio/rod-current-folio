import React from "react";
import profilePicture from "../../assets/images/rodHexagon.png";
import styles from "./ProfilePicture.module.css";

const ProfilePicture = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img src={profilePicture} alt="rodrigo de lascio profile" />
      </div>
    </div>
  );
};

export default ProfilePicture;
