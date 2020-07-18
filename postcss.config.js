// postcss.config.js
// from https://dev.to/lukeocodes/using-tailwind-css-with-vue-js-b1b

const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
};