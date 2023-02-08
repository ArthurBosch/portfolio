import { FC } from "react";
import CVButton from "./CVButton";
import CVHeading from "./CVHeading";
import styles from "./CVSection.module.scss";

const CVSection: FC = () => {
  return (
    <div className={styles.CVContainer} id="cv">
      <CVHeading />
      <div className={styles.buttonsContainer}>
        <CVButton className={styles.read} title="Read now" href="/Resume.pdf" />
      </div>
    </div>
  );
};

export default CVSection;
