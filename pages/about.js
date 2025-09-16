import React, { Component } from "react";
import Row from "../components/Row";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
                  <img src="../static/media/about/me.jpg" alt={"Me"} />
                </div>
              </div>
            }
          />

          <Row
            content={
              <h3 className="col-xs-12 col-sm-12 col-md-12 col-lg-offset-3 col-lg-6 col-xl-6">
                Hey there!
              </h3>
            }
          />

          <Row
            content={
              <p className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
                I’m Harri Halonen, an experience designer rooted in Tampere,
                Finland. I help multidisciplinary teams turn research insights
                into digital products and services that feel considerate,
                inclusive, and genuinely useful.
              </p>
            }
          />

          <Row
            content={
              <p className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
                These days my work spans product discovery, service design, and
                strategy for industrial, public sector, and healthcare projects.
                I run field research, facilitate co-creation, and iterate on
                prototypes so teams can make confident, evidence-based
                decisions.
              </p>
            }
          />

          <Row
            content={
              <ul className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6 list">
                <li>
                  <strong>Recent focus:</strong> Leading discovery sprints,
                  design ops, and product experiments for cross-functional
                  teams exploring industrial XR, AI-assisted tooling, and
                  connected services.
                </li>
                <li>
                  <strong>Academic highlight:</strong> My 2021 master’s thesis,{" "}
                  <a
                    href={"https://urn.fi/URN:NBN:fi:tuni-202107046179"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Interaction Design Principles for Industrial XR
                    <div
                      style={{
                        display: "block",
                        outline: "none",
                        height: 8,
                        width: "98%",
                        background: "rgba(139, 200, 246, 0.565)",
                        marginTop: -9,
                        marginLeft: 2,
                      }}
                    />
                  </a>{" "}
                  for Tampere University’s HCI program continues to guide how I
                  blend emerging tech with humane experiences.
                </li>
                <li>
                  <strong>Community:</strong> I stay active in the Finnish
                  design and startup scene through volunteering, mentoring, and
                  speaking—building on organising roles with events like Stream
                  Startup Festival.
                </li>
                <li>
                  <strong>Off the screen:</strong> Capturing everyday stories on
                  film and keeping my basketball game sharp keep me energised.
                </li>
              </ul>
            }
          />

          <Row
            content={
              <p className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
                Thanks for stopping by—it truly means a lot. If you’d like to
                chat,{" "}
                <a href="mailto:harri@harritaito.com">send me an email</a> or
                grab time via my{" "}
                <a href="https://calendly.com/harritaito/45min/">
                  open calendar
                  <div
                    style={{
                      display: "block",
                      height: 8,
                      width: "98%",
                      background: "rgba(139, 200, 246, 0.565)",
                      marginTop: -9,
                      marginLeft: 2,
                    }}
                  />
                </a>
                . This page uses a small cookie to keep embedded media behaving
                nicely.
                <span className="emoji" role="img" aria-label="vulcan salute">
                  🖖
                </span>
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
            border-radius: 999px
          }
          @media only screen and (max-width: 45rem) {
            .About .my-photo {height: 12rem; width: 12rem;}
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
