import { useEffect } from 'react';
import Fonts from '../components/Fonts';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Fonts();
    const script = document.createElement('script');
    script.src = '../static/fullStory.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
