


/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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

