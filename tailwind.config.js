/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
],
  theme: {
    extend: {
      fontFamily:
        {
          poppins: ['Poppins', 'sans-serif'],
        },
        screens: {
          '2xl': '1570px',
          '3xl': '1720px', // Custom breakpoint for 1560px
          'xl-1280': '1280px', // Custom breakpoint for 1280px
        },
    },
  },
  plugins: [],
}
