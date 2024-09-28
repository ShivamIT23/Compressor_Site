import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        fotterBg : "rgba(233, 146, 255, 0.4)",
      },
      textShadow : {
        customDash : '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
    },
  },
  plugins: [],
};
export default config;
