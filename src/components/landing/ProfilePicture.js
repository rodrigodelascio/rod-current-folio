import React from "react";
import profilePicture from "../../assets/images/rodProfile.PNG";
import styles from "./ProfilePicture.module.css";

const ProfilePicture = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.circle}>
          <img src={profilePicture} alt="rodrigo de lascio profile" />
        </div>
        <img src={profilePicture} alt="rodrigo de lascio profile" />
      </div>
    </div>
  );
};

export default ProfilePicture;
