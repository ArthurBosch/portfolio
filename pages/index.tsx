import { useEffect, useState } from "react";
import { MenuContextProvider } from "@/shared/MenuContextProvider";
import dynamic from "next/dynamic";
import Head from "next/head";

import HomeScreen from "@/components/screens/HomeScreen/HomeScreen";
import SVSection from "@/components/screens/CV/CVSection";
import Portfolio from "@/components/screens/Portfolio/Portfolio";
import Stack from "@/components/screens/Stack/Stack";
import About from "@/components/screens/About/About";
import Links from "@/components/screens/Links/Links";
import Footer from "@/components/screens/Footer/Footer";

import styles from "../styles/Home.module.scss";

const DynamicHeader = dynamic(() => import("@/components/ui/Header/Header"), {
  ssr: false,
});

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
          <DynamicHeader />
          <HomeScreen />
          <Portfolio />
          <Stack />
          <SVSection />
          <About />
          <Links />
          <Footer />
        </div>
      </MenuContextProvider>
    </>
  );
}
