import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "section1-light-left": "url('/section1-light-left.png')"
      },
      colors: {
        'white-standard': '#F0F0F0',
        'background': '#181C2B',
        'bg-secondary': '#252C41',
        'blue-primary': '#2361FF',
        'gradient-card-one': '#21283E',
        'gradient-card-two': '#394159',
        'blue-secondary': '#1C1DFF',
      },
      fontFamily: {
        'atary': "'Atary_Demo', sans-serif",
        'inter': 'Inter'
      },
      boxShadow: {
        'shadow-blue': '0px 4px 90px 0px #2361FF4D',
      },
      keyframes: {
        'move-words': {
          '0%': { left: '100%' },
          '100%': { left: '-100%' }
        }
      },
      animation: {
        'words-move': 'move-words 20s linear infinite'
      }
    },
  },
  plugins: [],
};
export default config;
