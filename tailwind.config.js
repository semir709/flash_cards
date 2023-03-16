/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customPrimary: "#DE3E6F",
        customOrange: "#F55139",
        customPurple: "#9E00FF",
        customTextColor: "#353535",
        customHoverBgWhite: "rgb(255, 255, 255, 0.2)",
        customGray: "#5F5F5F",
      },
    },
  },
  plugins: [],
};
