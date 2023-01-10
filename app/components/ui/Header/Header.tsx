import { useMobile } from "@/hooks/useMobile";
import { FC } from "react";
import styles from "./Header.module.scss";
import Links from "./Links/Links";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import cn from "classnames";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import MobileMenuButton from "@/components/mobile/MobileMenu/MobileMenuButton";

const Header: FC<{}> = () => {
  const scrollDirection = useScrollDirection();
  const isMobile = useMobile();

  return (
    <div className={styles.wrapper}>
      <div
        className={cn(
          styles.header,
          scrollDirection === "down" ? styles.hidden : styles.shown
        )}
      >
        <Logo />
        {isMobile ? (
          <>
            <MobileMenuButton />
          </>
        ) : (
          <>
            <Menu />
            <Links />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
