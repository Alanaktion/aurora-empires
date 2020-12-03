const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  theme: {
    colors: {
      gray: colors.gray,
      cyan: colors.cyan,
      green: colors.green,
      blue: colors.blue,
      red: colors.rose,
      pink: colors.pink,
      orange: colors.orange,
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
