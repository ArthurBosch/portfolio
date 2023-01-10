import { FC } from "react";
import styles from "./About.module.scss";

const AboutTitle: FC = () => {
  return (
    <div className={styles.titleContainer}>
      <h1>ABOUT</h1>
    </div>
  );
};

export default AboutTitle;
