// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom': 'linear-gradient(45deg, #4F45D9, rgba(79, 69, 217, 0.45))',
      },
    },
  },
  plugins: [],
}