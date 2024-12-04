const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./app.vue", "./error.vue"],
  theme: {
    extend: {
      fontFamily: {
        pixelifySans: ["Pixelify Sans", "sans-serif"]
      },
      data: {
        buttonPressed: 'press~="buttonPressed"'
      },
      colors: {
        "creamy-white": "#FFEFEF"
      },
      keyframes: {
        fall: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(190%)" }
        }
      },
      animation: {
        fall: "fall 1.2s linear"
      }
    }
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animate-delay": (value) => ({
            animationDelay: value
          })
        },
        { values: theme("transitionDelay") }
      );
    })
  ]
};
