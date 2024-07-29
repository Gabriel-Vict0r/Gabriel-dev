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
      },
      colors: {
        'white-standard': '#F0F0F0',
        'background': '#181C2B',
        'bg-secondary': '#252C41',
        'blue-primary': '#2361FF',
        'blue-secondary': '#1C1DFF',
      },
      fontFamily: {
        'bebas': 'bebas',
        'inter': 'inter'
      }
    },
  },
  plugins: [],
};
export default config;
