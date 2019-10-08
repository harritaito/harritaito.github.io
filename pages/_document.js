import Document, {Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import Fonts from '../components/Fonts';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }
  componentDidMount () {
    Fonts();
    const script = document.createElement("script");
    script.src = "static/fullStory.js";
    script.async = true;
    document.body.appendChild(script);
  }
  

  render() {
    return (
      <html lang="en">
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="Cache-Control: max-age=86400" content="public" />
            <meta name="description" content="The website of Harri Halonen (@harritaito), a Finnish experience designer living and working in Tampere, Finland." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
            <link rel="apple-touch-icon" href="/static/touch-icon.png" />
            <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
            <link rel="icon" href="/static/favicon.ico" />
            <meta property="og:url" content="https://harritaito.com/"/>
            <meta property="og:title" content="Harri Halonen"/>
            <meta property="og:description" content="The website of Harri Halonen (@harritaito), a Finnish experience designer living and working in Tampere, Finland." />
            <meta name="twitter:site" content="https://harritaito.com/"/>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content="https://harritaito.com/static/media/twittericon.png" />
            <meta property="og:image" content="https://harritaito.com/static/media/twittericon.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <style>{`
                body {
                margin: 0;
                padding: 0;
                font-family: Rubik, sans-serif;
                font-size: 16px;
                text-rendering: optimizeLegibility;
                -webkit-font-smoothing: antialiased;
                position: relative;
                background: #fafafa;
                }

                #root {
                padding-left: 2rem;
                padding-right: 2rem;
                }

                h1 {
                font-family: Trirong, serif;
                font-weight: 500;
                font-size: 4em;
                letter-spacing: .1rem;
                }
                
                @media only screen and (max-width: 45rem) {
                    h1{font-size: 2em;}
                }

                h2 {
                font-weight: 900;
                font-size: 3em;
                margin: .33em 0;
                }
                
                @media only screen and (max-width: 45rem) {
                    h2 {font-size: 2.5em;}
                }

                h3 {
                font-weight: 300;
                font-size: 2em;
                margin-top: 0.5em;
                margin-bottom: 0.5em;
                }

                h4 {
                font-weight: bold;
                font-size: 1.2em;
                margin: 1em auto 0;
                }


                h5 {
                font-weight: bold;
                font-size: 1em;
                margin: 1em auto .5em;
                }

                p {
                line-height: 1.5em;
                }

                .no-margin-bottom {
                margin-bottom: 0 !important;
                }

                .no-margin-top {
                margin-top: 0 !important;
                }

                .one-margin-vert {
                margin: 1em auto;
                }

                .one-margin-top {
                margin-top: 1em;
                }

                .one-margin-bottom {
                margin-bottom: 1em;
                }

                a {
                text-decoration: none;
                display: inline-block;
                color: #000;
                overflow: visible;
                cursor: pointer;
                outline: none;
                }

                a:focus {
                outline: none;
                }

                p a:visited {
                color: #000;
                text-decoration: none;
                }

                
                .container {
                margin-left: auto;
                margin-right: auto;
                padding-right: .5rem;
                padding-left: .5rem;
                }

                .container-fluid {
                padding-right: 1rem;
                padding-left: 1rem;
                }

                @media only screen and (min-width: 576px) {
                .container {
                    padding-right: .5rem;
                    padding-left: .5rem;
                    width: calc(576px - 1rem);
                    max-width: 100%;
                }
                }

                @media only screen and (min-width: 768px) {
                .container {
                    padding-right: .5rem;
                    padding-left: .5rem;
                    width: calc(768px - 1rem);
                    max-width: 100%;
                }
                }

                @media only screen and (min-width: 992px) {
                .container {
                    padding-right: .5rem;
                    padding-left: .5rem;
                    width: calc(992px - 1rem);
                    max-width: 100%;
                }
                }

                @media only screen and (min-width: 1200px) {
                .container {
                    padding-right: .5rem;
                    padding-left: .5rem;
                    width: calc(1200px - 1rem);
                    max-width: 100%;
                }
                }

                .row {
                -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                display: -ms-flexbox;
                display: flex;
                -ms-flex: 0 1 auto;
                flex: 0 1 auto;
                -ms-flex-direction: row;
                flex-direction: row;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                margin-right: -0.5rem;
                margin-left: -0.5rem;
                }

                .row.reverse {
                -ms-flex-direction: row-reverse;
                flex-direction: row-reverse;
                }

                .col.reverse {
                -ms-flex-direction: column-reverse;
                flex-direction: column-reverse;
                }

                .col-xs,
                .col-xs-1,
                .col-xs-2,
                .col-xs-3,
                .col-xs-4,
                .col-xs-5,
                .col-xs-6,
                .col-xs-7,
                .col-xs-8,
                .col-xs-9,
                .col-xs-10,
                .col-xs-11,
                .col-xs-12,
                .col-xs-offset-0,
                .col-xs-offset-1,
                .col-xs-offset-2,
                .col-xs-offset-3,
                .col-xs-offset-4,
                .col-xs-offset-5,
                .col-xs-offset-6,
                .col-xs-offset-7,
                .col-xs-offset-8,
                .col-xs-offset-9,
                .col-xs-offset-10,
                .col-xs-offset-11,
                .col-xs-offset-12 {
                -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                -ms-flex: 0 0 auto;
                flex: 0 0 auto;
                padding-right: 0.5rem;
                padding-left: 0.5rem;
                }

                .col-xs {
                -ms-flex-positive: 1;
                flex-grow: 1;
                -ms-flex-preferred-size: 0;
                flex-basis: 0;
                max-width: 100%;
                }

                .col-xs-1 {
                -ms-flex-preferred-size: 8.33333333%;
                flex-basis: 8.33333333%;
                max-width: 8.33333333%;
                }

                .col-xs-2 {
                -ms-flex-preferred-size: 16.66666667%;
                flex-basis: 16.66666667%;
                max-width: 16.66666667%;
                }

                .col-xs-3 {
                -ms-flex-preferred-size: 25%;
                flex-basis: 25%;
                max-width: 25%;
                }

                .col-xs-4 {
                -ms-flex-preferred-size: 33.33333333%;
                flex-basis: 33.33333333%;
                max-width: 33.33333333%;
                }

                .col-xs-5 {
                -ms-flex-preferred-size: 41.66666667%;
                flex-basis: 41.66666667%;
                max-width: 41.66666667%;
                }

                .col-xs-6 {
                -ms-flex-preferred-size: 50%;
                flex-basis: 50%;
                max-width: 50%;
                }

                .col-xs-7 {
                -ms-flex-preferred-size: 58.33333333%;
                flex-basis: 58.33333333%;
                max-width: 58.33333333%;
                }

                .col-xs-8 {
                -ms-flex-preferred-size: 66.66666667%;
                flex-basis: 66.66666667%;
                max-width: 66.66666667%;
                }

                .col-xs-9 {
                -ms-flex-preferred-size: 75%;
                flex-basis: 75%;
                max-width: 75%;
                }

                .col-xs-10 {
                -ms-flex-preferred-size: 83.33333333%;
                flex-basis: 83.33333333%;
                max-width: 83.33333333%;
                }

                .col-xs-11 {
                -ms-flex-preferred-size: 91.66666667%;
                flex-basis: 91.66666667%;
                max-width: 91.66666667%;
                }

                .col-xs-12 {
                -ms-flex-preferred-size: 100%;
                flex-basis: 100%;
                max-width: 100%;
                }

                .col-xs-offset-0 {
                margin-left: 0;
                }

                .col-xs-offset-1 {
                margin-left: 8.33333333%;
                }

                .col-xs-offset-2 {
                margin-left: 16.66666667%;
                }

                .col-xs-offset-3 {
                margin-left: 25%;
                }

                .col-xs-offset-4 {
                margin-left: 33.33333333%;
                }

                .col-xs-offset-5 {
                margin-left: 41.66666667%;
                }

                .col-xs-offset-6 {
                margin-left: 50%;
                }

                .col-xs-offset-7 {
                margin-left: 58.33333333%;
                }

                .col-xs-offset-8 {
                margin-left: 66.66666667%;
                }

                .col-xs-offset-9 {
                margin-left: 75%;
                }

                .col-xs-offset-10 {
                margin-left: 83.33333333%;
                }

                .col-xs-offset-11 {
                margin-left: 91.66666667%;
                }

                .start-xs {
                -ms-flex-pack: start;
                justify-content: flex-start;
                text-align: start;
                }

                .center-xs {
                -ms-flex-pack: center;
                justify-content: center;
                text-align: center;
                }

                .end-xs {
                -ms-flex-pack: end;
                justify-content: flex-end;
                text-align: end;
                }

                .top-xs {
                -ms-flex-align: start;
                align-items: flex-start;
                }

                .middle-xs {
                -ms-flex-align: center;
                align-items: center;
                }

                .bottom-xs {
                -ms-flex-align: end;
                align-items: flex-end;
                }

                .around-xs {
                -ms-flex-pack: distribute;
                justify-content: space-around;
                }

                .between-xs {
                -ms-flex-pack: justify;
                justify-content: space-between;
                }

                .first-xs {
                -ms-flex-order: -1;
                order: -1;
                }

                .last-xs {
                -ms-flex-order: 1;
                order: 1;
                }

                .initial-order-xs {
                -ms-flex-order: initial;
                order: initial;
                }

                @media only screen and (min-width: 576px) {
                .col-sm,
                .col-sm-1,
                .col-sm-2,
                .col-sm-3,
                .col-sm-4,
                .col-sm-5,
                .col-sm-6,
                .col-sm-7,
                .col-sm-8,
                .col-sm-9,
                .col-sm-10,
                .col-sm-11,
                .col-sm-12,
                .col-sm-offset-0,
                .col-sm-offset-1,
                .col-sm-offset-2,
                .col-sm-offset-3,
                .col-sm-offset-4,
                .col-sm-offset-5,
                .col-sm-offset-6,
                .col-sm-offset-7,
                .col-sm-offset-8,
                .col-sm-offset-9,
                .col-sm-offset-10,
                .col-sm-offset-11,
                .col-sm-offset-12 {
                    -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                    -ms-flex: 0 0 auto;
                    flex: 0 0 auto;
                    padding-right: 0.5rem;
                    padding-left: 0.5rem;
                }

                .col-sm {
                    -ms-flex-positive: 1;
                    flex-grow: 1;
                    -ms-flex-preferred-size: 0;
                    flex-basis: 0;
                    max-width: 100%;
                }

                .col-sm-1 {
                    -ms-flex-preferred-size: 8.33333333%;
                    flex-basis: 8.33333333%;
                    max-width: 8.33333333%;
                }

                .col-sm-2 {
                    -ms-flex-preferred-size: 16.66666667%;
                    flex-basis: 16.66666667%;
                    max-width: 16.66666667%;
                }

                .col-sm-3 {
                    -ms-flex-preferred-size: 25%;
                    flex-basis: 25%;
                    max-width: 25%;
                }

                .col-sm-4 {
                    -ms-flex-preferred-size: 33.33333333%;
                    flex-basis: 33.33333333%;
                    max-width: 33.33333333%;
                }

                .col-sm-5 {
                    -ms-flex-preferred-size: 41.66666667%;
                    flex-basis: 41.66666667%;
                    max-width: 41.66666667%;
                }

                .col-sm-6 {
                    -ms-flex-preferred-size: 50%;
                    flex-basis: 50%;
                    max-width: 50%;
                }

                .col-sm-7 {
                    -ms-flex-preferred-size: 58.33333333%;
                    flex-basis: 58.33333333%;
                    max-width: 58.33333333%;
                }

                .col-sm-8 {
                    -ms-flex-preferred-size: 66.66666667%;
                    flex-basis: 66.66666667%;
                    max-width: 66.66666667%;
                }

                .col-sm-9 {
                    -ms-flex-preferred-size: 75%;
                    flex-basis: 75%;
                    max-width: 75%;
                }

                .col-sm-10 {
                    -ms-flex-preferred-size: 83.33333333%;
                    flex-basis: 83.33333333%;
                    max-width: 83.33333333%;
                }

                .col-sm-11 {
                    -ms-flex-preferred-size: 91.66666667%;
                    flex-basis: 91.66666667%;
                    max-width: 91.66666667%;
                }

                .col-sm-12 {
                    -ms-flex-preferred-size: 100%;
                    flex-basis: 100%;
                    max-width: 100%;
                }

                .col-sm-offset-0 {
                    margin-left: 0;
                }

                .col-sm-offset-1 {
                    margin-left: 8.33333333%;
                }

                .col-sm-offset-2 {
                    margin-left: 16.66666667%;
                }

                .col-sm-offset-3 {
                    margin-left: 25%;
                }

                .col-sm-offset-4 {
                    margin-left: 33.33333333%;
                }

                .col-sm-offset-5 {
                    margin-left: 41.66666667%;
                }

                .col-sm-offset-6 {
                    margin-left: 50%;
                }

                .col-sm-offset-7 {
                    margin-left: 58.33333333%;
                }

                .col-sm-offset-8 {
                    margin-left: 66.66666667%;
                }

                .col-sm-offset-9 {
                    margin-left: 75%;
                }

                .col-sm-offset-10 {
                    margin-left: 83.33333333%;
                }

                .col-sm-offset-11 {
                    margin-left: 91.66666667%;
                }

                .start-sm {
                    -ms-flex-pack: start;
                    justify-content: flex-start;
                    text-align: start;
                }

                .center-sm {
                    -ms-flex-pack: center;
                    justify-content: center;
                    text-align: center;
                }

                .end-sm {
                    -ms-flex-pack: end;
                    justify-content: flex-end;
                    text-align: end;
                }

                .top-sm {
                    -ms-flex-align: start;
                    align-items: flex-start;
                }

                .middle-sm {
                    -ms-flex-align: center;
                    align-items: center;
                }

                .bottom-sm {
                    -ms-flex-align: end;
                    align-items: flex-end;
                }

                .around-sm {
                    -ms-flex-pack: distribute;
                    justify-content: space-around;
                }

                .between-sm {
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                }

                .first-sm {
                    -ms-flex-order: -1;
                    order: -1;
                }

                .last-sm {
                    -ms-flex-order: 1;
                    order: 1;
                }

                .initial-order-sm {
                    -ms-flex-order: initial;
                    order: initial;
                }
                }

                @media only screen and (min-width: 768px) {
                .col-md,
                .col-md-1,
                .col-md-2,
                .col-md-3,
                .col-md-4,
                .col-md-5,
                .col-md-6,
                .col-md-7,
                .col-md-8,
                .col-md-9,
                .col-md-10,
                .col-md-11,
                .col-md-12,
                .col-md-offset-0,
                .col-md-offset-1,
                .col-md-offset-2,
                .col-md-offset-3,
                .col-md-offset-4,
                .col-md-offset-5,
                .col-md-offset-6,
                .col-md-offset-7,
                .col-md-offset-8,
                .col-md-offset-9,
                .col-md-offset-10,
                .col-md-offset-11,
                .col-md-offset-12 {
                    -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                    -ms-flex: 0 0 auto;
                    flex: 0 0 auto;
                    padding-right: 0.5rem;
                    padding-left: 0.5rem;
                }

                .col-md {
                    -ms-flex-positive: 1;
                    flex-grow: 1;
                    -ms-flex-preferred-size: 0;
                    flex-basis: 0;
                    max-width: 100%;
                }

                .col-md-1 {
                    -ms-flex-preferred-size: 8.33333333%;
                    flex-basis: 8.33333333%;
                    max-width: 8.33333333%;
                }

                .col-md-2 {
                    -ms-flex-preferred-size: 16.66666667%;
                    flex-basis: 16.66666667%;
                    max-width: 16.66666667%;
                }

                .col-md-3 {
                    -ms-flex-preferred-size: 25%;
                    flex-basis: 25%;
                    max-width: 25%;
                }

                .col-md-4 {
                    -ms-flex-preferred-size: 33.33333333%;
                    flex-basis: 33.33333333%;
                    max-width: 33.33333333%;
                }

                .col-md-5 {
                    -ms-flex-preferred-size: 41.66666667%;
                    flex-basis: 41.66666667%;
                    max-width: 41.66666667%;
                }

                .col-md-6 {
                    -ms-flex-preferred-size: 50%;
                    flex-basis: 50%;
                    max-width: 50%;
                }

                .col-md-7 {
                    -ms-flex-preferred-size: 58.33333333%;
                    flex-basis: 58.33333333%;
                    max-width: 58.33333333%;
                }

                .col-md-8 {
                    -ms-flex-preferred-size: 66.66666667%;
                    flex-basis: 66.66666667%;
                    max-width: 66.66666667%;
                }

                .col-md-9 {
                    -ms-flex-preferred-size: 75%;
                    flex-basis: 75%;
                    max-width: 75%;
                }

                .col-md-10 {
                    -ms-flex-preferred-size: 83.33333333%;
                    flex-basis: 83.33333333%;
                    max-width: 83.33333333%;
                }

                .col-md-11 {
                    -ms-flex-preferred-size: 91.66666667%;
                    flex-basis: 91.66666667%;
                    max-width: 91.66666667%;
                }

                .col-md-12 {
                    -ms-flex-preferred-size: 100%;
                    flex-basis: 100%;
                    max-width: 100%;
                }

                .col-md-offset-0 {
                    margin-left: 0;
                }

                .col-md-offset-1 {
                    margin-left: 8.33333333%;
                }

                .col-md-offset-2 {
                    margin-left: 16.66666667%;
                }

                .col-md-offset-3 {
                    margin-left: 25%;
                }

                .col-md-offset-4 {
                    margin-left: 33.33333333%;
                }

                .col-md-offset-5 {
                    margin-left: 41.66666667%;
                }

                .col-md-offset-6 {
                    margin-left: 50%;
                }

                .col-md-offset-7 {
                    margin-left: 58.33333333%;
                }

                .col-md-offset-8 {
                    margin-left: 66.66666667%;
                }

                .col-md-offset-9 {
                    margin-left: 75%;
                }

                .col-md-offset-10 {
                    margin-left: 83.33333333%;
                }

                .col-md-offset-11 {
                    margin-left: 91.66666667%;
                }

                .start-md {
                    -ms-flex-pack: start;
                    justify-content: flex-start;
                    text-align: start;
                }

                .center-md {
                    -ms-flex-pack: center;
                    justify-content: center;
                    text-align: center;
                }

                .end-md {
                    -ms-flex-pack: end;
                    justify-content: flex-end;
                    text-align: end;
                }

                .top-md {
                    -ms-flex-align: start;
                    align-items: flex-start;
                }

                .middle-md {
                    -ms-flex-align: center;
                    align-items: center;
                }

                .bottom-md {
                    -ms-flex-align: end;
                    align-items: flex-end;
                }

                .around-md {
                    -ms-flex-pack: distribute;
                    justify-content: space-around;
                }

                .between-md {
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                }

                .first-md {
                    -ms-flex-order: -1;
                    order: -1;
                }

                .last-md {
                    -ms-flex-order: 1;
                    order: 1;
                }

                .initial-order-md {
                    -ms-flex-order: initial;
                    order: initial;
                }
                }

                @media only screen and (min-width: 992px) {
                .col-lg,
                .col-lg-1,
                .col-lg-2,
                .col-lg-2dot3,
                .col-lg-3,
                .col-lg-4,
                .col-lg-5,
                .col-lg-6,
                .col-lg-7,
                .col-lg-8,
                .col-lg-9,
                .col-lg-10,
                .col-lg-11,
                .col-lg-12,
                .col-lg-offset-0,
                .col-lg-offset-1,
                .col-lg-offset-1dot5,
                .col-lg-offset-2,
                .col-lg-offset-2dot5,
                .col-lg-offset-3,
                .col-lg-offset-4,
                .col-lg-offset-5,
                .col-lg-offset-6,
                .col-lg-offset-7,
                .col-lg-offset-8,
                .col-lg-offset-9,
                .col-lg-offset-10,
                .col-lg-offset-11,
                .col-lg-offset-12 {
                    -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                    -ms-flex: 0 0 auto;
                    flex: 0 0 auto;
                    padding-right: 0.5rem;
                    padding-left: 0.5rem;
                }

                .col-lg {
                    -ms-flex-positive: 1;
                    flex-grow: 1;
                    -ms-flex-preferred-size: 0;
                    flex-basis: 0;
                    max-width: 100%;
                }

                .col-lg-1 {
                    -ms-flex-preferred-size: 8.33333333%;
                    flex-basis: 8.33333333%;
                    max-width: 8.33333333%;
                }

                .col-lg-2 {
                    -ms-flex-preferred-size: 16.66666667%;
                    flex-basis: 16.66666667%;
                    max-width: 16.66666667%;
                }

                .col-lg-2dot3 {
                    -ms-flex-preferred-size: 19.44444444%;
                    flex-basis: 19.4444444444%;
                    max-width: 19.444444444%;
                }

                .col-lg-3 {
                    -ms-flex-preferred-size: 25%;
                    flex-basis: 25%;
                    max-width: 25%;
                }

                .col-lg-4 {
                    -ms-flex-preferred-size: 33.33333333%;
                    flex-basis: 33.33333333%;
                    max-width: 33.33333333%;
                }

                .col-lg-5 {
                    -ms-flex-preferred-size: 41.66666667%;
                    flex-basis: 41.66666667%;
                    max-width: 41.66666667%;
                }

                .col-lg-6 {
                    -ms-flex-preferred-size: 50%;
                    flex-basis: 50%;
                    max-width: 50%;
                }

                .col-lg-7 {
                    -ms-flex-preferred-size: 58.33333333%;
                    flex-basis: 58.33333333%;
                    max-width: 58.33333333%;
                }

                .col-lg-8 {
                    -ms-flex-preferred-size: 66.66666667%;
                    flex-basis: 66.66666667%;
                    max-width: 66.66666667%;
                }

                .col-lg-9 {
                    -ms-flex-preferred-size: 75%;
                    flex-basis: 75%;
                    max-width: 75%;
                }

                .col-lg-10 {
                    -ms-flex-preferred-size: 83.33333333%;
                    flex-basis: 83.33333333%;
                    max-width: 83.33333333%;
                }

                .col-lg-11 {
                    -ms-flex-preferred-size: 91.66666667%;
                    flex-basis: 91.66666667%;
                    max-width: 91.66666667%;
                }

                .col-lg-12 {
                    -ms-flex-preferred-size: 100%;
                    flex-basis: 100%;
                    max-width: 100%;
                }

                .col-lg-offset-0 {
                    margin-left: 0;
                }

                .col-lg-offset-1 {
                    margin-left: 8.33333333%;
                }

                .col-lg-offset-1dot5 {
                    margin-left: 12.49999999%;
                }

                .col-lg-offset-2 {
                    margin-left: 16.66666667%;
                }

                .col-lg-offset-2dot5 {
                    margin-left: 20.83333333%;
                }

                .col-lg-offset-3 {
                    margin-left: 25%;
                }

                .col-lg-offset-4 {
                    margin-left: 33.33333333%;
                }

                .col-lg-offset-5 {
                    margin-left: 41.66666667%;
                }

                .col-lg-offset-6 {
                    margin-left: 50%;
                }

                .col-lg-offset-7 {
                    margin-left: 58.33333333%;
                }

                .col-lg-offset-8 {
                    margin-left: 66.66666667%;
                }

                .col-lg-offset-9 {
                    margin-left: 75%;
                }

                .col-lg-offset-10 {
                    margin-left: 83.33333333%;
                }

                .col-lg-offset-11 {
                    margin-left: 91.66666667%;
                }

                .start-lg {
                    -ms-flex-pack: start;
                    justify-content: flex-start;
                    text-align: start;
                }

                .center-lg {
                    -ms-flex-pack: center;
                    justify-content: center;
                    text-align: center;
                }

                .end-lg {
                    -ms-flex-pack: end;
                    justify-content: flex-end;
                    text-align: end;
                }

                .top-lg {
                    -ms-flex-align: start;
                    align-items: flex-start;
                }

                .middle-lg {
                    -ms-flex-align: center;
                    align-items: center;
                }

                .bottom-lg {
                    -ms-flex-align: end;
                    align-items: flex-end;
                }

                .around-lg {
                    -ms-flex-pack: distribute;
                    justify-content: space-around;
                }

                .between-lg {
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                }

                .first-lg {
                    -ms-flex-order: -1;
                    order: -1;
                }

                .last-lg {
                    -ms-flex-order: 1;
                    order: 1;
                }

                .initial-order-lg {
                    -ms-flex-order: initial;
                    order: initial;
                }
                }

                @media only screen and (min-width: 1200px) {
                .col-xl,
                .col-xl-1,
                .col-xl-2,
                .col-xl-3,
                .col-xl-4,
                .col-xl-5,
                .col-xl-6,
                .col-xl-7,
                .col-xl-8,
                .col-xl-9,
                .col-xl-10,
                .col-xl-11,
                .col-xl-12,
                .col-xl-offset-0,
                .col-xl-offset-1,
                .col-xl-offset-1dot5,
                .col-xl-offset-2,
                .col-xl-offset-3,
                .col-xl-offset-4,
                .col-xl-offset-5,
                .col-xl-offset-6,
                .col-xl-offset-7,
                .col-xl-offset-8,
                .col-xl-offset-9,
                .col-xl-offset-10,
                .col-xl-offset-11,
                .col-xl-offset-12 {
                    -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                    -ms-flex: 0 0 auto;
                    flex: 0 0 auto;
                    padding-right: 0.5rem;
                    padding-left: 0.5rem;
                }

                .col-xl {
                    -ms-flex-positive: 1;
                    flex-grow: 1;
                    -ms-flex-preferred-size: 0;
                    flex-basis: 0;
                    max-width: 100%;
                }

                .col-xl-1 {
                    -ms-flex-preferred-size: 8.33333333%;
                    flex-basis: 8.33333333%;
                    max-width: 8.33333333%;
                }

                .col-xl-2 {
                    -ms-flex-preferred-size: 16.66666667%;
                    flex-basis: 16.66666667%;
                    max-width: 16.66666667%;
                }

                .col-xl-3 {
                    -ms-flex-preferred-size: 25%;
                    flex-basis: 25%;
                    max-width: 25%;
                }

                .col-xl-4 {
                    -ms-flex-preferred-size: 33.33333333%;
                    flex-basis: 33.33333333%;
                    max-width: 33.33333333%;
                }

                .col-xl-5 {
                    -ms-flex-preferred-size: 41.66666667%;
                    flex-basis: 41.66666667%;
                    max-width: 41.66666667%;
                }

                .col-xl-6 {
                    -ms-flex-preferred-size: 50%;
                    flex-basis: 50%;
                    max-width: 50%;
                }

                .col-xl-7 {
                    -ms-flex-preferred-size: 58.33333333%;
                    flex-basis: 58.33333333%;
                    max-width: 58.33333333%;
                }

                .col-xl-8 {
                    -ms-flex-preferred-size: 66.66666667%;
                    flex-basis: 66.66666667%;
                    max-width: 66.66666667%;
                }

                .col-xl-9 {
                    -ms-flex-preferred-size: 75%;
                    flex-basis: 75%;
                    max-width: 75%;
                }

                .col-xl-10 {
                    -ms-flex-preferred-size: 83.33333333%;
                    flex-basis: 83.33333333%;
                    max-width: 83.33333333%;
                }

                .col-xl-11 {
                    -ms-flex-preferred-size: 91.66666667%;
                    flex-basis: 91.66666667%;
                    max-width: 91.66666667%;
                }

                .col-xl-12 {
                    -ms-flex-preferred-size: 100%;
                    flex-basis: 100%;
                    max-width: 100%;
                }

                .col-xl-offset-0 {
                    margin-left: 0;
                }

                .col-xl-offset-1 {
                    margin-left: 8.33333333%;
                }

                .col-xl-offset-1dot5 {
                    margin-left: 12.49999999%;
                }

                .col-xl-offset-2 {
                    margin-left: 16.66666667%;
                }

                .col-xl-offset-3 {
                    margin-left: 25%;
                }

                .col-xl-offset-4 {
                    margin-left: 33.33333333%;
                }

                .col-xl-offset-5 {
                    margin-left: 41.66666667%;
                }

                .col-xl-offset-6 {
                    margin-left: 50%;
                }

                .col-xl-offset-7 {
                    margin-left: 58.33333333%;
                }

                .col-xl-offset-8 {
                    margin-left: 66.66666667%;
                }

                .col-xl-offset-9 {
                    margin-left: 75%;
                }

                .col-xl-offset-10 {
                    margin-left: 83.33333333%;
                }

                .col-xl-offset-11 {
                    margin-left: 91.66666667%;
                }

                .start-xl {
                    -ms-flex-pack: start;
                    justify-content: flex-start;
                    text-align: start;
                }

                .center-xl {
                    -ms-flex-pack: center;
                    justify-content: center;
                    text-align: center;
                }

                .end-xl {
                    -ms-flex-pack: end;
                    justify-content: flex-end;
                    text-align: end;
                }

                .top-xl {
                    -ms-flex-align: start;
                    align-items: flex-start;
                }

                .middle-xl {
                    -ms-flex-align: center;
                    align-items: center;
                }

                .bottom-xl {
                    -ms-flex-align: end;
                    align-items: flex-end;
                }

                .around-xl {
                    -ms-flex-pack: distribute;
                    justify-content: space-around;
                }

                .between-xl {
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                }

                .first-xl {
                    -ms-flex-order: -1;
                    order: -1;
                }

                .last-xl {
                    -ms-flex-order: 1;
                    order: 1;
                }

                .initial-order-xl {
                    -ms-flex-order: initial;
                    order: initial;
                }
                }

                @media only screen and (max-width: 575px) {
                .hidden-xs {
                    display: none;
                }
                }

                @media only screen and (min-width: 576px) and (max-width: 767px) {
                .hidden-sm {
                    display: none;
                }
                }

                @media only screen and (min-width: 768px) and (max-width: 991px) {
                .hidden-md {
                    display: none;
                }
                }

                @media only screen and (min-width: 992px) and (max-width: 1199px) {
                .hidden-lg {
                    display: none;
                }
                }

                @media only screen and (min-width: 1200px) {
                .hidden-xl {
                    display: none;
                }
                }

            `}</style>
        </Head>
        <div id="root">
        <body>
            {this.props.customValue}
            <noscript>Sorry! You'll need to enable JavaScript to see my site.</noscript>
            <Main />
            <NextScript />
        </body>
        </div>
      </html>
    )
  }
}