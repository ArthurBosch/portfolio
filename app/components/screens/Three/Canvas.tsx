import { FC } from "react";
import { Canvas } from "@react-three/fiber";
import Three from "./Three";

import styles from "./Canvas.module.scss";

const CanvasEl: FC = () => {
  return (
    <Canvas className={styles.canvas}>
      <Three />
    </Canvas>
  );
};

export default CanvasEl;
