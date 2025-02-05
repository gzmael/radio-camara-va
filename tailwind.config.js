import gluestackPlugin from "@gluestack-ui/nativewind-utils/tailwind-plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["app/**/*.{tsx,jsx,ts,js}", "components/**/*.{tsx,jsx,ts,js}"],
  presets: [require("nativewind/preset")],
  safelist: [
    {
      pattern:
        /(bg|border|text|stroke|fill)-(white|black|gray|blue|green|red)-(0|50|100|200|300|400|500|600|700|800|900|950|white|black|gray|blue|green|red|light|dark|primary)/,
    },
  ],
  theme: {
    colors: {
      white: "rgb(var(--color-white)/<alpha-value>)",
      black: "rgb(var(--color-black)/<alpha-value>)",
      gray: {
        50: "rgb(var(--color-gray-50))",
        600: "rgb(var(--color-gray-600)/<alpha-value>)",
        800: "rgb(var(--color-gray-800)/<alpha-value>)",
      },
      blue: {
        500: "rgb(var(--color-blue-500)/<alpha-value>)",
        700: "rgb(var(--color-blue-700)/<alpha-value>)",
      },
      green: {
        700: "rgb(var(--color-green-700)/<alpha-value>)",
      },
      red: {
        600: "rgb(var(--color-red-600)/<alpha-value>)",
        300: "rgb(var(--color-red-300)/<alpha-value>)",
      },
    },
    extend: {
      fontFamily: {
        heading: ["OpenSansCondensed_300Light", "sans-serif"],
        body: ["BebasNeue_400Regular", "sans-serif"],
        mono: ["monospace", "sans-serif"],
      },
      fontWeight: {
        extrablack: "950",
      },
      fontSize: {
        "2xs": "10px",
      },
      boxShadow: {
        "hard-1": "-2px 2px 8px 0px rgba(38, 38, 38, 0.20)",
        "hard-2": "0px 3px 10px 0px rgba(38, 38, 38, 0.20)",
        "hard-3": "2px 2px 8px 0px rgba(38, 38, 38, 0.20)",
        "hard-4": "0px -3px 10px 0px rgba(38, 38, 38, 0.20)",
        "hard-5": "0px 2px 10px 0px rgba(38, 38, 38, 0.10)",
        "soft-1": "0px 0px 10px rgba(38, 38, 38, 0.1)",
        "soft-2": "0px 0px 20px rgba(38, 38, 38, 0.2)",
        "soft-3": "0px 0px 30px rgba(38, 38, 38, 0.1)",
        "soft-4": "0px 0px 40px rgba(38, 38, 38, 0.1)",
      },
    },
  },
  plugins: [gluestackPlugin],
};
