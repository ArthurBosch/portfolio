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
import { useSwipe } from "use-swipe-hook";
import { useSwipeable } from "react-swipeable";

const About: FC = () => {
  const [card, setCard] = useState(0);

  const config = {
    delta: 10, // min distance(px) before a swipe starts. *See Notes*
    preventScrollOnSwipe: false, // prevents scroll during swipe (*See Details*)
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
    swipeDuration: Infinity, // allowable duration of a swipe (ms). *See Notes*
    touchEventOptions: { passive: true }, // options for touch listeners (*See Details*)
  };

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
    <div {...handlers} className={styles.aboutContainer}>
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
