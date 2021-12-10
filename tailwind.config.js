module.exports = {
  content: ["./src/**/*.svelte"],
  theme: {
    extend: {
      fontFamily: {
        serif: "'DM Serif Display', serif",
        sans: "'Roboto', sans-serif",
        mono: "'Roboto Mono', monospace",
      },
      fontSize: {
        xxxs: ["8px", "16px"],
        xxs: ["10px", "18px"],
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "7rem",
      },
    },
  },
  plugins: [],
};
