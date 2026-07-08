import React from "react";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Row from "../components/Row";
import HighlightUnderline from "../components/design-system/HighlightUnderline";
import { colors } from "../components/design-system/tokens";

const colStyle = "col-xs-12 col-sm-10 col-md-9 col-lg-8 col-xl-7";

const AccessibilityStatement = () => (
  <div className="Accessibility container">
    <Navbar nextProjectLink={null} nextProjectName={null} color={"grey"} />

    <Row
      content={
        <div className={`${colStyle} accessibility-intro`}>
          <h1>Accessibility statement</h1>
          <p>
            This accessibility statement applies to <strong>harritaito.com</strong>.
            As a personal portfolio, this site is not covered by the Finnish Act
            on the Provision of Digital Services (306/2019) — the statement is
            published voluntarily, following the model that the Act requires of
            public-sector services, because accessibility matters here
            regardless.
          </p>
          <p>
            The statement was prepared on 8 July 2026 and is based on my own
            assessment of the site.
          </p>
          <p className="accessibility-language-link">
            <Link href="/saavutettavuusseloste" legacyBehavior>
              <a>
                Lue tämä seloste suomeksi
                <HighlightUnderline />
              </a>
            </Link>
          </p>
        </div>
      }
    />

    <Row
      content={
        <section className={`${colStyle} accessibility-section`}>
          <h2>Compliance status</h2>
          <p>
            This website largely meets the Web Content Accessibility Guidelines
            (WCAG) 2.1 level A and AA requirements. The known shortcomings are
            listed below.
          </p>
        </section>
      }
    />

    <Row
      content={
        <section className={`${colStyle} accessibility-section`}>
          <h2>Non-accessible content</h2>
          <p>The following content does not yet fully meet the requirements:</p>
          <ul>
            <li>
              Some external links open in a new tab without warning about it
              beforehand.
            </li>
            <li>
              The case studies are image-heavy, and the text alternatives of
              some older images are thinner than they should be. (WCAG 1.1.1
              Non-text content)
            </li>
          </ul>
          <p>
            Elsewhere the site aims for a solid baseline: semantic headings and
            landmarks, visible keyboard focus, dependable color contrast in both
            light and dark themes, and animation that respects the
            reduced-motion preference of your device.
          </p>
        </section>
      }
    />

    <Row
      content={
        <section className={`${colStyle} accessibility-section`}>
          <h2>Feedback and contact information</h2>
          <p>
            If you notice an accessibility problem on this site, or cannot
            access something you need, I want to hear about it. You can{" "}
            <a
              href={"https://linkedin.com/in/harrihalonen"}
              target="_blank"
              rel="noopener noreferrer"
            >
              reach me on LinkedIn
              <HighlightUnderline />
            </a>
            , or by email — my first name, here at this domain. I aim to
            respond within 14 days.
          </p>
        </section>
      }
    />

    <Row
      content={
        <section className={`${colStyle} accessibility-section`}>
          <h2>Supervisory authority</h2>
          <p>
            In Finland, websites covered by the Act on the Provision of Digital
            Services are supervised by the Finnish Transport and Communications
            Agency Traficom. Because this personal site falls outside the scope
            of the Act, that enforcement process does not apply here — feedback
            comes straight to me, and I fix what is found. Traficom&rsquo;s
            guidance on the requirements is available at{" "}
            <a
              href={"https://www.saavutettavuusvaatimukset.fi"}
              target="_blank"
              rel="noopener noreferrer"
            >
              saavutettavuusvaatimukset.fi
              <HighlightUnderline />
            </a>
            .
          </p>
        </section>
      }
    />

    <Footer />
    <style jsx>{`
      .Accessibility {
        padding-top: 5rem;
        padding-bottom: 2rem;
      }
      @media only screen and (max-width: 45rem) {
        .Accessibility {
          padding-top: 2rem;
        }
      }

      .accessibility-intro {
        margin-top: 1.5rem;
      }

      .accessibility-intro h1 {
        margin-bottom: 0.5rem;
      }

      .accessibility-intro p,
      .accessibility-section p,
      .accessibility-section li {
        line-height: 1.7;
      }

      .accessibility-language-link {
        margin-top: 0.5rem;
        font-size: 0.85rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .accessibility-language-link a {
        color: ${colors.textMuted};
      }

      .accessibility-section {
        margin-top: 2.5rem;
      }

      .accessibility-section h2 {
        margin: 0 0 0.5rem;
      }

      .accessibility-section ul {
        margin: 0.5rem 0 1rem;
        padding-left: 1.25rem;
      }

      .accessibility-section li {
        margin-bottom: 0.5rem;
        color: ${colors.textMuted};
      }
    `}</style>
  </div>
);

export default AccessibilityStatement;
