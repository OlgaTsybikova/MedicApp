module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../public/background-picture.jpg')",
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
