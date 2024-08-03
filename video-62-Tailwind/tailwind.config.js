/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    // Isme "screens" ko customize extend k bahar karte hai than yah work karta hai other wise nahi 
    screens:{
      "xsm": "500px",
      sm:	"640px",	
      md:	"768px"	,      
      lg:	"1024px",	
      xl:	"1280px",
      "2xl": "1536px",
    },
    extend: {
      spacing: {
        13: "1.5rem"
      },
      fontSize: {
        '10xl': ['9rem', { lineHeight: '1.2' }],
      },
    },
  },
  plugins: [],
}

