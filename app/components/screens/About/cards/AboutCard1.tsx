import Image from "next/image";
import { FC } from "react";
import styles from "../About.module.scss";
import cn from "classnames";

const AboutCard1: FC<{ className: string }> = ({ className }) => {
  return (
    <div className={cn(styles.card, className)}>
      <h3>by the age of 22, I was:</h3>
      <div className={styles.iconsContainer}>
        <div className={styles.iconContainer}>
          <Image
            src="/icons/wranch.svg"
            alt="wranch icon"
            width={100}
            height={100}
          />
          <h5>heavy trucks mechanic</h5>
        </div>
        <div className={styles.iconContainer}>
          <Image
            src="/icons/maintenance.svg"
            alt="wranch icon"
            width={100}
            height={100}
          />
          <h5>military aviation technician</h5>
        </div>
        <div className={styles.iconContainer}>
          <Image
            src="/icons/cooking.svg"
            alt="wranch icon"
            width={100}
            height={100}
          />
          <h5>5-star hotel cook</h5>
        </div>
        <div className={styles.iconContainer}>
          <Image
            src="/icons/filmmaker.svg"
            alt="wranch icon"
            width={100}
            height={100}
          />
          <h5>freelance filmmaker</h5>
        </div>
      </div>
    </div>
  );
};

export default AboutCard1;
