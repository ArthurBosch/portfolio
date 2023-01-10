import "../styles/globals.scss";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

const resistMono = localFont({
  src: [
    {
      path: "../font/ResistMono-Rg.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/ResistMono-Bd.otf",
      weight: "500",
      style: "bold",
    },
    {
      path: "../font/ResistMono-Lt.otf",
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
