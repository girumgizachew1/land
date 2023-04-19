/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], extend: {
    animation: {
      travel: 'travel 2s linear infinite',
    },
    keyframes: {
      travel: {
        '0%': {
          transform: 'translateX(-20%)',
        },
        '100%': {
          transform: 'translateX(20%)',
        },
      },
    },
  },
  plugins: [

  ],
}
