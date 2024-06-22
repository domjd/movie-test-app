/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'moviegrid': 'repeat(auto-fill, minmax(380px, 1fr))',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["winter", "night"],
  },
};
