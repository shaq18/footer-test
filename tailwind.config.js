const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        DEFAULT: '#4871D9',
      },
      white: '#fff',
    },
    container: {
      padding: {
        DEFAULT: '30px',
      },
    },
    fontFamily: {
      main: ['Avenir LT Pro', 'sans-serif'],
    },
    fontSize: {},
    screens: {
      // m = mobile, t = tablet, l = laptop, d = desktop
      'm-lg': '568px',
      't-sm': '768px',
      't-lg': '1024px',
      'l-sm': '1281px',
      'l-lg': '1367px',
      'd-sm': '1441px',
      'd-md': '1681px',
      'd-lg': '1921px',
    },
    spacing: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '30px',
      7: '35px',
      8: '40px',
      9: '45px',
      10: '50px',
      11: '55px',
      12: '60px',
      13: '65px',
      14: '70px',
      15: '75px',
      16: '80px',
      17: '85px',
      18: '90px',
      19: '95px',
      20: '100px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const layout = {
        '.container': {
          paddingLeft: '30px',
          paddingRight: '30px',
          marginRight: 'auto',
          marginLeft: 'auto',
          '@screen t-sm': {
            maxWidth: '768px',
            paddingLeft: '48px',
            paddingRight: '48px',
          },
          '@screen t-lg': {
            maxWidth: '1140px',
            paddingLeft: '56px',
            paddingRight: '56px',
          },
          '@screen l-sm': {
            paddingLeft: '0',
            paddingRight: '0',
          },
        },
      };

      addComponents(layout);
    }),
  ],
};
