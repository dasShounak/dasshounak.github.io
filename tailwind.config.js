module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: ['index.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Titillium Web', 'sans-serif'],
      'display': ['Monument Extended', 'sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
