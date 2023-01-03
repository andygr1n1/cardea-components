/** @type {import('tailwindcss').Config} */
const twConfigs = require('./tailwind-configs/tw_configs.cjs')
const defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
    content: ['./src/**/*.{html,tsx,ts, scss, css}'],
    theme: {
        fontFamily: {
            sans: ['Source Sans Pro', defaultConfig.theme.fontFamily.sans],
        },
        extend: {
            // do not create "black" "white", it affects headless ui components
            colors: {
                ...twConfigs.colors,
            },

            boxShadow: twConfigs.boxShadow,
            animation: twConfigs.animation,
            keyframes: twConfigs.keyframes,
        },
    },
    plugins: [],
}
