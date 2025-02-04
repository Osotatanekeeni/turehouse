import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        offWhite: "#F9F9F9",
        caribbeanCurrent: "#00796B",
        darkGreen: "#00322C",
        brown: "#9C7C4F",
        furnitureWhite: "#E5E6E1",
        furnitureGreen: "#00796B",
        furnitureGrey: "#ADADA8",
        furnitureBrown: "#805E44",
        furnitureOrange: "#E69431",
        furnitureRed: "#E20000",
        pink: "#f0e6e6",
        grey: "rgba(231, 231, 231, 1)",
        furnitureLightBrown: "#957762",
        furnitureLightBlue: "#0095FF",
        furniturePink: "#ECD8D7",
        furnitureDarkGreen: "#00322C",
        furnitureDarkGrey: "#606166",
        greenText: "rgba(0, 50, 44, 1)",
        tureGreen: "rgba(0, 121, 107, 1)"

      }
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      heading: ["Playfair Display"],
      body: ["Urbanist", "Roboto", "Arial"]
    }
  },
  plugins: [flowbite.plugin()],
};
