/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    API_PATH: "https://markrich-api.syspreesolutions.com/index.php",
    API_TEST_PATH: "http://localhost/php_form_api/index.php",
    SITE_URL: "http://localhost:3000/",
  },
};

module.exports = nextConfig;
