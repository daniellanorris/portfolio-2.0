/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {dropShadow: {
        whiteGlow: '0 0 15px rgba(255, 255, 255, 0.8)', // Custom shadow
      },},
    },
    plugins: {"@tailwindcss/postcss": {}}
  };
