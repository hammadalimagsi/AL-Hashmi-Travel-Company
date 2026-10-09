/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: '#002B24',
          900: '#00382E',
          850: '#004438',
          800: '#004D40', // Primary Deep Emerald Green
          700: '#00695C',
          600: '#00897B',
          500: '#009688',
          100: '#E0F2F1',
          50: '#F0FDFA',
        },
        gold: {
          900: '#7A5B0B',
          800: '#9C7410',
          700: '#B8860B',
          600: '#D4AF37', // Warm Regal Gold
          500: '#DFBE4D',
          400: '#E7CC6D',
          300: '#EEDB8D',
          200: '#F5EAB7',
          100: '#FAF4DC',
          50: '#FDFBF4',
        },
        slate: {
          base: '#F8F9FA',
        },
        charcoal: {
          900: '#111827',
          800: '#1A202C', // Typography Dark Charcoal
          700: '#2D3748',
          600: '#4A5568',
          500: '#718096',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Amiri', 'Playfair Display', 'serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -10px rgba(0, 77, 64, 0.15), 0 4px 12px -2px rgba(212, 175, 55, 0.08)',
        'gold-glow': '0 0 20px -3px rgba(212, 175, 55, 0.35)',
      }
    },
  },
  plugins: [],
}
