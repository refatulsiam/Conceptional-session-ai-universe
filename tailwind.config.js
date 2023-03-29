/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#d89922",
        
"secondary": "#21dae0",
        
"accent": "#aefcd1",
        
"neutral": "#1B1C27",
        
"base-100": "#F1EBF4",
        
"info": "#2D52D7",
        
"success": "#1C8241",
        
"warning": "#A4770E",
        
"error": "#F8547A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

