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