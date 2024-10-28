import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["var(--font-roboto)"],
    },
    screens: {
      "max-2xl": { max: "1399.5px" },
      "max-xl": { max: "1199.5px" },
      "max-lg": { max: "991.5px" },
      "max-md": { max: "767.5px" },
      "max-sm": { max: "575.5px" },
      "max-xs": { max: "431px" },
      "max-2xs": { max: "375px" },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
