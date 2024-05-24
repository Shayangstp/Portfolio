/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-transparent": "rgba(0, 179, 255, 0.22)",
        "gray-opacity": "rgba(175, 175, 175, 0.29)",
      },
      boxShadow: {
        headerShadow: "0px 4px 100px rgba(255, 0, 0, 0.1)",
        socialShadow: "6px 6px 0px rgba(0, 0, 0)",
        socialShadowDark: "6px 6px 0px rgba(255, 255, 255)",
        aboutMeShadow: "6px 6px 10px rgba(255, 255, 255)",
        projectShadow: "0px 6px 0px rgba(0, 0, 0)",
        projectShadowDark: "0px 6px 0px rgba(255, 255, 255)",
      },
    },
  },
  plugins: [],
};
