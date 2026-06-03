# Content Evidence Audit

Purpose: build the evidence base for a major content repositioning before any page rewrite. This is a source-planning artifact, not publish-ready copy.

## Source Scope

Reviewed live source files:

- `PRODUCT.md`: audience, product purpose, voice, anti-references, principles.
- `DESIGN.md`: visual system, case-study desk metaphor, typography, accents, motion, component rules.
- `README.md` and `TODO.md`: repo purpose, static export notes, older upgrade/redesign notes.
- `pages/Home.js`, `pages/about.js`, `pages/projects.js`, `pages/_document.js`, `pages/contact.js`.
- Case pages: `pages/hri-study.js`, `pages/kivakaupunki.js`, `pages/aikakone.js`.
- Storytelling components: `components/Project.js`, `components/ProjectPage.js`, `components/ProjectSection.js`, `components/ProjectStats.js`, `components/Process.js`, `components/Misc.js`, `components/ProjectIcon.js`.
- Assets under `static/media/**`.

## Planning Principle

Later content agents should treat this file as an evidence boundary:

- Confirmed means the repo currently contains source copy, structure, links, or assets that support the claim.
- Needs proof means the claim may be true, but this repo does not currently contain enough public evidence to publish it as a direct claim.
- Directional means the claim can guide positioning, but should be framed as a practice, current focus, selected concept work, or preferred operating style unless stronger evidence is added.

Do not add exact years of experience. Do not invent metrics, shipped outcomes, management scope, client details, or confidential facts. Use the work, methods, artifacts, and constraints as the proof.

## Product And Design Constraints

Confirmed:

- The intended audience is hiring managers, design-forward clients, and potential collaborators evaluating taste, thinking, and execution (`PRODUCT.md`).
- The site should present Harri as a thoughtful experience designer and builder through compact, memorable project stories (`PRODUCT.md`).
- Voice should be thoughtful, warm, quietly confident, human, observant, and self-assured without being sales-driven (`PRODUCT.md`).
- The work should carry the persuasion through case studies, artifacts, and project framing (`PRODUCT.md`).
- The visual direction is a light, personal, tactile "Warm Case Study Desk" built around paper background, Trirong display type, Rubik body type, selective project accents, soft shadows, and restrained motion (`DESIGN.md`).
- The design system explicitly rejects generic SaaS landing pages, cold corporate consulting surfaces, over-animation, template credibility theater, glassmorphism, gradient text, and full-screen accent flooding (`PRODUCT.md`, `DESIGN.md`).

Implication for rewrites:

- The repositioning should feel like a sharper editorial case-study portfolio, not a consulting landing page.
- Credibility should come from specific situations, artifacts, design decisions, and honest constraints.
- If a claim cannot be tied to current or addable evidence, write it as a working principle or current focus, not as a proven result.

## Current Top-Level Claims

Confirmed in source:

- Homepage tagline: "Product designer shaping research-led services with civic, health, and emerging tech teams" (`pages/Home.js`).
- Homepage says Harri helps cross-functional groups untangle complex problems, communicate learning plainly, and steward considered experiences.
- Homepage value areas: discovery research and synthesis, prototyping flows/interactions/service touchpoints, lightweight systems and rituals, accessibility, analytics, experimentation.
- About page says Harri is an experience designer in Tampere, Finland who helps multidisciplinary teams turn research insights into digital products and services.
- About page says current work spans product discovery, service design, and strategy for industrial, public-sector, and healthcare projects.
- About page says recent focus includes discovery sprints, design ops, product experiments, industrial XR, AI-assisted tooling, and connected services.
- About page links to a Tampere University HCI thesis on interaction design principles for industrial XR.
- Site metadata says Harri is a Finnish experience designer shaping research-led services and humane digital products from Tampere.

Risk assessment:

- "AI-assisted tooling", "design ops", "product experiments", "connected services", "analytics", and "experimentation" currently appear as top-level positioning but are not backed by dedicated public case studies in this repo.
- "Emerging tech" is partially backed by the HRI study and industrial XR thesis reference, but not by a current product case.
- "Implementation support" is partly backed by Kiva Kaupunki HTML/React/CSS implementation support and by repo-level builder positioning, but the portfolio does not yet show a recent delivery handoff or implementation QA example.
- "Leadership" should not be inflated. There is evidence of facilitation, volunteer organizing, cross-functional collaboration, and keeping teams in the loop; there is not public evidence of people management or formal executive leadership.

## Current Case Study Inventory

### HRI Study

Current status: featured on home/projects, labeled "Older work" on cards and "Earlier case study" on the case page.

Confirmed evidence:

- Context: Tampere University User Experience in Robotics course, language learning software on Softbank NAO, classroom/preschool setting, robot controlled through a cloud-based web application.
- Problem: improve interactional functionality so a teaching assistant robot better supports children's learning.
- Methods: literature review, field observations, teacher interviews, affinity diagramming, design implications, concept specification, theatrical robot evaluation.
- Research specifics: two observation sessions, one with four children and one with about 15 children; teacher interviews roughly 20 minutes each.
- Findings: speech recognition failures, teacher-mediated operation, children seeking robot eye contact, robot gaze over-prioritizing the teacher, need for feedback, gestures, autonomy, and child-centered interaction.
- Artifacts: observation photo, affinity diagram, candy-eyes concept image, theatrical robot evaluation image, concept dialogue.
- Evaluation: teacher post-study interview, categorized feedback, ideas worth keeping, co-creation insights, explicit acknowledgement that real-world validation was still needed.
- External evidence: Smart Tampere media links in Finnish and English.

Strengths for repositioning:

- Strongest public proof for research depth, synthesis, ethical/interaction nuance, emerging technology, AI/robotics-adjacent design, non-screen interaction, and evaluation judgment.
- Good evidence for calm quality practice because the page names limitations: novelty effect, bias risk, no end-user evaluation for the final concept, no implemented prototype.
- Can support "complex product systems" if framed around child, teacher/operator, robot behavior, web application control, speech-recognition limits, classroom context, and interaction failure modes.

Risks:

- Copy is old and grammatically rough in places.
- Some image alt text is inaccurate/generic.
- The published claim "learning outcomes" on the homepage is stronger than the case evidence. The case studied motivation, interaction, teacher feedback, and classroom fit; it did not prove learning outcomes.
- Do not present it as a shipped product or validated autonomous robot behavior.

Recommended disposition:

- Keep featured, but reframe as a flagship archive/research case.
- Position as "designing interaction behavior for a classroom robot concept under real technical constraints".
- Use it to prove research, synthesis, emerging-tech judgment, interaction design, and design QA thinking.

### Kiva Kaupunki

Current status: featured on home/projects, labeled "Older work" on cards and "Earlier case study" on the case page.

Confirmed evidence:

- Context: Living Lab Bus Student Software Competition for a web app benefiting bus passengers, using a public API and LLB developer tooling.
- Team: one designer and one developer.
- Role: service design, interaction design, UI design.
- Methods: opportunity framing around city feedback, use-case description, pencil sketches, UI mockups, basic MVP, heuristic evaluation.
- Implementation support: copy states Harri worked on HTML/ReactJS layout and CSS styling to fit the mockup, while the developer established a Heroku backend CRUD API.
- Artifacts: map hero, UI sketches, API screenshot, GitHub link to `paaplo/lblkk`.
- Outcome: the competition prize was split among three teams; the page says "we won the competition, but not in a satisfactory way."

Strengths for repositioning:

- Best current evidence for product concept to MVP, developer collaboration, implementation support, interface state thinking, constraints, and public/civic service framing.
- Can support "complex product systems" modestly: public API, geolocation, civic reporting, officials/public/users, backend/API, web app.
- Can support design QA via heuristic evaluation and explicit missing error/help documentation.

Risks:

- The current homepage says "turned citizen reporting into actionable insights for officials"; the case does not prove officials used it or acted on insights. It only planned collection/visualization and submitted an MVP.
- Tone includes junior reflection about scheduling and needing a product owner/project manager title. This is honest but should be reframed as "constraint and ownership lesson" if retained.
- The case is visibly dated because it references old competition tooling, Heroku, ReactJs spelling, external links, and time pressure.
- Do not claim product adoption, city official impact, or production deployment without evidence.

Recommended disposition:

- Keep as a secondary archive case if the site needs civic/product-to-MVP proof.
- Reframe around "from civic problem framing to testable MVP under competition constraints".
- Do not let this lead the portfolio unless stronger recent product-system work is unavailable.

### Aikakone

Current status: featured on home/projects, labeled "Concept work".

Confirmed evidence:

- Context: University of Tampere and Futurice Let's Re-Design Health Services course with Espericare, focused on memory-care stimulus/entertainment service concepts.
- Team: four designers.
- Role: service design, UX research, interaction design, user testing.
- Methods: Lean Service Creation canvases, contextual inquiry, existing-solution review, interviews, user needs, service blueprint, paper mockups, PowerPoint MVP, usability/prototype sessions.
- Findings: nurse time constraints, residents' difficulty sharing personal history, need for fast-start stimulus sessions, family desire to contribute, facilitator-mediated use.
- Artifacts: hero canvas photo, UI screens for menu, Aikakone, profile, Elamankaari.
- Outcome: second-best concept in course vote; positive feedback from Futurice, course mates, and usability tests; attempted incubator/company path but did not reach market.

Strengths for repositioning:

- Strong proof for healthcare/service design, discovery, field research, service blueprinting, prototyping with staff, care ethics, and humane product framing.
- Useful as a bridge between research-led service design and complex human systems.
- Honest postscript about market failure can show maturity if edited with restraint.

Risks:

- The homepage currently says it improved engagement for people with dementia. The case shows prototype conversations and qualitative feedback, not a measured improvement.
- Some language is dated, medically imprecise, or awkward. It should be rewritten carefully for dignity and clarity.
- The "working software", incubator, and 8-month development/user-testing claims need more public evidence before being emphasized.
- Do not claim healthcare outcomes, clinical effectiveness, or market launch.

Recommended disposition:

- Keep featured if the repositioning wants healthcare/service-design evidence.
- Reframe as "memory-care service concept grounded in field inquiry and facilitated prototyping".
- Use as evidence for discovery, service systems, ethics, and prototyping; avoid outcome inflation.

## Earlier Archive Inventory

Confirmed in `components/Misc.js`:

- Volunteer Organizer - Stream Startup Festival: one-day event, 800 attendees, 120 volunteers, 15 teams.
- Startup Weekend Sustainability Tampere: digital and physical marketing material.
- SCIL / Dare to Learn Lean Service Creation workshop: facilitated educators for a two-hour workshop.
- Riitta recycling bot concept: IM bot and website concept, contextual design, external portfolio/prototype links.
- Weekkiss: app/hardware concept for household chores, Experience-Driven Design and PLEX Cards, external links.
- Demola / OP Insurance claims notification concept: UX designer in a five-person team, personas, mockups, mobile/desktop UI; concept under NDA.

Strengths:

- Good supporting proof for facilitation, community work, early cross-functional projects, service design learning, and breadth.
- Stream is the clearest public leadership proxy because it includes scope and volunteer team coordination.
- Demola can support "confidential concept work" only if framed carefully and without client/internal details beyond what is already public.

Risks:

- Most items are older, course/volunteer/community notes.
- Several claims are broad and unpolished, and some links may be stale.
- Keep these as provenance/archive, not as the main argument for current senior positioning.

Recommended disposition:

- Move into an archive or "selected earlier notes" area.
- Use one or two as supporting proof chips only when relevant.
- Do not feature all earlier items in the main homepage flow unless the design explicitly separates them from current positioning.

## Assets And Artifact Strength

Confirmed assets:

- HRI: observation photo, affinity diagram, candy-eyes concept, pupils/hero image, theatrical robot evaluation.
- Kiva Kaupunki: map hero, API screenshot, multiple phone mockup/sketch images.
- Aikakone: canvas/hero photo and several UI concept screens.
- Home cards: three project thumbnails.
- About: portrait image.
- Misc archive: event/project photos and icons.

Content opportunities:

- HRI has the strongest research artifact set and should show observation -> synthesis -> concept -> evaluation.
- Aikakone has strong service-design artifacts and should show field inquiry -> needs -> facilitated service concept -> prototype learning.
- Kiva Kaupunki has the clearest implementation-support proof and should show use case -> UI sketches -> API/MVP -> heuristic QA.

Gaps:

- No visible recent industrial, AI/data, design-system, analytics, experimentation, or implementation-QA artifacts in `static/media`.
- No case-study PDFs, sanitized Figma shots, research plans, design-system excerpts, QA checklists, handoff docs, dashboards, or implementation review artifacts.
- No explicit outcomes or metrics beyond competition/course feedback, event scale, and qualitative reactions.

## Storytelling Components

Confirmed:

- `ProjectPage` supports an eyebrow, title, subtitle, hero media, long content body, and next-project card.
- `ProjectSection` provides repeated section headings and content blocks.
- `ProjectStats` captures team, timeframe, and role.
- `Process` shows compact process stages and methods.
- `Project` cards provide image-led case links, descriptions, labels, project accents, and restrained parallax with reduced-motion handling.
- `Misc` and `ProjectIcon` support smaller archive tiles with images/icons, descriptions, and links.

Implication:

- The existing component model can support a stronger case-study rewrite without a broad UI rebuild.
- Later content agents should prefer new copy, improved case hierarchy, and better artifact captions before inventing new components.
- If proof chips, evidence tags, or archive categories repeat across pages, extract a small shared component rather than duplicating markup.

## Positioning Theme Map

### Complex Product Systems

Confirmed evidence:

- HRI: multi-actor classroom system with child users, teacher/operators, robot behavior, web app control, technical speech-recognition constraints, safety/ethics, and feedback loops.
- Aikakone: care service involving residents, nurses, relatives, volunteers, facility context, time constraints, and personal-history content.
- Kiva Kaupunki: public/civic geolocation feedback system involving riders/citizens, officials/public, API, backend, and web app.

Needs proof before publishing:

- Current/recent complex B2B or internal-tool systems.
- Industrial product systems beyond the About page's current-focus wording and thesis link.

Safe framing:

- "I work best in systems where the interface is only one part of the service."
- "Selected archive work shows comfort with multi-actor contexts, technical constraints, and human handoffs."

### Design Systems

Confirmed evidence:

- This repo contains a documented portfolio design system and extracted primitives/tokens.
- Current site copy says design systems are part of the toolkit and About says design ops is a recent focus.

Needs proof before publishing:

- Client/product design-system ownership, adoption, governance, token work, component library work, or measurable consistency improvements.

Safe framing:

- "I use lightweight systems and rituals to keep teams aligned."
- "Design-system work is a current practice area; add concrete excerpts before making it a headline claim."

### Discovery

Confirmed evidence:

- HRI: literature review, observation sessions, teacher interviews, affinity diagramming, synthesis, design implications.
- Aikakone: contextual inquiry, interviews, existing-solution review, user needs, staff/resident context.
- Kiva Kaupunki: opportunity framing and use-case design under competition constraints.
- About and homepage already use discovery language.

Needs proof before publishing:

- Current discovery sprint examples, stakeholder maps, research plans, decision records, or product strategy artifacts.

Safe framing:

- "Discovery-led product and service design."
- "I help teams turn field signals into decisions without overstating certainty."

### AI/Data Workflows

Confirmed evidence:

- HRI involves robotics, speech recognition constraints, cloud/web control, and human-in-the-loop teacher mediation.
- About mentions AI-assisted tooling and industrial XR.
- Thesis link supports emerging-tech/industrial-XR credibility.

Needs proof before publishing:

- Actual AI-assisted workflow case, data product, analytics workflow, model/human handoff, or measurable AI tooling impact.
- Any claim that Harri designed AI systems in production.

Safe framing:

- "Emerging-tech interaction design, including robotics/XR-adjacent work."
- "AI/data workflows are a current focus; publish as direction until sanitized evidence exists."

### Implementation Support

Confirmed evidence:

- Kiva Kaupunki says Harri worked on HTML/ReactJS layout and CSS styling to fit the mockup while collaborating with a developer and submitting through LLB.
- Repo itself is a Next.js portfolio with component tests, static export, theme handling, and design-system primitives, supporting "designer and builder" at a personal-site level.

Needs proof before publishing:

- Current implementation-support examples, production handoff artifacts, QA notes, GitHub PRs that are appropriate to show, or engineering collaboration outcomes.

Safe framing:

- "Comfortable crossing from design intent into implementation support."
- "I collaborate closely with engineers and care about the last mile of fit, accessibility, and behavior."

### Design QA

Confirmed evidence:

- Kiva Kaupunki includes a heuristic usability analysis and names missing error/help states.
- HRI and Aikakone both acknowledge validation limits and next steps.
- Product/design docs emphasize accessibility, restrained motion, visible focus, and clear cues.

Needs proof before publishing:

- Real design QA checklist, acceptance criteria, accessibility audit, implementation review, or before/after defect examples.

Safe framing:

- "Quality practice means checking behavior, constraints, accessibility, and edge cases before polishing the story."
- "I prefer explicit limitations over overclaiming."

### Calm Leadership And Quality Practice

Confirmed evidence:

- Stream volunteer organizer scope: 120 volunteers across 15 teams for a one-day event.
- HRI teacher feedback praises collaboration, authentic user studies, clearly written report, and team working together.
- Kiva Kaupunki conclusion reflects on ownership/scheduling gaps.
- Aikakone reflects honestly on team chemistry, market push failure, and learning from constraints.
- Product voice explicitly aims for warm, human, quietly confident.

Needs proof before publishing:

- Formal people management, executive leadership, direct reports, budget ownership, or shipped-program leadership.

Safe framing:

- "Calm facilitation and quality practice."
- "I help teams stay oriented when the work spans research, product constraints, implementation, and human stakes."

## Claims That Need Evidence Before Publishing

Require real evidence or soften before they appear prominently:

- "AI-assisted tooling" as a proven work area: add a sanitized case, artifact, or concrete example, or keep it as current focus.
- "Industrial XR" beyond thesis: safe to mention the thesis; stronger industry claims need work evidence.
- "Design systems" as a headline capability: add component/library/process proof before making it a central claim.
- "Design ops": add rituals, governance, documentation, or operational examples before direct claims.
- "Analytics" and "experimentation": add actual analytics/experiment examples or remove from homepage toolkit.
- "Learning outcomes" for HRI: reframe to interaction, motivation, feedback, classroom fit, or teacher/operator support unless learning measurement exists.
- "Actionable insights for officials" for Kiva Kaupunki: reframe to intended civic feedback loop and MVP concept unless official use is documented.
- "Improves engagement" for Aikakone: reframe to prototype sessions and observed/qualitative engagement unless measured evidence exists.
- "Leading discovery sprints" and "product experiments": keep only if current professional evidence can be added or frame as recent focus/practice.
- Any direct seniority claim, years-of-experience claim, management claim, shipped-client-outcome claim, or metric claim not already backed by public evidence.

## Claims That Can Be Framed Now

These are supportable from current source if written carefully:

- Research-led product/service design.
- Multi-actor service and product contexts.
- Emerging-tech interaction judgment through HRI and industrial-XR thesis.
- Discovery, field research, interviews, observation, synthesis, affinity mapping, service blueprinting, prototyping, heuristic evaluation.
- Implementation support on an archive civic MVP and personal builder practice through the repo itself.
- Facilitation and community coordination through Stream and Dare to Learn.
- Honest quality practice: naming constraints, validation limits, implementation gaps, and what would need testing next.
- Warm, quiet, human voice backed by product/design docs.

## Current Junior, Vague, Or Dated Signals

Junior-sounding:

- Course/project framing dominates all three featured cases.
- Some conclusions emphasize personal learning more than transferable product judgment.
- Kiva Kaupunki's "we had very little free time" and "appointing a product owner or project manager title" can read as early-career unless reframed.
- Aikakone's failed market push is honest but currently takes up a lot of narrative space and should be edited into a measured constraint note.

Vague:

- Homepage top-level strengths list includes broad methods without enough current proof.
- "Scale the craft" and "lightweight systems and rituals" are plausible but need examples.
- "Emerging tech teams" is broader than the public evidence.

Dated:

- Several projects expose older course/competition timelines and old tooling references.
- Older archive items include stale links and old community/course projects.
- Visual assets are useful but some are low-resolution or from older academic contexts.
- Some copy contains typos, awkward phrasing, and inaccurate image alt text.

Mitigation:

- Label old work clearly as selected archive work.
- Lead with the kind of problems and judgment shown, not with dates.
- Keep project dates inside case-study metadata only if useful.
- Add current/professional proof before the homepage makes recent/current claims central.
- Use "selected concept work", "archive case", "current focus", and "practice area" labels deliberately.

## Recommended Feature And Archive Decisions

Feature strongly:

- HRI Study: strongest evidence for research, synthesis, emerging-tech interaction, evaluation, and quality caveats.
- Aikakone: strong evidence for healthcare/service-design discovery and humane product framing.

Feature conditionally:

- Kiva Kaupunki: useful for civic MVP, implementation support, and design QA, but should not lead the site unless it is rewritten around constraints and artifacts rather than competition nostalgia.

Move to archive/supporting proof:

- Stream Startup Festival: keep as leadership/facilitation proof chip, not a main case.
- Dare to Learn / SCIL: keep as facilitation/workshop proof chip.
- Riitta, Weekkiss, Startup Weekend, Demola/OP Insurance: archive unless one is rewritten with stronger artifacts and a clear relevance to the new positioning.

Needs new evidence before featuring:

- Complex B2B/internal tools.
- Design-system ownership.
- AI/data workflow design.
- Recent implementation support.
- Design QA in delivery.

## Suggested Repositioning Architecture

Homepage:

- Lead with a compact claim grounded in research-led product/service design for complex human systems.
- Mention current focus areas only after separating proof from direction.
- Use 2-3 proof themes tied to current evidence: discovery, complex systems, implementation/quality support.
- Keep featured cards to HRI, Aikakone, and optionally Kiva Kaupunki with archive labeling.
- Add a small "current focus" note for AI/data, industrial/XR, design systems, and implementation quality only if it is clearly labeled as direction or current practice.

About:

- Keep Tampere/Finnish context and warm personal tone.
- Remove or soften unsupported claims that read like a current capability list.
- Keep thesis link as a concrete emerging-tech proof point.
- Frame leadership through facilitation, coordination, and quality practice, not formal management.

Projects:

- Keep the archive page distinct from the homepage and give every featured case a reason for inclusion: research system, service system, MVP/implementation support.
- Avoid presenting all old work as equal.
- Use concise archive labels and notes that explain why the work still belongs.

Case pages:

- Preserve honest constraints.
- Add concise case summaries at top: context, role, methods, artifacts, evidence level.
- Rewrite outcomes as evidence-backed learning, not impact metrics.
- Add "What this proves" sections only if they point to actual artifacts and decisions.

## Evidence Backlog

Before publishing the major repositioning, gather or create:

- Sanitized recent case notes for complex B2B/internal tools, if available.
- One concrete design-system artifact: component model, token excerpt, governance note, audit, or before/after example.
- One AI/data workflow artifact: model/human handoff, data review flow, prompt/workflow map, decision log, or evaluation rubric.
- One implementation-support artifact: annotated UI QA pass, handoff checklist, PR/design review notes, accessibility check, or source-backed implementation example.
- One discovery artifact: research plan, interview guide, synthesis board, service map, or opportunity framing.
- One quality-practice artifact: acceptance criteria, QA checklist, risk register, or evidence grading rubric.

If these cannot be made public, frame the homepage around archive evidence and current practice rather than direct current-client claims.
