import "../styles/globals.scss";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

const resistMono = localFont({
  src: [
    {
      path: "../font/resistmono-rg-webfont.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/resistmono-bd-webfont.woff",
      weight: "500",
      style: "bold",
    },
    {
      path: "../font/resistmono-lt-webfont.woff",
      weight: "300",
      style: "light",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={resistMono.className}>
      <Component {...pageProps} />;
    </main>
  );
}
