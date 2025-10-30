/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#3B6CFA',
          dark: '#0F172A'
        }
      }
    },
  },
  plugins: [],
}