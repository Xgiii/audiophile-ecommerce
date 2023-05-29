/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-black': '#191919',
        'light-black': '#808080',
        'light-gray': '#f5f5f5',
        orange: '#D87D4A',
        'light-orange': '#e4a480',
      },
      animation: {
        'darken-bg': 'darken-bg .4s ease-in-out',
      },
      keyframes: {
        'darken-bg': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
