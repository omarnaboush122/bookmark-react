/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        SoftBlue: "hsl(231, 69%, 60%)",
        SoftRed: "hsl(0, 94%, 66%)",
        GrayishBlue: "hsl(229, 8%, 60%)",
        VeryDarkBlue: "hsl(229, 31%, 21%)",
        mobileBg : "hsla(229, 31%, 11%, 0.9)",
        mobileBorder: "rgba(255,255,255,0.2)"
      },
    },
  },
  plugins: [],
};
