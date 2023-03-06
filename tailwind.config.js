/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      "comic" : ['Comic Neue', "cursive"],
    },
    extend: {},
  },
  plugins: [],
}