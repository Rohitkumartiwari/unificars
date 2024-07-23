/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding: '1rem',
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1180px',
          '2xl': '1180px'
        }
      },
     
    },
  },
  plugins: [],
}

