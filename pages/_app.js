import { useEffect } from "react";
import { useRouter } from "next/router";
import Fonts from "../components/Fonts";
import Seo from "../components/Seo";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-medium-image-zoom/dist/styles.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    Fonts();
  }, []);

  return (
    <>
      <Seo pathname={router.pathname} />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <main id="main-content">
        <Component {...pageProps} />
      </main>
      <style jsx global>{`
        .skip-link {
          background: var(--surface-elevated-color);
          border: 2px solid var(--focus-outline);
          border-radius: 999px;
          color: var(--link-color);
          left: 1rem;
          padding: 0.65rem 1rem;
          position: fixed;
          top: 1rem;
          transform: translateY(-200%);
          transition: transform 0.2s ease;
          z-index: 1000;
        }

        .skip-link:focus,
        .skip-link:focus-visible {
          outline: none;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}

export default MyApp;
