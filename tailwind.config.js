/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    screens: {
      xs: "480px",
      sm: "640px",
      md: "850px",
      lg: "1060px",
      xl: "1265px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    container: {
      center: true,
      screens: {
        xs: "100%",
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "1070px",
        "2xl": "100%",
        "3xl": "100%",
      },
    },
    maxWidth: {
      container: "1164px",
    },
  },
  plugins: [],
};
