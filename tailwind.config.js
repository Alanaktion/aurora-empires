const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  theme: {
    colors: {
      gray: colors.gray,
      cyan: colors.cyan,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    extend: {
      fontFamily: {
        title: ['Cinzel', 'serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}
