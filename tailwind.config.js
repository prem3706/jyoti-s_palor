// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        accent: { DEFAULT: '#29411f', light: '#6b8b3b' }, // mehendi
        strong: '#0b0b0b',
        blush: '#f3d9ce',   // pastel skin
        nude: '#f7e8de',    // light peach
        dark: '#0b0b0b'
      },
      boxShadow: { 'soft-lg': '0 12px 30px rgba(11,11,11,0.12)' }
    }
  },
  plugins: []
}
