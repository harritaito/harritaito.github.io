import React, { Component } from "react";
import Row from "../components/Row";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Principles from "../components/Principles";
import HighlightUnderline from "../components/design-system/HighlightUnderline";
import { colors, radii } from "../components/design-system/tokens";
import mePhoto from "../static/media/about/me.jpg";
import { resolveAssetHeight, resolveAssetSrc, resolveAssetWidth } from "../components/assetSource";

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
                  <img
                    src={resolveAssetSrc(mePhoto)}
                    alt="Harri Halonen"
                    width={resolveAssetWidth(mePhoto)}
                    height={resolveAssetHeight(mePhoto)}
                    decoding="async"
                  />
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
                I’m Harri Halonen — an experience and product designer based in Tampere, Finland. I
                work where business goals meet technical reality, turning ambiguous requirements
                into clear workflows, reusable patterns, and design that’s ready to build.
              </p>
            }
          />

          <Row
            content={
              <p className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
                Most of my work lives in complex B2B and product systems — the kind with real edge
                cases, long-lived data, and users who can’t afford a confusing screen. I’m just as
                comfortable slowing down for trust-sensitive and health-adjacent contexts, where the
                right move is to design quietly and carefully.
              </p>
            }
          />

          <Row
            content={
              <p className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
                My background runs through HCI, service design, and enough field research to know
                that what people say they want and what they actually need are usually two different
                conversations.
              </p>
            }
          />

          <Row
            content={
              <div className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
                <p className="focus-intro">What I’m focused on right now:</p>
                <ul className="focus-list">
                  <li>
                    <strong>Complex product systems</strong> — workflows, states, and edge cases
                    that hold up over time
                  </li>
                  <li>
                    <strong>Design systems</strong> — reusable patterns a team can actually build on
                  </li>
                  <li>
                    <strong>Discovery</strong> — research-led framing before anyone touches pixels
                  </li>
                  <li>
                    <strong>AI and data workflows</strong> — making dense information legible and
                    actionable
                  </li>
                  <li>
                    <strong>Implementation quality</strong> — staying close to the build so the
                    design survives it
                  </li>
                </ul>
              </div>
            }
          />

          <Row
            content={
              <h3 className="lead-heading col-xs-12 col-sm-12 col-md-12 col-lg-offset-3 col-lg-6 col-xl-6">
                How I lead
              </h3>
            }
          />

          <Row
            content={
              <p className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
                I lead through craft and facilitation, not a title. I haven’t held formal line
                management, so what I offer sits elsewhere: raising a team’s design quality from
                inside the work — running critique, mentoring designers earlier in their path, and
                holding a quality bar that survives handoff.
              </p>
            }
          />

          <Row
            content={
              <p className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
                Most of it is enablement. I turn one-off calls into shared standards, keep
                cross-functional conversations aligned on the same picture, and make the design
                system something a team leans on instead of relearns. When designers and engineers
                pull in different directions, I facilitate toward a decision rather than dig in.
              </p>
            }
          />

          <Row
            content={
              <div className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
                <p className="focus-intro">
                  A lightweight operating model I bring to design quality:
                </p>
                <ul className="focus-list">
                  <li>
                    <strong>Critique</strong> — regular, structured sessions that pressure-test work
                    before it ships
                  </li>
                  <li>
                    <strong>Accessibility review</strong> — checking contrast, focus, and semantics
                    early, not as a final gate
                  </li>
                  <li>
                    <strong>Implementation notes</strong> — writing down the intent behind a design
                    so the build keeps it
                  </li>
                  <li>
                    <strong>Decision logs</strong> — recording what we chose and why, so nobody
                    relitigates it later
                  </li>
                  <li>
                    <strong>Post-release quality review</strong> — looking at what actually shipped
                    and feeding it back into the system
                  </li>
                </ul>
              </div>
            }
          />

          <Row
            content={
              <p className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
                These rituals earn their place through what they prevent. Decision logs stop teams
                relitigating settled calls; early accessibility review keeps rework out of the final
                week; implementation notes keep the build honest to the intent. What comes out the
                other side is clearer decisions, fewer clarification rounds, and interfaces that
                stay consistent as they scale — leadership measured by the work, quietly and in
                practice.
              </p>
            }
          />

          <Row
            content={
              <h3 className="principles-heading col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
                How I approach the work
              </h3>
            }
          />

          <Row
            content={
              <p className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
                A few principles that shape most of what I design — the judgment underneath the case
                studies.
              </p>
            }
          />

          <Row
            content={
              <div className="col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
                <Principles />
              </div>
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
                at Tampere University. Off the clock: film photography and basketball.
              </p>
            }
          />

          <Row
            content={
              <p className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
                If your team is thinking about any of this — product design roles, complex product
                systems, design systems, or AI and data workflows — I’m glad to compare notes. The
                easiest way is to{" "}
                <a
                  href={"https://linkedin.com/in/harrihalonen"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  reach me on LinkedIn
                  <HighlightUnderline />
                </a>
                , or by email — my first name, here at this domain.
              </p>
            }
          />
        </div>

        <Footer />
        <style jsx>{`
          .About .content {
            padding-top: 1rem;
          }
          @media only screen and (max-width: 45rem) {
            .About .content {
              padding-top: 0.5rem;
            }
          }

          .About .content .my-photo-container {
            text-align: center;
          }

          .About .my-photo {
            height: 275px;
            display: inline-block;
            width: 275px;
            aspect-ratio: 1;
            overflow: hidden;
            border-radius: ${radii.circle};
          }
          @media only screen and (max-width: 45rem) {
            .About .my-photo {
              height: 12rem;
              width: 12rem;
            }
          }

          .About .my-photo img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: ${radii.circle};
          }

          .About h3 {
            text-align: center;
          }

          .About .lead-heading {
            margin-top: 3rem;
          }

          .About h3.principles-heading {
            text-align: left;
            margin-top: 2.5rem;
            margin-bottom: 0.5rem;
          }

          .About .list {
            padding-left: 40px;
            margin-top: 0;
          }

          .About .focus-intro {
            margin-bottom: 0.5rem;
          }

          .About .focus-list {
            padding-left: 1.25rem;
            margin-top: 0;
          }

          .About .focus-list li {
            margin-bottom: 0.4rem;
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
