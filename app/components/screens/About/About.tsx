import classNames from "classnames";
import { FC, useState } from "react";
import styles from "./About.module.scss";
import AboutNavigation from "./AboutNavigation";
import AboutTitle from "./AboutTitle";
import AboutCard1 from "./cards/AboutCard1";
import AboutCard2 from "./cards/AboutCard2";
import AboutCard3 from "./cards/AboutCard3";
import cn from "classnames";

const About: FC = () => {
  const [card, setCard] = useState(0);

  return (
    <div className={styles.aboutContainer}>
      <AboutTitle />
      <AboutNavigation setCard={setCard} card={card} />
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
