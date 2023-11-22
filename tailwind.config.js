/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    keyframes: {
      ping: {
        "0%": { transform: "translateY(0)"},
        "50%": { transform: "translateY(-8px)"},
        "100%": { transform: "translateY(0)"}
      }
    },
    animation: {
      ping: "ping 1s linear infinite"
    }
  },
  plugins: [],
}