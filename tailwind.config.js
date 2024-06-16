/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: "'Chillax', sans-serif",
        content: "'Nunito', sans-serif",
        logo: "'Great Vibes', cursive",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        cupcake: {
          ...require("daisyui/src/theming/themes")["cupcake"],
          primary: "#66cc8a",
        },
      },
      {
        sunset: {
          ...require("daisyui/src/theming/themes")["sunset"],
          primary: "#9fe88d",
        },
      },
    ],
  },
};
