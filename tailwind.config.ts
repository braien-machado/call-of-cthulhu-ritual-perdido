import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Cor principal (60%)
        'primary': '#121212', // Cinza muito escuro

        // Cor secundária (30%)
        'secondary': '#4B0082', // Roxo escuro

        // Cor de destaque (10%)
        'terciary': '#00FF00', // Verde neon

        // Texto comum
        'text-primary': '#D3D3D3', // Cinza claro
        'text-secondary': '#A9A9A9', // Cinza escuro
      },
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
