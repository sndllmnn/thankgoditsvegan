module.exports = {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/flowbite.js"],
  theme: {
    colors: {
      beige: '#E4D1B9',
      brown: '#A97155',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    
  ],
};
