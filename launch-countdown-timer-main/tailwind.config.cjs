/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        animation: {
          flip:'flip 1s cubic-bezier(0, 0, 0.2, 1) infinite'
        },
        keyframes:{
          flip: {
            'from': { transform:  'rotateX(0deg)', transformOrigin: '50% bottom ', },
            'to':{transform:  'rotateX(180deg)', transformOrigin: '50% bottom ',}
          }
        },
      screens: {
        'desktop': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
}
