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
        'blue-text': '0 0 5px rgba(0, 123, 255, 0.7), 0 0 10px rgba(0, 123, 255, 0.7)', // Blue text shadow
      },
      textShadow: {
        'blue': '0 0 8px rgba(0, 123, 255, 0.7)',  // Blue text shadow
        'green': '0 0 8px rgba(0, 255, 0, 0.7)', // Green text shadow
        'red': '0 0 8px rgba(255, 0, 0, 0.7)', // Red text shadow
      },
    },
  },
  plugins: [],
} satisfies Config;
