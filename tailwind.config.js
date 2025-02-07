/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        canvas: "#05051E",
        primary: "#291AFF",
        primaryDark: "#150E77",
        button: "#23233C",
        buttonHover: "#14142D",
      },
      textColor: {
        primary: "#291AFF",
        white: "#ffffff",
        secondary:"#C8C8C8",
        dark: "#05051E",
      },
      borderColor: {
        white: "#ffffff",
        primary: "#291AFF",
      },
      fontFamily: {
        vietnam: ['"Be Vietnam Pro"', 'sans-serif'],
      },
      boxShadow: {
        'custom-primary': '0 4px 20px rgba(41, 26, 255, 0.8)', // Sombra personalizada
      },
      width:{
        "favicon-desktop": "90px",
        "favicon-mobile": "20vw",
        desktop: "1080px",
        mobile: "90vw",
      },
    },
  },
  plugins: [],
}

