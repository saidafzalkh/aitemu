/** @type {import('next').NextConfig} */

const withNextIntl = require("next-intl/plugin")("./lib/i18n.ts");

const nextConfig = {};

module.exports = withNextIntl(nextConfig);
