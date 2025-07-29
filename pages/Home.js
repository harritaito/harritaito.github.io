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
              <div className="col-xs-12 col-sm-8 col-md-9 col-lg-6 col-xl-6">
                <div>
                  Experience designer passionate about creating better customer
                  insight, increasing business value and improving customer
                  experience for every client. I believe in quick results
                  withdrawn from user centered - hands on research and
                  co-creation.
                </div>
                <div style={{ marginTop: "1.5em" }}>
                  You could say I'm on a quest to make technology delightful,
                  intuitive, and accessible to everyone.
                </div>
                <div style={{ marginTop: "1.5em" }}>
                  Scroll 👇 to see some highlighted projects.
                </div>
                <div style={{ marginTop: "1.5em" }}>
                  Hope you enjoy this porfolio made with React and Next.js with
                  JSX styles, it is my first crack at them and originally
                  designed and made in 2018.
                </div>
                <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
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
        <Project
          title="HRI study"
          description="Contextual inquiry study with interviews, affinity diagrams to figure out the interaction and bit of usability with a teaching assistant robot."
          image={languagerobot}
          link="/hri-study"
          alt="Application for city reporting"
          color="red"
          percentage="8%"
        />
        <Project
          title="Kiva Kaupunki"
          description="From thoughts to action. Information of surroundings to city officials as well as for the public, so they can be even better."
          image={kivakaupunki}
          link="/kivakaupunki"
          alt="Application for city reporting"
          color="blue"
          percentage="8%"
        />
        <Project
          title="Aikakone"
          description="Dementia/Alzheimer diseases increasing and growing concern about quality of health care systems. Nurses don’t have sufficient time to engage individually and it’s difficult to get patients excited in common activities."
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
              Feel free to{" "}
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
              </a>
              .
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
            margin-top: -1.5em;
            margin-bottom: 1.5em;
          }
          @media only screen and (max-width: 45rem) {
            .Home .other-stuff {
              margin-top: -3.5em;
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
