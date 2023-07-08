/** @type {import('next').NextConfig} */

const withNextIntl = require("next-intl/plugin")("./lib/i18n.ts");

const nextConfig = {
  images: {
    domains: [
      "uploadthing.com",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = withNextIntl(nextConfig);
