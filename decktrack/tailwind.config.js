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
          '0%': { transform: 'rotate(141deg)' },
          '100%': { transform: 'rotate(45deg)' },
        },
        org4: {
          '0%': { transform: 'rotate(138deg)' },
          '100%': { transform: 'rotate(45deg)' },
        },
        bunch: {
          '0%': {marginLeft: '0px' },
          '100%': { transform: 'rotate(360deg)', left: '10px', top: '50vh' }
        },
        moveTop: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100vh)' }, // Moves the image to the top
        },
     



      },
      
      animation: {
       
        fadeIn: 'fadeIn 4s ease-in',
        org:  'org 2.5s ease-in',
        org2:  'org2 3s ease-in',
        org3:  'org3 2s ease-in',
        org4:  'org4 3s ease-in',
        bunch: 'bunch 2s ease-in forwards',
        moveTop: 'moveTop 3s ease-in-out forwards',
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