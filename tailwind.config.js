/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Dirooz': ['Dirooz'],
        'Dinar': ['Dinar']
      },
      colors: {
        lightOrange: '#fed9ad',
        lightPink: '#ffe7cb80'
      },
      screens: {
        '2xsm': '100px',
        'xsm': '400px',
        'xmd':'900px'
      }
    },
  },
  plugins: [],
}

