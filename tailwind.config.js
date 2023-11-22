/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "768px",
      md: "912px",
      lg: "1093px",
      xl: "1285px",
      "2xl": "1550px",
      "3xl": "1708px",
      "4xl": "1912px",
      "5xl": "2116px",
    },
    extend: {
      fontSize: {
        xs: "0.688rem",
      },
      fontFamily: {
        // main: "CircularSp,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,sans-serif",
        // title:
        //   "CircularSpTitle,CircularSpTitle-Tall,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,sans-serif",
      },
      gridTemplateColumns: {
        "playlist-tracks": "16px 6fr 3fr 3fr minmax(50px,1fr)",
        "playlist-tracks-small": "16px 1fr 50px",
      },
      colors: {
        spotify: "#1ED760",
        gray: "#B3B3B3",
      },
      backgroundColor: {
        spotify: "#1BD760",
        base: "#121212",
        "sticky-playing-bar": "#1D212E",
      },
      borderRadius: {
        col: "0.75rem",
      },
    },
  },
  plugins: [],
};
