import React from "react";

import CaseStudyMeta from "../components/CaseStudyMeta";
import ProjectPage from "../components/ProjectPage";
import ProjectSection from "../components/ProjectSection";
import Row from "../components/Row";
import { ArtifactPlaceholder, TbdNote } from "../components/design-system/CasePlaceholders";

import placeholderTexture from "../static/media/pohja.svg";

// NOTE: This case is intentionally kept out of the Projects manifest
// (components/Projects.js) and the primary nav. It is a publish-safe
// CONCEPT SHELL for an AI-assisted operational decision workflow: the
// structure and design principles are real design thinking; no shipped AI
// product, model, pipeline, or client evidence is claimed. It stays
// unlisted until real, cleared artifacts exist to attach.
//
// COPY GUIDANCE — read before filling any section:
//
// 1. This shell must never read as a shipped AI case study. Every section
//    that describes system behavior is framed as design intent, and the
//    page-level status says "concept" in plain language.
// 2. AI is decision support here, not the product's identity. The
//    narrative starts from the user's task and data, and AI enters as one
//    input into a human decision — keep that order when filling sections.
// 3. No chatbot framing. The workflow is inspection-and-decision shaped;
//    a conversational surface would be added only if a real workflow
//    demanded one, and that demand would be documented, not assumed.
// 4. Metrics, model performance numbers, and adoption claims only if real,
//    attributable, and cleared. Until then the measurement section
//    describes what WOULD be measured and why, which is itself the design
//    evidence this page carries.
// 5. If real project evidence is later attached, follow the same
//    anonymization rules as the operations-platform shell: shape of the
//    problem not the client, recreated artifacts with neutral labels,
//    decisions and reasoning over confidential detail.

const pStyle =
  "col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6";

const AiDecisionSupportCase = () => (
  <div className="AiDecisionSupportCase">
    <ProjectPage
      projectName={"AI Decision Support"}
      title={"Designing AI as Decision Support in an Operational Workflow"}
      hero={placeholderTexture}
      heroAlt={
        "Placeholder texture for the AI decision-support concept case — recreated workflow artwork pending."
      }
      eyebrow={"Concept shell — design framework, not shipped work"}
      navbarColor={"purple"}
      showNextProject={false}
      description={
        "A design framework for putting machine predictions inside a human decision workflow: what the user is deciding, what evidence they inspect, where a model can genuinely help, and what has to be true about confidence, override, and accountability before anyone should trust it."
      }
      content={
        <span>
          <CaseStudyMeta
            status={"Concept shell — no shipped AI evidence claimed"}
            summary={
              "A capability case about designing AI into complex, trust-sensitive B2B workflows. The premise: in operational domains, AI earns its place as decision support — a well-behaved input into a human decision — not as a novelty layer or a chatbot bolted onto the side. This page documents the structure and principles I design against."
            }
            note={
              "This is a concept and framework page, marked as such throughout. It contains no shipped AI product, no model performance numbers, and no client evidence — those are shown as pending artifacts and will only ever be filled with real, cleared, anonymized material. The design judgment on this page is the evidence it offers."
            }
            fields={{
              context:
                "Concept setting: an operational domain where a specialist reviews incoming data and makes consequential accept / flag / escalate decisions under time pressure — the workflow shape shared by inspection, monitoring, triage, and quality-control work.",
              problem:
                "Problem type: the decision itself is sound but expensive — high volume, high vigilance cost, error consequences that are asymmetric. The design question is where machine assistance genuinely reduces that load without displacing accountability.",
              constraints:
                "Wrong decisions are costly and traceability is mandatory, so the design must assume the model will sometimes be wrong and make that survivable: visible uncertainty, inspectable evidence, human override, and a working fallback path are requirements, not enhancements.",
              proxyEvidence:
                "Until a shipped case can be documented, the evidence here is the framework itself: the section structure below is the checklist I hold AI features against, and each section states the design position it encodes.",
            }}
          />

          <ProjectSection
            title={"The task before AI"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Every credible AI feature starts with a precise account of the work as it
                      exists without the model. Who decides, on what cadence, with what consequences
                      when they are wrong. If the task cannot be described crisply without
                      mentioning AI, the AI has nothing concrete to support — and the feature is
                      decoration. Writing this account first also sets the baseline that any later
                      measurement of the AI has to beat.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={"Task model"}
                      prompt={
                        "TODO (real project only): a recreated, anonymized model of the human task — the decision being made, its inputs, its frequency, and the cost of each kind of error. Neutral role labels; no client or system names."
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={"Cognitive load"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      The honest reason to add AI to a workflow is usually cognitive: sustained
                      vigilance over mostly-normal data, comparisons across more items than working
                      memory holds, or pattern checks that fatigue erodes over a shift. Locating
                      exactly where attention is being spent — and where it degrades — tells you
                      what the model should absorb. It also tells you what it must not absorb: the
                      judgment calls where human context, accountability, and situational knowledge
                      do the real work.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={"Attention map"}
                      prompt={
                        "TODO (real project only): an anonymized map of where the specialist’s attention goes across a work session — which checks are exhausting, which are trivial, where errors cluster in time. This is the artifact that justifies (or kills) the AI feature."
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={"The data being inspected"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Decision-support design is data design. The user is already inspecting
                      something — images, sensor streams, records, events — and their trust in any
                      machine suggestion depends on being able to see the same evidence the
                      suggestion points at. Cataloguing the data honestly matters: its volume and
                      update rhythm, but also its failure modes — gaps, sensor noise, stale
                      readings, ambiguous cases — because those are exactly the conditions under
                      which a model quietly stops deserving trust.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={"Data inventory"}
                      prompt={
                        "TODO (real project only): a recreated inventory of the inspected data — types, freshness, volume, known quality problems — with neutral labels. Mark which properties the interface must surface so the user can judge the evidence themselves."
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={"Where AI enters — and where it does not"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      The support role has to be chosen, not assumed. A model can rank what deserves
                      attention first, pre-fill what is tedious to enter, flag what deviates from
                      normal, or draft an assessment for review — and each role implies a different
                      interface contract. What stays constant is the boundary: the model proposes,
                      the human disposes. A recommendation is an input to the decision, never the
                      decision itself, and the interface should make acting against the model
                      exactly as easy as acting with it.
                    </p>
                  }
                />
                <Row
                  content={
                    <p className={pStyle}>
                      Deliberately absent here: a chat window. Inspection-and-decision workflows are
                      spatial and stateful — the user is looking at evidence, not composing prose —
                      and forcing that through conversation adds friction while hiding the data. A
                      conversational surface earns a place only when the workflow genuinely is a
                      dialogue, and that need would have to show up in research, not in a trend.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={"Support-role decision"}
                      prompt={
                        "TODO (real project only): the anonymized reasoning for which support role the model plays — options considered, the one chosen, and which decisions were deliberately left fully manual and why."
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={"Confidence & uncertainty"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Uncertainty must be visible, and it must be designed against overtrust as much
                      as undertrust. A raw probability invites false precision; a traffic light
                      hides too much. The working position: express confidence in terms of what the
                      user should do differently — “worth a look” versus “needs your judgment”
                      versus “the model has little basis here” — and make low confidence loud rather
                      than apologetic. The most dangerous state in decision support is a wrong
                      suggestion delivered fluently, so the design treats calibrated doubt as a
                      feature, not an embarrassment.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={"Uncertainty display"}
                      prompt={
                        "TODO (concept mock or real project): recreated UI showing how confidence is expressed at each decision point — including the explicit low-confidence and no-basis states, not just the happy path."
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={"Explainability & inspectable evidence"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      “Why is the system suggesting this?” must have an answer a practitioner can
                      check, in the vocabulary of their domain. That rarely means exposing model
                      internals; it means pointing at evidence — the region of the image, the
                      readings that deviated, the past cases this one resembles — so the user can
                      agree or disagree with the suggestion on its merits. Explanation the user
                      cannot verify is reassurance, not explainability, and reassurance is precisely
                      what a trust-sensitive workflow does not need.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={"Evidence view"}
                      prompt={
                        "TODO (concept mock or real project): recreated UI for the evidence behind a suggestion — what the model looked at, surfaced in domain terms, one interaction away from the recommendation itself."
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={"Human override & control"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Override is a first-class action, not an escape hatch. The user can reject,
                      correct, or annotate any suggestion without justifying themselves to the
                      interface, without extra friction, and without the system nagging them back
                      toward agreement. Defaults matter most here: nothing consequential proceeds on
                      model output alone, and “accept” is a deliberate act rather than the path of
                      least resistance. The accountability structure stays intact — the person who
                      decides is the person the organization already holds responsible, and the
                      interface never blurs that.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={"Override flow"}
                      prompt={
                        "TODO (concept mock or real project): recreated flow for disagreeing with the model — reject, correct, annotate — showing that it costs no more effort than accepting."
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={"Error states & fallback"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      The system will be wrong, late, or unavailable, and the workflow has to
                      survive all three. That means designing the degraded modes explicitly: what
                      the screen says when the model has no answer, how stale predictions are marked
                      before they mislead, and — most importantly — a manual path that remains a
                      complete, practiced way to do the job. If the fallback only exists in
                      documentation, the AI has become a single point of failure wearing a helpful
                      face.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={"Degraded-mode states"}
                      prompt={
                        "TODO (concept mock or real project): the recreated state inventory — no prediction, low-quality input, stale output, service down — and the manual path the user follows in each. These states get designed with the same care as the happy path."
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={"Feedback loops"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Every override, correction, and confirmation is signal — about the model, and
                      just as often about the data or the workflow around it. The design questions
                      are consent and honesty: users should know what their corrections are used
                      for, feedback capture should ride inside actions they already take rather than
                      adding chores, and disagreement must never be treated as user error. A
                      feedback loop users understand builds the habit of correcting the system; one
                      they distrust teaches them to route around it.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={"Feedback capture"}
                      prompt={
                        "TODO (real project only): the anonymized design for how corrections flow back — what is captured, what the user is told about its use, and how the loop avoided becoming unpaid labeling work."
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={"Audit trail"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      In trust-sensitive domains, “what did the system suggest, what did the person
                      decide, and what did they see at the time” must be answerable months later.
                      The audit trail records suggestion, confidence, evidence shown, and the human
                      action taken — and it exists to make decisions reconstructable, not to put
                      operators under surveillance. That distinction is a design decision with real
                      consequences for whether people use the system honestly, and it deserves the
                      same intent as any screen.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={"Decision record"}
                      prompt={
                        "TODO (concept mock or real project): a recreated decision record — model suggestion, confidence, evidence displayed, human action, timestamp — with neutral data, plus the reasoning about who can read it and why."
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={"Risk guardrails"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      Some failures should be structurally impossible rather than merely
                      discouraged. Guardrails are decided per decision, with the domain’s risk
                      owners at the table: which actions always require human confirmation
                      regardless of confidence, which are capped in scope or reversible by design,
                      and where automation is refused outright because the error asymmetry is too
                      steep. Writing these down early also keeps scope honest — a guardrail agreed
                      on paper is much harder to erode later under delivery pressure.
                    </p>
                  }
                />
                <Row
                  content={
                    <ArtifactPlaceholder
                      className={pStyle}
                      title={"Guardrail matrix"}
                      prompt={
                        "TODO (real project only): the anonymized matrix of decisions × automation level — fully manual, suggest-only, suggest-with-confirmation — and the reasoning for each boundary."
                      }
                    />
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={"Measurement plan"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      The AI is worth keeping only if the human decision gets better or cheaper
                      without new failure modes — so the plan measures the joint human-plus-model
                      outcome against the pre-AI baseline, not model accuracy in isolation.
                      Alongside decision quality and time: override rates and their trend,
                      calibration between stated confidence and actual correctness, and drift in
                      user behavior — because both blind acceptance and silent abandonment are
                      failure modes that a healthy accuracy number can hide.
                    </p>
                  }
                />
                <Row
                  content={
                    <TbdNote className={pStyle}>
                      No results are reported here because none are claimed. When a real deployment
                      can be documented, this section carries measured outcomes if they are real,
                      attributable, and cleared — and structural proxy evidence otherwise. Nothing
                      gets invented to make the concept look shipped.
                    </TbdNote>
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={"Working principles"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      The compact version of everything above — the positions I hold AI features
                      against before any of them reaches a screen:
                    </p>
                  }
                />
                <Row
                  content={
                    <ul className={pStyle}>
                      <li>
                        <strong>A recommendation is not an action.</strong> The model proposes; a
                        person decides. Consequential steps never proceed on model output alone.
                      </li>
                      <li>
                        <strong>Confidence is visible — and designed against overtrust.</strong>{" "}
                        Uncertainty is expressed in terms of what the user should do, and low
                        confidence is presented loudly, not apologetically.
                      </li>
                      <li>
                        <strong>Evidence is inspectable.</strong> Every suggestion points at
                        checkable evidence in the practitioner’s own vocabulary. Explanation you
                        cannot verify is reassurance, not explainability.
                      </li>
                      <li>
                        <strong>The user stays in control.</strong> Overriding is as easy as
                        accepting, requires no justification to the interface, and leaves
                        accountability where the organization already places it.
                      </li>
                      <li>
                        <strong>A fallback path exists — and works.</strong> The workflow survives
                        the model being wrong, late, or absent, because the manual path is complete
                        and practiced, not theoretical.
                      </li>
                    </ul>
                  }
                />
              </span>
            }
          />

          <ProjectSection
            title={"Why this shape"}
            content={
              <span>
                <Row
                  content={
                    <p className={pStyle}>
                      This framework is the AI-specific edge of the same practice as my
                      operational-product work: complex B2B domains, many roles, decisions with real
                      consequences, and trust that has to be built structurally rather than claimed.
                      The order of the sections is the argument — task and data before model,
                      uncertainty and override before polish, measurement before celebration. That
                      is also why this page is labeled a concept shell instead of dressed up as a
                      case study: in trust-sensitive design, not overclaiming is part of the craft.
                    </p>
                  }
                />
                <Row
                  content={
                    <TbdNote className={pStyle}>
                      When real AI-assisted workflow projects can be documented and cleared, they
                      attach here under the same anonymization rules as the rest of the portfolio —
                      recreated artifacts, neutral labels, decisions over confidential detail.
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

export default AiDecisionSupportCase;
