import React, { Component } from 'react';
import Link from 'next/link';
import Row from '../components/Row';
import HighlightUnderline from '../components/design-system/HighlightUnderline';

class PageNotFound extends Component {

  render() {

    return (
      <div className="PageNotFound container">
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
