import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import NavBar from "@/components/NavBar";
import FloatingDownloadButton from "@/components/FloatingDownloadButton";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import "@/styles/globals.css";
import Script from "next/script";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });
// Only the weights the headings actually use (normal style only) to keep font downloads small
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Google Tag Manager: loaded once the page is idle so it doesn't slow the first render */}
      <Script id="gtm" strategy="lazyOnload">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NQZS427J');`}
      </Script>
      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="lazyOnload">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '501012932554083');
fbq('track', 'PageView');`}
      </Script>
      <Layout>
        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily};
            width: 100%;
            height: 100%;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${poppins.style.fontFamily};
            font-weight: inherit;
          }
        `}</style>
        <NavBar />
        <Component {...pageProps} />
        <FloatingContactButtons />
        <FloatingDownloadButton />
        <Footer />
      </Layout>
    </>
  );
}
