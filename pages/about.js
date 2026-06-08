import React, { Component } from "react";
import Row from "../components/Row";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HighlightUnderline from "../components/design-system/HighlightUnderline";
import { colors, radii } from "../components/design-system/tokens";
import mePhoto from "../static/media/about/me.jpg";
import { resolveAssetSrc } from "../components/assetSource";

class About extends Component {
  render() {
    return (
      <div className="About container">
        <Navbar nextProjectLink={null} nextProjectName={null} color={"grey"} />

        <div className={"content"}>
          <Row
            content={
              <div className="my-photo-container col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className={"my-photo"}>
                  <img src={resolveAssetSrc(mePhoto)} alt={"Me"} />
                </div>
              </div>
            }
          />

          <Row
            content={
              <h3 className="col-xs-12 col-sm-12 col-md-12 col-lg-offset-3 col-lg-6 col-xl-6">
                About
              </h3>
            }
          />

          <Row
            content={
              <p className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
                I’m Harri Halonen — product and service designer based in
                Tampere, Finland. I do the structural thinking: what the problem
                actually is, how a service fits together, and how to make the
                design clear enough that a team can act on it.
              </p>
            }
          />

          <Row
            content={
              <p className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
                My background runs through HCI, service design, and enough
                field research to know that what people say they want and what
                they actually need are usually two different conversations.
              </p>
            }
          />

          <Row
            content={
              <p className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
                In 2021 I wrote my{" "}
                <a
                  href={"https://urn.fi/URN:NBN:fi:tuni-202107046179"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  master’s thesis on interaction design for industrial XR
                  <HighlightUnderline />
                </a>{" "}
                at Tampere University. Off the clock: film photography and
                basketball.
              </p>
            }
          />

          <Row
            content={
              <p className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
                If something here made you curious,{" "}
                <a href="mailto:harri@harritaito.com">let’s talk</a>.
              </p>
            }
          />
        </div>

        <Footer />
        <style jsx>{`{
          .About .content {
            padding-top: 1rem;
          }
          @media only screen and (max-width: 45rem) {
            .About .content {padding-top: 0.5rem;}
          }

          .About .content .my-photo-container {
            text-align: center;
          }

          .About .my-photo {
            height: 275px;
            display: inline-block;
            width: 275px;
            border-radius: ${radii.circle}
          }
          @media only screen and (max-width: 45rem) {
            .About .my-photo {height: 12rem; width: 12rem;}
          }

          .About .my-photo img {
            display: block;
            width: 100%;
            border-radius: ${radii.circle}
          }

          .About h3 {
            text-align: center;
          }

          .About .list {
            padding-left: 40px;
            margin-top: 0;
          }


          .About .nav .navbar-link:hover {
            color: ${colors.accentGrey};
          }

          .About .nav .navbar-link:hover a {
            color: ${colors.accentGrey};
          }

          .About .nav .navbar-link:hover svg {
            fill: ${colors.accentGrey};
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
