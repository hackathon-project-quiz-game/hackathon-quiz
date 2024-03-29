const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rajhdani': ['Rajdhani', "sans - serif"]
      }
    },
  },
  plugins: [],
}