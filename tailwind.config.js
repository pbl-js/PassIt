/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gradient-purple-light": "#7B3697",
        "gradient-purple-dark": "#4F1462",
        theme: {
          800: "#221447", // Primary
          700: "#342068", // Secondary
          150: "#A59CD9", // Light text
        },
        purple: {
          300: "rgb(117, 93, 129)",
          700: "rgb(51, 21, 65)",
        },
      },
    },
  },
  plugins: [],
};

// z-indexes
// 10 - modalWrapper
