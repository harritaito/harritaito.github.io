import React, { Component } from "react";
import Row from "../components/Row";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { colors } from "../components/design-system/tokens";

class Contact extends Component {
  render() {
    return (
      <div className="Contact container">
        <Navbar nextProjectLink={null} nextProjectName={null} color={"grey"} />

        <div className={"content"}>
          <Row
            content={
              <h3 className="col-xs-12 col-sm-12 col-md-12 col-lg-offset-3 col-lg-6 col-xl-6">
                Contact
              </h3>
            }
          />

          <Row
            content={
              <p className="contact-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
                Got a project in mind or just want to say hi? Feel free to reach
                out.
              </p>
            }
          />

          <Row
            content={
              <p className="contact-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
                <a href="mailto:harri@harritaito.com">harri@harritaito.com</a>
              </p>
            }
          />
        </div>

        <Footer />
        <style jsx>{`
          .Contact .content {
            padding-top: 1rem;
          }
          @media only screen and (max-width: 45rem) {
            .Contact .content {
              padding-top: 0.5rem;
            }
          }

          .Contact .nav .navbar-link:hover {
            color: ${colors.accentGrey};
          }

          .Contact .nav .navbar-link:hover a {
            color: ${colors.accentGrey};
          }

          .Contact .nav .navbar-link:hover svg {
            fill: ${colors.accentGrey};
          }
        `}</style>
      </div>
    );
  }
}

export default Contact;
