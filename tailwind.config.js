/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gif1-bg': "url('https://media.giphy.com/media/3o7buijTqhjxjbEqjK/giphy.gif')",
        'gif2-bg': "url('https://media.giphy.com/media/oYQ9HRm5Mo7VXeMNVR/giphy.gif')",
        'main-bg': "url('/assets/images/web-background.png')",
      },
      fontFamily: {
        'raleway-sec': ['Raleway', 'sans-serif'],
        'fredoka-main': ['Fredoka', 'sans-serif']
      },
      boxShadow: {
        button: '0px 6px 0px 0px rgba(109,40,217)',
        'button-card': '0px 6px 0px 0px #4A4947',
        'image-card': '-6px 8px 0px 0px #4A4947',
        'nav-card': '-3px 4px 0px 0px #4A4947',
      },
      colors: {
        'mainColor': '#4A4947',
        'mainColor2': '#6A6967',
        'secColor': '#31511E',
        'thrdColor': '#A4C639',
        'anyColor': '#F6F6F6',
      }
    },
  },
  plugins: [],
}