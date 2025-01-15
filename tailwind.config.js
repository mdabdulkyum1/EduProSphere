/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        primary: "#2E7D32", 
        secondary: "#0288D1", 
        accent: "#FFCA28", 
        light: {
          background: "#F9FAFB", 
          text: "#212121", 
          border: "#E0E0E0", 
        },
        dark: {
          background: "#1E293B", 
          text: "#E5E7EB", 
          border: "#374151", 
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
};
