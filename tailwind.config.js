module.exports = {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/flowbite.js"],
  theme: {
    colors: {
      beige: '#EFE3D6',
      brown: '#8B5C4C',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    
  ],
};
