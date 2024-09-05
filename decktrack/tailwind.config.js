// tailwind.config.js
module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: { 
      
      fontFamily: {
      boogienight: ["BoogieNight", "sans-serif"],
  
    },

      keyframes: {

        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      
        org: {
          '0%': { transform: 'rotate(90deg)' },
          '100%': { transform: 'rotate(45deg)' },
        },
        org2: {
          '0%': { transform: 'rotate(13deg)' },
          '100%': { transform: 'rotate(45deg)' },
        },
        org3: {
          '0%': { transform: 'rotate(213deg)' },
          '100%': { transform: 'rotate(45deg)' },
        },
        org4: {
          '0%': { transform: 'rotate(138deg)' },
          '100%': { transform: 'rotate(45deg)' },
        },
     



      },
      

      animation: {
       
        fadeIn: 'fadeIn 8s ease-in',
        org:  'org 2s ease-in',
        org2:  'org2 3s ease-in',
        org3:  'org3 5s ease-in',
        org4:  'org4 5s ease-in',
      },
  
},

},
   variants: {
     extend: {},
   },
   plugins: [],
 }


 /* @font-face {
  font-family: 'BoogieNight';
  src: url('../public/BoogieNightsShadowNF.ttf') format('ttf');
  font-weight: normal;
  font-style: normal;
}*/