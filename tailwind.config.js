/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#F8F8F8',
        carbon: '#0A0A0A',
        ink: '#111111',
        volt: '#C7FF3D',
      },
      boxShadow: {
        glow: '0 0 45px rgba(199, 255, 61, 0.38)',
        premium: '0 24px 80px rgba(10, 10, 10, 0.12)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(rgba(17,17,17,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
