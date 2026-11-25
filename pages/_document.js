import { Html, Head, Main, NextScript } from "next/document";

// Google Tag Manager and the Meta Pixel are loaded from pages/_app.js with
// next/script (lazyOnload) so they no longer compete with the first render.
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://www.facebook.com/tr?id=501012932554083&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NQZS427J"
            height="0"
            width="0"
            title="Google Tag Manager"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
