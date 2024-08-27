/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        'fit-content': 'fit-content',
      },
      spacing: {
        'container-padding': '15px', // Default padding for all screens
        'container-padding-sm': '15px', // Small screens
        'container-padding-md': '15px', // Medium screens
        'container-padding-lg': '15px', // Large screens
        'container-padding-xl': '15px', // Extra-large screens
      },
      maxWidth: {
        540: '540px', // For .container-sm
        720: '720px', // For .container-md
        960: '960px', // For .container-lg
        1140: '1140px', // For .container-xl
      },
      colors: {
        primary: '#45320A',
        secondary: {
          100: 'linear-gradient(90deg, #B18E49 100%, #8E6D2B 100%)',
        },
      },
      keyframes: {
        rotate: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(180deg)'},
        },
        'rotate-back': {
          '0%': {transform: 'rotate(180deg)'},
          '100%': {transform: 'rotate(0deg)'},
        },
      },
      animation: {
        rotate: 'rotate 0.3s ease-in-out forwards',
        'rotate-back': 'rotate-back 0.3s ease-in-out forwards',
      },
    },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
    },
  },
  plugins: [
    function ({addComponents, theme}) {
      addComponents({
        '.container': {
          width: '100%',
          paddingRight: theme('spacing.container-padding'),
          paddingLeft: theme('spacing.container-padding'),
          marginRight: 'auto',
          marginLeft: 'auto',
          '@screen sm': {
            maxWidth: theme('maxWidth.540'),
          },
          '@screen md': {
            maxWidth: theme('maxWidth.720'),
          },
          '@screen lg': {
            maxWidth: theme('maxWidth.960'),
          },
          '@screen xl': {
            maxWidth: theme('maxWidth.1140'),
          },
        },
      });
    },
  ],
};
