import Image from "next/image";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import styles from "./About.module.scss";

const AboutNavigation: FC<{
  setCard: Dispatch<SetStateAction<number>>;
  card: number;
}> = ({ setCard, card }) => {
  const handleRightClick = () => {
    setCard(card + 1);
  };

  const handleLeftClick = () => {
    setCard(card - 1);
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      handleRightClick();
      return;
    }

    if (e.key === "ArrowLeft") {
      handleLeftClick();
      return;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    // window.addEventListener("touch", handleTouch)

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [card]);

  return (
    <div className={styles.navigationContainer}>
      {card !== 2 && (
        <div className={styles.arrowRight} onClick={handleRightClick}>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_200_161)">
              <path
                d="M35.5875 17.0046C35.5871 17.0042 35.5868 17.0037 35.5863 17.0032L28.2383 9.69075C27.6879 9.14294 26.7975 9.14498 26.2496 9.69553C25.7017 10.246 25.7038 11.1364 26.2543 11.6842L31.1877 16.5937H1.40625C0.629578 16.5937 0 17.2233 0 18C0 18.7767 0.629578 19.4062 1.40625 19.4062H31.1876L26.2543 24.3157C25.7039 24.8636 25.7017 25.754 26.2496 26.3045C26.7976 26.8551 27.688 26.857 28.2384 26.3092L35.5864 18.9967C35.5868 18.9963 35.5871 18.9958 35.5876 18.9954C36.1384 18.4457 36.1366 17.5525 35.5875 17.0046Z"
                fill="#808080"
              />
            </g>
            <defs>
              <clipPath id="clip0_200_161">
                <rect width="36" height="36" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      )}

      {card !== 0 && (
        <div className={styles.arrowLeft} onClick={handleLeftClick}>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_200_161)">
              <path
                d="M0.412454 18.9954C0.412875 18.9958 0.413227 18.9963 0.41372 18.9968L7.76166 26.3093C8.31213 26.8571 9.2025 26.855 9.75045 26.3045C10.2983 25.754 10.2962 24.8636 9.74573 24.3158L4.81233 19.4063L34.5938 19.4063C35.3704 19.4063 36 18.7767 36 18C36 17.2233 35.3704 16.5938 34.5938 16.5938L4.8124 16.5938L9.74567 11.6843C10.2961 11.1364 10.2983 10.246 9.75038 9.69553C9.20243 9.14492 8.31199 9.14302 7.76159 9.69075L0.413649 17.0033C0.413227 17.0037 0.412875 17.0042 0.412383 17.0046C-0.138375 17.5543 -0.136617 18.4475 0.412454 18.9954Z"
                fill="#808080"
              />
            </g>
            <defs>
              <clipPath id="clip0_200_161">
                <rect
                  width="36"
                  height="36"
                  fill="white"
                  transform="translate(36 36) rotate(-180)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      )}
    </div>
  );
};

export default AboutNavigation;
