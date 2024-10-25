/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-for-li': 'rgba(19, 19, 19, 0.7)',
        'p-color':'rgba(255, 255, 255, 0.7)',
      },
    },
  },
  plugins: [],
}

