module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif']
      },
      colors: {
        midnight: '#0b1220',
        coral: '#ff7a59',
        sand: '#f9f4ef',
        aqua: '#38bdf8'
      }
    }
  },
  plugins: []
};
