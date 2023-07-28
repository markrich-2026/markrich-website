/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    API_PATH: "https://syspreesolutions.com/markrich/index.php",
  },
};

module.exports = nextConfig;
