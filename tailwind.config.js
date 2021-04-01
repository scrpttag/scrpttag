const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class',
  theme: {
    colors: {
      gray: {
        50: '#FAFBFB',
        100: '#F5F6F7',
        200: '#878889',
        300: '#505152',
        400: '#343637',
        500: '#262829',
        600: '#1F2122',
        700: '#1C1E1F',
        800: '#1A1C1D',
        900: '#181A1B',
      },
    },
    fontFamily: {
      sans: ['"Source Sans Pro"', 'sans-serif'],
      mono: ['"Source Code Pro"', 'monospace'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, config }) {
      addBase({
        h1: { fontSize: config('theme.fontSize.2xl') },
        h2: { fontSize: config('theme.fontSize.xl') },
        h3: { fontSize: config('theme.fontSize.lg') },
      })
    }),
  ],
}
