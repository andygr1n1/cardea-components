import path from 'path'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'

import type { RollupOptions } from 'rollup'

const config: RollupOptions = {
    input: 'src/index.ts',
    output: {
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
    },
    plugins: [
        typescript({ tsconfig: './tsconfig.json' }),
        postcss({
            plugins: [autoprefixer(), tailwindcss()],
            extract: path.resolve('dist/index.css'),
            modules: ['sass'],
            autoModules: true,
        }),
    ],
    external: ['react', 'react-dom', 'react/jsx-runtime'],
}

export default config
