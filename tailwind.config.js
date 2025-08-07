/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(257, 84%, 56%)",
        secondary: "hsl(220, 12%, 16%)",
        accent: "hsl(190, 80%, 45%)",
        success: "hsl(140, 70%, 35%)",
        warning: "hsl(42, 95%, 55%)",
        error: "hsl(354, 78%, 58%)",
        background: "hsl(220, 14%, 97%)",
        surface: "hsl(0, 0%, 100%)",
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '20px',
        'xl': '32px',
      },
      borderRadius: {
        'sm': '6px',
        'md': '10px',
        'lg': '16px',
      },
      boxShadow: {
        'card': '0 8px 24px hsla(220,14%,16%,0.08)',
        'popover': '0 16px 48px hsla(220,14%,16%,0.12)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to bottom right, hsl(257, 84%, 56%), hsl(190, 80%, 45%))',
      },
    },
  },
  plugins: [],
}