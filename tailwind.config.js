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
      colors: {
        green: '#55D440',
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
          100: '#FFA9A9',
          60: '#FFD6D6',
        },
      },
    },
  },
  plugins: [],
}
