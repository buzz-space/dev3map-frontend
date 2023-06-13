module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './container/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-sans)',
    },
    extend: {
      backgroundColor: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        grayText: 'var(--text-gray)',
        darkGray: 'var(--dark-gray)',
      },
      boxShadow: {
        base: '0px 2px 10px var(--box-shadow)',
        second: '0px 2px 10px var(--box-shadow-2)',
      },
      flex: {
        '1/2': '0 0 calc(50% - 10px)',
        '1/3': '0 0 calc(33.333% - 10px)',
      },
      maxWidth: {
        'screen-xl': '1360px',
      },
      screens: {
        xs: { min: '240px', max: '450px' },
        sm: { min: '450px', max: '768px' },
      },
    },
  },
  plugins: [],
};
