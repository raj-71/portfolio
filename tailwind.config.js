/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        customBlue: '#ffffff',
        customPurple: '#000000',
      }
    },
  },
  plugins: [],
}

