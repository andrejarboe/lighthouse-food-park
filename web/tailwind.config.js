module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003C62',
          50: '#1BA6FF',
          100: '#069FFF',
          200: '#0087DC',
          300: '#006EB4',
          400: '#00558B',
          500: '#003C62',
          600: '#00304E',
          700: '#002339',
          800: '#001725',
          900: '#000A10',
        },
        secondary: {
          DEFAULT: '#35B8BE',
          500: '#35B8BE',
        },
        'brand-lightblue': 'rgba(53, 184, 190, 0.12)',
        'brand-blue': '#35B8BE',
        'brand-black': '#6A6A6A',
        'brand-gray': '#616161',
        'brand-gray-100': '#C4C4C4',
      },
    },
  },
  plugins: [],
}
