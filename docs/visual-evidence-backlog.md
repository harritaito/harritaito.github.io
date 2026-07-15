# Visual Evidence Backlog

Purpose: a concrete artifact backlog for the visual and documentary evidence
that makes case content credible beyond copy. This is a source-planning
artifact, not publish-ready content. It extends the "Assets And Artifact
Strength" and "Evidence Backlog" sections of `docs/content-evidence-audit.md`
with a per-artifact production plan.

## Status Vocabulary

Every artifact below carries exactly one status:

- **Exists** — a usable asset is already in `static/media/**` or rendered live
  from source (e.g. the token table). May still need caption/alt work.
- **Needs anonymization** — real source material exists (client work, internal
  docs) but must be recreated with neutral labels before it can appear. Never
  export or screenshot the original.
- **Needs recreation** — the underlying work is public or personal (course
  work, thesis, this repo), but no presentable visual exists yet; it must be
  drawn or assembled fresh.
- **Labelled placeholder** — the page currently shows a clearly marked
  `ArtifactPlaceholder` or `TbdNote` and should keep doing so until the real
  artifact lands. This is an acceptable published state; an unlabelled gap or
  a fake artifact is not.

## Production Rules (apply to every new artifact)

- Follow `DESIGN.md`: paper background (`#FAFAFA`), Trirong for display
  moments only, Rubik for labels and annotations, soft layered shadows,
  project-accent color used sparingly as the story marker. Diagrams should
  read like annotated notes on a worktable, not generic SaaS boxes-and-arrows.
- Annotate. Each diagram should carry 2–4 short callouts explaining the
  decision or tension it shows — the annotation is the evidence of judgment.
- Anonymized artifacts use neutral role labels ("Coordinator", "Reviewer",
  "Region A"), placeholder data, and redrawn — never exported — visuals. When
  unsure whether a detail identifies a client, generalize it or leave the
  placeholder in place.
- No fabricated confidential artifacts, metrics, or shipped claims. A labelled
  placeholder is always preferable to an invented visual.
- Accurate alt text is part of the artifact, not an afterthought
  (`content-evidence-audit.md` flags existing inaccurate alt text).

## 1. Operations Platform (`pages/operations-platform.js`)

Unlisted flagship shell. All slots below are already on the page as labelled
placeholders; the backlog is producing the anonymized recreations. Source
material is confidential client work — every item is **Needs anonymization**
unless noted.

| Artifact | Page slot | Status | Notes |
|---|---|---|---|
| Hero artwork | `hero` (currently `pohja.svg`) | Labelled placeholder → needs anonymization | Calm abstract workflow composition in project blue; no client references. |
| Domain overview diagram | "Domain complexity" | Labelled placeholder → needs anonymization | Entities, rules, exceptions as neutral shapes; show why complexity is real, not the client's specifics. |
| Stakeholder map | "Stakeholder map" | Labelled placeholder → needs anonymization | Neutral roles, information flow, tension points. Not an org chart. |
| Role & permission matrix | "User roles & permissions" | Labelled placeholder → needs anonymization | Roles × capabilities (view/edit/approve/administer); annotate deliberately separated permissions. |
| Current-state workflow map | "Current-state workflow" | Labelled placeholder → needs anonymization | Include informal bridges (spreadsheet, phone call); mark steps living outside any system. |
| Pain point inventory | "Pain points" | Labelled placeholder → needs anonymization | Failure patterns mapped onto the workflow; no real incidents or data. |
| Decision point analysis | "Decision points" | Labelled placeholder → needs anonymization | Inputs, deciding role, branches; contrast one automated vs one deliberately human decision. |
| Concept model | "Concept model" | Labelled placeholder → needs anonymization | Objects, lifecycle states, relationships; annotate naming decisions. |
| Journey prioritization map | "Prioritized journeys" | Labelled placeholder → needs anonymization | Which end-to-end slices shipped first and the criteria; reasoning visible. |
| Prototype walkthrough | "Design & prototypes" | Labelled placeholder → needs anonymization | Recreated screens with neutral data; annotate what each iteration changed. |
| Final UI (role-specific views) | "Design & prototypes" | Labelled placeholder → needs anonymization | Same state rendered per role; placeholder data only. |
| Implementation-support examples | "Implementation support" | Labelled placeholder (TbdNote) → needs anonymization | Documentary, not visual: how design questions resolved during build. |
| QA matrix (journeys × roles × states) | "QA" | Labelled placeholder → needs anonymization | Include one real (anonymized) gap it caught. |
| Outcome / proxy evidence | "Outcome & learning" | Labelled placeholder (TbdNote) | Metrics only if real, attributable, cleared; otherwise structural proxy evidence. |

## 2. Design System (`pages/design-system.js`)

Unlisted shell. Two honest sources exist: this repo's own token layer and
components (public, no anonymization needed), and any client design-system
work (needs anonymization). Prefer repo-sourced artifacts first — they are
verifiable and fully publish-safe.

| Artifact | Page slot | Status | Notes |
|---|---|---|---|
| Hero artwork | `hero` (currently `pohja.svg`) | Labelled placeholder → needs recreation | Component/token composition in signal purple. |
| Before/after inconsistency | "Problem" | Labelled placeholder → needs anonymization or recreation | If from client work, recreate neutrally; alternatively use an honest generic example clearly framed as illustrative. |
| System context map | "System context" | Labelled placeholder → needs recreation | Design source → tokens → components → docs → product, with sync points. Can be drawn from this repo's real structure (tokens.js → components → pages). |
| Component anatomy | "Component behavior" | Labelled placeholder → needs recreation | Use a real component from this repo (e.g. project-card overlay, the signature pattern per DESIGN.md) — labelled parts, spacing, token mapping. Fully publish-safe. |
| Variant matrix | "Component behavior" | Labelled placeholder → needs recreation | Button family in this repo already has solid + four outline accents; a real supported/excluded matrix can be built from source. |
| Live token table (partial) | "Token mapping" | **Exists** | Rendered from `components/design-system/tokens.js`. Real evidence, already live. |
| Full token table + propagation example | "Token mapping" | Labelled placeholder → needs recreation | Extend from repo tokens; show one worked example of a token change propagating. |
| State coverage gallery | "States" | Labelled placeholder → needs recreation | Default/hover/focus-visible/active/disabled/loading/error/empty for one component; portfolio components cover several states already. |
| Accessibility decisions + checks | "Accessibility" | Labelled placeholder (TbdNote) → needs recreation | Contrast targets, focus treatment, reduced-motion handling — this repo has real examples (`Project.js` reduced-motion handling per audit). |
| Storybook / documentation excerpt | "Documentation" | Labelled placeholder → needs anonymization or recreation | No Storybook in this repo; client docs need anonymization, or keep placeholder until real docs exist. Do not mock up fake Storybook screens. |
| Developer handoff mechanics | "Developer handoff" | Labelled placeholder (TbdNote) → needs anonymization | Documentary: shared token naming, review loop. |
| Implementation-QA checklist | "QA checklist" | Labelled placeholder → needs recreation | A real checklist can be written from this repo's own verification practice; a client one needs anonymization. Must include a genuinely caught drift, not an invented one. |
| Measured outcomes | "Outcomes & proxy evidence" | Labelled placeholder (TbdNote) | Only real, attributable evidence. Proxy paragraph about this site's token layer is already live and honest. |

## 3. HRI Study (`pages/hri-study.js`)

Public course work — no anonymization needed. Strongest existing artifact set
(per `content-evidence-audit.md`). Backlog is annotation and a few recreated
synthesis visuals, not new evidence.

| Artifact | Status | Notes |
|---|---|---|
| Observation photo (`observation.jpg`) | Exists | Verify alt text accuracy. |
| Affinity diagram (`affinity.jpg`) | Exists | Candidate for an annotated overlay version (what clusters drove which implication). |
| Candy-eyes concept (`candy.png`) | Exists | Keep; caption already ties to feedback decision. |
| Theatrical evaluation photo (`theatherical.png`) | Exists | Verify alt text. |
| Pupils/hero (`pupils.png`) | Exists | — |
| Actor/system map (child–teacher–robot–cloud app) | Needs recreation | Case copy already describes this multi-actor system; a small annotated map would make the "complex system" claim visible. Publish-safe from published course material. |
| Robot interaction state model (dialogue, failure, fallback) | Needs recreation | The concept's behavior decisions (feedback, gaze, teacher-mediated fallback) as a simple state diagram. Label as concept, not implemented behavior. |

## 4. Aikakone (`pages/aikakone.js`)

Public course work — no anonymization needed.

| Artifact | Status | Notes |
|---|---|---|
| Hero canvas photo (`hero.jpg`) | Exists | — |
| UI screens (menu, aikakone, profile, elamankaari) | Exists | Verify captions and alt text; label as concept screens. |
| Service blueprint | Needs recreation | Copy names service blueprinting as a method but no blueprint is shown. Redraw a clean excerpt (front-stage/back-stage around a facilitated session). Label as course concept work. |
| Stakeholder map (resident, nurse, relatives, facility) | Needs recreation | Supports the multi-actor care-service framing already in copy. |

## 5. Kiva Kaupunki (`pages/kivakaupunki.js`)

Public competition work — no anonymization needed.

| Artifact | Status | Notes |
|---|---|---|
| Map hero (`hero.jpg`) | Exists | — |
| UI sketches (7 files under `sketches/`) | Exists | Some filenames are messy (`4 Comment.JPG`); leave files as-is unless touched for other reasons. |
| API screenshot (`api.png`) | Exists | — |
| Heuristic evaluation excerpt | Needs recreation | The case claims heuristic evaluation and names missing error/help states; a one-page annotated excerpt is the site's clearest existing design-QA proof. Recreate from the original analysis, honestly dated. |
| Concept → MVP flow (sketch → mockup → built MVP) | Needs recreation | Before/after style strip using existing sketches + a build screenshot; supports the implementation-support claim without new evidence. |

## 6. Home & Cross-Page (`pages/Home.js`, cards, about)

| Artifact | Status | Notes |
|---|---|---|
| MethodArtifacts ASCII previews (workflow map, role model, state model, design spec, QA checklist, decision log) | Exists | Honest illustrative sketches, explicitly "not real project data" in source. Keep. |
| Project card thumbnails (aikakone, kivakaupunki, languagerobot) | Exists | — |
| About portrait (`about/me.jpg`) | Exists | — |
| Thesis page hero (`pages/thesis.js`, currently `pohja.svg`) | Needs recreation | Thesis is public (Tampere University); a redrawn figure or annotated excerpt from own thesis is publish-safe and would replace the generic texture. |

## Prioritization

1. **Repo-sourced design-system artifacts** (component anatomy, variant
   matrix, system context map, state gallery, QA checklist) — publish-safe
   today, no clearance needed, and they upgrade the design-system shell from
   scaffolding to partial evidence.
2. **Archive-case recreations** (heuristic evaluation excerpt, HRI actor map,
   Aikakone service blueprint) — cheap, public-source, and they close the gap
   between claimed methods and shown artifacts.
3. **Operations-platform anonymized set** — highest credibility value but
   every item needs careful recreation under the copy guidance in
   `pages/operations-platform.js`. Do these in page order (domain → stakeholder
   → roles → workflow → model → UI → QA); earlier diagrams feed later ones.
4. **Documentary TbdNotes** (implementation support, handoff, outcomes) —
   fill last, only with real, attributable material.

## Page Hygiene Check (current state)

- Both new shells (`operations-platform`, `design-system`) label every gap
  with `ArtifactPlaceholder`/`TbdNote`, are excluded from the Projects
  manifest and nav, and claim no undocumented outcomes. No page currently
  pretends missing evidence exists.
- Archive cases show only real artifacts; their gap is unshown-but-claimed
  methods (blueprint, heuristic evaluation), which this backlog covers as
  recreations, not as page fixes.
