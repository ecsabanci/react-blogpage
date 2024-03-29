/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        'cl-dark': '#18181b',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
