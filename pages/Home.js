import React, { Component } from "react";
import Link from "next/link";
import Project from "../components/Project";
import ProjectsList from "../components/Projects";
import Row from "../components/Row";
import Footer from "../components/Footer";
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
                  Product and systems designer helping civic, health, and emerging-tech teams turn research into workable products and services.
                </p>
                <p className="hero-intro">
                  I help cross-functional teams define the problem, align on tradeoffs, and carry a design through to something buildable. My work sits between discovery, information architecture, interaction design, and service thinking.
                </p>
                <ul className="value-list">
                  <li>
                    <strong>Systems:</strong> Information architecture, service flows, and interaction patterns that hold together as products and teams grow.
                  </li>
                  <li>
                    <strong>Research:</strong> Interviews, contextual inquiry, synthesis, and workshops that make tradeoffs visible before the work gets expensive.
                  </li>
                  <li>
                    <strong>AI & Data:</strong> Product thinking for AI-assisted tools, analytics, and connected services where the system matters as much as the interface.
                  </li>
                </ul>
                <div className="cta-group">
                  <a className="primary-cta" href="#work">
                    Browse selected work
                  </a>
                  <a className="secondary-cta" href="/projects">
                    Open the archive
                  </a>
                </div>
                <div className="availability">
                  I work best on problems that need structure, clarity, and a calm path from research to delivery.
                </div>
                <div className="about-link">
                  Curious about the person behind the work?{" "}
                  <Link href="/about" as="/about">
                    Get to know me.
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
              <p className="col-xs-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 section-subheading">
                A small evidence map: archive, concept, and in-development work. Each card leads with the problem type and the kind of proof it provides. The full archive stays reachable from the{" "}
                <Link href="/projects" as="/projects">
                  projects page
                  <HighlightUnderline />
                </Link>
                .
              </p>
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

        <section className="section" id="systems" aria-labelledby="systems-heading">
          <Row
            content={
              <h2 className="col-xs-12 col-sm-10 col-md-9 col-lg-6 col-xl-6 section-heading" id="systems-heading">
                Systems
              </h2>
            }
          />
          <Row
            content={
              <div className="col-xs-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 section-copy">
                I work on the structure behind the screens: how flows connect, how information is grouped, and how teams keep a product legible after launch.
              </div>
            }
          />
          <Row
            content={
              <ul className="col-xs-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 value-list section-list">
                <li>
                  Service maps and information architecture that reveal the real shape of a problem.
                </li>
                <li>
                  Interaction patterns and handoffs that help product, design, and engineering stay aligned.
                </li>
                <li>
                  Lightweight design systems and documentation that keep decisions repeatable instead of fragile.
                </li>
              </ul>
            }
          />
        </section>

        <section className="section" id="research" aria-labelledby="research-heading">
          <Row
            content={
              <h2 className="col-xs-12 col-sm-10 col-md-9 col-lg-6 col-xl-6 section-heading" id="research-heading">
                Research
              </h2>
            }
          />
          <Row
            content={
              <div className="col-xs-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 section-copy">
                I use research to reduce guesswork and make tradeoffs easier to explain. The goal is not just insight, but a clear path from evidence to design decisions.
              </div>
            }
          />
          <Row
            content={
              <ul className="col-xs-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 value-list section-list">
                <li>
                  Interviews, contextual inquiry, and field observation when the lived context matters.
                </li>
                <li>
                  Synthesis, affinity work, and opportunity framing that keep teams focused on what the evidence actually says.
                </li>
                <li>
                  Workshops and prototyping sessions that make it easier to align around the next decision.
                </li>
              </ul>
            }
          />
        </section>

        <section className="section" id="ai-data" aria-labelledby="ai-data-heading">
          <Row
            content={
              <h2 className="col-xs-12 col-sm-10 col-md-9 col-lg-6 col-xl-6 section-heading" id="ai-data-heading">
                AI & Data
              </h2>
            }
          />
          <Row
            content={
              <div className="col-xs-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 section-copy">
                I am interested in AI and data work when it is grounded in a real product problem. The focus stays on useful workflows, responsible defaults, and systems people can trust.
              </div>
            }
          />
          <Row
            content={
              <ul className="col-xs-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 value-list section-list">
                <li>
                  AI-assisted tooling that gives users clearer control instead of hiding the system behind a magic label.
                </li>
                <li>
                  Analytics and feedback loops that inform design choices without turning the product into a dashboard.
                </li>
                <li>
                  Connected services where the model, the interface, and the service flow need to work together.
                </li>
              </ul>
            }
          />
        </section>

        <section className="section" id="about" aria-labelledby="about-heading">
          <Row
            content={
              <h2 className="col-xs-12 col-sm-10 col-md-9 col-lg-6 col-xl-6 section-heading" id="about-heading">
                About
              </h2>
            }
          />
          <Row
            content={
              <div className="col-xs-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 section-copy">
                I’m Harri Halonen, based in Tampere, Finland. My work sits at the intersection of product design, service design, and research, with a bias toward clarity, useful structure, and honest collaboration.
              </div>
            }
          />
          <Row
            content={
              <div className="col-xs-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 section-copy">
                The full About page has a little more on background, community work, and the kinds of projects I’ve been close to.
                <span className="section-inline-link">
                  {" "}
                  <Link href="/about" as="/about">
                    Read more.
                    <HighlightUnderline />
                  </Link>
                </span>
              </div>
            }
          />
        </section>

        <section className="section" id="contact" aria-labelledby="contact-heading">
          <Row
            content={
              <h2 className="col-xs-12 col-sm-10 col-md-9 col-lg-6 col-xl-6 section-heading" id="contact-heading">
                Contact
              </h2>
            }
          />
          <Row
            content={
              <div className="col-xs-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 section-copy contact-copy">
                I’m happy to talk with teams that need product judgment, system thinking, or research-led design support. Reach me at{" "}
                <span className="obfuscated-email" aria-label="harri@harritaito.com">
                  harri [at] harritaito [dot] com
                </span>{" "}
                or{" "}
                <a href={"https://calendly.com/harritaito/45min/"}>
                  book time on my calendar
                  <HighlightUnderline />
                </a>
                .
              </div>
            }
          />
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

          .Home .contact-copy {
            margin-top: 0.25em;
          }

          .Home .obfuscated-email {
            display: inline-block;
            font-weight: 600;
            position: relative;
            z-index: 0;
          }

          .Home .obfuscated-email::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0.15em;
            width: 100%;
            height: 8px;
            background: ${colors.markerHighlight};
            z-index: -1;
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
