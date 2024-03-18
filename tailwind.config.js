/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        header: "12vh",
      },
    },
    colors: {
      "custom-black": "#16181a",
      "custom-black-700": "#16181a9f",
      ...colors,
    },
  },
  plugins: [],
};
