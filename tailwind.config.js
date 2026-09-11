/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#080B10",
        panel: "#10161F",
        "panel-raised": "#161D28",
        line: "#1F2A38",
        cyan: {
          DEFAULT: "#4FD8E8",
          dim: "#2A6E78",
          glow: "#8FEFFB",
        },
        amber: {
          DEFAULT: "#FFB454",
          dim: "#8A6229",
        },
        ink: {
          DEFAULT: "#E6EDF3",
          muted: "#7C8896",
          faint: "#4B5666",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        hud: "0 0 0 1px rgba(79, 216, 232, 0.15), 0 0 24px rgba(79, 216, 232, 0.06)",
        "hud-active": "0 0 0 1px rgba(79, 216, 232, 0.4), 0 0 32px rgba(79, 216, 232, 0.15)",
      },
    },
  },
  plugins: [],
};
