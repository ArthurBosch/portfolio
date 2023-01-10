import { FC } from "react";
import styles from "./ProjectText.module.scss";

const ProjectTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <div className={styles.titleContainer}>
      <h1>{title}</h1>
    </div>
  );
};

export default ProjectTitle;
