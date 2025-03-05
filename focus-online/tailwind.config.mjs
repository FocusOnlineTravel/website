/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
          // Sunset Sky - warm reds
          'sunset': {
            light: '#e4706a',
            DEFAULT: '#dd4c45',
            dark: '#a63934',
          },
          // Namibian Dune - rich oranges
          'dune': {
            light: '#f2a77c',
            DEFAULT: '#f48c45',
            dark: '#b36d44',
          },
          // Golden Light - vibrant yellows
          'golden': {
            light: '#ffd671',
            DEFAULT: '#ffcc4e',
            dark: '#bf993b',
          },
          // Grassy Savanna - natural tans
          'savanna': {
            light: '#e8cb9f',
            DEFAULT: '#e2be87',
            dark: '#aa8f65',
          },
          // Sandy Beach - neutral grays
          'sand': {
            light: '#e1e0db',
            DEFAULT: '#dad8d2',
            dark: '#a3a29e',
          },
          // Tropical Water - cool blues
          'tropical': {
            light: '#80ced6',
            DEFAULT: '#60c2cc',
            dark: '#489299',
          },
          // Lush Forest - vibrant greens
          'forest': {
            light: '#41b971',
            DEFAULT: '#11a84e',
            dark: '#0d7e3b',
          },
          // Cape Storm - deep blues
          'storm': {
            light: '#5d6f85',
            DEFAULT: '#354b66',
            dark: '#28384d',
          },
      },
      extend: {
        fontFamily: {
          'playfair': ['"Playfair Display"', 'serif'],
          'montserrat': ['Montserrat', 'sans-serif'],
        },
      },
    },
  },
  plugins: [],
};
