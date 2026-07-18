import Head from "next/head";

const SITE_URL = "https://harritaito.com";
const SITE_NAME = "Harri Halonen";

const PAGE_METADATA = {
  "/": {
    title: "Harri Halonen | Product designer",
    description:
      "Harri Halonen designs complex digital products: discovery, UX architecture, design systems, and AI and data workflows made understandable for the people who use them.",
    path: "/",
  },
  "/Home": {
    title: "Harri Halonen | Product designer",
    description:
      "Harri Halonen designs complex digital products: discovery, UX architecture, design systems, and AI and data workflows made understandable for the people who use them.",
    path: "/",
  },
  "/projects": {
    title: "Projects | Harri Halonen",
    description:
      "Case studies and archived work from Harri Halonen, labeled honestly by status: research, concept explorations, and earlier projects across product and service design.",
    path: "/projects",
  },
  "/about": {
    title: "About | Harri Halonen",
    description:
      "About Harri Halonen, an experience and product designer in Tampere focused on complex product systems, design systems, discovery research, and AI and data workflows.",
    path: "/about",
  },
  "/thesis": {
    title: "Industrial XR thesis | Harri Halonen",
    description:
      "A master's thesis case study on interaction design principles for demanding industrial XR environments.",
    path: "/thesis",
  },
  "/hri-study": {
    title: "HRI study | Harri Halonen",
    description:
      "A classroom robot case study covering contextual inquiry, interviews, and theatrical prototyping for human-robot interaction.",
    path: "/hri-study",
  },
  "/kivakaupunki": {
    title: "Kiva Kaupunki | Harri Halonen",
    description:
      "A city feedback platform case study shaped through service design, interface sketches, and an MVP for civic reporting.",
    path: "/kivakaupunki",
  },
  "/aikakone": {
    title: "Aikakone | Harri Halonen",
    description:
      "A memory-care reminiscence concept explored through field research, service blueprinting, and prototype sessions. Concept work, not a shipped service.",
    path: "/aikakone",
  },
  "/design-system": {
    title: "Design system case | Harri Halonen",
    description:
      "An in-progress case on scaling product consistency through a design system: tokens, component behavior, states, accessibility, and developer handoff.",
    path: "/design-system",
  },
  "/operations-platform": {
    title: "Operations platform case | Harri Halonen",
    description:
      "An in-progress case on designing a product for fragmented operational workflows: domain research, stakeholder mapping, concept modeling, and UI design.",
    path: "/operations-platform",
  },
  "/direction-setting": {
    title: "Direction-setting methods | Harri Halonen",
    description:
      "An in-progress methods case on moving a team from ambiguity to shared direction: interviews, assumption mapping, workshops, and decision logs.",
    path: "/direction-setting",
  },
  "/ai-decision-support": {
    title: "AI as decision support (concept) | Harri Halonen",
    description:
      "A concept framework for designing AI as decision support in operational workflows: support roles, uncertainty display, and inspectable evidence. Not shipped work.",
    path: "/ai-decision-support",
  },
  "/writing": {
    title: "Writing | Harri Halonen",
    description:
      "Research notes, process pieces, and longer-form writing from Harri Halonen on product and service design.",
    path: "/writing",
  },
  "/writing/[slug]": {
    title: "Writing | Harri Halonen",
    description:
      "Research notes, process pieces, and longer-form writing from Harri Halonen on product and service design.",
    path: "/writing",
  },
  "/accessibility": {
    title: "Accessibility statement | Harri Halonen",
    description:
      "Accessibility statement for harritaito.com: compliance status, known issues, and how to send accessibility feedback.",
    path: "/accessibility",
  },
  "/saavutettavuusseloste": {
    title: "Saavutettavuusseloste | Harri Halonen",
    description:
      "Harritaito.com-sivuston saavutettavuusseloste: vaatimustenmukaisuustilanne, tiedossa olevat puutteet ja saavutettavuuspalautteen kanava.",
    path: "/saavutettavuusseloste",
  },
  "/404": {
    title: "Page not found | Harri Halonen",
    description: "The requested page could not be found on Harri Halonen's portfolio.",
    path: "/404",
    noindex: true,
  },
};

function normalizePath(pathname) {
  if (!pathname || pathname === "/index") {
    return "/";
  }

  return pathname.split("?")[0].replace(/\/$/, "") || "/";
}

export function getPageMetadata(pathname) {
  const normalizedPath = normalizePath(pathname);
  return PAGE_METADATA[normalizedPath] || PAGE_METADATA["/"];
}

export default function Seo({ pathname }) {
  const metadata = getPageMetadata(pathname);
  const canonicalUrl = `${SITE_URL}${metadata.path === "/" ? "/" : metadata.path}`;

  return (
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} key="description" />
      {metadata.noindex ? <meta name="robots" content="noindex, follow" key="robots" /> : null}
      <link rel="canonical" href={canonicalUrl} key="canonical" />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Harri Halonen — Writing"
        href={`${SITE_URL}/feed.xml`}
        key="rss"
      />
      <meta property="og:title" content={metadata.title} key="og-title" />
      <meta property="og:description" content={metadata.description} key="og-description" />
      <meta property="og:url" content={canonicalUrl} key="og-url" />
      <meta property="og:site_name" content={SITE_NAME} key="og-site-name" />
      <meta name="twitter:title" content={metadata.title} key="twitter-title" />
      <meta name="twitter:description" content={metadata.description} key="twitter-description" />
    </Head>
  );
}
