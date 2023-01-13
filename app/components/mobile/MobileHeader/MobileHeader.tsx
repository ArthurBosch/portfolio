import Logo from "@/components/ui/Header/Logo/Logo";
import { IContext, MenuContext } from "@/shared/MenuContextProvider";
import { FC, useContext } from "react";
import MobileMenuButton from "../MobileMenu/MobileMenuButton";
import styles from "./MobileHeader.module.scss";
import cn from "classnames";
import { useMobile } from "@/hooks/useMobile";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const MobileHeader: FC = () => {
  const { menuIsOpened } = useContext(MenuContext) as IContext;
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={cn(
        styles.mobileHeader,
        menuIsOpened && styles.mobileHeaderActive,
        scrollDirection === "down" ? styles.hidden : styles.shown
      )}
    >
      <div className={styles.container}>
        <Logo />
        <MobileMenuButton />
      </div>
      <ul className={cn(menuIsOpened ? styles.ulActive : "")}>
        <li>
          <a href="#portfolio">Back to top</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#cv">CV</a>
        </li>
      </ul>
    </div>
  );
};

export default MobileHeader;
