import React, { Component } from "react";
import Link from "next/link";
import Project from "../components/Project";
import ProjectsList from "../components/Projects";
import Row from "../components/Row";
import Footer from "../components/Footer";
import HeroLineArt from "../components/HeroLineArt";
import HeroFacts from "../components/HeroFacts";
import SelectedWorkList from "../components/SelectedWorkList";
import HighlightUnderline from "../components/design-system/HighlightUnderline";
import { colors, radii } from "../components/design-system/tokens";

class Home extends Component {
  constructor() {
    super();

    const date = new Date();
    const hours = date.getHours();

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
    const featuredProjects = new ProjectsList().featuredProjects;

    return (
      <div className="Home container">
        <div className="pohja"></div>
        <div className="intro">
          <HeroLineArt />
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
                  Product designer. I make the complicated parts legible — and bring that with me to every team.
                </p>
                <p className="hero-intro">
                  Most design problems are structure problems in disguise. I work out what's actually going on, make it clear, and help the team carry it somewhere real.
                </p>
                <HeroFacts />
                <div className="about-link">
                  <Link href="/about" as="/about">
                    More about me.
                    <HighlightUnderline />
                  </Link>
                </div>
              </div>
            }
          />
        </div>

        <section className="section" id="work" aria-labelledby="work-heading">
          <Row
            content={
              <h2
                className="col-xs-12 col-sm-10 col-md-9 col-lg-6 col-xl-6 section-heading"
                id="work-heading"
              >
                Work
              </h2>
            }
          />
          <Row
            content={
              <div className="col-xs-12 col-sm-12 col-md-11 col-lg-10 col-xl-9">
                <SelectedWorkList />
              </div>
            }
          />
          {featuredProjects.map((project, index) => (
            <Project
              key={project.name}
              title={project.problemTitle}
              projectName={project.projectName}
              description={project.description}
              image={project.image}
              link={project.link}
              alt={project.alt}
              color={project.color}
              label={project.label}
              percentage={index < 3 ? "8%" : "28%"}
            />
          ))}
        </section>

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

          .Home .intro {
            position: relative;
            min-height: 100svh;
            min-height: 100dvh;
            padding-bottom: calc(2.5rem + var(--sab));
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

          .Home .hero-intro,
          .Home .section-copy,
          .Home .section-subheading,
          .Home .section-list {
            line-height: 1.7;
          }

          .Home .hero-intro {
            margin-top: 1.5em;
            font-size: 1.05em;
          }

          .Home .value-list {
            margin-top: 1.5em;
            padding-left: 1.2em;
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
            border-radius: ${radii.circle};
            padding: 0.75em 1.5em;
          }

          .Home .primary-cta {
            background: ${colors.accentBlue};
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
            border-color: ${colors.accentBlue};
            color: ${colors.accentBlue};
          }

          .Home .availability {
            margin-top: 1.5em;
            font-size: 0.95em;
            font-weight: 600;
            letter-spacing: 0.05em;
            text-transform: uppercase;
          }

          .Home .about-link {
            margin-top: 1.5em;
          }

          .Home .section {
            padding-top: 1px;
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
          }

          .Home .section-list {
            padding-left: 1.2em;
          }

          .Home .section-inline-link {
            display: inline-block;
          }

          @media only screen and (max-width: 412px) {
            .Home .name {
              font-size: 2.8em;
              line-height: 3rem;
            }
          }

          @media only screen and (max-width: 45rem) {
            .Home .name {
              font-size: 1.8em;
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
