import { FC } from "react";
import styles from "./Background.module.scss";
const Background: FC = () => {
  return (
    <div className={styles.bg}>
      <svg
        className={styles.svg}
        id="svg"
        width="100%"
        height="100%"
        viewBox="0 0 2200 1637"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect id="rect-1" x="920.5" y="611.5" width="359" height="359" />
        <rect id="rect-2" x="880.5" y="571.5" width="439" height="439" />
        <rect id="rect-3" x="837.5" y="529.5" width="524" height="524" />
        <rect id="rect-4" x="783.5" y="475.5" width="632" height="632" />
        <rect id="rect-5" x="700.5" y="391.5" width="799" height="799" />
        <rect id="rect-6" x="550.5" y="268.5" width="1099" height="1099" />
        <rect id="rect-7" x="150.5" y="-131.5" width="1899" height="1899" />
      </svg>
    </div>
  );
};

export default Background;
