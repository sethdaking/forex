import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'blue-text': '0 0 5px rgba(0, 123, 255, 0.7), 0 0 10px rgba(0, 123, 255, 0.7)',
      },
    },
  },
  plugins: [],
} satisfies Config;
