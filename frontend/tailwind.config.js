// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  darkMode: ['class'],
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
    mono: ['Kode Mono'],
  },
  colors: {
    'regal-blue': '#243c5a',
    'churng': '#01c293',
  },
  theme: {
    // Customize Tailwind's theme based on your design requirements
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin'),
  ],
};
