/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        ralewayBold: "#141821", // Raleway Bold 20
        robotoGray: "#989BA7", // Roboto 17
        robotoWhite: "#FFFFFF", // Roboto Regular 14, Semibold Roboto 12
        robotoMedium: "#414955", // Roboto Medium 14
        backgroundGreen: "#00CD98", // Background (12%, 100%)
      },
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
        raleway: ["raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
