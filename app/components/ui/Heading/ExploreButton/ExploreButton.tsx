import { FC } from "react";
import styles from "./ExploreButton.module.scss";

const ExploreButton: FC = () => {
  return (
    <button className={styles.button}>
      <a href="#portfolio">Explore</a>
    </button>
  );
};

export default ExploreButton;
