import { mockups } from "data/mockups";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import styles from "./Mockup.module.scss";
import cn from "classnames";
const Mockup: FC<{ projectnumber: number }> = ({ projectnumber }) => {
  const [src, setSrc] = useState("");
  const [count, setCount] = useState(1);

  useEffect(() => {
    setSrc(mockups[projectnumber].imageSrcs[0]);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (count === mockups.length) {
        setCount(0);
        setSrc(mockups[projectnumber].imageSrcs[count]);
        return;
      }
      setCount(count + 1);
      setSrc(mockups[projectnumber].imageSrcs[count]);
    }, 5000);
  }, [src]);

  return (
    <div className={styles.mockup}>
      <div className={styles.imgContainer}>
        {src && (
          <Image
            src={src}
            height={mockups[projectnumber].isHorizontal ? 259 : 383}
            width={mockups[projectnumber].isHorizontal ? 432 : 173}
            alt="mockup"
          />
        )}
      </div>
      <div className={styles.radioContainer}>
        {mockups[projectnumber].imageSrcs.map((src) => {
          return (
            <div
              key={src}
              className={cn(
                styles.radio,
                src === mockups[projectnumber].imageSrcs[count] &&
                  styles.radioWhite
              )}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Mockup;
