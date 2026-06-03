import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Row from "../components/Row";
import HighlightUnderline from "../components/design-system/HighlightUnderline";
import { colors } from "../components/design-system/tokens";

const Contact = () => {
  return (
    <div className="Contact container">
      <Navbar nextProjectLink={null} nextProjectName={null} color="grey" />
      <Row
        content={
          <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 col-xl-4 col-xl-offset-4 contact-content">
            <h1>Contact</h1>
            <p>
              I'm happy to talk with teams that need product judgment, system thinking, or research-led design support. Reach me at{" "}
              <span className="obfuscated-email" aria-label="harri@harritaito.com">
                harri [at] harritaito [dot] com
              </span>{" "}
              or{" "}
              <a href={"https://calendly.com/harritaito/45min/"}>
                book time on my calendar
                <HighlightUnderline />
              </a>
              .
            </p>
          </div>
        }
      />
      <Footer />
      <style jsx>{`
        .contact-content {
          padding-top: 5rem;
          padding-bottom: 2rem;
        }
        .contact-content h1 {
          font-family: Trirong, serif;
          margin-bottom: 1rem;
        }
        .contact-content p {
          line-height: 1.7;
          font-size: 1.05em;
        }
        .obfuscated-email {
          display: inline-block;
          font-weight: 600;
          position: relative;
          z-index: 0;
        }
        .obfuscated-email::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0.15em;
          width: 100%;
          height: 8px;
          background: ${colors.markerHighlight};
          z-index: -1;
        }
        @media only screen and (max-width: 45rem) {
          .contact-content {
            padding-top: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
