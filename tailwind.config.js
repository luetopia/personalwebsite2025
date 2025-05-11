/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans"', 'sans-serif'],
        serif: ['"Noto Serif"', 'serif'],
      },
      colors: {
        blue: {
          50: '#f0f5fa',
          100: '#dae6f3',
          200: '#bcd2e8',
          300: '#92b4d7',
          400: '#6a95c3',
          500: '#4d78af',
          600: '#3c5f92',
          700: '#314b75',
          800: '#2a3d60',
          900: '#1a2e4c',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
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
      },
    },
  },
  plugins: [],
};