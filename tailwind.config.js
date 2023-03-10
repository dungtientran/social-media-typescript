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
        'bg-header-light': '#FFFFFF',
        'bg-body-light': '#F0F2F5',
        'orange': '#B1260B',
        'text-light': '#FCEAE6',
        'orange-light': '#E04324',
        'orange-hover-light': '#DD391E',
        'border-rgba': 'rgba(112, 112, 114, 0.15)'
      },
      keyframes: {
        jumpDown: {
          '0%': {
            transform: 'translateY(-150%)',
          },
          '100%': {
            transform: 'translateY(0)',
          
          }
        }
      },
      animation: {
        jumpDown: 'jumpDown 0.5s ease-in-out 1'
      }
    },
  },
  plugins: [],
}
