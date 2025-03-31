/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#7c3aed",
        dark: "#6d28d9",
      },
      screens: {
        'xs': '480px',
        'sm': '640px'
      }
    },
  },
  plugins: [],
}

