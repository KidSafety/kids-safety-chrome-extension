/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./tabs/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  plugins: [],
  theme: {
    extend: {
      boxShadow: {
        buttonShadow:
          "0px 4px 8px 0px rgba(50, 50, 71, 0.02), 0px 4px 4px 0px rgba(0, 0, 0, 0.14)"
      }
    }
  }
}
