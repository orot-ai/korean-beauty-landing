/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#FDF9F9',
          100: '#F9F1F1',
          200: '#F1D7D7',
          300: '#E8C5C5',
          400: '#DDB3B3',
          500: '#D1A482',
          600: '#C26A69',
          700: '#A56160',
          800: '#884847',
          900: '#5E3231',
        },
        nude: {
          100: '#F9F1F1',
          200: '#F3E3E3',
          300: '#EDD5D5',
          400: '#E7C7C7',
        },
        warm: {
          100: '#FDF9F9',
          200: '#F7EDED',
          300: '#F1D7D7',
          400: '#EBC9C9',
        },
        charcoal: '#2B1F1A',
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}