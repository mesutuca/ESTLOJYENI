/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '9xl': '75rem',
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
}
