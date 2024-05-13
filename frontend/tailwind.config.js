/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    // colors:{
    //   // naming convection :
    //   // dark-color_name -> used in dark mode
    //   // light-color_name -> used in light mode
    //   // base-color_name -> used both in dark and light mode

    // },
    extend: {
      fontFamily: {
        russo: ['"Russo One"']
      },
      height: {
        18: "4.5rem",
        50: "14rem",
        100: "28rem",
        104: "32rem",
        108: "36rem",
        110: "38rem",
      },
      width: {
        18: "4.5rem",
        100: "28rem",
        104: "32rem",
        108: "36rem",
        110: "38rem",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        wiggle: 'wiggle 4s infinite ease-in-out',
      }
    },
  },
  plugins: [],
};
