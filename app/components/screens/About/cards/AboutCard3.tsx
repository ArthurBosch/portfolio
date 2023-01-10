import Image from "next/image";
import { FC } from "react";
import styles from "../About.module.scss";
import cn from "classnames";

const AboutCard3: FC<{ className: string }> = ({ className }) => {
  return (
    <div className={cn(styles.card, className)}>
      <h3>what my goal is?</h3>
      <div className={styles.iconsContainer}>
        <div className={styles.iconContainer}>
          <Image
            src="/icons/rainbow.svg"
            alt="wranch icon"
            width={100}
            height={100}
          />
          <h5>creating beautiful</h5>
        </div>
        <div className={styles.iconContainer}>
          <Image
            src="/icons/muscle.svg"
            alt="wranch icon"
            width={100}
            height={100}
          />
          <h5>high perfomance</h5>
        </div>
        <div className={styles.iconContainer}>
          <Image
            src="/icons/edge.svg"
            alt="wranch icon"
            width={100}
            height={100}
          />
          <h5>cutting edge tech</h5>
        </div>
        <div className={styles.iconContainer}>
          <Image
            src="/icons/teamwork.svg"
            alt="wranch icon"
            width={100}
            height={100}
          />
          <h5>in teamwork</h5>
        </div>
      </div>
    </div>
  );
};

export default AboutCard3;
