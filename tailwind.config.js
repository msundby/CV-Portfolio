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
  plugins: [require("daisyui")],
}

