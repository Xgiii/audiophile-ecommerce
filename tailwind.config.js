/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
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
    },
  },
  plugins: [],
};
