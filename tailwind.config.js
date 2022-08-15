/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        title: ["'Ubuntu'", 'sans-serif'],
        body: ["'IBM Plex Sans'", 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      textOpacity: ['dark'],
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["dark", "light"],
  },
};
