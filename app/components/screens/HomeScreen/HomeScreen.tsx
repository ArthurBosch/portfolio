import { FC } from "react";
import Links from "../../ui/Header/Links/Links";
import ExploreButton from "../../ui/Heading/ExploreButton/ExploreButton";
import Heading from "../../ui/Heading/Heading";
import styles from "./HomeScreen.module.scss";

const HomeScreen: FC = () => {
  return (
    <div className={styles.home}>
      <Heading />
      <Links />
      <ExploreButton />
    </div>
  );
};

export default HomeScreen;
