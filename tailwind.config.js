/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Blueprint aesthetic palette
        charcoal: '#1a1a1a',      // Dark background
        'charcoal-light': '#2a2a2a', // Lighter charcoal for contrast
        gold: '#d4af37',           // Primary gold accent
        'gold-dark': '#9d8c2a',    // Darker gold
        'gold-light': '#e8c547',   // Lighter gold
        crimson: '#c41e3a',        // Red accent
        'crimson-dark': '#8b1528', // Darker red
        cream: '#f5f1e8',          // Off-white text
        'cream-dark': '#e8e4db',   // Darker cream

        // Legacy colors for backwards compatibility
        smoke: '#f5f1e8',
        'smoke-dark': '#f5f1e8',
        jade: '#00bb77',
        'jade-dark': '#007148',
        'jade-light': '#7effd0',
        purple: '#702963',
        'purple-dark': '#43193b',
        'purple-light': '#d897cc',
        dark: '#1a1a1a',
        'dark-light': '#5d5f6b',
        white: '#ffffff',
        black: '#000000',

        // Primary and monk colors for backwards compatibility
        primary: {
          50: '#f9f5e1',
          100: '#f3ebc2',
          500: '#d4af37',  // gold
          600: '#9d8c2a',  // gold-dark
          700: '#6c5f16',
        },
        monk: {
          50: '#bfffe7',
          100: '#7effd0',
          500: '#00bb77',  // jade
          600: '#007148',  // jade-dark
          900: '#002618',
        }
      },
      fontFamily: {
        // Основные шрифты
        sans: ['Inter', 'system-ui', 'sans-serif'], // Для чтения
        heading: ['Inter', 'system-ui', 'sans-serif'], // Для заголовков
        serif: ['Georgia', 'serif'],

        // Утилитарные классы
        'display': ['Inter', 'system-ui', 'sans-serif'], // Для больших заголовков
        'body': ['Inter', 'system-ui', 'sans-serif'], // Для основного текста
      },
    },
  },
  plugins: [],
}
