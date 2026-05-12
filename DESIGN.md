---
name: Harri Halonen Portfolio
description: Personal portfolio and case-study site for a thoughtful, warm, quietly confident experience designer.
colors:
  page-bg: "#FAFAFA"
  text-strong: "#000000"
  text-muted: "#696A6D"
  accent-highlight: "#8BC8F6"
  accent-green: "#12A42D"
  accent-blue: "#1E95ED"
  accent-red: "#FA5858"
  accent-purple: "#9157FF"
  progress-green: "#49B882"
typography:
  display:
    fontFamily: "Trirong, serif"
    fontSize: "4em"
    fontWeight: 500
    lineHeight: "1"
    letterSpacing: "0.1rem"
  headline:
    fontFamily: "Rubik, sans-serif"
    fontSize: "3em"
    fontWeight: 900
    lineHeight: "1.1"
  title:
    fontFamily: "Rubik, sans-serif"
    fontSize: "2em"
    fontWeight: 300
    lineHeight: "1.2"
  body:
    fontFamily: "Rubik, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  label:
    fontFamily: "Rubik, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 500
    lineHeight: "1.2"
rounded:
  pill: "26px"
  circle: "999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "5rem"
components:
  button-solid:
    textColor: "{colors.page-bg}"
    rounded: "{rounded.pill}"
    padding: "0.5em 1.5em"
    typography: "{typography.label}"
  button-outline:
    textColor: "{colors.text-muted}"
    rounded: "{rounded.pill}"
    padding: "0.3em 1.3em"
    typography: "{typography.label}"
  project-card:
    backgroundColor: "{colors.page-bg}"
    textColor: "{colors.text-strong}"
    padding: "1em 1.5em"
  navbar:
    backgroundColor: "{colors.page-bg}"
    textColor: "{colors.text-strong}"
    padding: "1em"
---

# Design System: Harri Halonen Portfolio

## 1. Overview

**Creative North Star: "The Warm Case Study Desk"**

This system feels like an experienced designer inviting someone to a bright worktable and walking them through selected projects with calm conviction. It is light, personal, and tactile: editorial enough to feel authored, but not so stylized that the work disappears behind the presentation.

The visual language is built from a soft off-white canvas, one serif display voice for identity moments, and a practical sans-serif for everything else. Accent colors are used as project signatures and inline highlights rather than as a full-screen brand wash. Motion is present, but it behaves more like gentle lift and directional guidance than spectacle.

This system explicitly rejects generic SaaS landing-page polish, cold corporate consulting surfaces, and over-animated creative-portfolio theater. It should feel made by a person with taste and technical range, not by a template.

**Key Characteristics:**

- Light and open rather than dark and moody
- Personal and narrative rather than salesy
- Case-study led, with visual emphasis on work samples
- Softly tactile through shadows, pills, and image overlays
- Colorful in moments, restrained at the page level

## 2. Colors

The palette is a restrained neutral base with four project-coded accents and one recurring sky-blue highlight used for inline emphasis.

### Primary

- **Signal Purple** (`#9157FF`): The strongest brand-like accent in the system. Used for the default progress bar state, one project identity, and moments that need extra emphasis without feeling aggressive.

### Secondary

- **Project Blue** (`#1E95ED`): Used to distinguish one case study family and interactive hover states tied to that project.
- **Project Green** (`#12A42D`): Used as a success-like accent and project identifier, particularly in buttons and charts.
- **Project Red** (`#FA5858`): Used for the HRI study and attention moments that need warmth rather than alarm.

### Tertiary

- **Marker Sky** (`#8BC8F6`): The signature inline highlight color. It works like a translucent marker swipe under links and key phrases, giving the site a handcrafted note-taking quality.

### Neutral

- **Paper White** (`#FAFAFA`): The page background and default surface color. This keeps the portfolio airy and approachable instead of stark.
- **Ink Black** (`#000000`): Used for anchor text and strong textual emphasis.
- **Soft Graphite** (`#696A6D`): Used for subdued button text and quieter interface moments.
- **Progress Mint** (`#49B882`): A small utility accent used in metadata, including the mask icon color.

### Named Rules

**The Project-Accent Rule.** Accent colors belong to stories, not to the whole shell. Most screens remain neutral, then a project color enters to frame a specific case study or interaction.

**The Marker Rule.** The sky-blue highlight is used as an underline-like annotation, not as a full component background system.

## 3. Typography

**Display Font:** Trirong, serif  
**Body Font:** Rubik, sans-serif  
**Label/Mono Font:** Rubik, sans-serif

**Character:** The pairing balances warmth and credibility. Trirong gives the designer name and hero moments a human, slightly literary presence, while Rubik keeps the case-study text and navigation practical and readable.

### Hierarchy

- **Display** (500, `4em`, line-height `1`, letter-spacing `0.1rem`): Reserved for the personal identity moment, especially the name on the homepage.
- **Headline** (900, `3em`, line-height `1.1`): Used for case-study titles and major section headers where confident emphasis matters.
- **Title** (300, `2em`, line-height `1.2`): Used for introductory and supporting headings, often to create a softer preface before the heavier display or headline text.
- **Body** (400, `16px`, line-height `1.5`): Used for general narrative copy. It should stay readable and conversational, with paragraphs kept to comfortable reading widths.
- **Label** (500, `0.9rem`, line-height `1.2`): Used for buttons and compact interactive text, especially where the UI needs a little more firmness.

### Named Rules

**The Single-Stage Rule.** Only one serif moment should dominate a given viewport. Once the display voice speaks, supporting copy falls back to Rubik to keep the hierarchy clean.

## 4. Elevation

This system uses soft, visible shadows to make images and project summaries feel tangible on a paper-like surface. Depth is structural rather than atmospheric: cards and media lift enough to read as touchable layers, but the page never becomes glossy or glassy.

### Shadow Vocabulary

- **Navbar Lift** (`box-shadow: 0 0.2em 0.2em 0 rgba(0,0,0,0.10)`): Used on the sticky navigation to keep it legible over scrolling content.
- **Media Lift** (`box-shadow: 0 0.5em 1em 0 rgba(0,0,0,0.30)`): The default media shadow for project images, videos, and supporting visuals.
- **Card Lift** (`box-shadow: 0 1em 2em 0 rgba(0,0,0,0.30)`): Used for the project blurb overlay so it reads as a foreground layer.
- **Hover Lift** (`box-shadow: 0 1.5em 2.5em 0 rgba(0,0,0,0.30)`): Used on hover to add a confident but still soft sense of interaction.
- **Light Lift** (`box-shadow: 0 0.25em 0.5em 0 rgba(0,0,0,0.15)`): Used for secondary surfaces that need depth without competing with hero media.

### Named Rules

**The Paper Stack Rule.** Elevation should feel like stacked prints and notes on a desk, not floating glass panels or glowing digital slabs.

## 5. Components

### Buttons

Buttons feel rounded, friendly, and direct rather than sharp or enterprise-like.

- **Shape:** Full pill (`26px`)
- **Primary:** White text on a project accent, with compact horizontal padding (`0.5em 1.5em`)
- **Hover / Focus:** Color changes happen through accent swaps or border-color shifts, with smooth linear transitions around `0.6s`
- **Secondary / Ghost:** The outline variant uses neutral text and a pill stroke, then borrows the active project color on hover

### Cards / Containers

Project summaries are the signature container pattern of the site.

- **Corner Style:** Mostly square-cornered containers, with circles used only for portrait imagery
- **Background:** Default surfaces stay on `#FAFAFA` or white-like neutrals
- **Shadow Strategy:** Cards use the stronger card-lift shadow and intensify on hover
- **Border:** Minimal to none, relying on shadow rather than outlines
- **Internal Padding:** Commonly `1em 1.5em` for project blurbs

### Inputs / Fields

There is no strong input system in the current codebase. Future fields should inherit the neutral paper background, Rubik body text, clear focus indication, and restrained radius choices instead of introducing a different control language.

### Navigation

Navigation is compact, top-fixed, and understated.

- **Style:** A slim sticky bar on a light background
- **Typography:** Rubik body/label styling with simple inline links
- **States:** Active character comes from project-specific accent classes and a progress bar at the top edge
- **Mobile Treatment:** The same basic pattern compresses rather than becoming a fully different shell

### Signature Component

The project-card overlay is the most distinctive pattern in the system: a large image sits first, then a summary panel overlaps it from below with generous shadow and a color-reactive hover state. This creates the site’s strongest sense of authored storytelling and should be preserved as a defining move.

## 6. Do's and Don'ts

### Do:

- **Do** keep the main page background on `#FAFAFA` or similarly soft paper-toned neutrals.
- **Do** reserve Trirong for identity and high-emphasis display moments, then return to Rubik for body and UI text.
- **Do** use project accents as story markers, especially `#12A42D`, `#1E95ED`, `#FA5858`, and `#9157FF`.
- **Do** preserve the inline highlight treatment with `#8BC8F6` when emphasizing links or key phrases.
- **Do** keep shadows soft and layered, especially `0 0.5em 1em 0 rgba(0,0,0,0.30)` and `0 1em 2em 0 rgba(0,0,0,0.30)`.

### Don't:

- **Don't** turn this into a generic SaaS landing page with metric blocks, polished-growth copy, or flat marketing sections.
- **Don't** shift the visual language toward a cold corporate consulting site with hard navy neutrals, rigid enterprise tables, or impersonal stock-brand polish.
- **Don't** over-animate it into a creative-developer portfolio that values tricks over comprehension.
- **Don't** replace the current restrained shell with full-screen accent flooding on every section. The accent system works because it is selective.
- **Don't** introduce glassmorphism, gradient text, or side-stripe card accents. Those break the current authored, tactile character.
