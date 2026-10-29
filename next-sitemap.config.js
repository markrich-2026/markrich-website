/** @type {import('next-sitemap').IConfig} */
// Runs after every `npm run build` (postbuild) and regenerates public/robots.txt
// and public/sitemap.xml, so edit this file rather than those generated files.
// New pages under pages/ are added to the sitemap automatically.
const SITE_URL = "https://www.markrich.in";

module.exports = {
  siteUrl: SITE_URL,
  generateIndexSitemap: false, // single sitemap.xml, no sitemap-0.xml index
  generateRobotsTxt: true,
  exclude: ["/admin", "/thank-you", "/api/*", "/404"],
  transform: async (config, path) => ({
    loc: path,
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    priority: path === "/" ? 1.0 : 0.8,
  }),
  additionalPaths: async (config) => [
    {
      ...(await config.transform(
        config,
        "/pdf/company-profile-markrich-solutions.pdf"
      )),
      trailingSlash: false, // files must not get the site's trailing slash
    },
  ],
  robotsTxtOptions: {
    transformRobotsTxt: async () =>
      [
        "User-agent: *",
        "Disallow: ",
        "Disallow: /cgi-bin/",
        `Sitemap: ${SITE_URL}/sitemap.xml`,
        "",
      ].join("\n"),
  },
};
