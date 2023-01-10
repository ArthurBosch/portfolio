import { FC } from "react";
import styles from "./ProjectText.module.scss";
const ProjectParagraph: FC<{ paragraph: string }> = ({ paragraph }) => {
  return (
    <div className={styles.paragraphContainer}>
      <p>{paragraph}</p>
    </div>
  );
};

export default ProjectParagraph;
