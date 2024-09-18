/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8ABA51",
        secondary: "#334A55",
        base: "#E9EBF8",
        blackie: "#232323",
      },
    },
    container: {
      center: true,
      screens: {
        "2xl": "1100px",
      },
    },
  },
  plugins: [],
};
