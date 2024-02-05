import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        turquoise: "#177E89",
        turquoise800: "#1B909D",
        turquoise600: "#1EA0AE",
        turquoise400: "#21B0C0",
        turquoise200: "#23C0D1",
        darkTeal: "#084C61",
        darkTeal800: "#0B6884",
        darkTeal600: "#0C7797",
        darkTeal400: "#0E85AA",
        darkTeal200: "#0F94BD",
        mediumDarkRed: "#DB3A34",
        mediumDarkRed800: "#E05652",
        mediumDarkRed600: "#E36763",
        mediumDarkRed400: "#E77874",
        mediumDarkRed200: "#EA8885",
        warmYellow: "#FFC857",
        warmYellow800: "#FFCF70",
        warmYellow600: "#FFD685",
        warmYellow400: "#FFDD99",
        warmYellow200: "#FFE4AD",
        charcoal: "#323031",
        charcoal800: "#3E3C3D",
        charcoal600: "#494647",
        charcoal400: "#535051",
        charcoal200: "#5E5A5B",
        white800: "#F2F2F2",
        white600: "#E6E6E6",
        white400: "#D8D8D8",
        dark800: "#1A1A1A",
        dark600: "#2A2A2B",
        dark400: "#313131",
      },

      fontFamily: {},
    },
  },
  plugins: [],
};
export default config;
