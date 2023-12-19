/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    colors: {
      "green-1": "#2A9D8F",
      "red-1": "#E53528",
      white: "#FFFFFF",
      "gray-1": "#C4C4C4",
      "gray-2": "#6A6A6A",
      "gray-3": "#D9D9D9",
      "gray-4": "#969696",
      "gray-5": "#F5F5F5",
    },
  },
  // plugins: [require("daisyui")],
  // daisyui: {
  //   themes: false
  // }
};
