/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

;["warmGray", "trueGray", "lightBlue", "coolGray", "blueGray"].forEach(
  (color) => delete colors[color],
)

module.exports = {
  jit: true,
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neo-pink": "#F911BA",
        "neo-yellow": "#FFEA32",
        "dark-1": "#0C0C0C",
        "dark-2": "#121212",
        ...colors,
      },
      screens: {
        ...defaultTheme.screens,
        "screen-100": "100px",
        "screen-200": "200px",
        "screen-300": "300px",
        "screen-400": "400px",
        "screen-500": "500px",
        "screen-600": "600px",
        "screen-700": "700px",
        "screen-800": "800px",
        "screen-900": "900px",
        "screen-1000": "1000px",
        "screen-1100": "1100px",
        "screen-1200": "1200px",
        "screen-1300": "1300px",
        "screen-1400": "1400px",
        "screen-1500": "1500px",
        "screen-1600": "1600px",
        "screen-1700": "1700px",
        "screen-1800": "1800px",
        "screen-1900": "1900px",
        "screen-2000": "2000px",
      },
    },
  },
  plugins: [],
}
