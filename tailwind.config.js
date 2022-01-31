module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      mob: { "max": "700px" },
    }, fontFamily: {
      "mon": ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        "brown": "#E3E1DC",
        "brownText": "#291507",
        "scrollBrown": "#BDBDBD"

      }
    },

  },
  plugins: [
    require("tailwind-scrollbar")
  ],
}