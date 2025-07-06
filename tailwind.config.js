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
        // Main palette colors
        smoke: '#f2f5fa',    // White smoke
        gold: '#e0cd67',     // Citron
        jade: '#00bb77',     // Jade
        purple: '#702963',   // Byzantium
        dark: '#393a41',     // Onyx

        // Essential variants
        'smoke-dark': '#f2f5fa',
        'gold-dark': '#a38f21',
        'gold-light': '#f3ebc2',
        'jade-dark': '#007148',
        'jade-light': '#7effd0',
        'purple-dark': '#43193b',
        'purple-light': '#d897cc',
        'dark-light': '#5d5f6b',

        // Legacy colors with reduced variants
        white: '#ffffff',
        black: '#000000',

        // Keep minimal primary and monk colors for backwards compatibility
        primary: {
          50: '#f9f5e1',
          100: '#f3ebc2',
          500: '#e0cd67',  // gold
          600: '#a38f21',  // gold-dark
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
        sans: ['Source Sans Pro', 'system-ui', 'sans-serif'], // Для чтения
        heading: ['Inter', 'system-ui', 'sans-serif'], // Для заголовков
        serif: ['Georgia', 'serif'],

        // Утилитарные классы
        'display': ['Inter', 'system-ui', 'sans-serif'], // Для больших заголовков
        'body': ['Source Sans Pro', 'system-ui', 'sans-serif'], // Для основного текста
      },
    },
  },
  plugins: [],
}
