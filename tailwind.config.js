/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ibm: "'IBM Plex Sans', sans-serif",
        ibmBold: "'IBM Plex Mono', sans-serif",
        ibmMono: "'IBM Plex Mono ExtraLight', monospace",
      }
    },
  },
  plugins: [require("daisyui")],
}
