/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'Dirooz':['Dirooz'],
        'Dinar':['Dinar']
      },
      colors:{
        lightOrange:'#fed9ad',
        lightPink:'#ffe7cb80'
      }
    },
  },
  plugins: [],
}

