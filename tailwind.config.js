module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'royal-blue': '#4B47FF',
        'porcelain': '#F2F2F2',
        'tuna': '#2F2E41',
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
