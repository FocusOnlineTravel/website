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
