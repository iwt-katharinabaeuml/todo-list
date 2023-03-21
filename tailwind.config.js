/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/app/src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),],
}
