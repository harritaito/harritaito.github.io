import React, { Component } from "react";
import Link from "next/link";
import Project from "../components/Project";
import Row from "../components/Row";
import Misc from "../components/Misc";
import Footer from "../components/Footer";

import languagerobot from "../static/media/home/languagerobot.jpg";
import kivakaupunki from "../static/media/home/kivakaupunki.jpg";
import aikakone from "../static/media/home/aikakone.jpg";

class Home extends Component {
  constructor() {
    super();

    const date = new Date();

    let hours = date.getHours();

    if (hours < 12) {
      this.state = {
        greeting: "Good morning",
      };
    } else if (hours >= 12 && hours <= 17) {
      this.state = {
        greeting: "Good afternoon",
      };
    } else if (hours > 17 && hours <= 24) {
      this.state = {
        greeting: "Good evening",
      };
    } else {
      this.state = {
        greeting: "Hello",
      };
    }
  }

  render() {
    return (
      <div className="Home container">
        <div className="pohja"></div>
        <div className="intro">
          <Row
            content={
              <h3 className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                {this.state.greeting}, I’m
              </h3>
            }
          />

          <Row
            content={
              <h1 className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 name">
                Harri Halonen
              </h1>
            }
          />

        <Row
          content={
            <div className="col-xs-12 col-sm-8 col-md-9 col-lg-6 col-xl-6 hero">
              <p className="tagline">
                Product designer partnering with product teams to ship confident,
                insight-led experiences.
              </p>
              <p className="hero-intro">
                I translate messy problems into validated direction—running discovery, prototyping, and delivery rituals that keep
                teams aligned on customer and business outcomes.
              </p>
              <ul className="value-list">
                <li>
                  <strong>Focus the roadmap:</strong> Turn research and analytics into opportunity frameworks and testable bets.
                </li>
                <li>
                  <strong>Design with evidence:</strong> Blend field studies, co-creation, and iterative prototyping to remove uncertainty before engineers build.
                </li>
                <li>
                  <strong>Scale collaboration:</strong> Facilitate product rituals and design systems that help teams ship accessible, measurable improvements faster.
                </li>
              </ul>
              <div className="cta-group">
                <a className="primary-cta" href="mailto:harri@harritaito.com">
                  Request a portfolio walkthrough
                </a>
                <a className="secondary-cta" href="#case-studies">
                  Skip to case studies ↓
                </a>
              </div>
              <div className="availability">
                Currently open to senior product designer roles with hybrid or remote teams.
              </div>
              <div className="about-link">
                Want to learn about the person behind the work?{" "}
                <Link href="/about" as="/about">
                  Get to know me.
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
                </Link>
              </div>
            </div>
          }
        />
        </div>
        <Row
          content={
            <h2
              className="col-xs-12 col-sm-10 col-md-9 col-lg-6 col-xl-6 section-heading"
              id="product-impact"
            >
              How I create product impact
            </h2>
          }
        />
        <Row
          content={
            <div className="col-xs-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 impact-grid">
              <div className="impact-card">
                <h3>Discovery to clarity</h3>
                <p>
                  Align stakeholders around real problems by planning research, synthesising insights, and framing opportunities
                  with JTBD and service blueprints.
                </p>
              </div>
              <div className="impact-card">
                <h3>Prototype to proof</h3>
                <p>
                  Build and test flows, interfaces, and content in rapid cycles—using mixed-method validation to prioritise what
                  we ship next.
                </p>
              </div>
              <div className="impact-card">
                <h3>Scale the craft</h3>
                <p>
                  Establish design rituals, systems, and handoffs that help product and engineering teams move faster without
                  sacrificing quality or accessibility.
                </p>
              </div>
            </div>
          }
        />
        <Row
          content={
            <div className="col-xs-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 toolkit">
              Toolkit: discovery research, facilitation, information architecture, interaction design, design systems,
              accessibility, analytics, experimentation.
            </div>
          }
        />
        <Row
          content={
            <h2 className="col-xs-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 section-heading" id="case-studies">
              Selected case studies
            </h2>
          }
        />
        <Row
          content={
            <p className="col-xs-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 section-subheading">
              A snapshot of how I help teams turn research insight into outcomes across public, healthcare, and emerging tech
              domains.
            </p>
          }
        />
        <Project
          title="HRI study"
          description="Led contextual inquiries, interviews, and usability studies to define how a teaching assistant robot should support classroom rituals and learning outcomes."
          image={languagerobot}
          link="/hri-study"
          alt="Application for city reporting"
          color="red"
          percentage="8%"
        />
        <Project
          title="Kiva Kaupunki"
          description="Co-created a city feedback platform that turned citizen reporting into actionable insights for officials through service blueprints and iterative prototyping."
          image={kivakaupunki}
          link="/kivakaupunki"
          alt="Application for city reporting"
          color="blue"
          percentage="8%"
        />
        <Project
          title="Aikakone"
          description="Designed a reminiscence service for memory care by partnering with nurses and families, prototyping multi-sensory moments that improve engagement for people with dementia."
          image={aikakone}
          link="/aikakone"
          alt="Concept service for people with memory deseaces"
          color="purple"
          percentage="28%"
        />
        <Row
          content={
            <h3
              className={
                "col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 other-stuff"
              }
            >
              Some other stuff I’ve done
            </h3>
          }
        />
        <Misc />
        <Row
          content={
            <h3
              className={
                "col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 get-in-touch"
              }
            >
              Get in touch
            </h3>
          }
        />
        <Row
          content={
            <div
              style={{ marginTop: "1.5em" }}
              className={
                "col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 col-xl-4 col-xl-offset-4 contact"
              }
            >
              I'm currently interviewing for senior product designer roles and select consulting partnerships.{" "}
              <a href="mailto:harri@harritaito.com">
                email me
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
              </a>{" "}
              or{" "}
              <a href={"https://calendly.com/harritaito/45min/"}>
                book time on my calendar
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
              </a>{" "}
              to explore how we could work together.
            </div>
          }
        />
        <Footer />
        <style jsx>{`
          .Home h1 {
            margin-top: -0.5rem;
            font-family: Trirong, serif;
            margin-bottom: 1.2rem;
          }
          .Home {
            padding-top: 5rem;
            padding-bottom: 2rem;
          }

          @media only screen and (max-width: 45rem) {
            .Home {
              padding-top: 2rem;
            }
          }

          .Home .hero {
            margin-top: 1.5em;
          }

          .Home .tagline {
            font-size: 1.6em;
            font-weight: 600;
            line-height: 1.5;
          }

          @media only screen and (max-width: 45rem) {
            .Home .tagline {
              font-size: 1.4em;
            }
          }

          .Home .hero-intro {
            margin-top: 1.5em;
            font-size: 1.05em;
            line-height: 1.7;
          }

          .Home .value-list {
            margin-top: 1.5em;
            padding-left: 1.2em;
            line-height: 1.7;
          }

          .Home .value-list li {
            margin-bottom: 0.75em;
          }

          .Home .value-list li:last-child {
            margin-bottom: 0;
          }

          .Home .cta-group {
            display: flex;
            flex-wrap: wrap;
            gap: 1em;
            margin-top: 2em;
          }

          .Home .primary-cta,
          .Home .secondary-cta {
            display: inline-block;
            font-weight: 600;
            text-decoration: none;
            border-radius: 999px;
            padding: 0.75em 1.5em;
          }

          .Home .primary-cta {
            background: #1e95ed;
            color: white;
          }

          .Home .primary-cta:hover,
          .Home .primary-cta:focus {
            background: #1475b9;
          }

          .Home .secondary-cta {
            border: 2px solid rgba(30, 149, 237, 0.45);
            color: inherit;
          }

          .Home .secondary-cta:hover,
          .Home .secondary-cta:focus {
            border-color: #1e95ed;
            color: #1e95ed;
          }

          .Home .availability {
            margin-top: 1.5em;
            font-size: 0.95em;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .Home .about-link {
            margin-top: 1.5em;
          }

          .Home .section-heading {
            margin-top: 5em;
            margin-bottom: 0.5em;
            font-size: 1.8em;
            line-height: 1.4;
          }

          @media only screen and (max-width: 45rem) {
            .Home .section-heading {
              margin-top: 3em;
            }
          }

          .Home .section-subheading {
            margin-bottom: 2.5em;
            line-height: 1.7;
          }

          .Home .impact-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5em;
            margin-top: 1em;
          }

          .Home .impact-card {
            background: rgba(255, 255, 255, 0.88);
            border-radius: 1.2rem;
            box-shadow: 0 1em 2em 0 rgba(0, 0, 0, 0.12);
            padding: 1.75em;
            flex: 1 1 14rem;
            min-width: 14rem;
          }

          .Home .impact-card h3 {
            margin-top: 0;
            margin-bottom: 0.75em;
          }

          .Home .impact-card p {
            margin: 0;
            line-height: 1.7;
          }

          .Home .toolkit {
            margin-top: 1.5em;
            line-height: 1.7;
            font-size: 0.95em;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          @media only screen and (max-width: 45rem) {
            .Home .toolkit {
              letter-spacing: 0.04em;
            }
          }

          .pohja {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: url("../static/media/pohja.svg");
            background-size: cover;
            z-index: -1;
            opacity: 0.55;
          }

          .Home .other-stuff {
            text-align: center;
            margin-top: 5em;
            margin-bottom: 1.5em;
          }
          @media only screen and (max-width: 45rem) {
            .Home .other-stuff {
              margin-top: 3em;
            }
          }

          .Home .get-in-touch {
            text-align: center;
            margin-top: 4em;
            margin-bottom: 0em;
          }

          @media only screen and (max-width: 45rem) {
            .Home .get-in-touch {
              margin-top: 2em;
            }
          }

          .Home .contact {
            text-align: center;
          }

          @media only screen and (max-width: 412px) {
            .Home .name {
              font-size: 2.8em;
              line-height: 3rem;
            }
          }
          @media only screen and (max-width: 45rem) {
            .Home name {
              font-size: 1.8em;
            }
          }
          .ReactModal__Content--after-open {
            margintop: 5vh;
            maxwidth: 89vh;
          }
        `}</style>
      </div>
    );
  }
}

export default Home;
