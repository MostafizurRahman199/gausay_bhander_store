// tailwind.config.cjs
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Update extensions if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
