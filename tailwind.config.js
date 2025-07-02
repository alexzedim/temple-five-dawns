/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'white': '#ffffff'
      },
      textColor: {
        'white': '#ffffff'
      },
      colors: {
        primary: {
          50: '#f9f5e1',
          100: '#f3ebc2',
          200: '#ece1a4',
          300: '#e6d785',
          400: '#e0cd67',
          500: '#d5bc30',
          600: '#a38f21',
          700: '#6c5f16',
          800: '#36300b',
          900: '#1a1805',
        },
        monk: {
          50: '#bfffe7',
          100: '#7effd0',
          200: '#3effb8',
          300: '#00fda0',
          400: '#00bb77',
          500: '#009760',
          600: '#007148',
          700: '#004b30',
          800: '#002618',
          900: '#00130c',
        },
        byzantium: {
          50: '#eccbe6',
          100: '#d897cc',
          200: '#c563b3',
          300: '#a43d91',
          400: '#702963',
          500: '#59214f',
          600: '#43193b',
          700: '#2d1128',
          800: '#160814',
          900: '#0b040a',
        },
        white: {
          50: '#fdfdfd',
          100: '#fbfbfb',
          200: '#f9f9f9',
          300: '#f7f7f7',
          400: '#f5f5f5',
          500: '#c4c4c4',
          600: '#939393',
          700: '#626262',
          800: '#313131',
          900: '#191919',
        },
        onyx: {
          50: '#d6d6db',
          100: '#acadb7',
          200: '#838493',
          300: '#5d5f6b',
          400: '#393a41',
          500: '#2e2e34',
          600: '#222327',
          700: '#17171a',
          800: '#0b0c0d',
          900: '#060607',
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
