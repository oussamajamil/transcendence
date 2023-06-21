


/** @type {import('tailwindcss').Config} */


export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lilita-one': ['Lilita One', 'cursive'],
        'comfortaa': ['Comfortaa', 'cursive'],
        'Poppins': ['Poppins', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif'],
      },
      filter: {
        brightness: ['108'],
      },
      gradientColorStops: {
        'gradient-blue': '#1758ff',
        'gradient-light-blue': '#3861fe',
        'gradient-dark-blue': '#4c69fc',
        'gradient-darker-blue': '#5e5bfb',
        'gradient-purple': '#826cff',
        'gradient-red': '#ff1311',
        'gradient-orange': '#ff380a',
        'gradient-dark-orange': '#ff4d04',
        'gradient-darker-orange': '#ff5f00',
        'gradient-light-orange': '#ff6e00',
      },
      boxShadow: {
        'inset': 'inset 0 0 10px rgba(241, 241, 241, 0.63)',
      },
      colors: {
        primary: "",
        accent: "",
        secondary: "",
        info: "",
        success: "",
        warning: "",
        danger: "",
        dark: "",
        light: "",
        pink: "",

      },
      transitionDuration: "0.5s",
    },
  },
  safelist: [
    {
      pattern: /^.+-(primary|accent|secondary|info|success|warning|danger|dark|light|pink)/,
    },
  ],
  plugins: [],
};

