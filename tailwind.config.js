/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./*.js",
    "./*.ts",
  ],
  theme: {
      extend: {
        fontFamily: {
            sans: ['Manrope', 'sans-serif'],
        },
        colors: {
            'logo-red': '#ED1B24',
            'primary-red': '#D12420',
            'secondary-red': '#F80000',
            'dark_brown': '#512C1F',
            'med_brown': '#786451',
            'dark_beige': '#C6B8AE',
            'med_beige': '#F1E9DA',
            'light_beige': '#F6F0EB',
            'golden': '#F6F0EB'
        }
    },
  },
  plugins: [],
};