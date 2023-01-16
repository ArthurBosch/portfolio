import Image from "next/image";
import { FC, useEffect, useState } from "react";
import styles from "./Stack.module.scss";

const StackSlider: FC = () => {
  const [active, setActive] = useState(0);
  const [isForward, setDirection] = useState(true);
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (active >= icons.length - 1) {
        if (isForward) {
          setIsFirst(false);
          setDirection(false);
          setActive(active - 1);
          return;
        } else {
          setDirection(true);
          setActive(0);
          return;
        }
      }

      if (active === 0 && !isFirst) {
        setDirection(true);
        setActive(active + 1);
        return;
      }
      if (isForward) {
        setActive(active + 1);
      } else {
        setActive(active - 1);
      }
    }, 5000);
  }, [active]);

  const icons = [
    {
      icon: "Typescript",
      desc: "Once discovered, never go back",
    },
    {
      icon: "Postgres",
      desc: "If I need an SQL database",
    },
    {
      icon: "Tailwind",
      desc: "Awsome system and customization",
    },
    {
      icon: "NestJS",
      desc: "Probably the best framework for NodeJS",
    },
    {
      icon: "NextJS",
      desc: "Beautiful. This site is made with it.",
    },
    {
      icon: "NodeJS",
      desc: "Where would I be without it?",
    },
    { icon: "React", desc: "I chose this one for me" },
    {
      icon: "Mongo",
      desc: "If I need a NOSQL database",
    },
  ];

  return (
    <div className={styles.sliderContainer}>
      {/* <div className={styles.slider}>
        {icons.map((i) => {
          return (
            <Image
              key={i.icon}
              src={`/icons/${i.icon}-light.svg`}
              alt={`tech icon = ${i.icon}`}
              className={i === icons[active] ? styles.active : ""}
              width={100}
              height={100}
            />
          );
        })}
      </div>
      <div className={styles.stackText}>
        <h1>{icons[active].icon}</h1>
        <p>{icons[active].desc}</p>
      </div> */}
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
        </div>
      </div>
      {/* <div className={styles.card}>
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
            src={"/icons/Postgres-light.svg"}
            alt="tech icon - React"
            width={100}
            height={100}
          />
          <h5>Postgres</h5>
        </div>
        <div className={styles.cardItem}>
          <Image
            src={"/icons/Mongo-light.svg"}
            alt="tech icon - React"
            width={100}
            height={100}
          />
          <h5>Mongo</h5>
        </div>
      </div> */}
      {/* <div className={styles.card}>
        <h3>Front-end technologies</h3>
        <div className={styles.cardItem}>
          <Image
            src={"/icons/Typescript.svg"}
            alt="tech icon - React"
            width={100}
            height={100}
          />
          <h5>Typescript</h5>
        </div>
        <div className={styles.cardItem}>
          <Image
            src={"/icons/NextJS.svg"}
            alt="tech icon - React"
            width={100}
            height={100}
          />
          <h5>React</h5>
        </div>
        <div className={styles.cardItem}>
          <Image
            src={"/icons/React.svg"}
            alt="tech icon - React"
            width={100}
            height={100}
          />
          <h5>React</h5>
        </div>
      </div> */}
    </div>
  );
};

export default StackSlider;
