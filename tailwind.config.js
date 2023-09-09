const { colors } = require('./src/styles/colors');
const { screens } = require('./src/styles/screens');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {},
        colors,
        screens,
    },
    plugins: [],
};
