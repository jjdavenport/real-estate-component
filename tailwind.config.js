import fluid, { extract, screens } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{html,js,jsx}"],
    extract,
  },
  theme: {
    screens,
    extend: {
      colors: {
        ralewayBold: "#141821",
        robotoGray: "#989BA7",
        robotoWhite: "#FFFFFF",
        robotoMedium: "#414955",
        backgroundGreen: "#00CD98",
        backgroundTop: "hsl(167, 51%, 65%)",
        backgroundBottom: "hsl(155, 26%, 60%)",
      },
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
        raleway: ["raleway", "sans-serif"],
      },
    },
  },
  plugins: [fluid],
};
