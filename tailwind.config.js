module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-purple": "#5267df",
        "custom-red": "#fa5959",
        "custom-blue": "#242a45",
        "custom-grey": "#9194a2",
        "custom-white": "#f7f7f7",
      }
    },
    fonFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
