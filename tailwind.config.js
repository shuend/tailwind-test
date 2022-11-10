/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
          theme: {
            extend: {
              spacing: {
                13: '3.25rem' ,
              } ,
              colors: {
                kei: '#bada55',
                sweat: '#87CEEB',
              },
              fontFamilly: {
                inter: ['Inter']
              },
              animation: {
                'spin-slow':  'spin 2s linear infinite',
              } 
            }
          }
        },
      },
  plugins: [],
}
