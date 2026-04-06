/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // This enables the toggle you wanted
  theme: {
    extend: {
      colors: {
        // High-end tech palette
        brand: "#007AFF", 
        darkBg: "#0f172a",
      },
    },
  },
  plugins: [],
}