import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  cardImage,
  projectName,
  projectDescription,
  projectTags,
  className,
}) => {
  return (
    <div>
      <div className={styles["card-container"] + " " + className}>
        <h4>{projectName}</h4>
        <h5>{projectDescription}</h5>
        <p>{projectTags}</p>
        <div className={styles["card-img"]}>{cardImage}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
