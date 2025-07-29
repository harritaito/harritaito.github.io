import { useEffect } from "react";
import Fonts from "../components/Fonts";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-medium-image-zoom/dist/styles.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Fonts();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
