import { FC } from "react";
import styles from "./SectionHeading.module.scss";

const SectionTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <div className={styles.titleContainer}>
      <h1>{title}</h1>
    </div>
  );
};

export default SectionTitle;
