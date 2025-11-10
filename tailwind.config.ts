import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "Inter", "system-ui"],
      },
      colors: {
        primary: "#6ee7b7",
        "primary-foreground": "#020617",
        secondary: "#38bdf8",
        "secondary-foreground": "#020617",
        accent: "#0ea5e9",
        "accent-foreground": "#f8fafc",
        background: "#020617",
        border: "#1f2937",
        destructive: "#ef4444",
        "destructive-foreground": "#fff",
        input: "#0f172a",
        ring: "#22d3ee",
        "spektr-cyan-50": "#6ee7b7",
      },
    },
  },
  plugins: [],
};

export default config;
