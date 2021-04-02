const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class',
  theme: {
    colors: {
      gray: {
        50: '#FAFBFB',
        100: '#F5F6F7',
        200: '#BEBFC0',
        300: '#878889',
        400: '#505152',
        500: '#343637',
        600: '#262829',
        700: '#1F2122',
        800: '#191B1C',
        900: '#181A1B',
      },
    },
    fontFamily: {
      sans: ['"Source Sans Pro"', 'sans-serif'],
      mono: ['"Source Code Pro"', 'monospace'],
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.200'),
            strong: {
              color: theme('colors.gray.100'),
              fontWeight: '700',
            },
            a: {
              color: theme('colors.gray.100'),
              textDecoration: 'underline',
              '&:hover': {
                color: theme('colors.gray.100'),
                textDecoration: 'none',
              },
            },
            h1: {
              color: theme('colors.gray.100'),
              fontFamily: theme('fontFamily.mono'),
              fontWeight: '700',
            },
            h2: {
              color: theme('colors.gray.100'),
              fontFamily: theme('fontFamily.mono'),
              fontWeight: '700',
            },
          },
        },
      }),
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
    require('@tailwindcss/typography'),
  ],
}
