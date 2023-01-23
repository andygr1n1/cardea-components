const twConfigs = require('./tailwind-configs/tw_configs.cjs')
const defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
    mode: 'jit',
    content: ['index.html', 'src/**/*.{ts, tsx}'],
    theme: {
        variables: twConfigs.variables,
        fontFamily: {
            sans: ['Source Sans Pro', defaultConfig.theme.fontFamily.sans],
        },
        extend: {
            colors: {
                ...twConfigs.colors,
            },

            boxShadow: twConfigs.boxShadow,
            animation: twConfigs.animation,
            keyframes: twConfigs.keyframes,
        },
    },
    darkMode: 'media',
    plugins: [],
}
