module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif']
      },
      colors: {
        ink: '#0f172a',
        haze: '#f8fafc',
        electric: '#0ea5e9',
        lime: '#bef264'
      }
    }
  },
  plugins: []
};
