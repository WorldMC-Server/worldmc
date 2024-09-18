import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
  darkMode: ["class", '[data-theme="dark"]'],
};
export default config;
