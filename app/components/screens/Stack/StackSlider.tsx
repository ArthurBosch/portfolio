import Image from "next/image";
import { FC, useState } from "react";
import styles from "./Stack.module.scss";
import cn from "classnames";

const StackSlider: FC = () => {
  const [slide, setSlide] = useState(0);

  const handleSlideSwitch = (slide: number) => {
    setSlide(slide);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderSwitch}>
        <button
          className={cn(
            styles.sliderSwitchButton,
            slide === 0 && styles.sliderSwitchButton_active
          )}
          onClick={() => {
            handleSlideSwitch(0);
          }}
        >
          Front End
        </button>
        <button
          className={cn(
            styles.sliderSwitchButton,
            slide === 1 && styles.sliderSwitchButton_active
          )}
          onClick={() => {
            handleSlideSwitch(1);
          }}
        >
          Back End
        </button>
        <button
          className={cn(
            styles.sliderSwitchButton,
            slide === 2 && styles.sliderSwitchButton_active
          )}
          onClick={() => {
            handleSlideSwitch(2);
          }}
        >
          Tools
        </button>
      </div>
      <div
        className={styles.itemsContainer}
        style={{
          transform: `translateX(-${slide}00vw)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        <div className={styles.sliderItem}>
          <div className={styles.card}>
            <h3>Front-end technologies</h3>
            <div className={styles.cardItem}>
              <Image
                src={"/icons/React-light.svg"}
                alt="tech icon - React"
                width={100}
                height={100}
              />
              <h5>React</h5>
            </div>
            <div className={styles.cardItem}>
              <Image
                src={"/icons/NextJS-light.svg"}
                alt="tech icon - React"
                width={100}
                height={100}
              />
              <h5>NextJS</h5>
            </div>
            <div className={styles.cardItem}>
              <Image
                src={"/icons/redux-light.svg"}
                alt="tech icon - React"
                width={100}
                height={100}
              />
              <h5>Redux</h5>
            </div>
            <div className={styles.cardItem}>
              <Image
                src={"/icons/tailwind-light.svg"}
                alt="tech icon - React"
                width={100}
                height={100}
              />
              <h5>Tailwind</h5>
            </div>
            <div className={styles.cardItem}>
              <Image
                src={"/icons/scss-light.svg"}
                alt="tech icon - React"
                width={100}
                height={100}
              />
              <h5>SCSS</h5>
            </div>
          </div>
        </div>
        <div className={styles.sliderItem}>
          <div className={styles.card}>
            <h3>Back-end technologies</h3>
            <div className={styles.cardItem}>
              <Image
                src={"/icons/NestJS-light.svg"}
                alt="tech icon - React"
                width={100}
                height={100}
              />
              <h5>NestJS</h5>
            </div>
            <div className={styles.cardItem}>
              <Image
                src={"/icons/NodeJS-light.svg"}
                alt="tech icon - React"
                width={100}
                height={100}
              />
              <h5>NodeJS</h5>
            </div>
            <div className={styles.cardItem}>
              <Image
                src={"/icons/mongo-light.svg"}
                alt="tech icon - React"
                width={100}
                height={100}
              />
              <h5>Mongo</h5>
            </div>
            <div className={styles.cardItem}>
              <Image
                src={"/icons/Postgres-light.svg"}
                alt="tech icon - React"
                width={100}
                height={100}
              />
              <h5>Postgres</h5>
            </div>
            <div className={styles.cardItem}>
              <Image
                src={"/icons/Express.svg"}
                alt="tech icon - React"
                width={100}
                height={100}
              />
              <h5>Express</h5>
            </div>
          </div>
        </div>

        <div className={styles.sliderItem}>
          <div className={styles.card}>
            <h3>Tools</h3>
            <div className={styles.cardItem}>
              <Image
                src={"/icons/Typescript-light.svg"}
                alt="tech icon - React"
                width={100}
                height={100}
              />
              <h5>Typescript</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackSlider;
