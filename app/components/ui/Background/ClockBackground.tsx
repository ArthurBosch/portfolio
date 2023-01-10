import { FC, SyntheticEvent, useEffect, useState } from "react";
import styles from "./ClockBackground.module.scss";

const ClockBackground: FC = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleOffset = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleOffset);

    return () => {
      window.removeEventListener("scroll", handleOffset);
    };
  }, []);

  const getCoordinates = (
    offsetA: number,
    offsetB: number,
    startingPoint: number,
    finishPoint: number
  ) => {
    if (offset < offsetA) return startingPoint;
    if (offset > offsetB) return finishPoint;
    return 110 + (offset * (finishPoint - startingPoint)) / (offsetB - offsetA);
  };

  return (
    <div className={styles.bgContainer}>
      <svg
        width="275"
        height="560"
        viewBox="0 0 275 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_179_191)">
          <circle cx="280" cy="280" r="249.5" stroke="#FCD23C" />
          <line
            x1="279.707"
            y1="280.405"
            x2="113.707"
            y2="160.405"
            stroke="#FCD23C"
          />
          <circle cx="280" cy="280" r="14.5" fill="#171717" stroke="#FCD23C" />
        </g>
        <g filter="url(#filter1_f_179_191)">
          <circle cx="280" cy="280" r="249.5" stroke="#FCD23C" />
          <line
            x1="279.707"
            y1="280.405"
            x2={getCoordinates(150, 1500, 110, 150)}
            y2={getCoordinates(150, 1500, 160, 400)}
            //400
            //1500
            // y2="160.405"
            stroke="#FCD23C"
          />
          <line
            x1="279.184"
            y1="280.034"
            x2="207.56"
            y2="148.239"
            stroke="#FCD23C"
          />
          {/* <line
            x1="279.707"
            y1="280.405"
            x2="150.707"
            y2="400.405"
            stroke="#FCD23C"
          />
          <line
            x1="279.184"
            y1="280.034"
            x2="207.56"
            y2="148.239"
            stroke="#FCD23C"
          /> */}
          <circle cx="280" cy="280" r="14.5" fill="#171717" stroke="#FCD23C" />
        </g>
        <defs>
          {/* <filter
            id="filter0_f_179_191"
            x="0"
            y="0"
            width="560"
            height="560"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="15"
              result="effect1_foregroundBlur_179_191"
            />
          </filter> */}
          <filter
            id="filter1_f_179_191"
            x="28"
            y="28"
            width="504"
            height="504"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_179_191"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default ClockBackground;
