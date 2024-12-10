import type { Config } from "tailwindcss";
import animations from '@midudev/tailwind-animations'

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bggray: "var(--bggray)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        buttonColor: "var(--buttonColor)",
        whiteBotton: "var(--whiteBotton)",
        parrafos: "var(--parrafos)",
        borderColor: "var(--borderColor)",
      },
    },
  },
  plugins: [
    animations,
  ],
} satisfies Config;
