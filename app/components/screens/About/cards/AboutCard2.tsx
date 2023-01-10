import Image from "next/image";
import { FC } from "react";
import styles from "../About.module.scss";
import cn from "classnames";

const AboutCard2: FC<{ className: string }> = ({ className }) => {
  return (
    <div className={cn(styles.card, className)}>
      <h3>what did I gain from it?</h3>
      <div className={styles.iconsContainer}>
        <div className={styles.iconContainer}>
          <Image
            src="/icons/system.svg"
            alt="wranch icon"
            width={100}
            height={100}
          />
          <h5>operation in large systems</h5>
        </div>
        <div className={styles.iconContainer}>
          <Image
            src="/icons/network.svg"
            alt="wranch icon"
            width={100}
            height={100}
          />
          <h5>networking</h5>
        </div>
        <div className={styles.iconContainer}>
          <Image
            src="/icons/problem.svg"
            alt="wranch icon"
            width={100}
            height={100}
          />
          <h5>problem solving</h5>
        </div>
        <div className={styles.iconContainer}>
          <Image
            src="/icons/expectation.svg"
            alt="wranch icon"
            width={100}
            height={100}
          />
          <h5>life goal</h5>
        </div>
      </div>
    </div>
  );
};

export default AboutCard2;
