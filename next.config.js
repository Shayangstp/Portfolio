const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  plugins: [
    "tailwindcss",
    "autoprefixer",
    // Other PostCSS plugins...
  ],
};

module.exports = withNextIntl(nextConfig);
