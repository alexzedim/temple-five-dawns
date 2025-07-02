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
        smoke: '#f5f5f5',    // White smoke
        gold: '#e0cd67',     // Citron
        jade: '#00bb77',     // Jade
        purple: '#702963',   // Byzantium
        dark: '#393a41',     // Onyx

        // Essential variants
        'smoke-dark': '#c4c4c4',
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
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
