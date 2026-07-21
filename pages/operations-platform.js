import React from "react";

import CaseStudyMeta from "../components/CaseStudyMeta";
import ProjectPage from "../components/ProjectPage";
import ProjectSection from "../components/ProjectSection";
import Row from "../components/Row";
import { ArtifactPlaceholder, TbdNote } from "../components/design-system/CasePlaceholders";

import placeholderTexture from "../static/media/pohja.svg";

// NOTE: This case is intentionally kept out of the Projects manifest
// (components/Projects.js) and the primary nav. It is a publish-safe shell
// for the flagship operational-product case: every incomplete area is
// labelled on the page. It is linked from the homepage "Where the work
// concentrates" index (Systems) with an in-progress label; it stays out
// of the Work cards and nav until real artifacts, anonymized diagrams,
// and evidence are attached.
//
// COPY GUIDANCE FOR ANONYMIZED WORK — read before filling any section:
//
// 1. Describe the shape of the problem, not the client. "A multi-step
//    approval flow spread across email, spreadsheets, and a legacy tool"
//    is safe and useful; the client's name, industry specifics that
//    identify them, internal system names, and real data are not.
// 2. Show decisions and reasoning, not confidential detail. The reader is
//    evaluating judgment: what the options were, what was chosen, and why.
//    That never requires real records, real names, or real numbers.
// 3. Recreate artifacts rather than exporting them. Diagrams, workflow
//    maps, and UI shown here should be redrawn with neutral labels
//    ("Coordinator", "Reviewer", "Region A") — never screenshots of
//    client systems or documents.
// 4. Metrics only if real, attributable, and cleared. Otherwise use proxy
//    evidence: what was verified to work, what stakeholders confirmed,
//    what the before/after workflow looked like structurally.
// 5. When unsure whether a detail identifies the client, generalize it or
//    leave it in a TbdNote. The case must stay publishable at every stage.

const pStyle =
  "col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6";

const OperationsPlatformCase = () => (
  <div className="OperationsPlatformCase">
    <ProjectPage
      projectName={"Operations Platform"}
      title={"From Fragmented Operational Workflows to a Scalable Product"}
      hero={placeholderTexture}
      heroAlt={
        "Placeholder texture for the operations platform case — anonymized workflow artwork pending."
      }
      eyebrow={"Case shell — in progress"}
      navbarColor={"blue"}
      showNextProject={false}
      description={
        "How a domain full of manual handoffs, tribal knowledge, and parallel tools becomes one coherent product experience — the mapping, modeling, and prioritization work that makes complex operations designable."
      }
      content={
        <span>
          <CaseStudyMeta
            status={"Case shell — in progress"}
            summary={
              "A capability case about designing for operational complexity: many roles, uneven permissions, workflows that live partly in tools and partly in people’s heads. The design work is making that complexity legible first, then deciding what the product should absorb and in what order."
            }
            note={
              "This page is a structured shell for anonymized client work. The framing and section scaffolding are real; diagrams, UI, and evidence are marked as pending and will be recreated with neutral labels — no client names, internal system names, real data, or invented metrics. Nothing here claims a shipped outcome that is not yet documented."
            }
            fields={{
              myRole:
                "End-to-end product design in a complex operational domain: domain research, workflow and stakeholder mapping, concept modeling, UI design, and implementation support through to QA.",
              team: "To be completed with real evidence — collaborators, engineering partners, and how ownership was split are documented per project, not inflated here.",
              context:
                "An operational domain where daily work runs through fragmented tools and manual handoffs, and the goal is a single product experience that can scale past the people who currently hold it together.",
              problem:
                "Problem type: the workflow exists but is not a product — it is distributed across tools, spreadsheets, and individual knowledge. The design challenge is understanding it faithfully before changing it.",
            }}
          />

          <ProjectSection
            title={"Domain complexity"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Operational domains resist quick design because the complexity is real, not
                      accidental: regulations, exceptions, regional differences, and years of
                      accumulated practice all have reasons. The first design task is not
                      simplification — it is building an accurate picture of why the work is shaped
                      the way it is, so the product simplifies the right things and preserves the
                      constraints that must hold.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={"Domain overview"}
                      prompt={
                        "TODO: Insert an anonymized overview of the domain — the kinds of entities, rules, and exceptions that make it complex. Recreate as a neutral diagram; describe the shape of the complexity, never the client or their internal system names."
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={"Stakeholder map"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      In operational products the user is rarely one person. Work passes between
                      people who initiate, people who verify, people who approve, and people who
                      answer for the outcome — and their incentives do not automatically align.
                      Mapping who touches the workflow, what each party needs from it, and where
                      their interests pull in different directions is what keeps later design
                      decisions from optimizing one seat at another’s expense.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={"Stakeholder map"}
                      prompt={
                        "TODO: Insert an anonymized stakeholder map with neutral role labels (e.g. Coordinator, Reviewer, Field Operator, Management). Show information flow and tension points between roles — not org charts or real titles that could identify the client."
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={"User roles & permissions"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Roles and permissions are where operational products differ most from consumer
                      ones: what a person can see, edit, and approve is part of the workflow’s
                      correctness, not an admin afterthought. Getting the role model right early
                      shapes everything downstream — navigation, defaults, and which mistakes the
                      product makes impossible rather than merely discouraged.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={"Role & permission model"}
                      prompt={
                        "TODO: Insert an anonymized role/permission matrix: roles as neutral labels, capabilities as rows (view, edit, approve, administer). Highlight the decisions — which permissions were deliberately separated and why."
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={"Current-state workflow"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Before proposing anything, the existing workflow has to be documented as it
                      actually runs — including the unofficial parts: the spreadsheet that bridges
                      two systems, the phone call that resolves ambiguity, the person who remembers
                      the exceptions. A current-state map that flatters the process is useless; the
                      value is in capturing where the work really lives.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={"Current-state workflow map"}
                      prompt={
                        "TODO: Insert a recreated end-to-end map of the current workflow: steps, tools, handoffs, and the manual or informal bridges between them. Neutral labels only; mark which steps lived outside any system."
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={"Pain points"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Fragmented workflows fail in predictable ways: information re-entered between
                      tools, status that exists only in someone’s inbox, handoffs that stall when a
                      key person is away, and errors discovered far from where they were made.
                      Naming the pain points precisely — and tracing each one to its structural
                      cause — is what turns complaints into a design agenda.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={"Pain point inventory"}
                      prompt={
                        "TODO: Insert the anonymized pain-point inventory mapped onto the current-state workflow: where time was lost, where errors entered, where knowledge was person-dependent. Describe the failure pattern, not real incidents or data."
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={"Decision points"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      A workflow is really a chain of decisions: who may proceed, what needs
                      checking, when an exception escalates. Identifying every decision point — what
                      information it needs, who is authorized to make it, and what happens on each
                      branch — is the analysis that lets a product support the workflow instead of
                      just digitizing its paperwork.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={"Decision point analysis"}
                      prompt={
                        "TODO: Insert an anonymized breakdown of the workflow’s key decision points: inputs required, deciding role, branches, and escalation paths. Show at least one decision the product automated versus one it deliberately left with people, and why."
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={"Concept model"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      The concept model is where scattered practice becomes a product: naming the
                      core objects, their states, and their relationships so that every screen,
                      permission, and notification hangs off the same skeleton. In operational
                      domains this is the highest-leverage design artifact — if the model matches
                      how practitioners actually think, the UI almost designs itself; if it doesn’t,
                      no amount of interface polish compensates.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={"Concept model"}
                      prompt={
                        "TODO: Insert the anonymized concept model: core objects, their lifecycle states, and relationships. Annotate the naming decisions — where the product’s vocabulary followed practitioner language and where it deliberately diverged."
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={"Prioritized journeys"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Everything cannot ship at once, and in operational products the sequencing is
                      itself a design decision: the first journeys must be complete enough that
                      people can move their real work over, or the old tools stay authoritative and
                      the product becomes one more parallel system. Prioritization here means
                      choosing end-to-end slices of the workflow, not features.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={"Journey prioritization"}
                      prompt={
                        "TODO: Insert the prioritized journey map: which end-to-end workflows shipped first and why, which were deferred, and what criteria drove the order (frequency, risk, dependency on other slices). Anonymized, with reasoning visible."
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={"Design & prototypes"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      With the model and priorities set, the interface work is about making dense
                      operational information scannable and the next required action obvious — for
                      each role, at each state of the work. Prototypes earn their keep in this
                      domain by being tested against real scenarios: the messy case, the exception,
                      the handoff, not just the happy path.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={"Prototype walkthrough"}
                      prompt={
                        "TODO: Insert recreated prototype screens or flows for one prioritized journey, with neutral data. Annotate what each iteration changed and what feedback drove it."
                      }
                    />
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={"Final UI"}
                      prompt={
                        "TODO: Insert recreated final UI for the key screens, populated with placeholder data. Highlight the role-specific views and how the same underlying state renders differently per role."
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={"Implementation support"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Operational products live or die in the details that emerge during build: edge
                      cases the mapping missed, states nobody drew, performance constraints that
                      reshape a screen. Staying close to engineering through implementation —
                      answering questions at the speed of the sprint and adjusting the design when
                      reality pushes back — is part of the design work, not what happens after it.
                    </p>
                  }
                />
                <Row
                  content={
                    <TbdNote className={pStyle}>
                      TODO: Concrete implementation-support practices from this project — how design
                      questions were resolved during build, what changed from the specs and why —
                      will be documented here with real examples, anonymized.
                    </TbdNote>
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={"QA"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Design QA in an operational product means verifying the workflow, not just the
                      pixels: does each role see what they should, do state transitions behave at
                      every decision point, do the exception paths actually work end to end. A
                      structured pass over roles × states × journeys is what catches the gaps that
                      unit-level review misses.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={"QA approach"}
                      prompt={
                        "TODO: Insert the anonymized QA checklist or matrix used: journeys × roles × states, exception paths, and an example of a real gap it caught before release."
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={"Outcome & learning"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Where hard metrics exist and can be shared, they belong here. Where they
                      cannot, honest proxy evidence carries the case: workflows that moved fully
                      into the product, handoffs that no longer depend on individual memory, and a
                      structure that new journeys can be added to without redesigning the core.
                      Those are verifiable claims about the work itself — no adoption numbers or
                      business results will be invented to decorate them.
                    </p>
                  }
                />
                <Row
                  content={
                    <TbdNote className={pStyle}>
                      TODO: Documented outcomes — measured where real and cleared for sharing,
                      structural proxy evidence otherwise — plus an honest reflection on what
                      worked, what was harder than expected, and what would change next time.
                    </TbdNote>
                  }
                />
              </span>
            }
          />
        </span>
      }
    />
  </div>
);

export default OperationsPlatformCase;
