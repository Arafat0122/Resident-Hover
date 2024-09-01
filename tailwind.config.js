/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-img': "url('src/assets/login.png')",
      },
      fontFamily: {
        "exo2" : "'Exo 2', sans-serif",
        "poppins" : "'Poppins', sans-serif"
      },
  }
  },
  plugins: [require("daisyui")],
}

