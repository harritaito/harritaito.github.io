import { useEffect } from "react";
import Fonts from "../components/Fonts";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Fonts();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
