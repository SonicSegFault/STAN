/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px', // Custom breakpoint for extra small screens
      },
      //Added for component LogoCarousel
     	animation: {
     		"loop-scroll": "loop-scroll 20s linear infinite",
     	},
     	keyframes: {
     		"loop-scroll": {
     			from: {transform: "translateX(0)"},
     			to: { transform: "translateX(-100%)"},
     		},
     	},
    },
  },
  plugins: [],
}

//Importing the No-scrollbar component for tailwind 
// function ({ addUtilities }) {
//   const newUtilities = {
//     '.no-scrollbar::-webkit-scrollbar': {
//       display: 'none',
//     },
//     '.no-scrollbar': {
//       '-ms-overflow-style': 'none', // For Internet Explorer
//       'scrollbar-width': 'none', // For Firefox
//     },
//   };
//   addUtilities(newUtilities, ['responsive', 'hover']); 
// },