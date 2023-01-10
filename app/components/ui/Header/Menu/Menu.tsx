import { FC } from "react";
import styles from "./Menu.module.scss";

const Menu: FC = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#sv">CV</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
    </ul>
  );
};

export default Menu;
