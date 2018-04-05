import React, { Component } from 'react';
import Row from '../components/Row';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

class About extends Component {

  render() {

    return (
      <div className="About container">

        <Navbar nextProjectLink={null} nextProjectName={null} color={"grey"}/>

        <div className={"content"}>

          <Row content={
            <div className="my-photo-container col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className={"my-photo"}>
                <img src="../static/media/about/me.jpg" alt={"Me"}/>
              </div>
            </div>
          }/>

          <Row content={
            <h3 className="col-xs-12 col-sm-12 col-md-12 col-lg-offset-3 col-lg-6 col-xl-6">Hey there!</h3>
          }/>

          <Row content={
            <p className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
              Hi, I'm glad you’d like to get more familiar! Here’s me in quick bulletpoints:
            </p>
          }/>

          <Row content={
            <ul className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6 list">
              <li>From Tampere, Finland <span className="emoji" role="img" aria-label="basketball">😊</span></li>
              <li>I brew craft beer <span className="emoji" role="img" aria-label="clinking beer glasses">🍻</span>and love parings of wine and food <span role="img" aria-label="wine glasss">🍷</span></li>
              <li>I'm a non-fiction audiobook and podcast addict <span className="emoji" role="img" aria-label="headphones">🎧</span></li>
              <li>I love film and capturing a moment myself <span className="emoji" role="img" aria-label="film">📽</span></li>
              <li>Lauri Markkanen fan <span className="emoji" role="img" aria-label="basketball">🏀</span></li>
            </ul>
          }/>

          <Row content={
            <p className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
              Feel free to contact me in social media.
            </p>
          }/>

          <Row content={
            <p className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
              Thanks for visiting, it truly means a lot. If you have any suggestions hit up the "webmaster" (me) at hi [at] harritaito [dot] com . <span className="emoji" role="img" aria-label="vulcan salute">🖖</span>
            </p>
          }/>

        </div>

        <Footer/>
        <style jsx>{`{
          .About .content {
            padding-top: 60px;
          }

          .About .content .my-photo-container {
            text-align: center;
          }

          .About .my-photo {
            height: 275px;
            display: inline-block;
            width: 275px;
          }

          .About .my-photo img {
            display: block;
            width: 100%;
            border-radius: 999px
          }

          .About h3 {
            text-align: center;
          }

          .About .list {
            padding-left: 40px;
            margin-top: 0;
          }


          .About .nav .navbar-link:hover {
            color: #747a75;
          }

          .About .nav .navbar-link:hover a {
            color: #747a75;
          }

          .About .nav .navbar-link:hover svg {
            fill: #747a75;
          }

          .About .emoji {
            display: inline-block;
            margin-right: 2px;
        }
      `}</style>
      </div>
    );
  }
}

export default About;
