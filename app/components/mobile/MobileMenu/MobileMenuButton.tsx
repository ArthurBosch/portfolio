import { FC, useContext, useRef } from "react";
import cn from "classnames";
import styles from "./MobileMenu.module.scss";

import Image from "next/image";
import { IContext, MenuContext } from "@/shared/MenuContextProvider";

const MobileMenuButton: FC = () => {
  const image = useRef() as React.MutableRefObject<HTMLImageElement>;
  const { menuIsOpened, setMenuIsOpened } = useContext(MenuContext) as IContext;

  const handleClick = () => {
    setMenuIsOpened(!menuIsOpened);
  };
  return (
    <button
      className={cn(styles.menuButton, menuIsOpened ? styles.active : "")}
      onClick={handleClick}
    >
      {menuIsOpened ? (
        <Image
          src="/icons/close.svg"
          ref={image}
          alt="close button"
          width={24}
          height={24}
        />
      ) : (
        <Image
          src="/icons/menu.svg"
          ref={image}
          alt="menu button"
          width={24}
          height={24}
        />
      )}
    </button>
  );
};

export default MobileMenuButton;
