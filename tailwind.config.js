/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flex: {
        200: "1 1 200px",
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/background-image.png')",
      }
    },
  },
  plugins: [],
};
