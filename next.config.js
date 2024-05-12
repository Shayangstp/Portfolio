const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en-US", "fa-IR"],
    defaultLocale: "en-US",
  },
  plugins: [
    "tailwindcss",
    "autoprefixer",
    // Other PostCSS plugins...
  ],
};

module.exports = withNextIntl(nextConfig);
