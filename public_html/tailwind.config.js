/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#212529",
        color2: "#f08e00",
        color3: "#CED4DA",
      },
      fontFamily: {
        josefin: ["josefin", "sans"],
        poppins: ["poppins", "sans"],
        conthic: ["conthic", "sans"],
      },
      blur: {
        xsm: ["1.5px"],
      },
      borderWidth: {
        xsm: ["1px"],
      },
      letterSpacing: {
        titles: ["3.84px"],
        xl: ["5.76px"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
