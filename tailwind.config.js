module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("@tailwindcss/forms"),
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "serif"],
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    backgroundImage: {
      "main-img": "url('/public/background-picture.jpg')",
    },
    extend: {},
  },
};
