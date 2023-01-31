module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      },
      transitionProperty: {
        width: "width",
        height: "height"
      },

      fontSize: {
        '2xs': '.5rem',
    },

      colors: {
        primary: {
          "50": "#6e6295",
          "100": "#594b85",
          "200": "#453576",
          "300": "#301e67",
          "400": "#301e67",
          // "500": "#2b1b5d",
          "500": "#594b85",
          "600": "#261852",
          "700": "#221548",
          "800": "#1d123e",
          "900": "#1d123e"
        },
        secondary: {
          "50": "#a4cea2",
          "100": "#91c48f",
          "200": "#7fba7d",
          "300": "#6db06a",
          "400": "#5aa658",
          "500": "#489c45",
          "600": "#418c3e",
          "700": "#3a7d37",
          "800": "#326d30",
          "900": "#2b5e29"
        },



      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
