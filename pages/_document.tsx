import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="./font/ResistMono-Rg.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="preload"
          href="./font/ResistMono-Bd.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="preload"
          href="./font/ResistMono-Lt.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
