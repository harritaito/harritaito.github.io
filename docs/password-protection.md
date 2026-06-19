# Password protection

This repo already supports password-protected writing pages for static export.
Use this path for confidential notes, private case-study drafts, or work samples
that should not ship as plaintext.

## How it works

Protected Markdown sources live in `content/private/`, which is ignored by Git.
During `npm run build`, Next.js exports the page normally, then
`scripts/encrypt-protected.js` replaces the generated HTML with a
`staticrypt` password gate.

The script also removes the matching `_next/data` JSON file so protected article
content is not exposed through client-side navigation data.

## Add a protected article

1. Create the private content directory if it does not exist:

   ```bash
   mkdir -p content/private
   ```

2. Add a Markdown file such as `content/private/client-work.md`:

   ```markdown
   ---
   title: Client work
   summary: Private case-study notes.
   date: 2026-06-18
   eyebrow: Protected writing
   navbarColor: purple
   ---

   Private content goes here.
   ```

3. Set the password locally through either `.env` or the shell environment:

   ```bash
   STATICRYPT_PASSWORD="shared-review-password"
   ```

4. Run the normal verification/build flow:

   ```bash
   npm test
   npm run build
   ```

The protected page will be exported at `/writing/client-work/`, but the built
HTML will require the password before showing the content.

## Deployment notes

- Do not commit `content/private/`.
- Do not commit `.env`.
- Set `STATICRYPT_PASSWORD` in the deployment environment whenever protected
  content exists.
- If protected content exists but no password is configured, the build fails
  instead of deploying plaintext content.
- Do not use a client-side React password prompt for real confidential content.
  Static HTML must be encrypted after export, otherwise the content can still be
  found in the page source or JavaScript bundle.

## Can I password-protect a project?

Yes, but only if the private project content is not hardcoded into a public page
component.

The current project case studies under `pages/` are normal React pages. Their
copy and structure are bundled into public JavaScript during static export. If
you add a React password prompt around one of those pages, the content can still
be found by inspecting the generated files.

For a confidential project, use one of these approaches:

1. **Recommended now:** write the case study as a protected Markdown page in
   `content/private/`, then share the `/writing/<slug>/` URL with the password.
2. **Recommended later:** migrate project case studies to content files so
   private projects can use the same encryption pipeline as protected writing.
3. **Avoid:** adding a client-side password check around `pages/thesis.js`,
   `pages/hri-study.js`, or another hardcoded project page.

This keeps the plaintext source out of Git and prevents exported HTML or Next.js
data files from leaking private work.

## Current scope

The implemented protection path is for writing pages under `/writing/[slug]`.
If a full project case study needs protection, the safest low-churn approach is
to publish it as a protected writing page first, then link to it from the
homepage or project archive only when appropriate.
