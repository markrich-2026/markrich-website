import Layout from "@/components/Layout";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
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
      </Layout>
    </>
  );
}
