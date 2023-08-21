/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Mont: ['Montserrat', 'sans-serif']
      },
      height: {
        '120': '120px',
        '136': '136px',
      },
      width: {
        '330': '330px'
      },
    },
    screens: {
      'sm': {'max': '540px'}
    }
  },
  plugins: [],
}