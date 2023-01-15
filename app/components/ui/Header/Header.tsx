import { FC } from "react";
import styles from "./Header.module.scss";

import { useMobile } from "@/hooks/useMobile";
import dynamic from "next/dynamic";

const DynamicDesktopHeader = dynamic(() => import("./HeaderDesktop"), {
  ssr: false,
});

const DynamicMobileHeader = dynamic(
  () => import("@/components/mobile/MobileHeader/MobileHeader"),
  {
    ssr: false,
  }
);

const Header: FC<{}> = () => {
  const isMobile = useMobile();

  return (
    <>
      <div className={styles.wrapper}>
        {isMobile ? <DynamicMobileHeader /> : <DynamicDesktopHeader />}
      </div>
    </>
  );
};

export default Header;
