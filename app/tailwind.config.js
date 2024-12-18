/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        flyIn: "flyIn 0.3s ease-out forwards",
      },
      keyframes: {
        flyIn: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: "40px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
