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
      screens: {
        '2xsm': '100px',
        'xsm': '400px',
      }
    },
  },
  plugins: [],
}

