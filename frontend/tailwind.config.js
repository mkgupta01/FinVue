/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    darkMode: 'class',
    theme: {
      colors:{
        // naming convection : 
        // dark-color_name -> used in dark mode 
        // light-color_name -> used in light mode
        // base-color_name -> used both in dark and light mode
  
        'dark-black': '#070707',
        'dark-gray': '#191919',
        'font-dark':'#FFFFFF',
        'font-light': '#ffffea',
        'base-red': '#FF0000',
        'light-white':'#F1F2F6',
      },
      extend: {
        height :{
          '18' : '4.5rem',
          '100' : '28rem',
          '104' : '32rem',
          '108' : '36rem',
          '110' : '38rem',
        }
      },
    },
    plugins: [],
  }