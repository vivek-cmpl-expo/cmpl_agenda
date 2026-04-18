/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#B8860B',
          light: '#D4A017',
          deep: '#8B6508',
          muted: '#9A7B20',
          subtle: '#C8A84B',
        },
        expo: {
          bg: '#FAFAF8',
          bgAlt: '#F5F3EE',
          card: '#FFFFFF',
          cardHover: '#F9F7F2',
          fg: '#1A1612',
          muted: '#5C5040',
          subtle: '#9A8E7A',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '0.85' }],
        '9xl': ['8rem', { lineHeight: '0.85' }],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4A017 0%, #B8860B 50%, #8B6508 100%)',
        'gold-radial': 'radial-gradient(ellipse at center, #B8860B 0%, #8B6508 100%)',
      },
      animation: {
        'float': 'float-badge 4s ease-in-out infinite',
      },
      keyframes: {
        'float-badge': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};