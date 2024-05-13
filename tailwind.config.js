/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navtext: '#4D4D4D',
        homebutton: '#FF8C38',
        footer: {
          100: ' #AAAAAA',
          800: '#252525', 
        },
        about: {
          200: '#FFCC8D',
          600: '#161616'
        }, 
        van: {
          100: '#FFEAD0',
          200: '#4D4D4D',
          300: '#FF8C38',
          400: '#161616'
        },
        host: {
          100: '#FFEAD0',
          200: '#FFDDB2',
          300: '#C7C7C7'
        }, 
        signin:{
          100: "#FF8C38"
        }
      },
      width: {
        100: '494px',
        101: '497.32'
      },
      height: {
        100: '490px',       
      },
    },
  },
  plugins: [],
}

