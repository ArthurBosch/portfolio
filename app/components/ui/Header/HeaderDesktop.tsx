import { useMobile } from "@/hooks/useMobile";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { FC, useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import cn from "classnames";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import Links from "./Links/Links";

const HeaderDesktop: FC = () => {
  const scrollDirection = useScrollDirection();
  const header = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (scrollY > 1500 && scrollDirection !== "down") {
      setTimeout(() => {
        header.current.className = cn(styles.header, styles.hidden);
      }, 5000);
    }
  }, [scrollDirection]);
  return (
    <div
      ref={header}
      className={cn(
        styles.header,
        scrollDirection === "down" ? styles.hidden : styles.shown
      )}
    >
      <Logo />
      <Menu />
      <Links />
    </div>
  );
};

export default HeaderDesktop;
