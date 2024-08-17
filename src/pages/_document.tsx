import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />

        <Script
          defer
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-53GM7QK75H"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          defer
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                  dataLayer.push(arguments);
                }
                gtag("js", new Date());

                gtag("config", "G-53GM7QK75H");
              `,
          }}
        />
      </body>
    </Html>
  );
}
