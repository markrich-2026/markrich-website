/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    API_PATH: "/api/contact/",
    API_TEST_PATH: "http://localhost/php_form_api/index.php",
    SITE_URL: "https://markrich.in",
  },
  trailingSlash: true,
};

module.exports = nextConfig;
