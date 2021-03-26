module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      theme: {
        main: '#424250',
        secondary: '#33333D',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
