/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'width': 'width',
      },
      fontFamily: {
      },
      colors: {
        primary: "#E32134",
        secondary: "#125EA9",
        green:"#4EB747",
        'light-grey':"#E8E8E9",
        grey:"#676B71",
        black:"#1C1C1C",
      },
    },
  },
  plugins: [],
};
