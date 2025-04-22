/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        'xs-365': '365px',   // Small mobile (365px)
        'sm-820': '820px',   // Tablets (820px)
        'sm-912': '912px',   // Larger tablets (912px)
        'md-1024': '1024px', // Small laptops (1024px)
        'lg-1440': '1440px', // Large screens (1440px)
        'xl-1560': '1560px', // Extra large screens (1560px)
        '2xl': '1920px',     // Desktop screens (1920px+)
      },
    },
  },
  plugins: [],
};
