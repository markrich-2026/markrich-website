/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://markrich.in/",
  generateRobotsTxt: true, // (optional)
  // ...other options
};
