/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Poppins', 'serif'],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      spacing: {
        '19/20': '95%'
      },
      colors: {
        blanco: "#FFFFFF",
        claro: "#F4EDEA",
        azul: "#12263A",
        verde: '#06BCC1',
        gris: '#C5D8D1',
        crema:"#F4D1AE",
        marron:"#E68F51",
        oscuro:"#3c160e",
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.slate,
        green: colors.emerald,
        purple: colors.violet,
        yellow: colors.amber,
        pink: colors.fuchsia,
      },
    },
  },
  plugins: [],
}