/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        header: "12vh",
        container: "88vh",
      },
    },
    colors: {
      "custom-black": "#16181a",
      "custom-black-700": "#16181a9f",
      "custom-blue": "#006CEC",
      "custom-light-blue": "#4D9EFF",
      "custom-gray": "#222222",
      ...colors,
    },
  },
  plugins: [],
};
