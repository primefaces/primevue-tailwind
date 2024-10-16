/** @type {import('tailwindcss').Config} */
const primeui = require('tailwindcss-primeui');

module.exports = {
    darkMode: ['selector', '[class~="p-dark"]'],
    content: ['./components/**/*.{js,vue,ts}', './doc/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}', './app.vue', './error.vue'],
    plugins: [primeui],
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1920px'
        }
    }
};
