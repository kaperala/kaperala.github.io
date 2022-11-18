/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        128: '32rem',
        144: '36rem',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      pGray: '#1a1a1a',
    },
    screens: {
      '3xl': '2560px',
      ...defaultTheme.screens,
      //
    },
  },
  plugins: [],
});
