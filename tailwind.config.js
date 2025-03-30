/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/projects/**/*.{png}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#7c3aed",
        dark: "#6d28d9",
      }
    },
  },
  plugins: [],
}

