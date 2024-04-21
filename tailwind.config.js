/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  daisyui: {
    theme: {
      extend: {
        fontFamily: {
          roboto: ["Roboto","serif"]
        },
      }
    },
  },
  theme: {
    extend: {
      screens: {
        'custom': '1338px',
      },
    },
  },
  plugins: [require("daisyui")],
}