const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: colors.white,
      primary: "#458021",
      accent: "#D038D3",
      darkGray: "#808080",
      lightGray: "#CDCDCD",
      bg: "#171717",
    },
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      addUtilities({
        ".product-card": {
          background:
            "radial-gradient(100% 335.2% at 0% 3.35%, rgba(255, 255, 255, 0.1) 0%, rgba(40, 40, 40, 0.25) 78.65%)",
          boxShadow: "0px 20px 50px rgba(73, 151, 25, 0.05)",
        },
        ".body": {
          background: theme("colors.bg"),
        },
        ".border-radius": {
          borderRadius: "20px",
        },
        "section-title": {
          fontSize: "6rem",
          fontWeight: "500",
          lineHeight: "8rem",
          spacing: "2%",
          color: theme("colors.bg"),
          border: `1px solid ${theme("colors.darkGray")}`,
        },
      });
    }),
  ],
};
