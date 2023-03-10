/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-header-light' : '#FFFFFF',
        'bg-body-light': '#F0F2F5',
        'orange': '#B1260B',
        'text-light': '#FCEAE6',
        'orange-light' : '#E04324',
        'orange-hover-light': '#DD391E'
      }
    },
  },
  plugins: [],
}
