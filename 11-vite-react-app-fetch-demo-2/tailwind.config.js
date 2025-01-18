/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,cjs,mjs,cts,mts}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors:{
        red:{
          700:"#ff0000"//red color share 700
        },
      }
    },
  },
  plugins: [],
}

