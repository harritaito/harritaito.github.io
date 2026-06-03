import React, { Component } from "react";

import CaseStudyMeta from "../components/CaseStudyMeta";
import ProjectPage from "../components/ProjectPage";
import ProjectSection from "../components/ProjectSection";
import Row from "../components/Row";
import HighlightUnderline from "../components/design-system/HighlightUnderline";
import { colors } from "../components/design-system/tokens";

import hero from "../static/media/pohja.svg";

class Thesis extends Component {
  render() {
    const pStyle =
      "col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6";

    return (
      <div className="Thesis">
        <ProjectPage
          projectName={"Thesis"}
          title={"Interaction Design Principles for Industrial XR"}
          hero={hero}
          heroAlt={"Abstract texture background."}
          eyebrow={"Master's thesis"}
          description={
            "A research-led set of interaction design principles for XR in industrial environments — where physical constraints, safety requirements, and demanding context break most assumptions about interfaces."
          }
          navbarColor={"green"}
          content={
            <span>
              <CaseStudyMeta
                status={"Published research"}
                summary={
                  "Most XR interaction research assumes a comfortable, controlled setting. Industrial environments don't offer that. This thesis asks what principles hold when the user is wearing gloves, working in noise, and can't afford to be confused by the interface."
                }
                fields={{
                  myRole: "Primary researcher and author",
                  team: "Solo research, supervised at Tampere University",
                  timeline: "2020–2021",
                  context:
                    "Master's programme in Human-Computer Interaction, Tampere University. Published June 2021.",
                  problem:
                    "What interaction design principles apply to XR in industrial environments — where the physical context is as demanding as the task itself?",
                  discovery: [
                    "Systematic literature review",
                    "Analysis of industrial XR use contexts",
                    "Synthesis into actionable design principles",
                  ],
                  outcome:
                    "A published set of interaction design principles for industrial XR, grounded in HCI research and field-context analysis.",
                }}
              />

              <ProjectSection
                title={"Why industrial XR is a different problem"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          XR research has grown quickly, but most of it assumes a sitting user, two free hands, and enough cognitive space to learn a new interface. Industrial environments remove most of those assumptions. Users work in PPE, move through physical space, operate machinery, and often can't stop what they're doing to figure out why the interface isn't responding.
                        </p>
                      }
                    />
                    <Row
                      content={
                        <p className={pStyle}>
                          That gap matters because XR is entering industrial use fast — maintenance, assembly, training, remote assistance. If the interaction design patterns don't account for gloves, noise, physical load, and safety constraints, the technology ends up creating friction instead of removing it.
                        </p>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={"Principles"}
                content={
                  <span>
                    <Row
                      content={
                        <p className={pStyle}>
                          The full set of principles is in the thesis. The short version: designing for industrial XR means taking the physical and cognitive context seriously as a first-class constraint, not an afterthought. The interface has to work around the environment, not expect the user to work around the interface.
                        </p>
                      }
                    />
                  </span>
                }
              />

              <ProjectSection
                title={"Read it"}
                content={
                  <Row
                    content={
                      <div className={pStyle + " links"} style={{ marginTop: "1.5em" }}>
                        <a
                          href="https://trepo.tuni.fi/handle/10024/133277"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Full thesis — Tampere University repository
                          <HighlightUnderline />
                        </a>
                        <div style={{ marginTop: "1.5em" }}>
                          <a
                            href="https://trepo.tuni.fi/bitstream/handle/10024/133277/HalonenHarri.pdf?sequence=2&isAllowed=y"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Direct PDF
                            <HighlightUnderline />
                          </a>
                        </div>
                      </div>
                    }
                  />
                }
              />
            </span>
          }
        />
        <style jsx>{`
          .Thesis .nav .navbar-link:hover {
            color: ${colors.accentGreen};
          }

          .Thesis .nav .navbar-link:hover a {
            color: ${colors.accentGreen};
          }

          .Thesis .nav .navbar-link:hover svg {
            fill: ${colors.accentGreen};
          }
        `}</style>
      </div>
    );
  }
}

export default Thesis;
