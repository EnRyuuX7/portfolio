import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <script src='/scripts/main.js' type="text/javascript"></script>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>{" "}
    </Html>
  );
}
