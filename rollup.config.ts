import path from 'path'
import typescript from '@rollup/plugin-typescript'
// import css from 'rollup-plugin-import-css'
// import resolve from '@rollup/plugin-node-resolve'
// import commonjs from '@rollup/plugin-commonjs'
// import { terser } from 'rollup-plugin-terser'
// import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
// import autoprefixer from 'autoprefixer'
// import tailwind from 'rollup-plugin-tailwindcss'
// import tailwindcss from 'tailwindcss'
// import dts from 'rollup-plugin-dts'

// const packageJson = require('./package.json')

// export default [
//     {
//         input: 'src/index.ts',
//         output: [
//             {
//                 file: packageJson.main,
//                 format: 'cjs',
//                 sourcemap: true,
//                 name: 'cardea-components',
//             },
//             {
//                 file: packageJson.module,
//                 format: 'esm',
//                 sourcemap: true,
//             },
//         ],
//         external: [/\.scss$/, /\.css$/],
//         plugins: [
//             external(),
//             resolve(),
//             terser(),
//             postcss({
//                 // extensions: ['.scss', '.css'],
//                 minimize: true,
//                 modules: true,
//                 extract: true, // extracts to `${basename(dest)}.css`
//                 plugins: [autoprefixer(), tailwindcss()],
//                 writeDefinitions: true,
//                 // use: 'scss',
//                 config: {},
//                 // modules: { ... }
//             }),
//             commonjs(),
//             tailwind({
//                 input: './tailwind.config.cjs', // required
//                 purge: false,
//             }),
//             typescript({ tsconfig: './tsconfig.json' }),
//         ],
//     },
//     {
//         input: 'dist/esm/types/index.d.ts',
//         output: [{ file: 'dist/index.d.ts', format: 'esm' }],
//         external: [/\.css$/, /\.scss$/],
//         plugins: [dts.default()],
//     },
// ]

// rollup.config.js
import type { RollupOptions } from 'rollup'

const config: RollupOptions = {
    /* your config */
    input: 'src/index.ts',
    output: {
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
    },
    plugins: [
        typescript({ tsconfig: './tsconfig.json' }),
        postcss({
            plugins: [],
            // Or with custom file name
            extract: path.resolve('dist/index.css'),
            modules: ['sass'],
            autoModules: true,
        }),
    ],
    external: ['react', 'react-dom', 'react/jsx-runtime'],
}

export default config
