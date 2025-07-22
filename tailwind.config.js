/** @type {import('tailwindcss').Config} */

export const content = ["./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  darkMode: ["class"],
  extend: {
    colors: {
      background: {
        primary: "hsl(var(--background-primary))",
      },
    },
    keyframes: {
      slideFromRight: {
        "0%": { transform: "translateX(100%)", opacity: 0 },
        "100%": { transform: "translateX(0)", opacity: 1 },
      },
      slideFromLeft: {
        "0%": { transform: "translateX(-100%)", opacity: 0 },
        "100%": { transform: "translateX(0)", opacity: 1 },
      },
      slideFromTop: {
        "0%": { transform: "translateY(-100%)", opacity: 0 },
        "100%": { transform: "translateY(0)", opacity: 1 },
      },
      slideFromBottom: {
        "0%": { transform: "translateY(100%)", opacity: 0 },
        "100%": { transform: "translateY(0)", opacity: 1 },
      },
    },
    animation: {
      slideFromRight: "slideFromRight 0.5s ease-out forwards",
      slideFromLeft: "slideFromLeft 0.5s ease-out forwards",
      slideFromTop: "slideFromTop 0.5s ease-out forwards",
      slideFromBottom: "slideFromBottom 0.5s ease-out forwards",
    },
  },
};
export const plugins = [require("tailwind-scrollbar")];
