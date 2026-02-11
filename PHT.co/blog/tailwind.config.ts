import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'pht-dark': '#001F3F',
        'pht-black': '#000814',
        'pht-gold': '#D4AF37',
        'pht-blue': '#003D7A',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
