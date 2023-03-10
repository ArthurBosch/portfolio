import classNames from "classnames";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./About.module.scss";
import AboutNavigation from "./AboutNavigation";
import AboutTitle from "./AboutTitle";
import AboutCard1 from "./cards/AboutCard1";
import AboutCard2 from "./cards/AboutCard2";
import AboutCard3 from "./cards/AboutCard3";
import cn from "classnames";
import AboutProgressSlider from "./ProgressSlider/AboutProgressSlider";
import { useSwipeable } from "react-swipeable";

const About: FC = () => {
  const [card, setCard] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (card !== 2) {
        setCard(card + 1);
      }
    },
    onSwipedRight: () => {
      if (card !== 0) {
        setCard(card - 1);
      }
    },
  });

  return (
    <div {...handlers} className={styles.aboutContainer} id="about">
      <AboutTitle />
      <AboutNavigation setCard={setCard} card={card} />
      <AboutProgressSlider cardsNum={3} active={card} />
      <div
        className={cn(
          styles.cardsContainer,
          card === 0 && styles.active0,
          card === 1 && styles.active1,
          card === 2 && styles.active2
        )}
      >
        <AboutCard1 className={card === 0 ? styles.animation : ""} />
        <AboutCard2 className={card === 1 ? styles.animation : ""} />
        <AboutCard3 className={card === 2 ? styles.animation : ""} />
      </div>
    </div>
  );
};

export default About;
