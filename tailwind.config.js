/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],

  theme: {
    extend: {
      fontFamily: {
        bagoss: ['Bagoss Standard'],
      },
      colors: {
        green: '#55D440',
        gray: '#404050',
        red: '#E31F04',
        knowit: {
          white: '#FEFBE6',
          black: '#0B0B26',
        },
        blue: {
          100: '#2C16B4',
          80: '#372BC5',
          60: '#5C44ED',
        },
        purple: {
          100: '#9795FF',
          60: '#CFCEFF',
        },
        pink: {
          100: '#FCB27C',
          60: '#FFD6B8',
        },
      },
    },
  },
  plugins: [],
}
