module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      FontFamily: {
        titles: ["Nunito"],
        text: ["Roboto"],
      },

      colors: {
        color1: "#314241",
        color2: "#f0d7a7",
        color3: "#08666e",
        color4: "#c37a5a",
        color5: "#4c241a",
        color6: "#f0d7a7",
      },
    },
  },
  plugins: [require("daisyui")],
}