/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./src/**/*.ejs",
  ],
  plugins: [],
  theme: {
    fontFamily: {
      sans: ["Roboto", "Noto Sans TC", "sans-serif"],
    },
    container: {
      center: true, // 将容器居中
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        "light-bg": "#F8F9FA",
        primary: "#198754",
        secondary: "#6C757D",
        text: "#212529",
        danger: "#DC3545",
        "border-line": "#CED4DA",
      },
    },
  },
};
