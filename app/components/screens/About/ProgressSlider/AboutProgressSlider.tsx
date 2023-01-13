import { FC, useEffect, useState } from "react";
import styles from "./AboutProgressSlider.module.scss";
import cn from "classnames";

const AboutProgressSlider: FC<{ cardsNum: number; active: number }> = ({
  cardsNum,
  active,
}) => {
  const cards = [];
  const [activeNow, setActiveNow] = useState(0);
  const [toRight, setToRight] = useState(true);
  useEffect(() => {
    if (active > activeNow) {
      setToRight(true);
      setActiveNow(active);
    } else {
      setToRight(false);
      setActiveNow(active);
    }
  }, [active]);

  const setClass = (i: number) => {
    if (i === active && toRight) {
      return styles.fragmentActive;
    }

    if (i === active && !toRight) {
      return styles.fragmentActiveReverse;
    }
  };

  for (let i = 0; i < cardsNum; i++) {
    cards.push(
      <div className={cn(styles.fragment, setClass(i))} key={i}></div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.slider}>{cards.map((card) => card)}</div>
    </div>
  );
};

export default AboutProgressSlider;
