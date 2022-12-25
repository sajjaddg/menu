/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      ShabnamBold:['Shabnam-Bold-FD'],
      Shabnam:['Shabnam-FD'],
      ShabnamLight:['Shabnam-Light-FD'],
      ShabnamMedium:['Shabnam-Medium-FD'],
      ShabnamThin:['Shabnam-Thin-FD']
    }
  },
  plugins: [],
}
