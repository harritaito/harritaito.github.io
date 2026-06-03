import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Row from '../components/Row';
import HighlightUnderline from '../components/design-system/HighlightUnderline';

class PageNotFound extends Component {

  render() {

    return (
      <div className="PageNotFound container">
        <Head>
          <title>Page not found | Harri Halonen</title>
          <meta name="description" content="The requested page could not be found on Harri Halonen's portfolio." key="description" />
          <meta name="robots" content="noindex, follow" key="robots" />
          <link rel="canonical" href="https://harritaito.com/404" key="canonical" />
          <meta property="og:title" content="Page not found | Harri Halonen" key="og-title" />
          <meta property="og:description" content="The requested page could not be found on Harri Halonen's portfolio." key="og-description" />
          <meta property="og:url" content="https://harritaito.com/404" key="og-url" />
        </Head>
        <div className="pohja">
        </div>
        <Row content={
          <h3 className="col-xs-12 col-sm-12 col-md-12 col-lg-offset-3 col-lg-6 col-xl-6">Oops, nothing here!</h3>
        }/>
        <Row content={
          <div style={{marginTop: "1.5em"}} className="col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
           Feel free to chill out, or <Link href='/' className="home-link">head back to the home page.<HighlightUnderline /></Link>
          </div>
        }/>
        <style jsx>{`
          .PageNotFound {
          height: 100vh;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-direction: column;
              flex-direction: column;
          -ms-flex-pack: center;
              justify-content: center;
          text-align: center;
          background-color: rgba(255, 255, 255, 0.6), ;
        }

        .pohja {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: url('../static/media/pohja.svg');
          background-size: cover;
          z-index: -1;
          opacity: .55;
        }

        :global(.home-link) {
          display: inline-block;
        }

        .pohja svg {
        }
    `}</style>
      </div>
    );
  }
}

export default PageNotFound;
