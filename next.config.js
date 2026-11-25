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
  // Let browsers cache images and icons from /public for 30 days (they change rarely)
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|gif|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/ai-training-company-in-india",
        destination: "/ai-training-company-india/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
