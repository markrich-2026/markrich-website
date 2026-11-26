// JSON-LD structured data per page, from "Markrich schema - 16th nov".
// Rendered with <JsonLd data={...} /> (components/JsonLd.jsx).

const SITE = "https://www.markrich.in";
const ORG = { "@id": `${SITE}/#organization` };
const WEBSITE = { "@id": `${SITE}/#website` };
const DATE_MODIFIED = "2026-11-16";
const LOGO_URL = `${SITE}/images/logo.webp`;

const crumbs = (path, items) => ({
  "@type": "BreadcrumbList",
  "@id": `${SITE}${path}#breadcrumb`,
  itemListElement: items.map(([name, url], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: `${SITE}${url}`,
  })),
});

// One page entry (WebPage / AboutPage / ContactPage / CollectionPage) + its breadcrumb
const page = (type, path, name, description, crumbItems, extra = {}) => [
  {
    "@type": type,
    "@id": `${SITE}${path}#webpage`,
    url: `${SITE}${path}`,
    name,
    description,
    isPartOf: WEBSITE,
    about: ORG,
    breadcrumb: { "@id": `${SITE}${path}#breadcrumb` },
    ...extra,
    inLanguage: "en-IN",
    dateModified: DATE_MODIFIED,
  },
  crumbs(path, crumbItems),
];

const offers = (names) =>
  names.map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } }));

const graph = (...nodes) => ({ "@context": "https://schema.org", "@graph": nodes.flat() });

const HOME = ["Home", "/"];
const TRAINING = ["Training Solutions", "/training-solutions/"];

export const homeSchema = graph(
  {
    "@type": ["Organization", "EducationalOrganization"],
    "@id": `${SITE}/#organization`,
    name: "Markrich Solutions LLP",
    legalName: "Markrich Solutions LLP",
    alternateName: "Markrich",
    url: `${SITE}/`,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE}/#logo`,
      url: LOGO_URL,
      contentUrl: LOGO_URL,
    },
    image: { "@id": `${SITE}/#logo` },
    description:
      "Markrich Solutions LLP provides customized corporate training solutions in Finance, Generative AI, Analytics, Leadership Development, and Business Excellence.",
    telephone: "+91-9702551632",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rose CHS, Bapuji Nagar, Thane West",
      addressLocality: "Thane",
      addressRegion: "Maharashtra",
      postalCode: "400601",
      addressCountry: "IN",
    },
    areaServed: { "@type": "Country", name: "India" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+91-9702551632",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://www.linkedin.com/company/markrich-solutions-llp",
      "https://www.instagram.com/markrich.in/",
      "https://www.facebook.com/people/Markrich-Solutions-LLP/61557010641903/",
      "https://maps.app.goo.gl/Ee9dgv7shBsaiZjR7",
    ],
    founder: { "@type": "Person", name: "Mark Menezes" },
    employee: [{ "@type": "Person", name: "Richard Menezes" }],
    knowsAbout: [
      "Finance Training",
      "Generative AI Training",
      "Data Analytics Training",
      "Leadership Development",
      "Business Excellence",
      "Corporate Training",
    ],
  },
  {
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    url: `${SITE}/`,
    name: "Markrich Solutions LLP",
    alternateName: "Markrich",
    publisher: ORG,
    inLanguage: "en-IN",
  },
  {
    "@type": "WebPage",
    "@id": `${SITE}/#webpage`,
    url: `${SITE}/`,
    name: "Markrich Solutions LLP",
    description:
      "Customized corporate training in Finance, Generative AI, Analytics, Leadership Development and Business Excellence for organizations across India.",
    isPartOf: WEBSITE,
    about: ORG,
    mainEntity: ORG,
    primaryImageOfPage: { "@id": `${SITE}/#logo` },
    inLanguage: "en-IN",
    dateModified: DATE_MODIFIED,
  }
);

export const aiTrainingSchema = graph(
  page(
    "WebPage",
    "/ai-training-company-india/",
    "AI Training Company India | Markrich Solutions LLP",
    "Customized corporate AI training in India covering Generative AI, Agentic AI and Machine Learning for business, sales, marketing, HR and finance teams.",
    [HOME, TRAINING, ["AI Training Company India", "/ai-training-company-india/"]],
    { mainEntity: { "@id": `${SITE}/ai-training-company-india/#service` } }
  ),
  {
    "@type": "Service",
    "@id": `${SITE}/ai-training-company-india/#service`,
    name: "Corporate AI Training Services",
    serviceType: "Corporate AI Training",
    url: `${SITE}/ai-training-company-india/`,
    description:
      "Markrich Solutions LLP provides customized corporate AI training programs covering Generative AI, business productivity, sales, marketing, HR, finance, Agentic AI, and Machine Learning to help organizations develop practical AI skills and improve workforce capabilities.",
    provider: ORG,
    areaServed: { "@type": "Country", name: "India" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Training Programs",
      itemListElement: offers([
        "Generative AI Basics",
        "Generative AI for Business Productivity",
        "Generative AI for Sales",
        "Generative AI for Marketing",
        "Generative AI for HR",
        "Generative AI for Finance",
        "Agentic AI",
        "Machine Learning",
      ]),
    },
  }
);

export const dataAnalyticsSchema = graph(
  page(
    "WebPage",
    "/data-analytics-training/",
    "Data Analytics Training | Markrich Solutions LLP",
    "Customized corporate data analytics training covering MS Excel, Business Analytics, Data Visualization, Power BI, Python and PySpark.",
    [HOME, TRAINING, ["Data Analytics Training", "/data-analytics-training/"]],
    { mainEntity: { "@id": `${SITE}/data-analytics-training/#service` } }
  ),
  {
    "@type": "Service",
    "@id": `${SITE}/data-analytics-training/#service`,
    name: "Corporate Data Analytics Training",
    serviceType: "Data Analytics Training",
    url: `${SITE}/data-analytics-training/`,
    description:
      "Markrich Solutions LLP provides customized data analytics training programs to help organizations develop analytical capabilities and make data-driven business decisions. Training covers MS Excel, Business Analytics, Data Visualization, Power BI, Python, PySpark, and industry-specific analytics.",
    provider: ORG,
    areaServed: { "@type": "Country", name: "India" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Data Analytics Training Programs",
      itemListElement: offers([
        "Basic MS Excel",
        "Advanced MS Excel",
        "Business Analytics",
        "Data Analytics for Data-Driven Decision Making",
        "Data Visualization",
        "Analytics for HR Professionals",
        "Analytics for Finance Professionals",
        "Customer Analytics",
        "Power BI",
        "Python",
        "PySpark Coding",
      ]),
    },
  }
);

export const deliverySchema = graph(
  page(
    "WebPage",
    "/delivery/",
    "Delivery | Markrich Solutions LLP",
    "Explore Markrich Solutions LLP's corporate training delivery methods, including customized training programs, offline sessions, virtual instructor-led training, interactive discussions, case studies, assessments, and quizzes.",
    [HOME, ["Delivery", "/delivery/"]]
  )
);

export const verifyCertificateSchema = graph(
  page(
    "WebPage",
    "/verify-certificate/",
    "Verify Certificate | Markrich Solutions LLP",
    "Verify certificates issued by Markrich Solutions LLP through its certificate verification page.",
    [HOME, ["Verify Certificate", "/verify-certificate/"]]
  )
);

export const trainingSolutionsSchema = graph(
  page(
    "CollectionPage",
    "/training-solutions/",
    "Training Solutions | Markrich Solutions LLP",
    "Explore Markrich Solutions' comprehensive corporate training programs in Finance, AI, Analytics, and Business Excellence, designed to enhance professional knowledge, skills, and organizational performance.",
    [HOME, TRAINING],
    { mainEntity: { "@id": `${SITE}/training-solutions/#training-list` } }
  ),
  {
    "@type": "ItemList",
    "@id": `${SITE}/training-solutions/#training-list`,
    name: "Markrich Training Solutions",
    description:
      "Explore Markrich Solutions LLP's training categories covering Finance, AI, Analytics, and Business Excellence.",
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: 4,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Finance Solutions" },
      { "@type": "ListItem", position: 2, name: "AI Solutions", url: `${SITE}/ai-training-company-india/` },
      { "@type": "ListItem", position: 3, name: "Analytics Solutions", url: `${SITE}/data-analytics-training/` },
      { "@type": "ListItem", position: 4, name: "Business Excellence Solutions" },
    ],
  }
);

export const successStoriesSchema = graph(
  page(
    "CollectionPage",
    "/success-stories/",
    "Success Stories | Markrich Solutions LLP",
    "Explore Markrich Solutions LLP's training galleries, corporate engagement highlights, client testimonials, and certified professionals who have successfully completed training programs.",
    [HOME, ["Success Stories", "/success-stories/"]],
    { mainEntity: { "@id": `${SITE}/success-stories/#success-list` } }
  ),
  {
    "@type": "ItemList",
    "@id": `${SITE}/success-stories/#success-list`,
    name: "Markrich Solutions Success Stories",
    description:
      "Explore Markrich Solutions' training galleries, client testimonials, and certified professionals.",
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: 3,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Training Gallery" },
      { "@type": "ListItem", position: 2, name: "Client Testimonials" },
      { "@type": "ListItem", position: 3, name: "Certified Professionals" },
    ],
  }
);

export const aboutSchema = graph(
  page(
    "AboutPage",
    "/about-us/",
    "About Us | Markrich Solutions LLP",
    "Learn about Markrich Solutions LLP, its vision, mission, leadership, and commitment to providing corporate training solutions in Finance, Generative AI, Analytics, and Business Excellence.",
    [HOME, ["About Us", "/about-us/"]],
    { mainEntity: ORG }
  )
);

export const contactSchema = graph(
  page(
    "ContactPage",
    "/contact-us/",
    "Contact Us | Markrich Solutions LLP",
    "Get in touch with Markrich Solutions LLP for enquiries about corporate training programs, Finance, Generative AI, Data Analytics, Leadership Development, and Business Excellence solutions.",
    [HOME, ["Contact Us", "/contact-us/"]],
    { mainEntity: ORG }
  )
);

// Training pages added after the 16th Nov schema doc, built in the same format
// as the AI Training and Data Analytics pages (WebPage + Breadcrumb + Service).
const trainingPage = ({ path, pageName, pageDescription, crumb, service }) =>
  graph(
    page("WebPage", path, pageName, pageDescription, [HOME, TRAINING, [crumb, path]], {
      mainEntity: { "@id": `${SITE}${path}#service` },
    }),
    {
      "@type": "Service",
      "@id": `${SITE}${path}#service`,
      name: service.name,
      serviceType: service.type,
      url: `${SITE}${path}`,
      description: service.description,
      provider: ORG,
      areaServed: { "@type": "Country", name: "India" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: service.catalogName,
        itemListElement: offers(service.offers),
      },
    }
  );

export const corporateAiTrainingSchema = trainingPage({
  path: "/corporate-ai-training-india/",
  pageName: "Corporate AI Training India | Markrich Solutions LLP",
  pageDescription:
    "Corporate AI training in India that helps employees use Generative AI, prompt engineering and AI tools responsibly to improve productivity.",
  crumb: "Corporate AI Training India",
  service: {
    name: "Corporate AI Training",
    type: "Corporate AI Training",
    description:
      "Markrich Solutions LLP provides corporate AI training that helps employees understand artificial intelligence and apply Generative AI, prompt engineering and AI tools to business productivity, data analysis, reporting and automation, with a focus on responsible use and data security.",
    catalogName: "Corporate AI Training Programs",
    offers: [
      "Introduction to Artificial Intelligence",
      "Generative AI and Prompt Engineering",
      "AI Tools for Business Productivity",
      "AI for Data Analysis and Reporting",
      "AI for Business Automation",
      "Responsible AI and Data Security",
    ],
  },
});

export const aiFinanceTrainingSchema = trainingPage({
  path: "/ai-training-in-finance/",
  pageName: "AI Training in Finance | Markrich Solutions LLP",
  pageDescription:
    "AI training for finance teams covering reporting, forecasting, Excel, GST reconciliation and the responsible use of financial data.",
  crumb: "AI Training in Finance",
  service: {
    name: "AI Training in Finance",
    type: "Corporate AI Training for Finance Teams",
    description:
      "Markrich Solutions LLP provides AI training for finance professionals, covering AI fundamentals, AI-assisted reporting, financial analysis and forecasting, AI with Advanced Excel, Generative AI tools, workflow automation and the responsible handling of confidential financial data.",
    catalogName: "AI Training in Finance Programs",
    offers: [
      "AI Fundamentals for Finance Professionals",
      "AI-Powered Reporting and Documentation",
      "Financial Analysis and Forecasting",
      "AI with Advanced Excel",
      "Generative AI Tools for Finance Teams",
      "Workflow Automation",
      "Responsible AI, Privacy and Data Security",
    ],
  },
});

// AI Training in HR: from the client doc "Markrich Schema - 26th Nov".
// The FAQPage part of that doc is rendered on the page itself (FAQPageJsonLd), from the same
// answers shown in the FAQ section, so the schema always matches the visible text.
export const aiHrTrainingSchema = graph(
  {
    "@type": "WebPage",
    "@id": `${SITE}/ai-training-in-hr/#webpage`,
    url: `${SITE}/ai-training-in-hr/`,
    name: "AI Training in HR",
    description:
      "Explore AI training for HR professionals to improve recruitment, employee engagement, workforce planning and human resource management.",
    isPartOf: { "@type": "WebSite", "@id": `${SITE}/#website` },
    about: { "@id": `${SITE}/ai-training-in-hr/#service` },
    breadcrumb: { "@id": `${SITE}/ai-training-in-hr/#breadcrumb` },
    inLanguage: "en-IN",
  },
  {
    "@type": "Service",
    "@id": `${SITE}/ai-training-in-hr/#service`,
    name: "AI Training in HR",
    serviceType: "Corporate AI Training for Human Resource Professionals",
    description:
      "AI training for HR professionals covering recruitment, talent acquisition, employee engagement, performance management, workforce planning, HR automation and responsible AI adoption.",
    provider: {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "Markrich Solutions",
      url: `${SITE}/`,
    },
    areaServed: { "@type": "Country", name: "India" },
    url: `${SITE}/ai-training-in-hr/`,
  },
  crumbs("/ai-training-in-hr/", [HOME, TRAINING, ["AI Training in HR", "/ai-training-in-hr/"]])
);
