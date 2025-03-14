import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        yugothic: ['yu-gothic-pr6n'],
        garamond: ['garamond-premier-pro', 'serif'],
        ryumin: ['a-otf-ryumin-pr6n', 'serif'], 
        awConqueror: ['aw-conqueror-didot', 'serif'], 
        tangerine: ['tangerine', 'serif'], 
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
export default config;
