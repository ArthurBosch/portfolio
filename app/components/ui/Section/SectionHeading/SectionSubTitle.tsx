import { FC } from "react";
import styles from "./SectionHeading.module.scss";

const SectionSubTitle: FC<{ subtitle: string }> = ({ subtitle }) => {
  return (
    <div className={styles.subtitleContainer}>
      <h3>//{subtitle}</h3>
    </div>
  );
};

export default SectionSubTitle;
