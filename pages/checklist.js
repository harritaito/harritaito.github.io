import React from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { colors, radii, shadows } from "../components/design-system/tokens";

const checklistSections = [
  {
    name: "Foundations",
    summary: "The HTML, head, and document basics every page needs.",
    items: [
      ["The HTML doctype", "Required", "Every HTML document must start with <!doctype html> as its first line. This opts the browser into standards mode; without it, you get quirks mode and broken layout."],
      ["The lang attribute on <html>", "Required", "Set a valid BCP 47 language tag on the <html> element so screen readers, translators, search engines, and browsers know what language the page is in."],
      ["<meta charset>", "Required", "Declare UTF-8 as the document character encoding in the first 1024 bytes of the HTML, so browsers parse text correctly before they hit any non-ASCII content."],
      ["<meta viewport>", "Required", "Tell mobile browsers to render the page at the device's actual width instead of pretending to be a 980-pixel desktop. One line, and never disable user scaling."],
      ["The <title> element", "Required", "Every HTML document must have exactly one non-empty <title> element inside <head>. It is used by browsers, search engines, screen readers, social previews, and AI agents."],
      ["<meta name=\"description\">", "Recommended", "A short, unique summary of the page used by search engines and social platforms as a snippet. Google may rewrite it, but a good one is rewritten less often."],
      ["Canonical URL (rel=\"canonical\")", "Recommended", "Declare the preferred URL for a page so search engines and crawlers consolidate ranking signals on one address, even when several URLs serve the same content."],
      ["Favicons and app icons", "Recommended", "Ship an SVG favicon, an ICO fallback at /favicon.ico, an apple-touch-icon, and a maskable PWA icon. Five files cover every browser and home-screen surface."],
      ["<meta name=\"theme-color\">", "Recommended", "Tints the browser chrome and OS surfaces to match your brand. Use the media attribute to ship one colour for light mode and another for dark mode."],
      ["<meta name=\"color-scheme\">", "Recommended", "Tells the browser which colour schemes your page is designed for. Prevents the white flash that dark-mode users see before your CSS loads, and lets the browser style scrollbars, form controls, and the page background to match."],
      ["Open Graph protocol", "Recommended", "Open Graph tags control how pages look when shared on social platforms and chat apps. Set og:title, og:description, og:image, og:url, and og:type on every page."],
      ["Feed discovery with rel=\"alternate\"", "Recommended", "If your site publishes a feed — RSS, Atom, or JSON Feed — announce it in <head> with <link rel=\"alternate\">. Feed readers, agents, and browsers discover it without guessing the URL."],
      ["Feed content hygiene", "Recommended", "If you publish a feed, ship it well-formed. Identify the feed inside itself with atom:link rel=\"self\", give every item a stable guid, declare an update cadence with the Syndication module, and validate before deploy."],
      ["Popover API", "Recommended", "Replace ARIA-puzzled JavaScript modals, menus, and tooltips with a native top-layer primitive that the browser opens, closes, and accessibility-wires for you."],
    ],
  },
  {
    name: "SEO",
    summary: "Search visibility — robots.txt, sitemaps, canonicals, structured data.",
    items: [
      ["robots.txt", "Recommended", "A plain-text file at the site root that tells crawlers which paths they may or may not fetch. Standardised in RFC 9309 and supported by every major search engine."],
      ["XML sitemaps", "Recommended", "An XML file listing the canonical URLs of a site, with optional metadata about when each was last changed. The fastest way to tell a search engine what exists."],
      ["Sitemap index files", "Recommended", "A sitemap of sitemaps. Used when a site has more than 50,000 URLs or wants to split sitemaps by content type for cleaner reporting."],
      ["Image and video sitemap extensions", "Optional", "Optional XML extensions that add image and video metadata to sitemap entries. Useful when media is loaded by JavaScript or hosted on a CDN that crawlers cannot reach by following links."],
      ["URL structure", "Recommended", "URLs are the most stable identifier on the web. Keep them lowercase, hyphenated, descriptive, and shallow. Treat them as a public API for your content."],
      ["Redirects (301/302/308)", "Required", "HTTP redirects send a client from one URL to another. Use 301 or 308 for permanent moves, 302 or 307 for temporary ones, and never chain more than necessary."],
      ["Soft 404s", "Avoid", "A page that looks like a 'not found' message to a user but returns 200 OK to a crawler. Search engines treat soft 404s as a quality problem and often refuse to index them."],
      ["Meta robots and X-Robots-Tag", "Required", "Every page must have an explicit, correct indexing policy — either implicit (default index, follow) on public pages, or an explicit noindex / X-Robots-Tag on staging, admin, thin, or private content. Get this wrong and you either disappear from search or expose what you didn't mean to."],
      ["Heading hierarchy", "Required", "Headings describe the sections of a page. They must form a nested outline, never be used for visual styling alone, and never skip levels."],
      ["Internal linking", "Recommended", "Links from one page on a site to another. The strongest signal you control for telling crawlers and AI agents what a page is about and how important it is."],
      ["Structured data (JSON-LD)", "Recommended", "Machine-readable annotations that describe the content of a page using the schema.org vocabulary. JSON-LD is the format search engines and AI agents expect."],
      ["Breadcrumbs", "Recommended", "A short trail showing the page's position in the site hierarchy. Visible in the UI for users, marked up as BreadcrumbList JSON-LD for search engines."],
      ["IndexNow", "Optional", "An open protocol for telling participating search engines that a URL has changed. One HTTP request pushes Bing, Yandex, Naver, and Seznam to recrawl — Google does not participate."],
    ],
  },
  {
    name: "Accessibility",
    summary: "WCAG-aligned rules so people of all abilities can use the site.",
    items: [
      ["Colour contrast", "Required", "Text and meaningful non-text elements must have enough contrast against their background so people with low vision and people in harsh light can read them."],
      ["Image alt text", "Required", "Every <img> element must have an alt attribute. The value describes the image's purpose to screen readers, search engines, and anyone whose image fails to load."],
      ["Form labels", "Required", "Every form control needs a programmatically associated label. A placeholder is not a label, and an unlabelled input is unusable for screen-reader and voice-control users."],
      ["Keyboard navigation", "Required", "Every interactive element on the page must be reachable and operable with a keyboard alone, in a logical order, with no traps that hold focus."],
      ["Visible focus indicators", "Required", "Whenever a control receives keyboard focus, the page must show a clear, high-contrast indicator. Removing focus outlines without a replacement is a top accessibility failure."],
      ["Skip links", "Recommended", "A 'skip to main content' link as the first focusable element lets keyboard and screen-reader users jump past repeated navigation on every page."],
      ["Semantic HTML and landmarks", "Required", "Use the right HTML element for the job. Landmarks like <header>, <nav>, <main>, and <footer> let assistive technologies announce structure and skip between regions."],
      ["ARIA — first rule of ARIA", "Recommended", "ARIA can make custom widgets accessible, but the first rule of ARIA is don't use ARIA. Reach for a native HTML element first; add ARIA only when nothing native fits."],
      ["Descriptive link text", "Required", "Every link's text must describe where it goes. 'Click here' and 'read more' fail screen-reader users who scan a page by jumping from link to link."],
      ["Empty links and buttons", "Avoid", "A link or button with no accessible name is invisible to screen readers and unreachable for voice control. Icon-only controls without a label are the usual culprit."],
      ["Accessible form errors", "Required", "When a form submission fails, errors must be identified in text, associated with the input that caused them, and announced to assistive technology."],
      ["Document and parts language", "Required", "Set the page's primary language on <html lang> and mark any inline content in a different language with its own lang attribute, so screen readers pronounce it correctly."],
      ["Reduced motion", "Required", "Respect the user's `prefers-reduced-motion` setting. Decorative animation, parallax, and autoplay can trigger vestibular distress, migraines, and seizures."],
      ["Accessibility overlays", "Avoid", "Third-party JavaScript widgets that claim to make a site WCAG-compliant at runtime. They do not work, often harm screen-reader users, and attract lawsuits."],
      ["Captions and transcripts", "Required", "Video needs synchronised captions, audio-only content needs a transcript, and visuals that carry meaning need audio description. Auto-captions alone are not enough."],
      ["Accessible data tables", "Required", "Tabular data must use real <table> markup with a caption, header cells, and scope attributes so screen readers can announce row and column relationships."],
      ["Touch target size", "Required", "Interactive controls must be large enough to tap or click reliably. WCAG 2.2 sets a 24×24 CSS px minimum, with 44×44 CSS px as the enhanced target."],
      ["Hidden until found", "Recommended", "Use hidden=\"until-found\" (or content-visibility: hidden) for collapsible content so that browser find-in-page, assistive tech, and search engines can still reach the text and auto-expand it."],
      ["Native interactive elements", "Recommended", "Prefer native HTML interactive elements — <button>, <a>, <details>/<summary>, <dialog> — over divs with click handlers. You get keyboard support, focus management, and assistive-tech semantics for free."],
      ["CSS state and relational selectors", "Recommended", "Use `:has()` together with `:user-invalid`, `:user-valid`, `:placeholder-shown` and `:focus-within` to express form and component state in CSS, removing the JavaScript class-toggling pattern and the race conditions it brings."],
    ],
  },
  {
    name: "Security",
    summary: "Headers, transport, and policies that keep visitors safe.",
    items: [
      ["HTTPS and TLS", "Required", "Serve every page over HTTPS using TLS 1.2 or 1.3, redirect plain HTTP to HTTPS, and disable obsolete SSL and early TLS versions on every host you control."],
      ["HSTS (Strict-Transport-Security)", "Required", "HSTS tells browsers to use HTTPS for your domain only, for a long time. Add max-age, includeSubDomains, and preload — but understand it is an irreversible commitment."],
      ["Content Security Policy (CSP)", "Recommended", "A CSP tells browsers which sources of script, style, image, and frame content to trust. A good policy stops most XSS and data-exfiltration attacks dead."],
      ["/.well-known/security.txt", "Recommended", "A standard text file at /.well-known/security.txt tells security researchers how to report vulnerabilities. It is cheap to publish and dramatically lowers the bar for responsible disclosure."],
      ["X-Content-Type-Options: nosniff", "Required", "The nosniff header stops browsers from guessing a response's content type. It blocks a class of attacks where a benign-looking file is interpreted as script or stylesheet."],
      ["Clickjacking protection (frame-ancestors / X-Frame-Options)", "Required", "Tell browsers who is allowed to embed your pages in an iframe. Use CSP frame-ancestors. X-Frame-Options is the legacy fallback."],
      ["Referrer-Policy", "Recommended", "Referrer-Policy controls how much URL information your site leaks when users follow a link or load a subresource. strict-origin-when-cross-origin is the sensible default."],
      ["Permissions-Policy", "Recommended", "Permissions-Policy lets you turn off powerful browser features — camera, microphone, geolocation, payment, USB — for your own pages and for any iframes you embed."],
      ["Subresource Integrity (SRI)", "Recommended", "SRI adds a cryptographic hash to every third-party script and stylesheet so the browser refuses to run modified files. Essential for any external JS or CSS you depend on."],
      ["Cookie attributes — Secure, HttpOnly, SameSite", "Required", "Every cookie should be Secure, HttpOnly where possible, and have an explicit SameSite. Use __Host- and __Secure- prefixes for session cookies."],
      ["DNS CAA records", "Recommended", "A CAA record tells certificate authorities which of them are allowed to issue certificates for your domain. Cheap to add, blocks a class of mis-issuance attacks."],
      ["DNSSEC", "Optional", "DNSSEC cryptographically signs DNS records so resolvers can verify they have not been tampered with. Strong defence in depth, but only with full registrar and registry support."],
    ],
  },
  {
    name: "Well-Known URIs",
    summary: "Standard, agreed-upon paths under /.well-known/.",
    items: [
      ["Well-known URIs", "Recommended", "The /.well-known/ path prefix is a standardised place to publish site-level metadata. RFC 8615 defines it; IANA keeps the registry of allowed names."],
      ["/.well-known/change-password", "Optional", "A standard redirect endpoint that points password managers and users at your real change-password page. Only applicable if the site has user accounts — sites without logins have nothing to point at and should not implement it."],
      ["/.well-known/openid-configuration", "Optional", "A JSON discovery document that describes an OpenID Connect provider's endpoints and capabilities. Only required if you are an OIDC identity provider."],
      ["/.well-known/api-catalog", "Recommended", "RFC 9727 publishes a machine-readable index of the APIs and resources a host exposes. Served as a Linkset (RFC 9264) JSON document, discoverable via the api-catalog link relation."],
      ["/.well-known/webfinger", "Optional", "WebFinger (RFC 7033) resolves an account identifier such as acct:user@example.com to a set of links. The Fediverse uses it to discover ActivityPub actors."],
      ["/.well-known/apple-app-site-association", "Optional", "A JSON file that tells iOS, iPadOS and macOS which Apple apps may handle which URLs on your domain. Required for Universal Links and several other Apple features."],
      ["/.well-known/assetlinks.json", "Optional", "Android's Digital Asset Links file proves that an Android app and a web domain are owned by the same entity. It powers App Links and Smart Lock for Passwords."],
      ["/.well-known/nodeinfo", "Optional", "A discovery URI for federated platforms. It returns links to NodeInfo documents that describe the software, version and basic statistics of a server."],
      ["/.well-known/traffic-advice", "Optional", "A JSON file that tells private prefetch proxies — most notably Chrome's — whether to send prefetch traffic to your origin, and at what fraction. Optional opt-out / throttle mechanism, provisionally registered with IANA."],
    ],
  },
  {
    name: "Agent Readiness",
    summary: "Things that make a site legible to AI agents and crawlers.",
    items: [
      ["Agent readiness", "Recommended", "Agent readiness is the set of choices that make a site legible to AI agents and LLMs: stable URLs, structured data, clean semantics, robots controls, and machine-readable endpoints."],
      ["/llms.txt", "Recommended", "A proposed markdown file at the site root that gives LLMs a curated index of your most important content. Emerging convention, not a ratified standard."],
      ["/llms-full.txt", "Optional", "An extended companion to /llms.txt that concatenates the full markdown content of your key pages into a single file. Useful for small sites, costly for large ones."],
      ["Per-page Markdown source endpoints", "Recommended", "Expose every documentation page's raw Markdown source at a predictable URL — via a .md suffix on the canonical URL, content negotiation, or both. Agents pull source instead of parsing HTML."],
      ["robots.txt for AI crawlers", "Recommended", "Major AI vendors publish named user-agents for their crawlers. Setting an explicit allow or disallow per agent is the clearest way to control how your content is used."],
      ["Content Signals in robots.txt", "Optional", "Add Content-Signal directives to robots.txt to declare whether AI crawlers may search, ingest, or train on your content. An emerging IETF AI Preferences / IAB Tech Lab proposal that some validators already check."],
      ["Web Bot Auth — verifiable bot identity", "Optional", "Web Bot Auth lets a bot prove who it is by signing each HTTP request with a key it controls. Sites can then allow or block specific bots without IP allow-lists, user-agent strings, or guesswork. Built on RFC 9421 HTTP Message Signatures."],
      ["Stable URLs", "Required", "URLs are public contracts. Once published, they should keep working. Breaking them invalidates citations, bookmarks, links, and agent caches — and is almost always avoidable."],
      ["Structured data for agents", "Recommended", "JSON-LD with schema.org types gives agents typed facts about your page. It is the same markup search engines use, and agents lean on it just as heavily."],
      ["Machine-readable formats", "Recommended", "Offer JSON, RSS, or plain markdown endpoints alongside HTML where it makes sense. Agents and feed readers prefer typed data over scraped HTML."],
      ["HTTP Link headers for discovery", "Recommended", "Use the HTTP Link header to advertise machine-readable resources — llms.txt, sitemap, api-catalog, RSS — directly in the response. Agents that never parse your HTML can still find what they need."],
      ["MCP and tool discovery", "Optional", "The Model Context Protocol is an emerging way for sites to expose queryable tools to agents over JSON-RPC. Relevant whenever your content has structure worth filtering — even for a static reference site like this one."],
      ["A2A agent cards", "Optional", "The Agent-to-Agent (A2A) protocol lets an autonomous agent find another autonomous agent and call it over JSON-RPC. Discovery hinges on a single well-known file: `/.well-known/agent-card.json`. Relevant whenever your service exposes agentic behaviour another agent might want to delegate to."],
      ["Agent Skills discovery", "Recommended", "A well-known URI that lists Agent Skills — short, scoped instructions an AI agent can load to work better with your site. Emerging convention via a Cloudflare-led RFC; still draft, still cheap to ship."],
      ["DNS for AI Discovery (DNS-AID)", "Optional", "Publish SVCB/HTTPS records under _agents.example.com so agents can discover your services from DNS, before any HTTP round-trip. Pair with DNSSEC so the answer is authenticated."],
      ["NLWeb — conversational interface discovery", "Optional", "NLWeb is an emerging convention for exposing a site as a conversational AI endpoint. A site advertises an `/ask`-style endpoint via a `rel=\"nlweb\"` link and serves an MCP-compatible JSON-RPC interface that agents can query in natural language."],
      ["WebMCP — browser-native tools for agents", "Optional", "WebMCP lets a page register tools that an in-browser AI agent can call directly, using a `navigator.modelContext` JavaScript API. It turns a site into an agent surface without server-side MCP plumbing."],
      ["Schemamap — discoverable JSON-LD endpoints per resource", "Optional", "A convention this site proposes — no external standard exists yet. `/schemamap.xml` indexes one JSON-LD endpoint per resource so agents fetch the structured-data graph directly instead of extracting it from HTML."],
    ],
  },
  {
    name: "Performance",
    summary: "Core Web Vitals, caching, images, fonts, network behaviour.",
    items: [
      ["Core Web Vitals (LCP, INP, CLS)", "Required", "Core Web Vitals measure loading, responsiveness, and visual stability. Hit LCP ≤ 2.5s, INP ≤ 200ms, and CLS ≤ 0.1 at the 75th percentile of real users."],
      ["Image optimisation", "Required", "Serve images in modern formats (WebP, AVIF), at the right size for the viewport, with explicit dimensions. Images are the largest payload on most pages."],
      ["Lazy loading images, iframes, and video", "Recommended", "Native lazy loading defers off-screen images, iframes, and (recently) video until the user scrolls near them. Use loading=\"lazy\" — but never on the LCP element."],
      ["Preload, prefetch, preconnect", "Recommended", "Resource hints let you tell the browser what is coming. Preload the LCP image and critical fonts, preconnect to third-party origins, prefetch the next navigation."],
      ["Cache-Control headers", "Required", "Cache-Control tells browsers and CDNs how long to keep a response. Use immutable + max-age=31536000 for fingerprinted assets and short or no-cache for HTML."],
      ["No-Vary-Search response header", "Recommended", "The `No-Vary-Search` response header tells browsers and caches that some URL query parameters (tracking, UTM, sort order) do not change the response. The cached entry for the canonical URL is reused for variants — fewer fetches, better prefetch hits, less duplicate work."],
      ["Compression (gzip, brotli, zstd)", "Required", "Compress text responses with brotli where supported, gzip everywhere else. zstd is emerging. Don't compress already-compressed media."],
      ["Web font loading", "Recommended", "Self-host WOFF2 fonts, subset them, set font-display: swap so text is readable while the font loads, and preload the critical face only when it styles above-the-fold content."],
      ["Critical CSS and render-blocking resources", "Recommended", "Inline the CSS needed for above-the-fold content and defer the rest. Render-blocking resources in <head> are the single biggest cause of slow first paint."],
      ["Script loading — defer, async, module", "Recommended", "Choose the right script-loading attribute for every <script>: defer for app code, async for independent third-party, type=module for modern code. Bare <script> in <head> is always wrong."],
      ["HTTP/2 and HTTP/3", "Recommended", "Serve over HTTP/2 at minimum and HTTP/3 where you can. Multiplexing eliminates head-of-line blocking; QUIC removes TCP handshake delays."],
      ["Speculation Rules", "Recommended", "Tell the browser which links to prefetch or prerender before the user clicks. Done well, navigations feel instant; done carelessly, you burn bandwidth on pages nobody visits."],
      ["Resource hints overview", "Recommended", "Five resource hints — dns-prefetch, preconnect, preload, modulepreload, prefetch — cover every stage of the request lifecycle. Pick the right one for the job."],
      ["View Transitions", "Recommended", "Animate between states (same-document) or between pages (cross-document) with a single CSS opt-in. Replaces ad-hoc SPA animation libraries with a platform primitive."],
      ["Back/forward cache (BFCache)", "Recommended", "Keep pages BFCache-eligible so back/forward navigation restores them instantly from memory, with no reload, no hydration, and no repaint."],
      ["Visibility-aware rendering", "Recommended", "Use `content-visibility` with `contain-intrinsic-size` to skip layout and paint for off-screen content, and Intersection Observer to drive lazy behaviour, instead of scroll and resize listeners."],
      ["CSS containment", "Optional", "Use `contain: layout paint style` (or the `contain: content` shorthand) to tell the browser that an element's internals cannot affect the rest of the page, so reflow and repaint stay isolated to that subtree."],
      ["Scroll-driven animations", "Optional", "Drive CSS animations from scroll position or element visibility with `scroll-timeline` and `view-timeline`, replacing JS scroll-listener libraries with compositor-thread animation."],
      ["Scrollbar gutter", "Recommended", "Use scrollbar-gutter: stable to reserve scrollbar space and stop horizontal layout shift between pages or states that overflow vs. don't."],
    ],
  },
  {
    name: "Privacy",
    summary: "Consent, signals, and respecting visitor choice.",
    items: [
      ["Privacy policy", "Required", "A privacy policy tells visitors what personal data you collect, why, on what legal basis, who you share it with, how long you keep it, and what rights they have."],
      ["Cookie consent", "Required", "In the EU and UK, non-essential cookies and similar storage require freely given, informed, specific, and unambiguous opt-in consent before they are set."],
      ["Global Privacy Control (GPC)", "Recommended", "Global Privacy Control is a browser-level signal that tells websites the user opts out of the sale or sharing of their personal data. California and Colorado require sites to honour it."],
      ["Third-party scripts and privacy", "Recommended", "Every script loaded from another domain can read cookies, see the URL, and exfiltrate data from your page. Audit them, justify them, and lock them down."],
      ["Privacy-respecting analytics", "Recommended", "You can measure traffic without surveilling visitors. Aggregate, cookieless, EU-hosted analytics tools answer most product questions without the consent and transfer problems of ad-tech analytics."],
      ["Data minimisation", "Recommended", "Collect only the personal data you actually need for a specific purpose, keep it only as long as you need it, and redact it from anywhere it leaks unnecessarily."],
    ],
  },
  {
    name: "Resilience",
    summary: "Graceful failure — error pages, offline, redirects.",
    items: [
      ["Custom error pages (404, 500)", "Required", "Custom error pages must return the correct HTTP status code, explain what went wrong in plain language, and offer the user a way forward without leaking implementation details."],
      ["Maintenance pages and 503", "Recommended", "When the site is intentionally offline, return HTTP 503 with a Retry-After header and a page that tells users what is happening and when to come back."],
      ["Offline support and service workers", "Optional", "A service worker can serve a cached offline fallback page when the network fails, keeping the site usable on flaky connections and turning hard failures into graceful ones."],
      ["Web app manifest", "Recommended", "A web app manifest is a small JSON file that tells browsers how the site should appear when installed — its name, icons, start URL, theme colour, and display mode."],
      ["Monitoring and uptime", "Recommended", "Monitor the site from outside your own infrastructure, combine synthetic checks with real user data, and run a status page on a separate host so it stays up when the site does not."],
    ],
  },
  {
    name: "Internationalisation",
    summary: "Language, locale, direction, and translated content.",
    items: [
      ["International URL structure", "Recommended", "Pick a single URL pattern for multilingual or multi-regional content — country-code top-level domain, subdomain, or subdirectory — and stick with it. Optionally localise the slugs too."],
      ["hreflang for language and regional URLs", "Recommended", "hreflang tells search engines which language or regional version of a page to show to which user. It uses BCP 47 codes and must be reciprocal across all alternates."],
      ["Localised page metadata", "Recommended", "Translate every visible string in the head and in structured data — title, meta description, Open Graph fields, JSON-LD names and descriptions, image alt text — not just the body. A localised body with English metadata is a half-translation."],
      ["hreflang in XML sitemaps", "Optional", "Declare language and regional alternates inside the XML sitemap with xhtml:link instead of in the HTML head. Easier to maintain at scale and keeps localisation metadata separate from content."],
      ["Avoid automatic IP-based language redirects", "Avoid", "Automatically redirecting visitors to a locale based on IP geolocation or Accept-Language is an anti-pattern. It traps users in the wrong language, breaks search crawlers, and breaks shared links. Let users choose."],
      ["lang attribute on inline content", "Required", "Mark passages, phrases, and inline elements that differ from the document language with a lang attribute. WCAG 3.1.2 requires it so assistive tech can switch pronunciation."],
      ["Language switcher", "Recommended", "List each locale in its own language ('Deutsch', '日本語', 'العربية') and mark it with the right lang attribute. Don't use flags — flags are countries, not languages."],
      ["RTL and bidirectional text", "Recommended", "Sites that serve Arabic, Hebrew, Persian, or Urdu must set dir=\"rtl\" and use CSS logical properties so layouts mirror correctly without hard-coded left and right."],
      ["Writing modes and CJK line breaking", "Optional", "Vertical text (Japanese, Traditional Chinese, Mongolian) needs CSS writing-mode. Chinese, Japanese, Korean, and Thai also need explicit line-break and word-break rules so wrapping respects script-specific conventions."],
      ["Locale-aware content", "Recommended", "Dates, numbers, currency, and units should be formatted in the user's locale. Use Intl APIs in the browser and the same locale data server-side so output matches expectations."],
      ["Plural rules and grammatical number", "Recommended", "Most languages don't pluralise like English. Use CLDR plural categories — zero, one, two, few, many, other — via Intl.PluralRules instead of hard-coded 'item' vs 'items' logic."],
      ["Internationalised Domain Names (IDN)", "Optional", "IDNs let domain names contain non-ASCII characters. They are encoded as Punycode on the wire and rendered as Unicode in the browser, subject to anti-spoofing rules."],
    ],
  },
];

const statusTone = {
  Required: "required",
  Recommended: "recommended",
  Optional: "optional",
  Avoid: "avoid",
};

const itemCount = checklistSections.reduce(
  (total, section) => total + section.items.length,
  0
);

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function Checklist() {
  return (
    <div className="Checklist container">
      <Head>
        <title>Checklist | Harri Halonen</title>
        <meta
          name="description"
          content="A print-friendly, tickable web quality checklist covering foundations, SEO, accessibility, security, agent readiness, performance, privacy, resilience, and internationalisation."
        />
        <link rel="canonical" href="https://harritaito.com/checklist" />
      </Head>

      <Navbar nextProjectLink={null} nextProjectName={null} color="purple" />

      <main className="content" id="main-content">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
          <span aria-hidden="true">/</span>
          <span>Checklist</span>
        </nav>

        <header className="hero">
          <p className="eyebrow">The checklist</p>
          <h1>Every spec item, flat and tickable.</h1>
          <p className="lede">
            Use this as a self-audit before publishing a page. The list keeps the
            requirements practical, readable, and friendly to print.
          </p>
          <div className="meta" aria-label="Checklist summary">
            <span>{checklistSections.length} sections</span>
            <span>{itemCount} items</span>
            <button type="button" onClick={() => window.print()}>
              Print checklist
            </button>
          </div>
        </header>

        <div className="section-index" aria-label="Checklist sections">
          {checklistSections.map((section) => (
            <a key={section.name} href={`#${slugify(section.name)}`}>
              {section.name}
            </a>
          ))}
        </div>

        <div className="sections">
          {checklistSections.map((section) => (
            <section key={section.name} id={slugify(section.name)}>
              <div className="section-heading">
                <div>
                  <h2>{section.name}</h2>
                  <p>{section.summary}</p>
                </div>
                <span>{section.items.length} items</span>
              </div>

              <ol className="items">
                {section.items.map(([title, status, description]) => {
                  const id = `${slugify(section.name)}-${slugify(title)}`;

                  return (
                    <li key={id} className="item">
                      <input id={id} type="checkbox" />
                      <label htmlFor={id}>
                        <span className="item-topline">
                          <strong>{title}</strong>
                          <span className={`status ${statusTone[status]}`}>
                            {status}
                          </span>
                        </span>
                        <span className="description">{description}</span>
                      </label>
                    </li>
                  );
                })}
              </ol>
            </section>
          ))}
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .Checklist .content {
          padding-top: 5rem;
          padding-bottom: 4rem;
        }

        .breadcrumbs {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          color: var(--muted-text-color);
          font-size: 0.9rem;
          margin-bottom: 2rem;
        }

        .breadcrumbs a {
          color: var(--muted-text-color);
        }

        .hero {
          max-width: 54rem;
          margin-bottom: 2rem;
        }

        .eyebrow {
          color: ${colors.accentPurple};
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        h1 {
          margin-top: 0;
          margin-bottom: 1rem;
          line-height: 1.05;
        }

        .lede {
          color: var(--muted-text-color);
          font-size: 1.2rem;
          max-width: 42rem;
        }

        .meta,
        .section-index {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .meta {
          align-items: center;
          margin-top: 1.5rem;
        }

        .meta span,
        .section-index a,
        button {
          border: 1px solid var(--border-color);
          border-radius: ${radii.pill};
          background: var(--surface-elevated-color);
          color: var(--link-color);
          padding: 0.65rem 0.95rem;
          font: inherit;
        }

        button {
          cursor: pointer;
        }

        button:hover,
        .section-index a:hover {
          border-color: ${colors.accentPurple};
          color: ${colors.accentPurple};
        }

        .section-index {
          margin: 2rem 0 3rem;
        }

        .sections {
          display: grid;
          gap: 1.5rem;
        }

        section {
          background: var(--surface-elevated-color);
          border: 1px solid var(--border-color);
          border-radius: 1.2rem;
          box-shadow: ${shadows.nav};
          padding: 1.5rem;
          scroll-margin-top: 6rem;
        }

        .section-heading {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: flex-start;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1rem;
          margin-bottom: 1rem;
        }

        .section-heading h2 {
          margin: 0 0 0.35rem;
          font-size: 2rem;
        }

        .section-heading p {
          color: var(--muted-text-color);
          margin: 0;
        }

        .section-heading > span {
          white-space: nowrap;
          color: var(--muted-text-color);
          font-size: 0.9rem;
          margin-top: 0.35rem;
        }

        .items {
          list-style: none;
          display: grid;
          gap: 0.75rem;
          margin: 0;
          padding: 0;
        }

        .item {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 0.75rem;
          padding: 0.85rem;
          border-radius: 0.8rem;
          background: var(--surface-color);
          break-inside: avoid;
        }

        input {
          width: 1.15rem;
          height: 1.15rem;
          margin-top: 0.15rem;
          accent-color: ${colors.accentPurple};
        }

        label {
          cursor: pointer;
        }

        .item-topline {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: baseline;
          margin-bottom: 0.35rem;
        }

        .status {
          border-radius: ${radii.pill};
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          padding: 0.25rem 0.55rem;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .required {
          background: rgba(250, 88, 88, 0.14);
          color: ${colors.accentRed};
        }

        .recommended {
          background: rgba(73, 184, 130, 0.14);
          color: ${colors.progressMint};
        }

        .optional {
          background: rgba(30, 149, 237, 0.14);
          color: ${colors.accentBlue};
        }

        .avoid {
          background: rgba(116, 122, 117, 0.16);
          color: var(--muted-text-color);
        }

        .description {
          display: block;
          color: var(--muted-text-color);
          line-height: 1.55;
        }

        @media only screen and (max-width: 45rem) {
          .Checklist .content {
            padding-top: 4rem;
          }

          .section-heading,
          .item-topline {
            display: grid;
          }

          section {
            padding: 1rem;
          }
        }

        @media print {
          .Checklist :global(.nav),
          .Checklist :global(footer),
          .breadcrumbs,
          .section-index,
          button {
            display: none !important;
          }

          .Checklist .content {
            padding: 0;
          }

          .hero {
            margin-bottom: 1rem;
          }

          h1 {
            font-size: 2rem;
          }

          .lede,
          .description,
          .section-heading p {
            color: #111827;
          }

          section {
            box-shadow: none;
            border-color: #d1d5db;
            page-break-inside: avoid;
          }

          .item {
            background: #ffffff;
            border: 1px solid #e5e7eb;
          }
        }
      `}</style>
    </div>
  );
}
