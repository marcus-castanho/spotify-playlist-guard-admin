const { colors } = require('./src/styles/colors');
const { screens } = require('./src/styles/screens');
const { shadows } = require('./src/styles/shadows');
const { spacing } = require('./src/styles/spacing');
const { fontFamily, fontSize, fontWeight } = require('./src/styles/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {},
        colors,
        screens,
        boxShadow: shadows,
        spacing,
        fontFamily,
        fontSize,
        fontWeight,
    },
    plugins: [],
};
