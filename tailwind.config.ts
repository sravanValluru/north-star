import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        "surface-deep": "var(--color-surface-deep)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        micro: "var(--color-micro)",
        border: "var(--color-border)",
        ready: "var(--color-ready)",
        neutral: "var(--color-neutral)",
        validate: "var(--color-validate)",
        ground: "var(--color-ground)",
        reframe: "var(--color-reframe)",
      },
      maxWidth: {
        content: "1200px",
        prose: "720px",
      },
      spacing: {
        section: "min(14vh, 120px)",
      },
      borderRadius: {
        panel: "32px",
      },
      boxShadow: {
        ambient: "0 24px 80px rgba(0, 0, 0, 0.05)",
        soft: "0 20px 60px rgba(31, 31, 31, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
