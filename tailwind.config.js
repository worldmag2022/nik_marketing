/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        nik: {
          primary: '#FFC300',          // Official Nik Marketing Brand Gold/Amber
          'primary-light': '#FFE17F',    // Official Tint
          'primary-muted': '#FFE8B2',    // Official Accent
          'primary-cream': '#FFF4D8',    // Official Light Box Cream
          'primary-dark': '#E5AC00',     // Darkened Gold Shade
          black: '#000000',              // Official Secondary
          dark: '#0A0B0E',               // Premium Dark Surface
          card: '#111216',               // Card Surface
          'card-elevated': '#16181F',    // Elevated Card Surface
          surface: '#1D1F27',            // Interactive Surface
          border: 'rgba(255, 255, 255, 0.08)',
          'border-gold': 'rgba(255, 195, 0, 0.25)',
          'border-gold-hover': 'rgba(255, 195, 0, 0.55)',
          ivory: '#F3F3F0',              // Official Text Off-White
          muted: '#9CA3AF',              // Secondary Muted Text
          'muted-dark': '#4B5563',       // Subdued Dim Text
          royal: '#6254E7',              // Official Elementor Royal Accent
          teal: '#006456',               // Official Elementor Deep Teal Accent
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"Fragment Mono"', '"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      },
      boxShadow: {
        'nik-gold': '0 0 35px -5px rgba(255, 195, 0, 0.25), 0 0 0 1px rgba(255, 195, 0, 0.3)',
        'nik-gold-sm': '0 0 20px -3px rgba(255, 195, 0, 0.2)',
        'nik-card': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.06), 0 10px 30px -10px rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [],
}
