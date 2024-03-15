/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'page': 'url(./src/store/image/backgroundimage.jpg)' 
      },
      fontFamily: {
        "Ubuntu": ['Ubuntu', 'sans-serif'] 
      }
    }
  },
  plugins: [],
}
