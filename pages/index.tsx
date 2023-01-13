import HomeScreen from "@/components/screens/HomeScreen/HomeScreen";
import Head from "next/head";
import SVSection from "@/components/screens/CV/CVSection";
import styles from "../styles/Home.module.scss";
import { useEffect, useState } from "react";
import MobileMenu from "@/components/mobile/MobileMenu/MobileMenu";
import { MenuContextProvider } from "@/shared/MenuContextProvider";
import Portfolio from "@/components/screens/Portfolio/Portfolio";
import dynamic from "next/dynamic";
import Stack from "@/components/screens/Stack/Stack";
import About from "@/components/screens/About/About";
import Links from "@/components/screens/Links/Links";

const DynamicHeader = dynamic(() => import("@/components/ui/Header/Header"), {
  ssr: false,
});
const DynamicBackground = dynamic(
  () => import("@/components/ui/Background/Background"),
  {
    ssr: false,
  }
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  return (
    <>
      <Head>
        <title>Arthur Bosch, Web Developer | Home Page</title>
        <meta
          name="description"
          content="Discover portfolio, CV and contacts of Arthur Bosch, Web Developer"
          key="desc"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>

      <MenuContextProvider>
        <div className={styles.appContainer}>
          <MobileMenu />
          <DynamicHeader />
          <DynamicBackground />
          <HomeScreen />
          <div className={styles.main}>
            <Portfolio />
            <Stack />
            <SVSection />
            <About />
            <Links />
          </div>
        </div>
      </MenuContextProvider>

      {/* <Footer/> */}
    </>
  );
}
