/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#08090b',
        paper: '#f7f4ee',
        line: 'rgb(var(--line) / <alpha-value>)',
        panel: 'rgb(var(--panel) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      boxShadow: {
        glass: '0 24px 80px rgb(0 0 0 / 0.2)',
        glow: '0 20px 70px rgb(var(--accent) / 0.22)',
      },
    },
  },
  plugins: [],
};
