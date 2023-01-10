import { FC } from "react";
import styles from "./Logo.module.scss";

const Logo: FC = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.svgContainer}>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="5" r="5" fill="#D038D3" />
        </svg>
      </div>

      <h3>Arthur Bosch</h3>
    </div>
  );
};

export default Logo;
