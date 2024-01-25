/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#81A4CD',
        'dark-blue': '#81A4CD',
        'light-blue': '#81A4CD'
      }
    }
  },
  plugins: []
}
