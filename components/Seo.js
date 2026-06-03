import Head from "next/head";

const SITE_URL = "https://harritaito.com";
const SITE_NAME = "Harri Halonen";

const PAGE_METADATA = {
  "/": {
    title: "Harri Halonen | Product designer",
    description:
      "Portfolio of Harri Halonen, a Finnish experience designer shaping research-led services and humane digital products from Tampere.",
    path: "/",
  },
  "/Home": {
    title: "Harri Halonen | Product designer",
    description:
      "Portfolio of Harri Halonen, a Finnish experience designer shaping research-led services and humane digital products from Tampere.",
    path: "/",
  },
  "/projects": {
    title: "Projects | Harri Halonen",
    description:
      "Selected case studies from Harri Halonen across public services, healthcare, and emerging technology product design.",
    path: "/projects",
  },
  "/about": {
    title: "About | Harri Halonen",
    description:
      "Learn about Harri Halonen, an experience designer based in Tampere working across research, service design, and product strategy.",
    path: "/about",
  },
  "/contact": {
    title: "Contact | Harri Halonen",
    description:
      "Contact Harri Halonen for thoughtful collaborations, design conversations, and research-led product work.",
    path: "/contact",
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
      "A memory-care reminiscence service case study explored through field research, service blueprinting, and prototype sessions.",
    path: "/aikakone",
  },
  "/404": {
    title: "Page not found | Harri Halonen",
    description:
      "The requested page could not be found on Harri Halonen's portfolio.",
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
      <meta property="og:title" content={metadata.title} key="og-title" />
      <meta property="og:description" content={metadata.description} key="og-description" />
      <meta property="og:url" content={canonicalUrl} key="og-url" />
      <meta name="twitter:title" content={metadata.title} key="twitter-title" />
      <meta name="twitter:description" content={metadata.description} key="twitter-description" />
    </Head>
  );
}
