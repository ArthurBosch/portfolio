import { FC } from "react";
import CVButton from "./CVButton";
import CVHeading from "./CVHeading";
import styles from "./CVSection.module.scss";

const CVSection: FC = () => {
  return (
    <div className={styles.CVContainer}>
      <CVHeading />
      <div className={styles.buttonsContainer}>
        <CVButton className={styles.download} title="Download" href="" />
        <CVButton className={styles.read} title="Read now" href="" />
      </div>
    </div>
  );
};

export default CVSection;
