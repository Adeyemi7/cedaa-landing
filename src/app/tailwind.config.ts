import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages//*.{js,ts,jsx,tsx,mdx}",
    "./components//*.{js,ts,jsx,tsx,mdx}",
    "./app//*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-urbanist)", "sans-serif"],
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            top: "0px",
          },
          "50%": {
            top: "-50px",
          },
        },
      },
      animation: {
        bounce: "bounce 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
