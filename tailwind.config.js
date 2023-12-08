/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        primaryDark: "#032030",
        lightBgDark: "#003554",
        textDark: "#B1E5FF",
        textLight: "#868686",
        shadow: "#006DA599",
        line: "#006DA5",
        accent: "#77CAF4",
        secondary: "#353535",
        darkWhite: "#F5F5F5",
      },
      boxShadow: {
        "md": "2px 4px 10px #006DA599",
      },
    },
  },
  plugins: [],
}

