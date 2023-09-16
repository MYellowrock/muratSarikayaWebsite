/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cv-black': '#393E46',
        'cv-blue': '#00ADB5',
        'cv-light': '#FFF4E0',
        'cv-orange': '#F8B500',
        'cv-red': '#FC3C3C'
      }
    },
  },
  plugins: [],
}

