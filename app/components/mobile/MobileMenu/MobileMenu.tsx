import { FC, SyntheticEvent, useContext, useRef } from "react";
import styles from "./MobileMenu.module.scss";
import cn from "classnames";
import { IContext, MenuContext } from "@/shared/MenuContextProvider";

const MobileMenu: FC<{}> = () => {
  const { menuIsOpened, setMenuIsOpened } = useContext(MenuContext) as IContext;
  const container = useRef() as React.MutableRefObject<HTMLDivElement>;
  const handleClick = (e: SyntheticEvent) => {
    if (e.target !== container.current) return;
    setMenuIsOpened(false);
  };
  return (
    <div
      ref={container}
      className={cn(styles.menu, menuIsOpened ? styles.menuActive : "")}
      onClick={(e) => {
        handleClick(e);
      }}
    >
      <ul className={cn(menuIsOpened && styles.menuUl)}>
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

export default MobileMenu;
