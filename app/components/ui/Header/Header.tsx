import { useMobile } from "@/hooks/useMobile";
import { FC, useContext } from "react";
import styles from "./Header.module.scss";
import Links from "./Links/Links";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import cn from "classnames";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import MobileMenuButton from "@/components/mobile/MobileMenu/MobileMenuButton";
import { IContext, MenuContext } from "@/shared/MenuContextProvider";
import MobileMenu from "@/components/mobile/MobileMenu/MobileMenu";
import MobileHeader from "@/components/mobile/MobileHeader/MobileHeader";

const Header: FC<{}> = () => {
  const scrollDirection = useScrollDirection();
  const isMobile = useMobile();
  const { menuIsOpened } = useContext(MenuContext) as IContext;

  return (
    <>
      <div
        className={cn(
          styles.wrapper,
          scrollDirection === "down" ? styles.hidden : styles.shown
        )}
      >
        {isMobile ? (
          <MobileHeader />
        ) : (
          <div className={styles.header}>
            <Logo />
            <Menu />
            <Links />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
