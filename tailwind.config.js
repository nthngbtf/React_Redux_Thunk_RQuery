/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.5s infinite",
      },
      colors: {
        colorText: "#2A160C",
        colorIcon: "#BE2729",
        colorBtnPrimary: "#99592A",
        colorBtnSecondary: "#2A160C",
        colorWhite: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
