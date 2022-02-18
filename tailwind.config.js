module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'royal-blue': '#4B47FF',
      }
    },
    fontFamily: {
      sans: ['Fira Sans', 'sans-serif'],
      body: ['Fira Sans', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
