import { useMobile } from "@/hooks/useMobile";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";
import cn from "classnames";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import Links from "./Links/Links";
import { useTimeout } from "@/hooks/useTimeout";

const HeaderDesktop: FC = () => {
  const [hovered, setHovered] = useState(false);

  const scrollDirection = useScrollDirection();
  const header = useRef() as React.MutableRefObject<HTMLDivElement>;

  const cancel = useTimeout(() => {
    header.current.className = cn(styles.header, styles.hidden);
  }, 5000);

  useEffect(() => {
    if (scrollY > 1500 && scrollDirection !== "down" && !hovered) {
      console.log("cancel");
      cancel();
    }
  }, [scrollDirection, cancel]);
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
