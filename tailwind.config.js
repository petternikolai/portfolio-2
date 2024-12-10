/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx,vue}",
    "./src/styles/**/*.{css,scss,sass}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#F2F2F2",
        gray: "#0D0D0D",
        secondary: "#202473",
        tertiary: "#2E62A6",
        accent: "#718C0D",
      },
      objectPosition: {
        "top-30": "50% 30%",
      }
    },
  },
  plugins: [],
};
