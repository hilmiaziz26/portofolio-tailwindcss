/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '1.875rem'
    },
    extend: {
      colors: {
        primary: '#4f46e5',
        dark: '#1e293b',
        danger: '#b91c1c',
        secondary: '#64748b',
      },
      screens: {
        '2xl':'1320px'
      }
    },
  },
  plugins: [],
};
