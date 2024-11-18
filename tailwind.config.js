/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway-sec': ['Raleway', 'sans-serif'],
        'fredoka-main': ['Fredoka', 'sans-serif']
      },
      colors: {
        'mainColor': '#4A4947',
        'secColor': '#31511E',
        'thrdColor': '#A4C639',
        'anyColor': 'F6F6F6',
      }
    },
  },
  plugins: [],
}