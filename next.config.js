const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  i18n: {
    locales: ["en-US", "fa-IR"],
    defaultLocale: "en-US",
  },
  plugins: [
    "tailwindcss",
    "autoprefixer",
  ],
};

module.exports = withNextIntl(nextConfig);
