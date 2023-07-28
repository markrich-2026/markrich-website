/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    API_PATH: "http://markrich-api.syspreesolutions.com/index.php",
  },
};

module.exports = nextConfig;
