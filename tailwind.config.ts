import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0c0d",
        coal: "#131517",
        paper: "#f0ede6",
        bronze: "#bd7d3d",
        ember: "#d9954b",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-oswald)", "Arial Narrow", "sans-serif"],
      },
      boxShadow: {
        glow: "0 18px 60px rgba(189, 125, 61, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
