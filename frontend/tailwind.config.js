/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#7290DD"
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(196px, 1fr))'
      },
    },
  },
  plugins: [],
}

