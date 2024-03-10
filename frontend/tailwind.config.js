// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  darkMode: ['class'],
  
  theme: {
    // Customize Tailwind's theme based on your design requirements
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Kode Mono'],
      madimi: ['Madimi One', 'sans-serif']
    },
    colors: {
      'regal-blue': '#243c5a',
      'churn': '#01c293',
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin'),
  ],
};
