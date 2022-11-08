module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        primary: '#64748b',
        success: '#10b981',
        currency: '#f5b014',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
