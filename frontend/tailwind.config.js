/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary : ['Montserrat', 'sans-serif'],
        secondary : ['Lora', 'serif'],
      },
      fontSize: {
        'primary-size': '15px',
        'secondary-size': '12px',
      },
      fontWeight:{

      }

      
    },
  },
  plugins: [],
}