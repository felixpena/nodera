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
        "brand-black": "#080907",
        surface: "#0f100e",
        "off-white": "#eceae2",
        "warm-mid": "#9e9b90",
        accent: "#b8c9a0",
        accent2: "#d4e8b8",
        earth: "#7a6e55",
        "earth-light": "#c4b896",
      },
      fontFamily: {
        mono: ["var(--font-space-mono)", "monospace"],
        serif: ["var(--font-instrument-serif)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
