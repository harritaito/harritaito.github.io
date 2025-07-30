# TODO.md — Automated Upgrade Plan for **harritaito.github.io**
> **Protocol for Codex**
> 1. Read the *PROMPT* block in the current section.  
> 2. Output **one unified diff** that satisfies the *CONSTRAINTS*.  
> 3. Output **one Conventional Commit** line (`type(scope): subject`).  
> 4. **Stop**. (No explanations.)  
> 5. Proceed to the next section only after CI (unit tests + ESLint + Playwright + Percy) passes.

---

## 0 · safety-net 🛡️
Human-only step; Codex does **not** execute.
- Freeze `package-lock.json` (`git tag v2025-07-pre-upgrade`).
- Ensure Playwright smoke tests and Percy are green.

---

## 1 · upgrade/jest-30 🔧
**PROMPT**

Branch: upgrade/jest-30

TASK
• Bump “jest” and “babel-jest” from 29.7.0 → 30.0.4 in package.json.
• In jest.config.js:
– Rename “testEnvironmentOptions” → “environmentOptions”.
– Ensure all “transform” patterns are ESM-safe (e.g. “\.[jt]sx?$”).

CONSTRAINTS
• Touch ONLY package.json and jest.config.js.
• Do NOT edit package-lock.json.
• Reply with unified diff, blank line, then a Conventional Commit line.
BEGIN.

---

## 2 · upgrade/react-17 ⚛️
**PROMPT**

Branch: upgrade/react-17

TASK
• Bump “react” and “react-dom” from 16.12.0 → 17.0.2 in package.json.

CONSTRAINTS
• Do NOT modify package-lock.json.
BEGIN.

---

## 3 · codemod/react-imports 🛠️
**PROMPT**

Branch: codemod/react-imports

TASK
• Apply the “update-react-imports” codemod:
– Replace ReactDOM.render(…) with createRoot(…).render(…).
– Remove unused React imports in files that only contain JSX.

CONSTRAINTS
• Modify only src/**/*.tsx? files.
BEGIN.

---

## 4 · upgrade/react-18 ⚛️➕
**PROMPT**

Branch: upgrade/react-18

TASK
• Bump “react” and “react-dom” to 18.2.0.
• Wrap the root component in <React.StrictMode>.
• Ensure index.tsx uses createRoot.

CONSTRAINTS
• Limit diff to package.json and root entry file(s).
BEGIN.

---

## 5 · upgrade/react-19 ⚛️🚀
**PROMPT**

Branch: upgrade/react-19

TASK
• Bump “react” and “react-dom” to 19.1.0.
• Update any deprecated lifecycle methods flagged by eslint-plugin-react@latest.

CONSTRAINTS
• May edit .eslintrc.* if required.
BEGIN.

---

## 6 · upgrade/next-10 ⛓️
**PROMPT**

Branch: upgrade/next-10

TASK
• Bump “next” to 10.2.4.
• Bump “next-images” to 1.4.1.

CONSTRAINTS
• Edit only package.json.
BEGIN.

*(Repeat sequentially for Next 11, 12, 13 (pages router), 14, 15—each in its own branch: `upgrade/next-11`, `upgrade/next-12`, … with analogous prompts.)*

---

## 7 · upgrade/styled-jsx-5 🎨
**PROMPT**

Branch: upgrade/styled-jsx-5

TASK
• Bump “styled-jsx” from 3.2.4 → 5.1.7.
• In all .jsx/.tsx files, prefix bare pseudo-classes with “&:” (e.g. “:hover” → “&:hover”).

CONSTRAINTS
• Use regex replace; run prettier.
BEGIN.

---

## 8 · upgrade/peripherals-1 📦
**PROMPT**

Branch: upgrade/peripherals-1

TASK
• Bump “fontfaceobserver” to 2.3.0.
• Bump “react-modal” to 3.16.3.

CONSTRAINTS
• Edit only package.json.
BEGIN.

*(Create `upgrade/peripherals-2`, `upgrade/peripherals-3`, etc. for:  
– react-collapse 5.1.1 – react-image 4.1.0 – react-headroom 3.2.1  
– react-plx 2.1.2 – react-medium-image-zoom 5.2.14 – victory 37.3.6.)*

---

## 9 · cleanup/dedupe-audit 🧹
**PROMPT**

Branch: cleanup/dedupe-audit

TASK
• Run “npm dedupe” and “npm audit fix”.
• Commit resulting changes (package-lock.json + any minimal code changes).

CONSTRAINTS
• Unified diff only.
BEGIN.

---

### Completion ✅
Project is considered **upgraded** when:
1. `main` branch builds with Node 20, React 19, Next 15, and all updated libs.  
2. Unit tests, ESLint, Playwright, and Percy visual snapshots are green.  

---

## 10 · redesign/plan \U0001F310
This section collects notes for a potential site redesign.

### Key Goals
- Modernize the portfolio with a clean, responsive layout.
- Highlight UX/UI expertise and recent projects.

### Must-Haves
- Clear home page introduction with a call to action.
- Individual project pages with summaries, images, and outcomes.
- Accessible, mobile-friendly navigation.
- Simple contact method (form or email link).

### Nice-To-Haves
- Blog or articles section for ongoing updates.
- Theme switcher for light and dark modes.
- Case study PDFs or downloadable resources.
- Analytics integration.
- Headless CMS for easier content management.
