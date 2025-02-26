/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          from: '#2563EB',
          to: '#9333EA',
        },
      },
    },
  },
  plugins: [],
};