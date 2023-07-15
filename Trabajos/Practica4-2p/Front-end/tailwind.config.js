/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    daisyui: {
      themes: [
        {
          Prueba: {
          
            "primary": "#eaf986",
          
            "secondary": "#8bd145",
                     
            "accent": "#abf23a",
                     
            "neutral": "#252d41",
                     
            "base-100": "#f1f1f3",
                     
            "info": "#389df5",
                     
            "success": "#1fa35d",
                     
            "warning": "#f2c16e",
                     
            "error": "#f96e62",
          },
        },
      ],
    },
    plugins: [require("daisyui")],
  }



  