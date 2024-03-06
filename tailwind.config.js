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
        // Define your custom shadows here
        headerShadow: "0px 4px 100px rgba(255, 0, 0, 0.1)", // Example custom shadow
        socialShadow: "0px 4px 50px rgba(255, 0, 0, 0.1)", // Example custom shadow
        socialShadowDark: "0px 4px 50px rgba(255, 0, 0, 0.4)", // Example custom shadow
      },
    },
  },
  plugins: [],
};
