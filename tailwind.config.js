// @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;700&display=swap');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Cabin: ["Cabin", "sanserif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
