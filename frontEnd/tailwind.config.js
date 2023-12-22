/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#ECE0D1",
          300: "#Dbc1Ac",
          600: "#967259",
          900: "#634832",
        }
      },
      fontFamily: {
        "Dana": "Dana",
        "DanaMedium": "Dana Medium",
        "DanaDemiBold": "Dana DemiBold",
        "MorabbaLight": "Morabba Light",
        "MorabbaMedium": "Morabba Medium",
        "MorabbaBold": "Morabba Bold",
      },
      spacing:{
        "25":"6.25rem",
        "30":"7.5rem",
        "50":"12.5rem",
      },
      rotate: {
        '35': '35deg',
      },
      container:{
        center: true,
        padding:{
          DEFAULT: '1rem',
          lg:"0.625rem"

        }
      },
      backgroundImage:{
        "banner" :"url(img/shoe/shoes-cateagory-banner-01.jpg)",
        "banner2" :"url(img/shoe/category-banner2.jpg)",
        "banner3" :"url(img/shoe/shoe7.jpg)",
        "banner4" :"url(img/shoe/shoe5.avif.jpg)",
        "banner5" :"url(img/shoe/shoes-cateagory-banner-01.jpg)",
        "back" :"url(img/other/images88.jpg)"
      }
    },
    screens: {
      'xs':'480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    require('flowbite/plugin'),
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }
  ],
}

